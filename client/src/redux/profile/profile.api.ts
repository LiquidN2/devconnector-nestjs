import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Profile, Experience, Education } from './profile.type';

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
      invalidatesTags: ['Profile'],
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
        body,
      }),
      invalidatesTags: ['Profile'],
    }),

    addMyExperience: builder.mutation<
      Profile,
      {
        token: string | undefined;
        body: Partial<Experience>;
      }
    >({
      query: ({ token, body }) => ({
        url: '/me/experiences',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ['Profile'],
    }),

    deleteMyExperience: builder.mutation<
      Profile,
      { token: string | undefined; experienceId: string | undefined }
    >({
      query: ({ token, experienceId }) => ({
        url: `/me/experiences/${experienceId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Profile'],
    }),

    updateMyExperience: builder.mutation<
      Profile,
      {
        token: string | undefined;
        experienceId: string | undefined;
        body: Partial<Experience>;
      }
    >({
      query: ({ token, experienceId, body }) => ({
        url: `/me/experiences/${experienceId}`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
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
  useAddMyExperienceMutation,
  useDeleteMyExperienceMutation,
  useUpdateMyExperienceMutation,
} = profileApi;
