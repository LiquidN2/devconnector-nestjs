import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from './user.type';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/user/' }),
  endpoints: builder => ({
    getWhoAmI: builder.query<User, string | undefined>({
      query: token => ({
        url: 'whoami',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetWhoAmIQuery } = userApi;
