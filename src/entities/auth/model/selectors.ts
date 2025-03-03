import { RootState } from '@/shared';

export const selectIsAuth = (state: RootState) => state.authSlice.isAuth;
export const selectUsername = (state: RootState) => state.authSlice.username;
