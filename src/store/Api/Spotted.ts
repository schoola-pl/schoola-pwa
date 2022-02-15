import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getJWT } from 'helpers/jwt';
import { multiResponse, multiResponseWithoutPagination, oneResponse, strapiRequestType } from 'types/strapi';

export const SpottedAPI = createApi({
  reducerPath: 'SpottedAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_BASE_URL
  }),
  tagTypes: ['comments', 'proposals'],
  endpoints: (builder) => ({
    getSpotteds: builder.query<
      multiResponse<{ message: string; createdAt: string; spotted_comments: multiResponseWithoutPagination }>,
      { schoolId: strapiRequestType; page: strapiRequestType }
    >({
      providesTags: ['proposals'],
      query: (args) => ({
        url: `/spotteds?filters[schoolId][$eq]=${args.schoolId}&fields[0]=createdAt&fields[1]=message&pagination[page]=${args.page}&pagination[pageSize]=3&sort[0]=createdAt:desc&populate[spotted_comments][fields]=id`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    getProposals: builder.query<multiResponse<{ message: string; createdAt: string }>, { schoolId: strapiRequestType }>({
      providesTags: ['proposals'],
      query: (args) => ({
        url: `/spotted-proposals?filters[schoolId][$eq]=${args.schoolId}&fields[0]=createdAt&fields[1]=message&sort[0]=createdAt:desc&populate[spotted_comments][fields]=id`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    getComments: builder.query<
      multiResponse<{
        message: string;
        createdAt: string;
        spotted_comments: { data: { id: number; attributes: { message: string; author_name: string; avatar?: string; createdAt: string } }[] };
        spotted_like: { data: { id: number; attributes: { likes: number; userIds: { id: number; userId: string }[] } } };
      }>,
      { spottedId: strapiRequestType; schoolId: strapiRequestType }
    >({
      providesTags: ['comments'],
      query: (args) => ({
        url: `/spotteds?filters[schoolId][$eq]=${args.schoolId}&filters[id][$eq]=${args.spottedId}&populate[spotted_comments][fields]=*&populate[spotted_like][populate]=userIds`,
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
      invalidatesTags: ['comments'],
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
    }),
    deleteComment: builder.mutation<
      unknown,
      {
        commentId: strapiRequestType;
      }
    >({
      invalidatesTags: ['comments'],
      query: (body) => ({
        url: `/spotted-comments/${body.commentId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    addSpott: builder.mutation<
      oneResponse<{ message: string; createdAt: string }>,
      {
        schoolId: string;
        message: string;
        spotted_like: number;
      }
    >({
      query: (body) => ({
        url: '/spotteds',
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
    deleteSpott: builder.mutation<
      oneResponse<{ message: string; createdAt: string }>,
      {
        spottId: strapiRequestType;
      }
    >({
      query: (body) => ({
        url: `/spotteds/${body.spottId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    proposeSpott: builder.mutation<
      oneResponse<{ message: string; createdAt: string }>,
      {
        schoolId: string;
        message: string;
      }
    >({
      query: (body) => ({
        url: '/spotted-proposals',
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
    deleteSpottProposal: builder.mutation<
      oneResponse<{ message: string; createdAt: string }>,
      {
        spottId: strapiRequestType;
      }
    >({
      invalidatesTags: ['proposals'],
      query: (body) => ({
        url: `/spotted-proposals/${body.spottId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    likeSpott: builder.mutation<
      unknown,
      {
        likesId: number;
        likes: number;
        userIds: { id?: number; userId: string }[];
      }
    >({
      query: (body) => ({
        url: `/spotted-likes/${body.likesId}`,
        method: 'PUT',
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

export const {
  useGetProposalsQuery,
  useGetCommentsQuery,
  useDeleteCommentMutation,
  useAddCommentMutation,
  useAddSpottMutation,
  useProposeSpottMutation,
  useDeleteSpottProposalMutation,
  useDeleteSpottMutation,
  useLikeSpottMutation
} = SpottedAPI;
export default SpottedAPI;
