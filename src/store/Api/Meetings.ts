import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getJWT } from 'helpers/jwt';
import { multiResponse, oneResponse, strapiRequestType } from 'types/strapi';
import { authUser } from 'types/auth';

export const MeetingsAPI = createApi({
  reducerPath: 'MeetingsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_BASE_URL
  }),
  tagTypes: ['getMeetingsForDay'],
  endpoints: (builder) => ({
    getPsychos: builder.query<authUser[], unknown>({
      query: () => ({
        url: `/users?filters[TextRole][$eq]=Psycho`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    getMeetingsForDay: builder.query<
      { id: number; date: string; isDone: boolean; start: string; user: authUser & { meetingId: number } }[],
      { pId: strapiRequestType; date: string }
    >({
      providesTags: ['getMeetingsForDay'],
      transformResponse: (
        response: multiResponse<{ date: string; isDone: boolean; start: string; user: { data: { attributes: authUser; id: string } } }>
      ) => {
        const data = response.data;
        return data.map((item) => {
          const { id, attributes } = item;
          return {
            id,
            ...attributes,
            user: { ...attributes.user.data.attributes, id: attributes.user.data.id, meetingId: id }
          };
        });
      },
      query: (args) => ({
        url: `/mettings?filters[pId][$eq]=${args.pId}&filters[date][$eq]=${args.date}&populate=*&sort=start`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    getMeetingsCount: builder.query<number, { pId: strapiRequestType; date?: string }>({
      providesTags: ['getMeetingsForDay'],
      transformResponse: (response: multiResponse) => response.data.length,
      query: (args) => ({
        url: `/mettings?filters[pId][$eq]=${args.pId}&fields[0]=id${args.date ? `&filters[date][$eq]=${args.date}` : ''}`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    deleteMeeting: builder.mutation<number, { id: number }>({
      invalidatesTags: ['getMeetingsForDay'],
      transformResponse: (response: oneResponse) => response.data.id,
      query: (args) => ({
        url: `/mettings/${args.id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    bookMeeting: builder.mutation<number, { user: number; date: string; start: string; pId: string }>({
      query: (body) => ({
        url: `/mettings`,
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

export const { useGetMeetingsForDayQuery, useGetMeetingsCountQuery, useBookMeetingMutation, useDeleteMeetingMutation, useGetPsychosQuery } =
  MeetingsAPI;
export default MeetingsAPI;
