import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const youtubeApiHeaders = {
  "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
  "X-RapidAPI-Host": import.meta.env.VITE_YOUTUBE_RAPIDAPI_HOST,
};

const baseUrl = import.meta.env.VITE_YOUTUBE_API_URL;

const params = {
  maxResults: "50",
  part: "snippet",
};

export const youtubeApi = createApi({
  reducerPath: "youtubeApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  // tagTypes: ["GET"],
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: (url) => ({
        url: `/search?q=${url}`,
        headers: youtubeApiHeaders,
        params,
      }),
    }),
    getChannel: builder.query({
      query: (id) => ({
        url: `/channels?id=${id}`,
        headers: youtubeApiHeaders,
        params,
      }),
    }),
    getChannelVideos: builder.query({
      query: (id) => ({
        url: `/search?channelId=${id}&order=date`,
        headers: youtubeApiHeaders,
        params,
      }),
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetChannelQuery,
  useGetChannelVideosQuery,
} = youtubeApi;
