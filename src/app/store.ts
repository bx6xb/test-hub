import { authSlice } from '@/entities'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
})
