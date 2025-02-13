import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1' }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "/projects",
    }),
    getProjectByName: builder.query({
      query: (args:string) => `/projects/${args}`,
    }),
  }),
})

export const { useGetProjectsQuery, useGetProjectByNameQuery } = baseApi