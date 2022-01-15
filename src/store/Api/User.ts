import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getJWT } from '../../helpers/jwt';

export const UserAPI = createApi({
  reducerPath: 'UserAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_BASE_URL
  }),
  tagTypes: ['users'],
  endpoints: (builder) => ({
    getUsersCount: builder.query({
      providesTags: ['users'],
      query: (args) => ({
        url: `/schools?fields[0]=totalUsers&filters[id][$eq]=${args.schoolId}`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    getUsersByClass: builder.query({
      providesTags: ['users'],
      query: (args) => ({
        url: `classes/${args.classId}?fields[0]=id&populate[users][fields][0]=first_name&populate[users][fields][1]=last_name`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    getUser: builder.query({
      query: (args) => ({
        url: `/users/${args.userId}`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    addUserToClass: builder.mutation({
      invalidatesTags: ['users'],
      query: (body) => ({
        method: 'POST',
        url: `/users`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        },
        body
      })
    })
  })
});

export const { useGetUsersCountQuery, useAddUserToClassMutation } = UserAPI;
export default UserAPI;
