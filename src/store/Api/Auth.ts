import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { authUser } from 'types/auth';

export const AuthAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_BASE_URL
  }),
  endpoints: (builder) => ({
    getUserInfo: builder.query<authUser, { token: string }>({
      query: (args) => ({
        url: '/users/me',
        headers: {
          Authorization: `Bearer ${args.token}`
        }
      })
    }),
    login: builder.mutation<{ jwt: string; user: authUser }, { identifier: string; password: string }>({
      query: (body) => ({
        url: '/auth/local',
        method: 'POST',
        body
      })
    })
  })
});

export const { useLoginMutation, useGetUserInfoQuery } = AuthAPI;
export default AuthAPI;
