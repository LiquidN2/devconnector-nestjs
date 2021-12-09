import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ResultType {
  access_token: string;
}

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/auth' }),
  endpoints: build => ({
    signin: build.query({
      query: ({ email, password }: { email: string; password: string }) => ({
        url: '/',
        method: 'POST',
        body: { email, password },
      }),

      transformResponse: (response: { data: any }) => response.data,
    }),
  }),
});

export const { useSigninQuery } = authApi;
export const authApiReducer = authApi.reducer;
