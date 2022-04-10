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
  verifyAttribute: ({ attribute }: { attribute: 'email' | 'phone_number' }) => Promise<Response>;
  verifyAttributeSubmit: ({ attribute, code }: { attribute: 'email' | 'phone_number'; code: string }) => Promise<Response>;
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
  verifyAttribute: () => {
    throw new Error('useVerifyAttribute is not implemented');
  },
  verifyAttributeSubmit: () => {
    throw new Error('useVerifyAttributeSubmit is not implemented');
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
  const [currentCognitoUser, setCognitoUser] = useState<any>(null);

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

  // Get the User information from AWS API & save them in the state
  const saveCurrentUser = async () => {
    const user = await getCurrentUser();
    if (user) {
      setCognitoUser(user);
      setCurrentUser(buildAuthUserObject(user));
    }
  };

  // Update the User information locally
  const updateSession = async () => {
    await Auth.currentSession();
    await saveCurrentUser();
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
    switch (event) {
      case 'signIn':
        // Build user object from Cognito User object
        const user = buildAuthUserObject(data);
        if (user) {
          // It checks does user is configured
          const isConfigured = checkIsUserConfigured(user);
          if (isConfigured) {
            // Add original user object to state
            setCognitoUser(data);
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

  // Use effect to get the current user
  useEffect(() => {
    (async () => {
      // Get & save the current user
      await saveCurrentUser();
    })();
  }, []);

  // Use effect to listen to the auth events
  useEffect(() => {
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

  // This method is used to update user attributes
  const updateAttributes = withAsyncResponseHandler<{ attributes: { [key: string]: string | number } }>(
    async ({ attributes }) => {
      // Check if the user is signed in
      if (!currentCognitoUser) throw new Error('User is not signed in');
      // Update attributes (server-side)
      await Auth.updateUserAttributes(currentCognitoUser, attributes);
      // Update attributes (client-side)
      await updateSession();
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

  // It sends a code required for attribute verify
  const verifyAttribute = withAsyncResponseHandler<{ attribute: 'email' | 'phone_number' }>(
    async ({ attribute }) => {
      await Auth.verifyCurrentUserAttribute(attribute);
    },
    {
      success: 'Pomyślnie wysłano kod weryfikacyjny!',
      errors: {
        UserNotFoundException: 'Nie znaleziono użytkownika!',
        InvalidParameterException: 'Podany użytkownik jest źle skonfigurowany!'
      }
    }
  );

  // It verifies attribute with the code
  const verifyAttributeSubmit = withAsyncResponseHandler<{ attribute: 'email' | 'phone_number'; code: string }>(
    async ({ attribute, code }) => {
      await Auth.verifyCurrentUserAttributeSubmit(attribute, code);
    },
    {
      success: 'Pomyślnie zweryfikowano atrybut!',
      errors: {
        UserNotFoundException: 'Nie znaleziono użytkownika!',
        InvalidParameterException: 'Podany użytkownik jest źle skonfigurowany!',
        CodeMismatchException: 'Kod jest nieprawidłowy!'
      }
    }
  );

  const values = {
    currentUser,
    updateAttributes,
    resetPassword,
    resetPasswordSubmit,
    verifyAttribute,
    verifyAttributeSubmit,
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