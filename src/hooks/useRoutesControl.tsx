import React, { createContext, useContext } from 'react';
import { getJWT, removeJWT, setJWT } from 'helpers/jwt';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from 'store';
import { authUser } from 'types/auth';
import { useNavigate } from 'react-router';
import { dashboardRoute, loginRoute, roles } from 'routes';
import { useAppLoading } from './useAppLoading';

interface RouteContextTypes {
  getUserData: (token: string) => Promise<AxiosResponse<authUser | null> | AxiosError>;
  checkUser: () => Promise<boolean>;
  unlockRoutes: (jwt: string, userData: authUser, redirectTo?: string) => void;
  blockRoutes: (redirectTo?: string) => void;
  checkDoesRoleHasPermission: (entitledRole: string | string[], actualRole: string) => boolean;
}

const RouteContext = createContext<RouteContextTypes>({
  getUserData: async () => {
    throw new Error('RouteContext.getUserData is not implemented');
  },
  checkUser: async () => {
    throw new Error('RouteContext.getRoute() is not implemented');
  },
  unlockRoutes: () => {
    throw new Error('RouteContext.unlockRoutes is not implemented');
  },
  blockRoutes: () => {
    throw new Error('RouteContext.blockRoutes is not implemented');
  },
  checkDoesRoleHasPermission: () => {
    throw new Error('RouteContext.checkDoesRoleHasPermission is not implemented');
  }
});
export const RouteProvider: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setAppLoading, updateLoadingText } = useAppLoading();

  // Get the User information from API by JWT token
  const getUserData = async (token: string) =>
    await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

  // Checking user identity
  const checkUser = async () => {
    try {
      // Token verification
      updateLoadingText('Sprawdzanie twojej tożsamości...');
      const token = getJWT();
      if (!token) return false;
      // Token integrity verification
      const user = await getUserData(token);
      if (user.status !== 200) return false;
      updateLoadingText('Kończymy...');
      // Adding user to store
      dispatch(addUser({ user: user.data }));
      return true;
    } catch (err) {
      // Checking Request to API validation
      return false;
    }
  };

  // Unlock routes if JWT token exists and user is authenticated
  const unlockRoutes = (jwt: string, userData: authUser, redirectTo = dashboardRoute) => {
    if (getJWT()) {
      navigate(redirectTo);
    } else {
      try {
        dispatch(addUser({ user: userData }));
        setJWT(jwt);
        navigate(redirectTo);
      } catch (err) {
        removeJWT();
        dispatch(removeUser({}));
        navigate(loginRoute);
        localStorage.removeItem('role');
      }
    }
  };

  // Block routes
  const blockRoutes = () => {
    removeJWT();
    dispatch(removeUser({}));
    navigate(loginRoute);
    setAppLoading(false);
  };

  // This method checks does user has permission to access the route (by his role name)
  const checkDoesRoleHasPermission = (entitledRole: string | string[], actualRole: string) => {
    if (actualRole === roles.authenticated) return true;

    if (Array.isArray(entitledRole)) {
      return entitledRole.includes(actualRole);
    } else {
      return entitledRole === actualRole;
    }
  };

  const values = {
    getUserData,
    checkUser,
    unlockRoutes,
    blockRoutes,
    checkDoesRoleHasPermission
  };
  return <RouteContext.Provider value={values}>{children}</RouteContext.Provider>;
};

export const useRoutesControl = (): RouteContextTypes => {
  const Route = useContext(RouteContext);
  if (!Route) {
    throw new Error('useRoutes must be used within an RouteProvider');
  }
  return Route;
};
