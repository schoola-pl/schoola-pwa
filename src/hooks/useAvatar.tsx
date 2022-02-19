import React, { createContext, useContext } from 'react';
import axios from 'axios';
import { getJWT } from 'helpers/jwt';
import { storeRoot, useUpdateUserMutation } from 'store';
import { useSelector } from 'react-redux';

interface AvatarContextTypes {
  saveAvatar: (photo: FormData) => Promise<void>;
  getAvatarById: (id?: string, size?: 'thumbnail' | 'small' | 'medium' | 'large') => Promise<string>;
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

  const getAvatarById = async (id?: string, size?: 'thumbnail' | 'small' | 'medium' | 'large') => {
    const response = await axios.get<{ formats: { [key: string]: { url: string } } }>(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/upload/files/${id || user?.avatar}`,
      {
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      }
    );
    const imageUrl = response.data.formats[size || 'medium'].url;
    return `${process.env.REACT_APP_UPLOADS_BASE}${imageUrl}`;
  };
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
