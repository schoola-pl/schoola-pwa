import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getJWT } from 'helpers/jwt';
import { multiResponse, oneResponse, strapiRequestType } from 'types/strapi';
import { authUser } from 'types/auth';

export const MeetingsAPI = createApi({
  reducerPath: 'MeetingsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_BASE_URL
  }),
  tagTypes: ['getMeetingsForDay', 'getExceptions'],
  endpoints: (builder) => ({
    getPsychos: builder.query<authUser[], { schoolId: strapiRequestType }>({
      query: (args) => ({
        url: `/users?filters[TextRole][$eq]=Psycho&filters[schoolId][$eq]=${args.schoolId}`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    getMeetingsForDay: builder.query<
      { id: number; pId: string; date: string; start: string; user: authUser & { meetingId: number } }[],
      { pId: strapiRequestType; date: string }
    >({
      providesTags: ['getMeetingsForDay'],
      transformResponse: (
        response: multiResponse<{ date: string; pId: string; start: string; user: { data: { attributes: authUser; id: string } } }>
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
    getMeetingsException: builder.query<{ id: number; pId: string; date: string; hour: string }[], { pId: strapiRequestType; date: string }>({
      providesTags: ['getExceptions'],
      transformResponse: (response: multiResponse<{ date: string; pId: string; hour: string }>) => {
        const data = response.data;
        return data.map((item) => {
          const { id, attributes } = item;
          return {
            id,
            ...attributes
          };
        });
      },
      query: (args) => ({
        url: `/psycho-exceptions?filters[pId][$eq]=${args.pId}&filters[date][$eq]=${args.date}&populate=*&sort=hour`,
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
    }),
    addException: builder.mutation<number, { date: string; hour: string; pId: string }>({
      invalidatesTags: ['getExceptions'],
      transformResponse: (response: oneResponse) => response.data.id,
      query: (body) => ({
        url: `/psycho-exceptions`,
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

export const {
  useGetMeetingsForDayQuery,
  useGetMeetingsExceptionQuery,
  useGetMeetingsCountQuery,
  useBookMeetingMutation,
  useDeleteMeetingMutation,
  useGetPsychosQuery,
  useAddExceptionMutation
} = MeetingsAPI;
export default MeetingsAPI;
