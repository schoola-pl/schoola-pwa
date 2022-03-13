import React, { createContext, useContext } from 'react';
import { authUser } from 'types/auth';
import { getJWT, removeJWT } from 'helpers/jwt';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import {
  addUser as addUserStore,
  removeUser,
  storeRoot,
  updateUser,
  useAddUserToClassMutation,
  useGetSocialsQuery,
  useGetUsersCountQuery,
  useRemoveUserMutation,
  useUpdateSchoolCountMutation,
  useUpdateSocialMutation,
  useUpdateUserMutation
} from 'store';
import { nanoid } from '@reduxjs/toolkit';
import { getRoleFromText } from 'helpers/roles';
import { useClass } from 'hooks/useClass';
import axios, { AxiosResponse } from 'axios';

export interface preparedUserInterface {
  username: string;
  email: string;
  password: string;
  confirmed: boolean;
  blocked: boolean;
  first_name: string;
  last_name: string;
  Birthday: string;
  avatar: string | null;
  schoolId: number | null;
  TextClassName: string;
  TextRole: string;
  TextSocials: string | null;
  class: number | null;
  role: number;
  socials: number;
}

interface UserContextTypes {
  updateUserState: (user: authUser) => void;
  logout: () => void;
  checkEmail: (email: string) => Promise<boolean>;
  updateSettings: (settings: Partial<authUser>, userId?: number) => void;
  checkPassword: (password: string) => Promise<boolean>;
  resetPassword: (newPassword: string, code?: string) => void | Promise<AxiosResponse>;
  addInterested: (interested: { id: number }) => void;
  removeInterested: (id: number) => void;
  findInterested: (
    id: string[] | string,
    interesteds: { id: number; name: string }[]
  ) => { id: number; name: string }[] | { id: number; name: string };
  addNewUser: (
    newUser: { name: string; birthday: string; TextRole: string; first_name: string; last_name: string },
    customClassId?: number,
    customClassName?: string
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
  deleteUsers: (users: Partial<authUser>[] | number[], actualCount: number) => void;
  addSocial: (link: { platform: string; url: string }, currentLinks?: { platform: string; url: string }[]) => void;
  deleteSocial: (link: { platform: string; url: string }, currentLinks?: { platform: string; url: string }[]) => void;
}

const UserContext = createContext<UserContextTypes>({
  updateUserState: () => {
    throw new Error('UserContext is not initialized');
  },
  addInterested: () => {
    throw new Error('UserContext is not initialized');
  },
  removeInterested: () => {
    throw new Error('UserContext is not initialized');
  },
  findInterested: () => {
    throw new Error('UserContext is not initialized');
  },
  logout: () => {
    throw new Error('UserContext is not initialized');
  },
  checkEmail: () => {
    throw new Error('UserContext is not initialized');
  },
  updateSettings: () => {
    throw new Error('UserContext is not initialized');
  },
  checkPassword: () => {
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
  },
  addSocial: () => {
    throw new Error('UserContext is not initialized');
  },
  deleteSocial: () => {
    throw new Error('UserContext is not initialized');
  }
});
export const UserProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [updateUserDatabase] = useUpdateUserMutation();
  const { classId, className } = useClass();
  const user = useSelector((state: storeRoot) => state.user);
  const [addUser, { isLoading }] = useAddUserToClassMutation();
  const usersCount = useGetUsersCountQuery({ schoolId: user?.schoolId || null });
  const [addToSchoolCount] = useUpdateSchoolCountMutation();
  const [deleteUserMethod] = useRemoveUserMutation();
  const [updateCount] = useUpdateSchoolCountMutation();
  const [updateSocials] = useUpdateSocialMutation();
  const userSocials = useGetSocialsQuery({
    userId: user?.TextSocials || null
  });

  // This method logs the user out and removes the JWT from the local storage
  const logout = () => {
    removeJWT();
    dispatch(removeUser({}));
    navigate('/login');
  };

  // This method adds new user
  const addNewUser = async (
    userData: { name: string; birthday: string; TextRole: string; first_name: string; last_name: string },
    customClassId?: number,
    customClassName?: string
  ) => {
    if (isLoading || !usersCount.data?.data) return;
    const dividedName = userData.name.split(' ');
    userData.first_name = dividedName[0];
    userData.last_name = dividedName[1];
    const {
      data: {
        data: { id: socialsId }
      }
    } = await axios.post<{ data: { id: number } }>(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/socials`,
      {
        data: {
          socials: []
        }
      },
      {
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      }
    );
    const preparedUser: preparedUserInterface = {
      username: `${userData.name.toLowerCase().split(' ').join('_')}`,
      email: `${nanoid()}@email.com`,
      first_name: userData.first_name.charAt(0).toUpperCase() + userData.first_name.slice(1),
      last_name: userData.last_name.charAt(0).toUpperCase() + userData.last_name.slice(1),
      confirmed: false,
      blocked: false,
      Birthday: new Date(userData.birthday).toISOString(),
      avatar: null,
      schoolId: user?.schoolId || null,
      TextRole: userData.TextRole,
      TextClassName: customClassName || className.split(' ')[1],
      role: getRoleFromText(userData?.TextRole || 'Student'),
      class: customClassId || classId,
      password: nanoid(),
      socials: socialsId,
      TextSocials: String(socialsId)
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
      dispatch(addUserStore({ user }));
    } else logout();
  };

  const checkEmail = async (email: string) => {
    try {
      const res = await axios.get<{ data: { email: string }[] }>(`${process.env.REACT_APP_BACKEND_BASE_URL}/users?filters[email]=${email}`, {
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      });
      return res.data?.data.length === 0;
    } catch (err) {
      return false;
    }
  };

  // This method updates the user settings in the redux store & database
  const updateSettings = (settings: Partial<authUser>, userId?: number) => {
    if (settings.email !== '' || settings.first_name !== '' || settings.last_name !== '' || settings.Birthday !== '' || settings.TextRole !== '') {
      const tempObj: { [key: string]: unknown } = {};
      const settingsArray = Object.entries(settings);
      const role = getRoleFromText(settings.TextRole || user?.TextRole || '');
      settingsArray.forEach(([key, value]) => {
        if (value && value !== '') {
          if (typeof value === 'string' && (key === 'first_name' || key === 'last_name')) value = value.charAt(0).toUpperCase() + value.slice(1);
          tempObj[key] = value;
        }
      });
      if (!userId) dispatch(updateUser({ updated: tempObj }));
      updateUserDatabase({ id: userId || user?.id || null, data: { ...tempObj, role } });
    }
  };

  const findInterested = (
    id: string | string[],
    interesteds: { id: number; name: string }[]
  ): { id: number; name: string }[] | { id: number; name: string } => {
    if (user) {
      if (Array.isArray(id)) {
        const parsedIds: number[] = id.map((item) => parseInt(item));
        return parsedIds.map((i) => interesteds.find((u) => u.id === i) || { id: 0, name: 'No interested' });
      } else {
        return interesteds.find((interested) => interested.id === parseInt(id)) || { id: 0, name: '' };
      }
    } else return [];
  };

  // This method adds the user interested
  const addInterested = ({ id }: { id: number }) => {
    if (user?.id) {
      const currentInterestedIDs = user.TextInteresteds;
      let currentInterested;
      if (currentInterestedIDs) {
        if (currentInterestedIDs.includes(String(id))) return;
        currentInterested = currentInterestedIDs.split(';').map((item) => ({ id: item }));
      }
      dispatch(
        updateUser({
          updated: {
            TextInteresteds: currentInterestedIDs ? `${currentInterestedIDs};${id}` : String(id)
          }
        })
      );
      updateUserDatabase({
        id: user?.id || null,
        data: {
          interesteds: [
            ...(currentInterested ? currentInterested : []),
            {
              id
            }
          ],
          TextInteresteds: currentInterestedIDs ? `${currentInterestedIDs};${id}` : String(id)
        }
      });
    }
  };

  // This method adds the user's socials
  const addSocial = async ({ platform, url }: { [k: string]: string }, currentSocials?: { platform: string; url: string }[]) => {
    if (user && (userSocials.data || currentSocials)) {
      const socials = currentSocials?.map(({ platform, url }) => ({ platform, url })) || userSocials.data || [];
      const newSocials = [...socials, { platform, url }];
      updateSocials({
        userId: user.TextSocials,
        data: newSocials
      });
    }
  };

  // This method removes the user's socials
  const deleteSocial = async ({ platform, url }: { [k: string]: string }, currentSocials?: { platform: string; url: string }[]) => {
    if (user && (userSocials.data || currentSocials)) {
      const socials = currentSocials?.map(({ platform, url }) => ({ platform, url })) || userSocials.data || [];
      const newSocials = socials.filter((item) => item.platform !== platform && item.url !== url);
      updateSocials({
        userId: user.TextSocials,
        data: newSocials
      });
    }
  };

  // This method removes the user interested
  const removeInterested = (id: number) => {
    if (user?.id) {
      const currentInterestedIDs = user.TextInteresteds;
      let newInterestedsText: string;
      let newInterestedsObjects: { id: string }[] | [];
      if (currentInterestedIDs.includes(';')) {
        const arrayWithRemovedId = currentInterestedIDs.split(';').filter((item) => item !== String(id));
        newInterestedsText = arrayWithRemovedId.join(';');
        newInterestedsObjects = arrayWithRemovedId.map((item) => ({ id: item }));
      } else {
        newInterestedsText = '';
        newInterestedsObjects = [];
      }
      dispatch(
        updateUser({
          updated: {
            TextInteresteds: newInterestedsText
          }
        })
      );
      updateUserDatabase({
        id: user?.id || null,
        data: {
          interesteds: newInterestedsObjects,
          TextInteresteds: newInterestedsText
        }
      });
    }
  };

  // This method checks does password is valid
  const checkPassword = async (password: string) => {
    if (!user) return false;
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/local`, {
        identifier: user.username,
        password
      });
      const { status } = res;
      return status === 200;
    } catch (error) {
      return false;
    }
  };

  // This method resets the user password in the database
  const resetPassword = (newPassword: string, code?: string) => {
    if (newPassword.match(/(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g)) {
      if (!code) updateUserDatabase({ id: user?.id || null, data: { password: newPassword } });
      else
        return axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/reset-password`, {
          code,
          password: newPassword,
          passwordConfirmation: newPassword
        });
    }
  };

  // This method deletes the user from the database
  const deleteUser = (userId: number, count?: number) => {
    if (!usersCount.data?.data) return;
    deleteUserMethod({
      id: userId
    });
    updateCount({
      schoolId: user?.schoolId || null,
      totalUsers: (count || usersCount.data.data[0].attributes.totalUsers) - 1
    });
  };

  // This method deletes the array of users from the database
  const deleteUsers = (users: Partial<authUser>[] | number[], actualCount: number) => {
    let localCounter: number = actualCount;
    for (const user of users) {
      if (typeof user === 'number') deleteUser(user, localCounter--);
      else deleteUser(parseInt(user.id || ''), localCounter--);
    }
  };

  const values = {
    logout,
    checkPassword,
    resetPassword,
    checkEmail,
    updateUserState,
    updateSettings,
    addInterested,
    removeInterested,
    findInterested,
    addNewUser,
    deleteUser,
    deleteUsers,
    addSocial,
    deleteSocial
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
