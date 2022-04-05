import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { ToastOptions } from 'react-toastify/dist/types';

interface NotificationContextTypes {
  hardError: string | null;
  setHardError: React.Dispatch<React.SetStateAction<string | null>>;
  notifyUser: ({
    value,
    type,
    level,
    options
  }: {
    value: string;
    type?: 'error' | 'success' | 'info' | 'warning';
    level?: 0 | 1 | 2 | 3;
    options?: ToastOptions;
  }) => void;
}

const NotificationContext = createContext<NotificationContextTypes>({
  hardError: null,
  setHardError: () => {
    throw new Error('NotificationContext not initialized');
  },
  notifyUser: () => {
    throw new Error('Notification context not initialized');
  }
});
export const NotificationProvider: React.FC = ({ children }) => {
  // STATES
  const [hardError, setHardError] = useState<string | null>(null);

  // This method will notify the user by this properties:
  // - value: the message to display
  // - type: the type of the message (default: 'info')
  // - level: the level of the message importance (default: 0)
  //   - 0: not-important
  //   - 1: maybe important
  //   - 2: important
  //   - 3: very important (this error is fullscreen & cause user sign out)
  // - options: the options of the message (default: {})
  const notifyUser = ({
    value,
    type,
    level,
    options
  }: {
    value: string;
    type?: 'error' | 'success' | 'info' | 'warning';
    level?: 0 | 1 | 2 | 3;
    options?: ToastOptions;
  }) => {
    if (type === 'error' && level === 3) {
      // Only hard errors (level 3)
      setHardError(value);
    } else {
      // Other errors or infos (level 0, 1, 2)
      toast[type || 'info'](value, {
        position: 'bottom-left',
        autoClose: (level || 0) > 1 ? false : 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        ...options
      });
    }
  };

  const values = {
    hardError,
    setHardError,
    notifyUser
  };
  return <NotificationContext.Provider value={values}>{children}</NotificationContext.Provider>;
};

export const useNotification = (): NotificationContextTypes => {
  const Notification = useContext(NotificationContext);
  if (!Notification) {
    throw new Error('useNotifications must be used within an NotificationProvider');
  }
  return Notification;
};
