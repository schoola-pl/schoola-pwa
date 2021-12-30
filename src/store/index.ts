import { configureStore } from '@reduxjs/toolkit';
import AuthAPI from './Api/Auth';
import userSlice from './Slices/User';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    [AuthAPI.reducerPath]: AuthAPI.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(AuthAPI.middleware)
});

const storeState = store.getState();
export type storeRoot = typeof storeState;

export * from './Api/Auth';
export * from './Slices/User';
export default store;
