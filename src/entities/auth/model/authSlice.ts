import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type AuthState = {
  isAuth: boolean
}

const initialState: AuthState = { isAuth: false }

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    checkIsAuth(state) {
      const isAuth = !!localStorage.getItem('user')
      state.isAuth = isAuth
    },
    setIsAuth(
      state,
      action: PayloadAction<{
        email: string
        password: string
      }>
    ) {
      const stringifiedData = JSON.stringify(action.payload)
      localStorage.setItem('user', stringifiedData)
      state.isAuth = true
    },
  },
})

export const { checkIsAuth, setIsAuth } = authSlice.actions
