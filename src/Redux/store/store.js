import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../Apis/ApiSlice";
import FavoriteSlice from "../FavoriteSlice/FavoriteSlice";

export const store = configureStore({
  reducer: { [apiSlice.reducerPath]: apiSlice.reducer,
              handleAddRemove: FavoriteSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});