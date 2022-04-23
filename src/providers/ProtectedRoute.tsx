import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { storeRoot } from 'store';
import { useRoutesControl } from 'hooks/useRoutesControl';
import { useAppLoading } from 'hooks/useAppLoading';
import axios from 'axios';

interface props {
  Element: React.FC;
  role: string | string[];
}

const ProtectedRoute: React.FC<props> = ({ Element, role }) => {
  const user = useSelector((state: storeRoot) => state.user);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const { checkUser, blockRoutes, checkDoesRoleHasPermission } = useRoutesControl();
  const { setAppLoading } = useAppLoading();

  useEffect(() => {
    (async () => {
      // Connect notification with user
      const subscription = localStorage.getItem('notification_sub');
      const isConnected = localStorage.getItem('notification_connected');
      if (!isConnected && subscription) {
        localStorage.setItem('notification_connected', 'true');
        axios.post('https://notify.schoola.pl/api/v1/connect', {
          subscription,
          userId: user?.id
        });
      }
      // Checks is user logged in
      setAppLoading(true);
      if (await checkUser()) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
        blockRoutes();
      }
    })();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // Checks is user object exists
    if (user && isAuthenticated) {
      // Checks is user blocked
      if (!user.blocked) {
        // Checks if user has permission to access route
        if (!checkDoesRoleHasPermission(role, user?.TextRole)) {
          blockRoutes();
        } else {
          setAppLoading(false);
        }
      } else {
        blockRoutes();
      }
    }
    // eslint-disable-next-line
  }, [user, isAuthenticated]);

  return <Element />;
};

export default ProtectedRoute;
