import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getJWT } from 'helpers/jwt';
import { multiResponse, strapiRequestType } from 'types/strapi';

export const MeetingsAPI = createApi({
  reducerPath: 'MeetingsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_BASE_URL
  }),
  endpoints: (builder) => ({
    getMeetingsForDay: builder.query<{ id: number; date: string; isDone: boolean; start: string }[], { pId: strapiRequestType; date: string }>({
      transformResponse: (response: multiResponse<{ date: string; isDone: boolean; start: string }>) => {
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
        url: `/mettings?filters[pId][$eq]=${args.pId}&filters[date][$eq]=${args.date}`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    })
  })
});

export const { useGetMeetingsForDayQuery } = MeetingsAPI;
export default MeetingsAPI;
