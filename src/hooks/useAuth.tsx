import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { dashboardRoute, roles } from 'routes';
import { Auth, authUser, Hub } from 'aws-amplify';
import { getPathForRole } from '../helpers/roles';
import { ErrorResponse, SuccessResponse } from '../types/responses';
import { useModal } from './useModal';
import ForcePasswordChangeModal from '../components/molecules/ForcePasswordChangeModal/ForcePasswordChangeModal';

interface AuthContextTypes {
  currentUser: authUser | null;
  signIn: ({ username, password }: { username: string; password: string }) => Promise<SuccessResponse | ErrorResponse>;
  signOut: () => Promise<SuccessResponse | ErrorResponse>;
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
  const { openModal, closeModal } = useModal();

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

  // --- SWITCHES ---

  const challengeSwitch = async (challenge: string, args?: any) => {
    switch (challenge) {
      case 'NEW_PASSWORD_REQUIRED':
        interface passwordResetAttributes {
          resetMethod: (newPassword: string, requiredAttributes: any) => void;
          requiredAttributes: string[];
        }

        // This hook will return all information required for reset the password
        const useGetPasswordResetAttributes = (): passwordResetAttributes => {
          return {
            // This method will reset the password
            resetMethod: async (newPassword: string, requiredAttributes: any) => {
              await Auth.completeNewPassword(args.user, newPassword, requiredAttributes).then(() => {
                closeModal();
              });
            },
            // This value is an array with the required attributes
            requiredAttributes: args.requiredAttributes
          };
        };

        // Modal to reset the password
        openModal(
          <ForcePasswordChangeModal useGetPasswordResetAttributes={useGetPasswordResetAttributes} />,
          args.requiredAttributes.length > 0 ? 'Uzupełnij brakujące dane' : 'Zresetuj hasło'
        );
        break;
      default:
        break;
    }
  };

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
      case 'signOut':
        setCurrentUser(null);
        break;
      // case 'signIn_failure':
      //   console.log('Sign in failure');
      //   break;
      default:
        break;
    }
  };

  // --- END SWITCHES ---

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
      const user = await Auth.signIn({
        username,
        password
      });
      const { challengeName, challengeParam } = user;
      if (challengeName && challengeParam)
        await challengeSwitch(challengeName, {
          user,
          requiredAttributes: challengeParam.requiredAttributes
        });
      return {
        success: true,
        message: 'Successfully signed in!'
      };
    } catch (error) {
      let message = 'Something went wrong';
      if (error instanceof Error) message = error.message;
      return {
        success: false,
        message
      };
    }
  };

  // This method is used to sign out the user
  const signOut = async () => {
    try {
      await Auth.signOut();
      return {
        success: true,
        message: 'Successfully signed out!'
      };
    } catch (error) {
      let message = 'Something went wrong';
      if (error instanceof Error) message = error.message;
      return {
        success: false,
        message
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
