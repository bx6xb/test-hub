import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUsername } from '../lib';
import { UserData, userDataSchema } from '@/shared';

type AuthState = {
  isAuth: boolean | null;
  username: string;
};

const initialState: AuthState = { isAuth: null, username: '' };

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    checkIsAuth(state) {
      const stringifiedUserData = localStorage.getItem('user');

      if (stringifiedUserData) {
        const userData = JSON.parse(stringifiedUserData) as UserData;

        const parsedData = userDataSchema.safeParse(userData);

        if (parsedData.success) {
          state.isAuth = true;
          state.username = getUsername(userData.email);

          return;
        }
      }

      state.isAuth = false;
    },
    login(state, action: PayloadAction<UserData>) {
      const stringifiedData = JSON.stringify(action.payload);
      localStorage.setItem('user', stringifiedData);

      state.isAuth = true;
      state.username = getUsername(action.payload.email);
    },
    logout(state) {
      localStorage.removeItem('user');

      state.isAuth = false;
      state.username = '';
    },
  },
});

export const { checkIsAuth, login, logout } = authSlice.actions;
