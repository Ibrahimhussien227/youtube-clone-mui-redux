import { configureStore } from "@reduxjs/toolkit";

import { youtubeApi } from "./services/youtubeApi";

export default configureStore({
  reducer: {
    [youtubeApi.reducerPath]: youtubeApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(youtubeApi.middleware),
});
