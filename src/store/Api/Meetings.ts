import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getJWT } from 'helpers/jwt';
import { multiResponse, strapiRequestType } from 'types/strapi';
import { authUser } from 'types/auth';

export const MeetingsAPI = createApi({
  reducerPath: 'MeetingsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_BASE_URL
  }),
  endpoints: (builder) => ({
    getMeetingsForDay: builder.query<
      { id: number; date: string; isDone: boolean; start: string; user: authUser }[],
      { pId: strapiRequestType; date: string }
    >({
      transformResponse: (response: multiResponse<{ date: string; isDone: boolean; start: string; user: { data: { attributes: authUser } } }>) => {
        const data = response.data;
        return data.map((item) => {
          const { id, attributes } = item;
          return {
            id,
            ...attributes,
            user: attributes.user.data.attributes
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
      transformResponse: (response: multiResponse) => response.data.length,
      query: (args) => ({
        url: `/mettings?filters[pId][$eq]=${args.pId}&fields[0]=id${args.date && `&filters[date][$eq]=${args.date}`}`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    })
  })
});

export const { useGetMeetingsForDayQuery, useGetMeetingsCountQuery } = MeetingsAPI;
export default MeetingsAPI;
