import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { storeRoot } from '../store';
import { useRoutes } from '../hooks/useRoutes';
import { roles } from '../routes';

interface props {
  Element: React.FC;
  role: string;
  redirectTo?: string;
}

const ProtectedRoute: React.FC<props> = ({ Element, role, redirectTo }) => {
  const user = useSelector((state: storeRoot) => state.user);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const { checkUser, blockRoutes } = useRoutes();

  useEffect(() => {
    (async () => {
      // Checks is user is logged in
      if (await checkUser()) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
        blockRoutes(redirectTo);
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
        if (role === user.TextRole || role === roles.authenticated) {
          console.log(role, user.TextRole, user);
        } else {
          blockRoutes(redirectTo);
        }
      } else {
        blockRoutes(redirectTo);
      }
    }
    // eslint-disable-next-line
  }, [user, isAuthenticated]);

  return <Element />;
};

export default ProtectedRoute;
