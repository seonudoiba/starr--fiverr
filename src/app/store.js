import { configureStore } from '@reduxjs/toolkit'
import favReducer from '../features/AddFav'
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    addFav: favReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
    
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware)
})
