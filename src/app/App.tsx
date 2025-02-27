import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { checkIsAuth } from '@/entities'
import { ProtectedRoute, useAppDispatch, useAppSelector } from '@/shared'
import { ChatPage, LoginPage } from '@/pages'

export const App = () => {
  const isAuth = useAppSelector(state => state.authSlice.isAuth)
  const dispatch = useAppDispatch()

  if (isAuth === null) {
    dispatch(checkIsAuth())

    return null
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute navigateTo={'/chat'} showPage={!isAuth} />}>
          <Route element={<LoginPage />} path={'/login'} />
        </Route>

        <Route element={<ProtectedRoute navigateTo={'/login'} showPage={isAuth} />}>
          <Route element={<ChatPage />} path={'/chat'} />
        </Route>

        <Route element={<Navigate replace to={'/chat'} />} path={'*'} />
      </Routes>
    </BrowserRouter>
  )
}
