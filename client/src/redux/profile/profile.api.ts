import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Profile, ExperienceData, EducationData } from './profile.type';

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

    getProfileWithUserId: builder.query<
      Profile,
      { token: string | undefined; userId: string | undefined }
    >({
      query: ({ token, userId }) => ({
        url: userId ? `?userId=${userId}` : '/me',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['Profile'],
    }),

    getProfileWithHandle: builder.query<
      Profile,
      { token: string | undefined; handle: string | undefined }
    >({
      query: ({ token, handle }) => ({
        url: handle ? `?handle=${handle}` : '/me',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['Profile'],
    }),

    createProfile: builder.mutation<
      Profile,
      { token: string | undefined; body: Partial<Profile> }
    >({
      query: ({ token, body }) => ({
        url: '/',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
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

    addExperienceOrEducation: builder.mutation<
      Profile,
      {
        token: string | undefined;
        data: ExperienceData | EducationData;
      }
    >({
      query: ({ token, data: { type, body } }) => ({
        url: `/me/${type}s`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ['Profile'],
    }),

    updateExperienceOrEducation: builder.mutation<
      Profile,
      {
        token: string | undefined;
        id: string | undefined;
        data: ExperienceData | EducationData;
      }
    >({
      query: ({ token, id, data: { type, body } }) => ({
        url: `/me/${type}s/${id}`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ['Profile'],
    }),

    deleteExperienceOrEducation: builder.mutation<
      Profile,
      {
        token: string | undefined;
        type: 'experience' | 'education';
        id: string | undefined;
      }
    >({
      query: ({ token, type, id }) => ({
        url: `/me/${type}s/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Profile'],
    }),
  }),
});

export const {
  // useGetMyProfileQuery,
  useGetProfileQuery,
  useGetProfileWithUserIdQuery,
  useGetProfileWithHandleQuery,
  useCreateProfileMutation,
  useUpdateMyProfileMutation,
  useAddExperienceOrEducationMutation,
  useUpdateExperienceOrEducationMutation,
  useDeleteExperienceOrEducationMutation,
} = profileApi;
