import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Profile } from './profile.type';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/profiles' }),
  endpoints: builder => ({
    getMyProfile: builder.query<Profile, string | undefined>({
      query: token => ({
        url: '/me',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    createMyProfileHandle: builder.mutation<
      Profile,
      { token: string | undefined; handle: string | undefined }
    >({
      query: ({ token, handle }) => ({
        url: '/',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: { handle },
      }),
    }),
  }),
});

export const { useGetMyProfileQuery, useCreateMyProfileHandleMutation } =
  profileApi;
