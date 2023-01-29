import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spaceflightnewsapi.net',
  }),
  tagTypes: ['Article'],
  endpoints: () => ({}),
});

export const articlesApi = baseApi.injectEndpoints({
  reducerPath: 'articlesApi',
  endpoints: builder => ({
    getArticles: builder.query({
      query: search => ({
        url: `/v3/articles?_limit=10${search}`,
        method: 'GET',
      }),
      providesTags: ['Article'],
    }),

    getCount: builder.query({
      query: search => ({
        url: `/v3/articles/count${search}`,
        method: 'GET',
      }),
      providesTags: ['Article'],
    }),
  }),
});

export const { useGetArticlesQuery, useGetCountQuery } = articlesApi;
