import { appSlice, authSlice } from '@/entities'
import { baseApi } from '@/shared'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [appSlice.name]: appSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})
