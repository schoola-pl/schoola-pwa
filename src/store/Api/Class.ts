import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getJWT } from '../../helpers/jwt';

export const ClassAPI = createApi({
  reducerPath: 'ClassAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_BASE_URL
  }),
  tagTypes: ['classes', 'users'],
  endpoints: (builder) => ({
    getClassesCount: builder.query({
      providesTags: ['classes'],
      query: (args) => ({
        url: `/classes?fields[0]=id&filters[schoolId][$eq]=${args.schoolId}`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    getClasses: builder.query({
      providesTags: ['classes'],
      query: (args) => ({
        url: `/classes?populate[users][fields][0]=id&pagination[page]=${
          args.page ? args.page : 1
        }&pagination[pageSize]=4&fields[0]=classLevel&fields[1]=className&filters[schoolId][$eq]=${args.schoolId}`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    getClass: builder.query({
      query: (args) => ({
        url: `/classes/${args.classId}?populate[users][fields][0]=blocked&populate[users][fields][1]=first_name&populate[users][fields][2]=last_name&populate[users][fields][3]=avatar&filters[schoolId][$eq]=${args.schoolId}&fields[0]=classLevel&fields[1]=className`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    addClass: builder.mutation({
      invalidatesTags: ['classes'],
      query: (body) => ({
        url: '/classes',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${getJWT()}`
        },
        body: {
          data: {
            ...body
          }
        }
      })
    })
  })
});

export const { useGetClassesQuery, useGetClassesCountQuery, useGetClassQuery, useAddClassMutation } = ClassAPI;
export default ClassAPI;
