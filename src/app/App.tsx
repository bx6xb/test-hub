import { Navigate, Route, Routes } from 'react-router-dom';
import { checkIsAuth, selectIsAuth } from '@/entities';
import { Preloader, ProtectedRoute, useAppDispatch, useAppSelector } from '@/shared';
import { ChatPage, LoginPage } from '@/pages';
import { Alert } from '@/features';

export const App = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();

  if (isAuth === null) {
    dispatch(checkIsAuth());

    return null;
  }

  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute navigateTo={'/chat'} showPage={!isAuth} />}>
          <Route element={<LoginPage />} path={'/login'} />
        </Route>

        <Route element={<ProtectedRoute navigateTo={'/login'} showPage={isAuth} />}>
          <Route element={<ChatPage />} path={'/chat'} />
        </Route>

        <Route element={<Navigate replace to={'/chat'} />} path={'*'} />
      </Routes>

      <Alert />

      <Preloader />
    </>
  );
};
