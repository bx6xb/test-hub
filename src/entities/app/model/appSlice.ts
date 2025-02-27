import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type AppState = {
  selectedChatId: string
}

const initialState: AppState = { selectedChatId: '' }

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setSelectedChatId(state, action: PayloadAction<string>) {
      state.selectedChatId = action.payload
    },
  },
})

export const { setSelectedChatId } = appSlice.actions
