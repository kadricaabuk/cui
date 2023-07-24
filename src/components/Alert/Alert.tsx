import React, { HTMLAttributes, useEffect } from 'react'
import AlertCloseButton from './AlertClose';
import AlertIcon from './AlertIcon';

interface CUIAlertProps {
  children: React.ReactElement | React.ReactElement[] | string;
  type?: string;
  className?: string;
  duration?: number;
  isIcon?: boolean;
  isActive?: boolean;
  setIsActive?: () => void;
}

// Combine the CUI props with default HTML button props
type AlertProps = CUIAlertProps & HTMLAttributes<HTMLDivElement>;

const Alert = ({children, type="success", className, duration, isActive=true, setIsActive, isIcon=true, ...props}: AlertProps) => {
  useEffect(() => {
    // TODO: If duration is not undefined, set interval to close alert
  }, [duration])

  return (
    <div className={`CUI_Alert ${type} ${className} ${isActive ? "active" : ""}`} {...props}>
      <div>
        {isIcon ? <AlertIcon type={type}/> : null}
        {children}
      </div>
      {setIsActive ? <AlertCloseButton onClick={setIsActive}/> : null}
    </div>
  )
}

Alert.Error = ({ children, ...rest }: AlertProps) => <Alert type='error' {...rest}>{children}</Alert>
Alert.Success = ({ children, ...rest }: AlertProps) => <Alert type='success' {...rest}>{children}</Alert>
Alert.Warning = ({ children, ...rest }: AlertProps) => <Alert type='warning' {...rest}>{children}</Alert>
Alert.Info = ({ children, ...rest }: AlertProps) => <Alert type='info' {...rest}>{children}</Alert>

export default Alert