import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getJWT } from 'helpers/jwt';
import { multiResponse, oneResponse, strapiRequestType } from 'types/strapi';

export const SpottedAPI = createApi({
  reducerPath: 'SpottedAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_BASE_URL
  }),
  tagTypes: ['addComment'],
  endpoints: (builder) => ({
    getSpotteds: builder.query<multiResponse<{ message: string; publishedAt: string }>, { schoolId: strapiRequestType }>({
      query: (args) => ({
        url: `/spotteds?filters[schoolId][$eq]=${args.schoolId}&fields[0]=publishedAt&fields[1]=message`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    getComments: builder.query<
      multiResponse<{
        message: string;
        publishedAt: string;
        spotted_comments: { data: { id: number; attributes: { message: string; author_name: string; avatar?: string; createdAt: string } }[] };
      }>,
      { spottedId: strapiRequestType; schoolId: strapiRequestType }
    >({
      providesTags: ['addComment'],
      query: (args) => ({
        url: `/spotteds?filters[schoolId][$eq]=${args.schoolId}&filters[id][$eq]=${args.spottedId}&populate=*`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    addComment: builder.mutation<
      oneResponse<{ message: string; author_name: string; avatar?: string; createdAt: string }>,
      {
        spotted: number;
        schoolId: string;
        message: string;
        author_name: string;
        avatar?: string;
      }
    >({
      invalidatesTags: ['addComment'],
      query: (body) => ({
        url: '/spotted-comments',
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

export const { useGetSpottedsQuery, useGetCommentsQuery, useAddCommentMutation } = SpottedAPI;
export default SpottedAPI;
