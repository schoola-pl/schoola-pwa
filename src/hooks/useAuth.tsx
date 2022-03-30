import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { dashboardRoute, roles } from 'routes';
import { Auth, authUser, Hub } from 'aws-amplify';
import { getPathForRole } from '../helpers/roles';

interface AuthContextTypes {
  currentUser: authUser | null;
  signIn: ({ username, password }: { username: string; password: string }) => Promise<any>;
  signOut: () => Promise<any>;
  checkDoesRoleHasPermission: (entitledRole: string | string[], actualRole: string) => boolean;
}

const AuthContext = createContext<AuthContextTypes>({
  currentUser: null,
  signIn: () => {
    throw new Error('AuthContext.signIn is not implemented');
  },
  signOut: () => {
    throw new Error('AuthContext.signOut is not implemented');
  },
  checkDoesRoleHasPermission: () => {
    throw new Error('AuthContext.checkDoesRoleHasPermission is not implemented');
  }
});
export const AuthProvider: React.FC = ({ children }) => {
  // --- METHODS, VALUES FROM ANOTHER HOOKS ---

  const navigate = useNavigate();

  // --- END METHODS, VALUES FROM ANOTHER HOOKS ---

  // --- STATES ---

  const [currentUser, setCurrentUser] = useState<null | authUser>(null);

  // --- END STATES ---

  // Get the User information from AWS API
  const getCurrentUser = async (): Promise<authUser | null> => {
    try {
      // It gets the current user
      const {
        username,
        attributes,
        signInUserSession: {
          idToken: { payload }
        }
      } = await Auth.currentAuthenticatedUser();
      return {
        username,
        attributes,
        role: payload['cognito:groups'][0]
      };
    } catch {
      // currentAuthenticatedUser throws an Error if not signed in
      return null;
    }
  };

  // Get the User information from AWS API & set the state
  const saveCurrentUser = async (): Promise<authUser | null> => {
    const user = await getCurrentUser();
    if (user) setCurrentUser(user);
    return user;
  };

  // --- SWITCHES FOR HUB ---

  const authSwitch = async ({ payload: { event } }: { payload: { event: string } }) => {
    switch (event) {
      case 'signIn':
        const user = await saveCurrentUser();
        if (user) {
          // Save the current role to the LocalStorage
          localStorage.setItem('role', user.role);
          // Navigate to good path
          navigate(getPathForRole(user.role));
        } else navigate(dashboardRoute.replaceAll('*', ''));
        break;
      // case 'signIn_failure':
      //   console.log('Sign in failure');
      //   break;
      default:
        break;
    }
  };

  // --- END SWITCHES FOR HUB ---

  // --- HUB LISTENERS ---

  Hub.listen('auth', authSwitch);

  // --- END HUB LISTENERS ---

  // --- USE EFFECTS ---

  useEffect(() => {
    // One-time actions
    (async () => {
      // Get & save the current user
      await saveCurrentUser();
    })();
    // Cleanup the listeners
    return () => Hub.remove('auth', authSwitch);
  }, []);

  // --- END USE EFFECTS ---

  // --- USER METHODS ---

  // This method is used to sign in the user
  const signIn = async ({ username, password }: { username: string; password: string }) => {
    try {
      await Auth.signIn({
        username,
        password
      });
      return {
        success: true,
        message: 'Successfully signed in!'
      };
    } catch (error) {
      if (!(error instanceof Error)) return 'error';
      return {
        success: false,
        message: error.message
      };
    }
  };

  // This method is used to sign out the user
  const signOut = async () => {
    try {
      await Auth.signOut();
      setCurrentUser(null);
      return {
        success: true,
        message: 'Successfully signed out!'
      };
    } catch (error) {
      if (!(error instanceof Error)) return 'error';
      return {
        success: false,
        message: error.message
      };
    }
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
    currentUser,
    signIn,
    signOut,
    checkDoesRoleHasPermission
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextTypes => {
  const Auth = useContext(AuthContext);
  if (!Auth) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return Auth;
};
