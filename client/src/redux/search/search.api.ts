import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { SearchResults } from './search.type';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/searches' }),
  tagTypes: ['Searches'],
  endpoints: build => ({
    search: build.query<
      SearchResults,
      { token: string | undefined; query: string | undefined }
    >({
      query: ({ token, query }) => ({
        url: `?query=${query}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['Searches'],
    }),
  }),
});

export const { useSearchQuery } = searchApi;
