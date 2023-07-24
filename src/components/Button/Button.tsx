import React, { ButtonHTMLAttributes } from 'react';

// Interface for CUI button props
interface CUIButtonProps {
  children: React.ReactElement | React.ReactElement[] | string;
  className?: string;
}

// Combine the CUI props with default HTML button props
type ButtonProps = CUIButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({children, className="primary", ...props} : ButtonProps) => {
  return (
    <button className={`CUI_Button ${className}`} {...props}>
        {children}
    </button>
  )
}

Button.Primary = ({ children, ...rest }: ButtonProps) => <Button className='primary' {...rest}>{children}</Button>
Button.Secondary = ({ children, ...rest }: ButtonProps) => <Button className='secondary' {...rest}>{children}</Button>
Button.Custom = ({ children, className, ...rest }: ButtonProps) => <Button className={className} {...rest}>{children}</Button>
Button.Outline = ({ children, ...rest }: ButtonProps) => <Button className='outline' {...rest}>{children}</Button>

export default Button