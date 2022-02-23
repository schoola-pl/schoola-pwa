import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getJWT } from 'helpers/jwt';
import { strapiRequestType } from 'types/strapi';

export const SocialsAPI = createApi({
  reducerPath: 'SocialsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_BASE_URL
  }),
  endpoints: (builder) => ({
    getSocials: builder.query<{ id: number; platform: string; url: string }[], { userId: strapiRequestType }>({
      transformResponse: (response: { data: { id: number; attributes: { socials: { id: number; platform: string; url: string }[] } } }) => {
        const { data } = response;
        const { attributes } = data;
        const { socials } = attributes;
        return socials;
      },
      query: (args) => ({
        url: `/socials/${args.userId}?populate=*&fields[0]=id`,
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    addSocial: builder.mutation<{ data: { id: number; attributes: { socials: { id: number; platform: string; url: string }[] } } }, unknown>({
      query: (body) => ({
        url: '/socials',
        method: 'POST',
        body: {
          data: {
            socials: body
          }
        },
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    }),
    updateSocial: builder.mutation<
      { data: { id: number; attributes: { socials: { id: number; platform: string; url: string }[] } } },
      { userId: strapiRequestType; data: unknown }
    >({
      query: (body) => ({
        url: `/socials/${body.userId}`,
        method: 'PUT',
        body: {
          data: {
            socials: body.data
          }
        },
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      })
    })
  })
});

export const { useGetSocialsQuery, useAddSocialMutation, useUpdateSocialMutation } = SocialsAPI;
export default SocialsAPI;
