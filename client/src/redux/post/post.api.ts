import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Post } from './post.type';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/posts' }),
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
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
