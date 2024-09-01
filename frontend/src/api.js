import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'http://localhost:3000';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    fetchHomesForUser: builder.query({
      query: ({ username, page = 1 }) => ({
        url: '/home/find-by-user',
        method: 'POST',
        params: { username, page },
      }),
    }),
    updateUsersForHome: builder.mutation({
      query: ({ streetAddress, users }) => ({
        url: '/home/update-users',
        method: 'POST',
        body: { streetAddress, users },
      }),
    }),
    fetchAllUsers: builder.query({
      query: () => '/user/find-all',
    }),
    fetchUsersForHome: builder.query({
      query: (streetAddress) => ({
        url: '/user/find-by-home',
        method: 'POST',
        params: { street_address: streetAddress },
      }),
    }),
  }),
});

export const {
  useFetchHomesForUserQuery,
  useUpdateUsersForHomeMutation,
  useFetchAllUsersQuery,
  useFetchUsersForHomeQuery,
} = api;

export default api;
