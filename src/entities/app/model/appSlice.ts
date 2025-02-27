import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AppState = {
  searchTerm: string
}

const initialState: AppState = { searchTerm: '' }

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload
    },
  },
})

export const { setSearchTerm } = appSlice.actions
