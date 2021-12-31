import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { authUser } from '../../types/auth';

const userSlice = createSlice<null | authUser, SliceCaseReducers<authUser | null>>({
  name: 'user',
  initialState: null,
  reducers: {
    addUser(state, actions) {
      const { user } = actions.payload;
      return user;
    },
    removeUser() {
      return null;
    }
  }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice;
