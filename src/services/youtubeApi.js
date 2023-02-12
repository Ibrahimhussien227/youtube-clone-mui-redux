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
    // getCryptoDetails: builder.query({
    //   query: (coinId) => ({
    //     url: `/coin/${coinId}`,
    //     headers: cryptoApiHeaders,
    //     params,
    //   }),
    // }),
    // getCryptoHistory: builder.query({
    //   query: ({ coinId, timePeriod }) => ({
    //     url: `/coin/${coinId}/history?timePeriod=${timePeriod}`,
    //     headers: cryptoApiHeaders,
    //     params,
    //   }),
    // }),
    // getExchanges: builder.query({
    //   query: () => ({
    //     url: `/exchanges`,
    //     headers: cryptoApiHeaders,
    //     params,
    //   }),
    // }),
  }),
});

export const { useGetVideosQuery } = youtubeApi;
