import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const youtubeApiHeaders = {
  "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
  "X-RapidAPI-Host": import.meta.env.VITE_YOUTUBE_RAPIDAPI_HOST,
};

const baseUrl = import.meta.env.VITE_YOUTUBE_API_URL;

const params = {
  maxResults: "50",
};

export const youtubeApi = createApi({
  reducerPath: "youtubeApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: (url) => ({
        url: `/search?q=${url}&part=snippet`,
        headers: youtubeApiHeaders,
        params,
      }),
    }),
    getVideosById: builder.query({
      query: (id) => ({
        url: `/videos?id=${id}&part=snippet,statistics`,
        headers: youtubeApiHeaders,
        params,
      }),
    }),
    getRelatedVideos: builder.query({
      query: (id) => ({
        url: `/search?relatedToVideoId=${id}&type=video&part=snippet`,
        headers: youtubeApiHeaders,
        params,
      }),
    }),
    getChannelById: builder.query({
      query: (id) => ({
        url: `/channels?id=${id}&part=snippet`,
        headers: youtubeApiHeaders,
        params,
      }),
    }),
    getChannelVideos: builder.query({
      query: (id) => ({
        url: `/search?channelId=${id}&order=date&part=snippet`,
        headers: youtubeApiHeaders,
        params,
      }),
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetVideosByIdQuery,
  useGetRelatedVideosQuery,
  useGetChannelByIdQuery,
  useGetChannelVideosQuery,
} = youtubeApi;
