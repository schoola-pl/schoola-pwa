import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getJWT } from 'helpers/jwt';
import { multiResponse, oneResponse, strapiRequestType } from 'types/strapi';
import { authUser } from 'types/auth';

export const PostsAPI = createApi({
  reducerPath: 'PostsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_BASE_URL
  }),
  tagTypes: ['comments'],
  endpoints: (builder) => ({
    // --- GET Methods ---
    getPostComments: builder.query<
      multiResponse<{
        message: string;
        createdAt: string;
        author: { data: { attributes: authUser } };
        comments: { data: { id: number; attributes: { message: string; author: { data: { attributes: authUser } }; createdAt: string } }[] };
        likes: { data: { id: number; attributes: { likes: number; userIds: { id: number; userId: string }[] } } };
      }>,
      { postId: strapiRequestType; schoolId: strapiRequestType }
    >({
      providesTags: ['comments'],
      query: (args) => ({
        url: `/posts?filters[schoolId][$eq]=${args.schoolId}&filters[id][$eq]=${args.postId}&populate[comments][sort][0]=createdAt:desc&populate[comments][fields]=*&populate[likes][populate]=userIds&populate[comments][populate]=author&populate[author][fields]=*`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    // --- POST Methods ---
    addPostComment: builder.mutation<
      oneResponse<{ message: string; author: { data: { attributes: authUser } }; createdAt: string }>,
      {
        post: number;
        schoolId: string;
        message: string;
        author: string;
      }
    >({
      invalidatesTags: ['comments'],
      query: (body) => ({
        url: '/post-comments',
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
    addPost: builder.mutation<
      oneResponse<{ message: string; createdAt: string }>,
      {
        schoolId: string;
        message: string;
        author: string;
        likes: number;
      }
    >({
      query: (body) => ({
        url: '/posts',
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
    // DELETE methods
    deletePostComment: builder.mutation<
      unknown,
      {
        commentId: strapiRequestType;
      }
    >({
      invalidatesTags: ['comments'],
      query: (body) => ({
        url: `/post-comments/${body.commentId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    deletePost: builder.mutation<
      oneResponse<{ message: string; createdAt: string }>,
      {
        postId: strapiRequestType;
      }
    >({
      query: (body) => ({
        url: `/posts/${body.postId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    // --- PUT Methods ---
    likePost: builder.mutation<
      unknown,
      {
        likesId: number;
        likes: number;
        userIds: { id?: number; userId: string }[];
      }
    >({
      query: (body) => ({
        url: `/likes/${body.likesId}`,
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
  useGetPostCommentsQuery,
  useAddPostCommentMutation,
  useAddPostMutation,
  useDeletePostCommentMutation,
  useDeletePostMutation,
  useLikePostMutation
} = PostsAPI;
export default PostsAPI;
