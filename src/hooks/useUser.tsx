import React, { createContext, useContext } from 'react';
import { authUser } from '../types/auth';
import { getJWT, removeJWT } from '../helpers/jwt';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../store';

interface UserContextTypes {
  updateUserState: (user: authUser) => void;
  logout: () => void;
  // updateSettings: (settings: settings) => void;
}

const UserContext = createContext<UserContextTypes>({
  updateUserState: () => {
    throw new Error('UserContext is not initialized');
  },
  logout: () => {
    throw new Error('UserContext is not initialized');
  }
});
export const UserProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  // TODO: Add method for updating settings
  // const updateSettings = (settings: settings) => {};

  const values = {
    logout,
    updateUserState
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
