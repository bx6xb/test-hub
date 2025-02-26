import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getUsername } from '../lib'
import { UserData } from '@/shared'

type AuthState = {
  isAuth: boolean
  username: string
}

const initialState: AuthState = { isAuth: false, username: '' }

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    checkIsAuth(state) {
      const stringifiedUserData = localStorage.getItem('user')

      if (stringifiedUserData) {
        const userData = JSON.parse(stringifiedUserData) as UserData

        state.isAuth = !!userData
        state.username = getUsername(userData.email)
      }
    },
    login(state, action: PayloadAction<UserData>) {
      const stringifiedData = JSON.stringify(action.payload)
      localStorage.setItem('user', stringifiedData)

      state.isAuth = true
      state.username = getUsername(action.payload.email)
    },
    logout(state) {
      localStorage.removeItem('user')

      state.isAuth = false
      state.username = ''
    },
  },
})

export const { checkIsAuth, login, logout } = authSlice.actions
