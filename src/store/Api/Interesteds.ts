import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getJWT } from 'helpers/jwt';
import { multiResponse } from 'types/strapi';

export const InterestedsAPI = createApi({
  reducerPath: 'InterestedsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_BASE_URL
  }),
  endpoints: (builder) => ({
    getInteresteds: builder.query<multiResponse<{ name: string }>, unknown>({
      query: () => ({
        url: `/interesteds?pagination[pageSize]=50`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    })
  })
});

export const { useGetInterestedsQuery } = InterestedsAPI;
export default InterestedsAPI;
