import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/CryptoApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  // Adding the api middleware to enable caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(cryptoApi.middleware),
});
