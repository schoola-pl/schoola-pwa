import React, { createContext, useContext } from 'react';
import axios from 'axios';
import { getJWT } from 'helpers/jwt';
import { storeRoot, useUpdateUserMutation } from 'store';
import { useSelector } from 'react-redux';

interface AvatarContextTypes {
  saveAvatar: (photo: FormData) => void;
  getAvatarById: (id: number) => void;
}

const AvatarContext = createContext<AvatarContextTypes>({
  saveAvatar: async () => {
    throw new Error('saveAvatar is not implemented');
  },
  getAvatarById: () => {
    throw new Error('getAvatarById is not implemented');
  }
});
export const AvatarProvider: React.FC = ({ children }) => {
  const [updateUser] = useUpdateUserMutation();
  const user = useSelector((state: storeRoot) => state.user);

  const saveAvatar = async (photo: FormData) => {
    if (user) {
      const response = await axios.post<{ id: number }[]>(`${process.env.REACT_APP_BACKEND_BASE_URL}/upload`, photo, {
        headers: {
          Authorization: `Bearer ${getJWT()}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      updateUser({
        id: user.id,
        data: {
          avatar: response.data[0].id
        }
      });
    }
  };

  const getAvatarById = (id: number) => axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/upload/files/${id}`);

  const values = {
    saveAvatar,
    getAvatarById
  };
  return <AvatarContext.Provider value={values}>{children}</AvatarContext.Provider>;
};

export const useAvatar = (): AvatarContextTypes => {
  const Avatar = useContext(AvatarContext);
  if (!Avatar) {
    throw new Error('useAvatars must be used within an AvatarProvider');
  }
  return Avatar;
};
