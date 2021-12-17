import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Like } from './like.type';

export const likeApi = createApi({
  reducerPath: 'likeApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/likes' }),
  tagTypes: ['Likes'],
  endpoints: build => ({
    getLikesSummary: build.query<
      { count: number; isLiked: boolean },
      { token: string | undefined; postId: string | undefined }
    >({
      query: ({ token, postId }) => ({
        url: `/summary?postId=${postId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    createLike: build.mutation<Like, { token: string | undefined; body: any }>({
      query: ({ token, body }) => ({
        url: '/',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
    }),

    deleteLike: build.mutation<
      Like,
      { token: string | undefined; likeId: string | undefined }
    >({
      query: ({ token, likeId }) => ({
        url: `/${likeId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    deleteLikeByPostId: build.mutation<
      Like,
      { token: string | undefined; postId: string | undefined }
    >({
      query: ({ token, postId }) => ({
        url: `/postId/${postId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetLikesSummaryQuery,
  useCreateLikeMutation,
  useDeleteLikeMutation,
  useDeleteLikeByPostIdMutation,
} = likeApi;
