import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Connection, ConnectionStatus } from './connection.type';

export const connectionApi = createApi({
  reducerPath: 'connectionApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/connections' }),
  tagTypes: ['Connections'],
  endpoints: build => ({
    getConnections: build.query<
      Connection[],
      { token: string | undefined; userId: string | undefined }
    >({
      query: ({ token, userId }) => ({
        url: userId ? `?userId=${userId}` : '/me',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['Connections'],
    }),

    updateConnectionStatus: build.mutation<
      Connection,
      {
        token: string | undefined;
        connectionId: string | undefined;
        body: { status: ConnectionStatus };
      }
    >({
      query: ({ token, connectionId, body }) => ({
        url: `/${connectionId}`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ['Connections'],
    }),

    removeConnection: build.mutation<
      Connection,
      { token: string | undefined; connectionId: string | undefined }
    >({
      query: ({ token, connectionId }) => ({
        url: `/${connectionId}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Connections'],
    }),

    requestConnection: build.mutation<
      Connection,
      { token: string | undefined; body: { target: string | undefined } }
    >({
      query: ({ token, body }) => ({
        url: '',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ['Connections'],
    }),
  }),
});

export const {
  useGetConnectionsQuery,
  useUpdateConnectionStatusMutation,
  useRemoveConnectionMutation,
  useRequestConnectionMutation,
} = connectionApi;
