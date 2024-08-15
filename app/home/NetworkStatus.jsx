"use client";

import { useEffect, useState } from 'react';
import { Wifi } from 'lucide-react';
import { WifiOff } from 'lucide-react';

const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [hasChanged, setHasChanged] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      if (hasChanged) {
        setIsOnline(true);

        // Start fading out after 4 seconds, hide after 5 seconds
        setTimeout(() => {
          setIsFading(true);
        }, 4000);
        setTimeout(() => {
          setHasChanged(false);
          setIsFading(false);
        }, 5000);
      } else {
        setHasChanged(true);
      }
    };

    const handleOffline = () => {
      setIsOnline(false);
      setHasChanged(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Set the initial state based on current network status
    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [hasChanged]);

  return (
    <div
      className={`fixed bottom-12 
        left-1/2 transform -translate-x-1/2  // Center for small screens
        md:left-12 md:translate-x-0         // Align to left for medium and large screens
        transition-opacity duration-1000 
        ${isFading ? 'opacity-0' : 'opacity-100'}`}
    >
      {!isOnline && hasChanged && (
        <div className="bg-[#1F1F1F] text-white w-60 h-14 rounded-lg flex justify-center items-center shadow-lg">
          <WifiOff size={17} className="text-gray-400 mr-4" />
          <p className="text-sm font-normal truncate">
            You are currently offline.
          </p>
        </div>
      )}
      {isOnline && hasChanged && (
        <div className="bg-[#1F1F1F] text-white w-72 h-14 rounded-lg flex justify-center items-center shadow-lg">
          <Wifi size={17} className="text-green-500 mr-4" />
          <p className="text-sm font-normal truncate">
            Your Internet connection was restored.
          </p>
        </div>
      )}
    </div>
  );
};

export default NetworkStatus;
