import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getJWT } from 'helpers/jwt';
import { multiResponse, multiResponseWithoutPagination, oneResponse, strapiRequestType } from 'types/strapi';

export const ClassAPI = createApi({
  reducerPath: 'ClassAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_BASE_URL
  }),
  tagTypes: ['classes'],
  endpoints: (builder) => ({
    getClassesCount: builder.query<multiResponse, { schoolId: strapiRequestType }>({
      providesTags: ['classes'],
      query: (args) => ({
        url: `/classes?fields[0]=id&filters[schoolId][$eq]=${args.schoolId}`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    getClasses: builder.query<
      multiResponse<{ classLevel: number; className: string; users: multiResponseWithoutPagination }>,
      { pagination?: boolean; page?: strapiRequestType; schoolId: strapiRequestType; classLevel?: strapiRequestType }
    >({
      providesTags: ['classes'],
      query: (args) => ({
        url: `/classes?populate[users][fields][0]=id${
          args.pagination ? `&pagination[page]=${args.page ? args.page : 1}&pagination[pageSize]=4` : ''
        }&fields[0]=classLevel&fields[1]=className&filters[schoolId][$eq]=${args.schoolId}${
          args.classLevel ? `&filters[classLevel][$eq]=${args.classLevel}` : ''
        }`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    getClass: builder.query<
      multiResponse<{
        classLevel: number;
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
      { className: string; classLevel: strapiRequestType; schoolId: strapiRequestType }
    >({
      query: (args) => ({
        url: `/classes?populate[users][fields][0]=blocked&populate[users][fields][1]=first_name&populate[users][fields][2]=last_name&populate[users][fields][3]=avatar&filters[schoolId][$eq]=${args.schoolId}&fields[0]=classLevel&fields[1]=className&filters[classLevel]=${args.classLevel}&filters[className]=${args.className}&populate[users][fields]=birthday&populate[users][fields]=TextRole`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    addClass: builder.mutation<
      oneResponse<{ className: string; classLeve: number; schoolId: string }>,
      { className: string; classLevel: strapiRequestType; schoolId: strapiRequestType; school: strapiRequestType }
    >({
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
    removeClass: builder.mutation<oneResponse<{ className: string; classLeve: number; schoolId: string }>, { classId: strapiRequestType }>({
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
