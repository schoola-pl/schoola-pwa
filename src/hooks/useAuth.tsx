import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { loginRoute, roles } from 'routes';
import { Auth, authUser, Hub } from 'aws-amplify';
import { getPathForRole } from '../helpers/roles';
import { Response } from '../types/responses';
import { useModal } from './useModal';
import ForcePasswordChangeModal from '../components/molecules/ForcePasswordChangeModal/ForcePasswordChangeModal';
import { withAsyncResponseHandler } from '../helpers/responseHandler';
import { useNotification } from './useNotification';

interface AuthContextTypes {
  currentUser: authUser | null;
  updateAttributes: ({ attributes }: { attributes: { [key: string]: string | number } }) => Promise<Response>;
  resetPassword: ({ username }: { username: string }) => Promise<Response<{ delivered_by: { name: string; value: string } }>>;
  resetPasswordSubmit: ({ username, password, code }: { username: string; code: string; password: string }) => Promise<Response>;
  signIn: ({ username, password }: { username: string; password: string }) => Promise<Response>;
  signOut: ({ global }: { global?: boolean }) => Promise<Response>;
  checkDoesRoleHasPermission: (entitledRole: string | string[], actualRole: string) => boolean;
}

const requiredUserAttributes = ['custom:isConfigured', 'birthdate'];

const AuthContext = createContext<AuthContextTypes>({
  currentUser: null,
  updateAttributes: () => {
    throw new Error('updateAttributes is not implemented');
  },
  resetPassword: () => {
    throw new Error('useResetPassword is not implemented');
  },
  resetPasswordSubmit: () => {
    throw new Error('useResetPasswordSubmit is not implemented');
  },
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
  const { notifyUser } = useNotification();

  // --- END METHODS, VALUES FROM ANOTHER HOOKS ---

  // --- STATES ---

  const [currentUser, setCurrentUser] = useState<null | authUser>(null);

  // --- END STATES ---

  // Build user object from Cognito User object
  const buildAuthUserObject = (data: any): authUser => {
    const {
      username,
      attributes,
      signInUserSession: {
        idToken: { payload }
      }
    } = data;

    // Build user object by authUser type
    return {
      username,
      attributes,
      role: payload['cognito:groups'][0]
    };
  };

  // Get the User information from AWS API
  const getCurrentUser = async (): Promise<authUser | null> => {
    try {
      // It gets & returns the current user
      return await Auth.currentAuthenticatedUser();
    } catch {
      // currentAuthenticatedUser throws an Error if not signed in
      return null;
    }
  };

  // Check does the user is configured or not
  const checkIsUserConfigured = (user?: authUser) => {
    // Choose whose user is the current user
    const validUser = user || currentUser;
    if (!validUser) return false;
    const { attributes, role } = validUser;
    // Check if the user has role
    if (!role) return false;
    // Check if the user has all the required attributes
    const preparedAttributes = requiredUserAttributes.map((attr) => {
      return attributes.hasOwnProperty(attr);
    });
    return preparedAttributes.every((attr) => attr);
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

  const authSwitch = async ({ payload: { event, data } }: { payload: { event: string; data: any } }) => {
    console.log('Wywołałem event: ', event);
    switch (event) {
      case 'signIn':
        // Build user object from Cognito User object
        const user = buildAuthUserObject(data);
        if (user) {
          // It checks does user is configured
          const isConfigured = checkIsUserConfigured(user);
          if (isConfigured) {
            // Add user object to state
            setCurrentUser(user);
            // Save the current role to the LocalStorage
            localStorage.setItem('role', user.role);
            // Navigate to good path
            navigate(getPathForRole(user.role));
          } else {
            // Display error message about non configured user
            notifyUser({
              value: 'Twoje konto zostało niepoprawnie skonfigurowane! Prosimy o kontakt z administratorem.',
              type: 'error',
              level: 3
            });
            // Sign out the user
            await Auth.signOut({ global: true });
          }
        } else navigate(loginRoute);
        break;
      case 'signOut':
        // Cleanup states
        setCurrentUser(null);
        // Navigate to login page
        setTimeout(() => {
          navigate(loginRoute);
        }, 500);
        break;
      // case 'signIn_failure':
      //   console.log('Sign in failure');
      //   break;
      default:
        break;
    }
  };

  // --- END SWITCHES ---

  // --- USE EFFECTS ---

  useEffect(() => {
    // One-time actions
    (async () => {
      // Get & save the current user
      const user = await getCurrentUser();
      setCurrentUser(user);
    })();
    // Initialize listeners
    Hub.listen('auth', authSwitch);
    // Cleanup the listeners
    return () => Hub.remove('auth', authSwitch);
  }, []);

  // --- END USE EFFECTS ---

  // --- USER METHODS ---

  // It sends a code required for password reset
  const resetPassword = withAsyncResponseHandler<{ username: string }, { delivered_by: { name: string; value: string } }>(
    async ({ username }) => {
      // Send the code to the user
      const {
        CodeDeliveryDetails: { AttributeName, Destination }
      } = await Auth.forgotPassword(username);
      return {
        delivered_by: {
          name: AttributeName,
          value: Destination
        }
      };
    },
    {
      success: 'Pomyślnie wysłano kod resetujący hasło',
      errors: {
        UserNotFoundException: 'Nie znaleziono użytkownika!',
        InvalidParameterException: 'Podany użytkownik jest źle skonfigurowany!',
        LimitExceededException: 'Limit wysyłania kodów resetujących hasło został przekroczony!'
      }
    }
  );

  // It resets the password with the code
  const resetPasswordSubmit = withAsyncResponseHandler<{ username: string; code: string; password: string }>(
    async ({ username, code, password }) => {
      await Auth.forgotPasswordSubmit(username, code, password);
    },
    {
      success: 'Pomyślnie zresetowano hasło',
      errors: {
        CodeMismatchException: 'Kod jest nieprawidłowy!',
        ExpiredCodeException: 'Kod jest przeterminowany!',
        InvalidParameterException: 'Podany użytkownik jest źle skonfigurowany!',
        ResourceNotFoundException: 'Nie znaleziono użytkownika!',
        LimitExceededException: 'Limit operacji został przekroczony, spróbuj ponownie później!'
      }
    }
  );

  // This method is used to sign in the user
  const signIn = withAsyncResponseHandler<{ username: string; password: string }>(
    async ({ username, password }) => {
      console.log('Wywołuję!');
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
    },
    {
      success: 'Pomyślnie zalogowano',
      errors: {
        UserNotFoundException: 'Podano niepoprawne dane logowania!',
        NotAuthorizedException: 'Podano niepoprawne dane logowania!'
      }
    }
  );

  // This method is used to sign out the user
  const signOut = withAsyncResponseHandler<{ global?: boolean }>(
    async ({ global = false }) => {
      await Auth.signOut({ global });
    },
    {
      success: 'Pomyślnie wylogowano',
      errors: {
        InvalidParameterException: 'Podany użytkownik jest źle skonfigurowany!'
      }
    }
  );

  const updateAttributes = withAsyncResponseHandler<{ attributes: { [key: string]: string | number } }>(
    async ({ attributes }) => {
      if (!currentUser) throw new Error('User is not signed in');
      const res = await Auth.updateUserAttributes(currentUser, attributes);
      console.log(res);
    },
    {
      success: 'Pomyślnie zaktualizowano dane użytkownika',
      errors: 'Nie udało się zaktualizować danych użytkownika'
    }
  );

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
    updateAttributes,
    resetPassword,
    resetPasswordSubmit,
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
