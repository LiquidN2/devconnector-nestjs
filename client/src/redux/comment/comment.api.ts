import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Comment } from './comment.type';

export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/comments' }),
  tagTypes: ['Comments'],
  endpoints: build => ({
    getCommentsByPostId: build.query<
      Comment[],
      { token: string | undefined; postId: string | undefined }
    >({
      query: ({ token, postId }) => ({
        url: `?postId=${postId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['Comments'],
    }),

    createComment: build.mutation<
      Comment,
      { token: string | undefined; body: { post: string; text: string } }
    >({
      query: ({ token, body }) => ({
        url: '/',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ['Comments'],
    }),

    deleteComment: build.mutation<
      Comment,
      { token: string | undefined; commentId: string | undefined }
    >({
      query: ({ token, commentId }) => ({
        url: `/${commentId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Comments'],
    }),
  }),
});

export const {
  useGetCommentsByPostIdQuery,
  useCreateCommentMutation,
  useDeleteCommentMutation,
} = commentApi;
