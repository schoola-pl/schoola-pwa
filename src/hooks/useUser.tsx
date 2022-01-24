import React, { createContext, useContext } from 'react';
import { authUser } from 'types/auth';
import { getJWT, removeJWT } from 'helpers/jwt';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, storeRoot, useAddUserToClassMutation, useGetUsersCountQuery, useUpdateSchoolCountMutation } from 'store';
import { nanoid } from '@reduxjs/toolkit';
import { getRoleFromText } from 'helpers/roles';
import { useClass } from 'hooks/useClass';

interface UserContextTypes {
  updateUserState: (user: authUser) => void;
  logout: () => void;
  addNewUser: (newUser: { name: string; birthday: string; TextRole: string; first_name: string; last_name: string }) =>
    | {
        name: string;
        login: string;
        password: string;
      }
    | undefined;
}

const UserContext = createContext<UserContextTypes>({
  updateUserState: () => {
    throw new Error('UserContext is not initialized');
  },
  logout: () => {
    throw new Error('UserContext is not initialized');
  },
  addNewUser: () => {
    throw new Error('UserContext is not initialized');
  }
});
export const UserProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { classId } = useClass();
  const user = useSelector((state: storeRoot) => state.user);
  const [addUser, { isLoading }] = useAddUserToClassMutation();
  const usersCount = useGetUsersCountQuery({ schoolId: user?.schoolId || null });
  const [addToSchoolCount] = useUpdateSchoolCountMutation();

  // This method logs the user out and removes the JWT from the local storage
  const logout = () => {
    removeJWT();
    dispatch(removeUser({}));
    navigate('/login');
  };

  const addNewUser = (userData: { name: string; birthday: string; TextRole: string; first_name: string; last_name: string }) => {
    if (isLoading) return;
    const dividedName = userData.name.split(' ');
    userData.first_name = dividedName[0];
    userData.last_name = dividedName[1];
    const preparedUser = {
      username: `${userData.name.toLowerCase().split(' ').join('_')}`,
      email: `${nanoid()}@email.com`,
      first_name: userData.first_name.charAt(0).toUpperCase() + userData.first_name.slice(1),
      last_name: userData.last_name.charAt(0).toUpperCase() + userData.last_name.slice(1),
      confirmed: true,
      blocked: false,
      Birthday: new Date(userData.birthday).toISOString(),
      avatar: null,
      schoolId: user?.schoolId || null,
      TextRole: userData.TextRole,
      role: getRoleFromText(userData?.TextRole || 'Student'),
      class: classId,
      password: nanoid()
    };
    addUser({ ...preparedUser });
    addToSchoolCount({
      schoolId: user?.schoolId || null,
      totalUsers: usersCount.data.data[0].attributes.totalUsers + 1
    });
    return {
      name: `${preparedUser.first_name} ${preparedUser.last_name}`,
      login: preparedUser.username,
      password: preparedUser.password
    };
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
    updateUserState,
    addNewUser
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
