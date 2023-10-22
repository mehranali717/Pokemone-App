import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../Apis/ApiSlice";

export const store = configureStore({
  reducer: { [apiSlice.reducerPath]: apiSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});