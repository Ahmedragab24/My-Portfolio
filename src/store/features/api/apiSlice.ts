import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337" }),
  tagTypes: ["projects"],
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => `/api/projects?populate=categories&populate=image`,
      providesTags: ["projects"],
    }),
    getCategories: builder.query({
      query: () => `/api/categories`,
    }),
    getOneProject: builder.query({
      query: (id) =>
        `/api/projects/${id}?populate=image&populate=imagesGroup&populate=categories`,
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetCategoriesQuery,
  useGetOneProjectQuery,
} = apiSlice;
