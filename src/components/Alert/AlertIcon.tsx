interface AlertIconProps {
    type: string;
  }
  
  const Icon = ({type}: AlertIconProps) => {
    if(type === "info") return <path d="M12.9236 16.4309V10.9949" stroke="var(--cui-info)" strokeWidth="1.458" strokeLinecap="round" strokeLinejoin="round"/>
    if(type === "warning") return <path d="M12.9187 17.6402C12.661 17.6401 12.4113 17.5506 12.2121 17.387C12.013 17.2234 11.8767 16.9959 11.8266 16.7431C11.7764 16.4903 11.8154 16.2279 11.937 16.0007C12.0586 15.7734 12.2552 15.5954 12.4934 15.4968C12.7315 15.3983 12.9965 15.3854 13.2431 15.4603C13.4897 15.5353 13.7027 15.6934 13.8458 15.9077C13.9889 16.122 14.0532 16.3794 14.0278 16.6358C14.0025 16.8923 13.889 17.1321 13.7067 17.3142C13.6032 17.4177 13.4804 17.4998 13.3452 17.5557C13.2099 17.6116 13.065 17.6404 12.9187 17.6402ZM14.0327 13.1842C14.0327 13.4797 13.9153 13.763 13.7064 13.972C13.4975 14.1809 13.2141 14.2982 12.9187 14.2982C12.6232 14.2982 12.3399 14.1809 12.131 13.972C11.9221 13.763 11.8047 13.4797 11.8047 13.1842V8.72923C11.8047 8.43378 11.9221 8.15043 12.131 7.94151C12.3399 7.7326 12.6232 7.61523 12.9187 7.61523C13.2141 7.61523 13.4975 7.7326 13.7064 7.94151C13.9153 8.15043 14.0327 8.43378 14.0327 8.72923V13.1842Z" fill="var(--cui-warning)"/>
    if(type === "success") return <path d="M8.26758 13.5969L11.1536 16.4839L16.9266 10.7109" stroke="var(--cui-success)" strokeWidth="1.458" strokeLinecap="round" strokeLinejoin="round"/>
    else return (
        <>
            <path d="M10.0398 15.8869L15.8128 10.1139" stroke="var(--cui-error)" strokeWidth="1.458" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.8128 15.8869L10.0398 10.1139" stroke="var(--cui-error)" strokeWidth="1.458" strokeLinecap="round" strokeLinejoin="round"/>
        </>
    )
  }

const AlertIcon = ({type}: AlertIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
      <path d="M12.9257 24.7869C19.689 24.7869 25.1717 19.3042 25.1717 12.5409C25.1717 5.77764 19.689 0.294922 12.9257 0.294922C6.16241 0.294922 0.679688 5.77764 0.679688 12.5409C0.679688 19.3042 6.16241 24.7869 12.9257 24.7869Z" fill="white"/>
      <Icon type={type}/>
    </svg>
  )

export default AlertIcon