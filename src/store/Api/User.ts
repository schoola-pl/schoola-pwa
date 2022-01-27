import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getJWT } from 'helpers/jwt';

export const UserAPI = createApi({
  reducerPath: 'UserAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_BASE_URL
  }),
  tagTypes: ['users', 'update'],
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
      providesTags: ['users', 'update'],
      query: (args) => ({
        url: `/classes?populate[users][fields][0]=blocked&populate[users][fields][1]=first_name&populate[users][fields][2]=last_name&populate[users][fields][3]=avatar&filters[schoolId][$eq]=${args.schoolId}&fields[0]=classLevel&fields[1]=className&filters[classLevel]=${args.classLevel}&filters[className]=${args.className}&populate[users][fields]=birthday&populate[users][fields]=TextRole`,
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
    }),
    updateSchoolCount: builder.mutation({
      invalidatesTags: ['users'],
      query: (body) => ({
        method: 'PUT',
        url: `/schools/${body.schoolId}`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        },
        body: {
          data: {
            totalUsers: body.totalUsers
          }
        }
      })
    }),
    updateUser: builder.mutation({
      invalidatesTags: ['users', 'update'],
      query: (body) => ({
        method: 'PUT',
        url: `/users/${body.id}`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        },
        body: body.data
      })
    }),
    removeUser: builder.mutation({
      invalidatesTags: ['users'],
      query: (body) => ({
        method: 'DELETE',
        url: `/users/${body.id}`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    })
  })
});

export const {
  useGetUsersCountQuery,
  useAddUserToClassMutation,
  useGetUsersByClassQuery,
  useUpdateSchoolCountMutation,
  useUpdateUserMutation,
  useRemoveUserMutation
} = UserAPI;
export default UserAPI;
