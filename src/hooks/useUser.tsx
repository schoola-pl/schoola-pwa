import React, { createContext, useContext } from 'react';
import { authUser } from 'types/auth';
import { getJWT, removeJWT } from 'helpers/jwt';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { settingsType } from 'types/school';
import {
  removeUser,
  storeRoot,
  updateUser,
  useAddUserToClassMutation,
  useGetUsersCountQuery,
  useRemoveUserMutation,
  useUpdateSchoolCountMutation,
  useUpdateUserMutation
} from 'store';
import { nanoid } from '@reduxjs/toolkit';
import { getRoleFromText } from 'helpers/roles';
import { useClass } from 'hooks/useClass';

interface UserContextTypes {
  updateUserState: (user: authUser) => void;
  logout: () => void;
  updateSettings: (settings: settingsType, userId?: number) => void;
  resetPassword: (newPassword: string) => void;
  addNewUser: (
    newUser: { name: string; birthday: string; TextRole: string; first_name: string; last_name: string },
    customClassId?: number
  ) => Promise<
    | {
        id: number;
        name: string;
        login: string;
        password: string;
      }
    | undefined
  >;
  deleteUser: (userId: number, count?: number) => void;
  deleteUsers: (users: Partial<authUser>[]) => void;
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
  },
  resetPassword: () => {
    throw new Error('UserContext is not initialized');
  },
  addNewUser: () => {
    throw new Error('UserContext is not initialized');
  },
  deleteUser: () => {
    throw new Error('UserContext is not initialized');
  },
  deleteUsers: () => {
    throw new Error('UserContext is not initialized');
  }
});
export const UserProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addUserToDatabase] = useUpdateUserMutation();
  const { classId } = useClass();
  const user = useSelector((state: storeRoot) => state.user);
  const [addUser, { isLoading }] = useAddUserToClassMutation();
  const usersCount = useGetUsersCountQuery({ schoolId: user?.schoolId || null });
  const [addToSchoolCount] = useUpdateSchoolCountMutation();
  const [deleteUserMethod] = useRemoveUserMutation();
  const [updateCount] = useUpdateSchoolCountMutation();

  // This method logs the user out and removes the JWT from the local storage
  const logout = () => {
    removeJWT();
    dispatch(removeUser({}));
    navigate('/login');
  };

  // This method adds new user
  const addNewUser = async (
    userData: { name: string; birthday: string; TextRole: string; first_name: string; last_name: string },
    customClassId?: number
  ) => {
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
      class: customClassId || classId,
      password: nanoid()
    };
    const response = await addUser({ ...preparedUser });
    const {
      data: { id }
    } = response as { data: { id: string } };
    addToSchoolCount({
      schoolId: user?.schoolId || null,
      totalUsers: usersCount.data.data[0].attributes.totalUsers + 1
    });
    return {
      id: parseInt(id),
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

  // This method updates the user settings in the redux store & database
  const updateSettings = (settings: settingsType, userId?: number) => {
    if (settings.email !== '' || settings.first_name !== '' || settings.last_name !== '' || settings.Birthday !== '' || settings.TextRole !== '') {
      const tempObj: { [key: string]: string } = {};
      const settingsArray = Object.entries(settings);
      const role = getRoleFromText(settings.TextRole || user?.TextRole || '');
      settingsArray.forEach(([key, value]) => {
        if (value !== '') {
          if (key === 'first_name' || key === 'last_name') value = value.charAt(0).toUpperCase() + value.slice(1);
          tempObj[key] = value;
        }
      });
      if (!userId) dispatch(updateUser({ updated: tempObj }));
      addUserToDatabase({ id: userId || user?.id || null, data: { ...tempObj, role } });
    }
  };

  // This method resets the user password in the database
  const resetPassword = (newPassword: string) => {
    if (newPassword.match(/(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g)) {
      addUserToDatabase({ id: user?.id || null, data: { password: newPassword } });
    }
  };

  // This method deletes the user from the database
  const deleteUser = (userId: number, count?: number) => {
    deleteUserMethod({
      id: userId
    });
    updateCount({
      schoolId: user?.schoolId || null,
      totalUsers: count || usersCount.data.data[0].attributes.totalUsers - 1
    });
  };

  // This method deletes the array of users from the database
  const deleteUsers = (users: Partial<authUser>[]) => {
    let localCounter: number = usersCount.data.data[0].attributes.totalUsers;
    for (const user of users) {
      deleteUser(parseInt(user.id || ''), localCounter--);
    }
  };

  const values = {
    logout,
    resetPassword,
    updateUserState,
    updateSettings,
    addNewUser,
    deleteUser,
    deleteUsers
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
