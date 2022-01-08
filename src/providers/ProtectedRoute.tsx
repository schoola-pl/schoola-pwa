import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { storeRoot } from '../store';
import { useRoutesControl } from '../hooks/useRoutesControl';
import { roles } from '../routes';
import { useAppLoading } from '../hooks/useAppLoading';

interface props {
  Element: React.FC;
  role: string;
}

const ProtectedRoute: React.FC<props> = ({ Element, role }) => {
  const user = useSelector((state: storeRoot) => state.user);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const { checkUser, blockRoutes } = useRoutesControl();
  const { setAppLoading } = useAppLoading();

  useEffect(() => {
    (async () => {
      // Checks is user is logged in
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
        if (role !== user.TextRole && role !== roles.authenticated) {
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
