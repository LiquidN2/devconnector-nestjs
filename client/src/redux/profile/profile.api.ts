import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Profile } from './profile.type';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/profiles' }),
  tagTypes: ['Profile'],
  endpoints: builder => ({
    getMyProfile: builder.query<Profile, string | undefined>({
      query: token => ({
        url: '/me',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    getProfile: builder.query<
      Profile,
      { token: string | undefined; profileId: string | undefined }
    >({
      query: ({ token, profileId }) => ({
        url: profileId ? `/${profileId}` : '/me',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['Profile'],
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

    updateMyProfile: builder.mutation<
      Profile,
      { token: string | undefined; body: Partial<Profile> }
    >({
      query: ({ token, body }) => ({
        url: '/me',
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: body,
      }),
      invalidatesTags: ['Profile'],
    }),
  }),
});

export const {
  useGetMyProfileQuery,
  useGetProfileQuery,
  useCreateMyProfileHandleMutation,
  useUpdateMyProfileMutation,
} = profileApi;
