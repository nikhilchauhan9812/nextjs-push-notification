import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
const ButtonComponent = () => {
  const [notificationPermission, setNotificationPermission] = useState('default');
  const [isLoading, setIsLoading] = useState(false);
  const [clicked, setClicked] = useState(true);
  const toast = useToast()
  const handleButtonClick = () => {
    setClicked(false);
    if (typeof window !== 'undefined' && 'Notification' in window) {
      if (notificationPermission === 'granted') {
        setIsLoading(true);

        setTimeout(() => {
            
          new Notification('Hello DIGILABS!', {
            body: 'This is a push notification.'
          });
          setIsLoading(false); 
          setClicked(true); 
        }, 800);
      } else if (notificationPermission === 'default'){
      Notification.requestPermission().then(permission => {
          setNotificationPermission(permission);
          if (permission === 'granted') {
            new Notification('Permission Granted!', {
              body: 'You can now receive notifications.'
            });
          }
        });
      }
    }else{
      console.log('Notifications not supported.');
    }
  };

  return (
    <>
      <button onClick={()=>{
        handleButtonClick()
        isLoading?null : toast({
            title: `notification sent successfully`,
            status: 'success',
            position: 'bottom-left',
            isClosable: true,
        })}}  className="button" variant='outline'>
        { isLoading ? 'Sending...' : 'Send Notifications'}
      </button>
    </>
  );
};

export default ButtonComponent;
