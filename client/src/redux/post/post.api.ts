import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Post, PostData } from './post.type';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/posts' }),
  tagTypes: ['Posts'],
  endpoints: builder => ({
    getPosts: builder.query<
      Post[],
      { token: string | undefined; target: string | undefined }
    >({
      query: ({ token, target }) => ({
        url: target ? `?target=${target}` : '/target-me',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['Posts'],
    }),

    createPost: builder.mutation<
      Post,
      { token: string | undefined; body: PostData }
    >({
      query: ({ token, body }) => ({
        url: '/',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = postApi;
