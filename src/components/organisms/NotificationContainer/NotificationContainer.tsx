import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { useNotification } from '../../../hooks/useNotification';
import { Wrapper } from './NotificationContainer.styles';

// This variable is used to control error displaying time (only for level 3 errors)
const errorDisplayingTime = 30;

const NotificationContainer = () => {
  const { hardError, setHardError } = useNotification();
  const [time, setTime] = useState(errorDisplayingTime);

  useEffect(() => {
    if (hardError) {
      setTime(errorDisplayingTime);
      const redirectTime = setInterval(() => {
        setTime((time) => {
          if (time === 0) {
            clearInterval(redirectTime);
            setHardError(null);
            return time;
          }
          return time - 1;
        });
      }, 1000);
      return () => clearInterval(redirectTime);
    }
  }, [hardError]);

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {hardError && (
        <Wrapper>
          <h2>{hardError}</h2>
          <p>Automatyczne wylogowanie nastąpi za {time} sekund</p>
        </Wrapper>
      )}
    </>
  );
};

export default NotificationContainer;
