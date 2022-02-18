import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getJWT } from 'helpers/jwt';
import { multiResponse, oneResponse, strapiRequestType } from 'types/strapi';
import { authUser } from 'types/auth';

export const SpottedAPI = createApi({
  reducerPath: 'SpottedAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_BASE_URL
  }),
  tagTypes: ['comments', 'proposals'],
  endpoints: (builder) => ({
    // --- GET Methods ---
    getSpottedProposals: builder.query<multiResponse<{ message: string; createdAt: string }>, { schoolId: strapiRequestType }>({
      providesTags: ['proposals'],
      query: (args) => ({
        url: `/spotted-proposals?filters[schoolId][$eq]=${args.schoolId}&fields[0]=createdAt&fields[1]=message`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    getSpottedComments: builder.query<
      multiResponse<{
        message: string;
        createdAt: string;
        comments: { data: { id: number; attributes: { message: string; author: { data: { attributes: authUser } }; createdAt: string } }[] };
        likes: { data: { id: number; attributes: { likes: number; userIds: { id: number; userId: string }[] } } };
      }>,
      { spottedId: strapiRequestType; schoolId: strapiRequestType }
    >({
      providesTags: ['comments'],
      query: (args) => ({
        url: `/spotteds?filters[schoolId][$eq]=${args.schoolId}&filters[id][$eq]=${args.spottedId}&populate[comments][sort][0]=createdAt:desc&populate[comments][fields]=*&populate[likes][populate]=userIds&populate[comments][populate]=author`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    // --- POST Methods ---
    addSpottedComment: builder.mutation<
      oneResponse<{ message: string; author: { data: { attributes: authUser } }; createdAt: string }>,
      {
        spotted: number;
        schoolId: string;
        message: string;
        author: string;
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
    proposeSpotted: builder.mutation<
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
    addSpotted: builder.mutation<
      oneResponse<{ message: string; createdAt: string }>,
      {
        schoolId: string;
        message: string;
        likes: number;
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
    // --- DELETE Methods ---
    deleteSpottedComment: builder.mutation<
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
    deleteSpotted: builder.mutation<
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
    deleteSpottedProposal: builder.mutation<
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
    })
  })
});

export const {
  useGetSpottedProposalsQuery,
  useGetSpottedCommentsQuery,
  useAddSpottedCommentMutation,
  useProposeSpottedMutation,
  useAddSpottedMutation,
  useDeleteSpottedCommentMutation,
  useDeleteSpottedProposalMutation,
  useDeleteSpottedMutation
} = SpottedAPI;
export default SpottedAPI;
