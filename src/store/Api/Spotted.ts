import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getJWT } from 'helpers/jwt';
import { multiResponse, strapiRequestType } from 'types/strapi';

export const SpottedAPI = createApi({
  reducerPath: 'SpottedAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_BASE_URL
  }),
  endpoints: (builder) => ({
    getSpotteds: builder.query<multiResponse<{ message: string; publishedAt: string }>, { schoolId: strapiRequestType }>({
      query: (args) => ({
        url: `/spotteds?filters[schoolId][$eq]=${args.schoolId}&fields[0]=publishedAt&fields[1]=message`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    })
  })
});

export const { useGetSpottedsQuery } = SpottedAPI;
export default SpottedAPI;
