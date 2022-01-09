import { configureStore } from '@reduxjs/toolkit';
import AuthAPI from './Api/Auth';
import ClassAPI from './Api/Class';
import UserAPI from './Api/User';
import userSlice from './Slices/User';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    [AuthAPI.reducerPath]: AuthAPI.reducer,
    [ClassAPI.reducerPath]: ClassAPI.reducer,
    [UserAPI.reducerPath]: UserAPI.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(AuthAPI.middleware).concat(ClassAPI.middleware).concat(UserAPI.middleware)
});

const storeState = store.getState();
export type storeRoot = typeof storeState;

export * from './Api/Auth';
export * from './Api/Class';
export * from './Api/User';
export * from './Slices/User';
export default store;