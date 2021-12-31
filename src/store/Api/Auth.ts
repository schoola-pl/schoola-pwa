import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const AuthAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_BASE_URL
  }),
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: (args) => ({
        url: '/users/me',
        headers: {
          Authorization: `Bearer ${args.token}`
        }
      })
    }),
    login: builder.mutation({
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
