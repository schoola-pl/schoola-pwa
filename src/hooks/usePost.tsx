import React, { createContext, useContext } from 'react';
import { useSelector } from 'react-redux';
import { storeRoot, useAddPostMutation, useDeletePostMutation } from 'store';
import axios from 'axios';
import { getJWT } from 'helpers/jwt';

interface PostContextTypes {
  addPost: (message: string) => void;
  deletePost: (postId: number) => void;
}

const PostContext = createContext<PostContextTypes>({
  addPost: () => {
    throw new Error('usePost must be used within a PostProvider');
  },
  deletePost: () => {
    throw new Error('deleteSpott is not implemented');
  }
});
export const PostProvider: React.FC = ({ children }) => {
  const user = useSelector((state: storeRoot) => state.user);
  const [addPostRecord] = useAddPostMutation();
  const [deletePostRecord] = useDeletePostMutation();

  const addPost = async (message: string) => {
    if (!user) return;
    const { schoolId: schoolIdNP } = user;
    const schoolId = String(schoolIdNP);
    const response = await axios.post<{ likes: number; userIds: [] }, { data: { data: { id: string } } }>(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/likes`,
      { data: { likes: 0, userIds: [] } },
      {
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      }
    );
    const {
      data: {
        data: { id }
      }
    } = response;
    await addPostRecord({
      schoolId,
      message,
      author: user.id,
      likes: parseInt(id)
    });
  };

  const deletePost = async (postId: number) => {
    await deletePostRecord({
      postId
    });
  };

  const values = {
    addPost,
    deletePost
  };
  return <PostContext.Provider value={values}>{children}</PostContext.Provider>;
};

export const usePost = (): PostContextTypes => {
  const Post = useContext(PostContext);
  if (!Post) {
    throw new Error('usePost must be used within an PostProvider');
  }
  return Post;
};
