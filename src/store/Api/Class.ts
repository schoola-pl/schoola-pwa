import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getJWT } from '../../helpers/jwt';

export const ClassAPI = createApi({
  reducerPath: 'ClassAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_BASE_URL
  }),
  tagTypes: ['classes'],
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
        }&pagination[pageSize]=4&fields[0]=classLevel&fields[1]=className&filters[schoolId][$eq]=${args.schoolId}${
          args.classLevel ? `&filters[classLevel][$eq]=${args.classLevel}` : ''
        }`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    getClass: builder.query({
      query: (args) => ({
        url: `/classes?populate[users][fields][0]=blocked&populate[users][fields][1]=first_name&populate[users][fields][2]=last_name&populate[users][fields][3]=avatar&filters[schoolId][$eq]=${args.schoolId}&fields[0]=classLevel&fields[1]=className&filters[classLevel]=${args.classLevel}&filters[className]=${args.className}&populate[users][fields]=birthday&populate[users][fields]=TextRole`,
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
    }),
    removeClass: builder.mutation({
      invalidatesTags: ['classes'],
      query: (args) => ({
        url: `/classes/${args.classId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    })
  })
});

export const { useGetClassesQuery, useGetClassesCountQuery, useGetClassQuery, useAddClassMutation, useRemoveClassMutation } = ClassAPI;
export default ClassAPI;
