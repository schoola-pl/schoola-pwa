import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getJWT } from 'helpers/jwt';
import { multiResponse, multiResponseWithoutPagination, oneResponse, strapiRequestType } from 'types/strapi';
import { authUser } from 'types/auth';
import { preparedUserInterface } from 'hooks/useUser';

export const UserAPI = createApi({
  reducerPath: 'UserAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_BASE_URL
  }),
  tagTypes: ['removeUser', 'addUser', 'update', 'updateCount'],
  endpoints: (builder) => ({
    getUsers: builder.query<authUser[], { schoolId: strapiRequestType; role?: string }>({
      providesTags: ['removeUser', 'update', 'addUser'],
      query: (args) => ({
        url: `/users?${args.role ? `filters[TextRole][$eq]=${args.role}&` : ''}filters[schoolId][$eq]=${args.schoolId}`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    getUsersCount: builder.query<multiResponse<{ totalUsers: number }>, { schoolId: strapiRequestType }>({
      providesTags: ['removeUser', 'addUser', 'updateCount'],
      query: (args) => ({
        url: `/schools?fields[0]=totalUsers&filters[id][$eq]=${args.schoolId}`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    getUsersByClass: builder.query<
      multiResponse<{
        classLevel: string | number;
        className: string;
        users: multiResponseWithoutPagination<{
          blocked: boolean;
          first_name: string;
          last_name: string;
          avatar: string | null;
          Birthday: string;
          TextRole: string;
        }>;
      }>,
      { classLevel: number | string; className: string; schoolId: strapiRequestType }
    >({
      providesTags: ['removeUser', 'update', 'addUser'],
      query: (args) => ({
        url: `/classes?populate[users][fields][0]=blocked&populate[users][fields][1]=first_name&populate[users][fields][2]=last_name&populate[users][fields][3]=avatar&filters[schoolId][$eq]=${args.schoolId}&fields[0]=classLevel&fields[1]=className&filters[classLevel]=${args.classLevel}&filters[className]=${args.className}&populate[users][fields]=birthday&populate[users][fields]=TextRole`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    getUser: builder.query<authUser, { userId: strapiRequestType }>({
      query: (args) => ({
        url: `/users/${args.userId}`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    addUserToClass: builder.mutation<authUser, preparedUserInterface>({
      invalidatesTags: ['addUser'],
      query: (body) => ({
        method: 'POST',
        url: `/users`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        },
        body
      })
    }),
    updateSchoolCount: builder.mutation<
      oneResponse<{ name: string; totalUsers: number }>,
      { schoolId: strapiRequestType; totalUsers: number | string }
    >({
      invalidatesTags: ['updateCount'],
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
    updateUser: builder.mutation<oneResponse<authUser>, { id: strapiRequestType; data: any }>({
      invalidatesTags: ['update'],
      query: (body) => ({
        method: 'PUT',
        url: `/users/${body.id}`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        },
        body: body.data
      })
    }),
    removeUser: builder.mutation<authUser, { id: strapiRequestType }>({
      invalidatesTags: ['removeUser'],
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
  useGetUsersQuery,
  useGetUsersCountQuery,
  useAddUserToClassMutation,
  useGetUsersByClassQuery,
  useUpdateSchoolCountMutation,
  useUpdateUserMutation,
  useRemoveUserMutation
} = UserAPI;
export default UserAPI;
