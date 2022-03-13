import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { authUser } from 'types/auth';

const userSlice = createSlice<null | authUser, SliceCaseReducers<authUser | null>>({
  name: 'user',
  initialState: null,
  reducers: {
    addUser(state, actions) {
      const { user } = actions.payload;
      return user;
    },
    updateUser(state, actions) {
      const { updated } = actions.payload;
      return { ...state, ...updated };
    },
    removeUser() {
      return null;
    }
  }
});

export const { addUser, removeUser, updateUser } = userSlice.actions;
export default userSlice;
