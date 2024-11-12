import { useState, useEffect } from "react";

const userOnlinestatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const onlineHandler = () => {
    setIsOnline(true);
  };

  const offlineHandler = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    const onlineHandler = () => {
      console.log("Online event triggered");
      setIsOnline(true);
    };
  
    const offlineHandler = () => {
      console.log("Offline event triggered");
      setIsOnline(false);
    };
  
    window.addEventListener('online', onlineHandler);
    window.addEventListener('offline', offlineHandler);
  
    return () => {
      window.removeEventListener('online', onlineHandler);
      window.removeEventListener('offline', offlineHandler);
    };
  }, []);

  return isOnline;
};

export default userOnlinestatus;
