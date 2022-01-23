import React, { createContext, useContext } from 'react';
import { authUser } from 'types/auth';
import { getJWT, removeJWT } from 'helpers/jwt';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser, storeRoot, updateUser, useUpdateUserMutation } from 'store';
import { settingsType } from 'types/school';

interface UserContextTypes {
  updateUserState: (user: authUser) => void;
  logout: () => void;
  updateSettings: (settings: settingsType) => void;
}

const UserContext = createContext<UserContextTypes>({
  updateUserState: () => {
    throw new Error('UserContext is not initialized');
  },
  logout: () => {
    throw new Error('UserContext is not initialized');
  },
  updateSettings: () => {
    throw new Error('UserContext is not initialized');
  }
});
export const UserProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: storeRoot) => state.user);
  const [addUserToDatabase] = useUpdateUserMutation();

  // This method logs the user out and removes the JWT from the local storage
  const logout = () => {
    removeJWT();
    dispatch(removeUser({}));
    navigate('/login');
  };

  // This method updates the user state in the redux store
  const updateUserState = (user: authUser) => {
    if (user && getJWT()) {
      dispatch(addUser({ user }));
    } else logout();
  };

  // This method updates the user settings in the redux store & database
  const updateSettings = (settings: settingsType) => {
    if (settings.email !== '' || settings.first_name !== '' || settings.last_name !== '' || settings.Birthday !== '') {
      const tempObj: { [key: string]: string } = {};
      const settingsArray = Object.entries(settings);
      settingsArray.forEach(([key, value]) => {
        if (value !== '') {
          if (key === 'first_name' || key === 'last_name') value = value.charAt(0).toUpperCase() + value.slice(1);
          tempObj[key] = value;
        }
      });
      dispatch(updateUser({ updated: tempObj }));
      addUserToDatabase({ id: user?.id || null, data: tempObj });
    }
  };

  const values = {
    logout,
    updateUserState,
    updateSettings
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextTypes => {
  const User = useContext(UserContext);
  if (!User) {
    throw new Error('useUser must be used within an UserProvider');
  }
  return User;
};
