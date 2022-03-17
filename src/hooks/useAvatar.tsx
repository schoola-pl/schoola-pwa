import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { getJWT } from 'helpers/jwt';
import { storeRoot, updateUser as updateUserStore, useUpdateUserMutation } from 'store';
import { useDispatch, useSelector } from 'react-redux';

interface AvatarContextTypes {
  saveAvatar: (photo: FormData) => Promise<void>;
  getAvatarById: (id?: string) => Promise<string>;
  uploadProgress: number;
}

const AvatarContext = createContext<AvatarContextTypes>({
  saveAvatar: async () => {
    throw new Error('saveAvatar is not implemented');
  },
  getAvatarById: () => {
    throw new Error('getAvatarById is not implemented');
  },
  uploadProgress: 0
});
export const AvatarProvider: React.FC = ({ children }) => {
  const [updateUser] = useUpdateUserMutation();
  const user = useSelector((state: storeRoot) => state.user);
  const [uploadProgress, setUploadProgress] = useState(0);
  const dispatch = useDispatch();

  const saveAvatar = async (photo: FormData) => {
    if (user) {
      const response = await axios.post<{ id: number }[]>(`${process.env.REACT_APP_BACKEND_BASE_URL}/upload`, photo, {
        headers: {
          Authorization: `Bearer ${getJWT()}`,
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          setUploadProgress(Math.round((loaded / total) * 100));
        }
      });
      updateUser({
        id: user.id,
        data: {
          avatar: response.data[0].id
        }
      });
      dispatch(
        updateUserStore({
          updated: {
            avatar: response.data[0].id
          }
        })
      );
    }
  };

  const getAvatarById = async (id?: string) => {
    const response = await axios.get<{ formats: { [key: string]: { url: string } } }>(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/upload/files/${id || user?.avatar}`,
      {
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      }
    );
    return response.data.formats['thumbnail'].url;
  };
  const values = {
    saveAvatar,
    getAvatarById,
    uploadProgress
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
