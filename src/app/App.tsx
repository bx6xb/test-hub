import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { checkIsAuth } from '@/entities'
import { Chat, Login } from '@/pages'
import { ProtectedRoute, useAppDispatch, useAppSelector } from '@/shared'

export const App = () => {
  const isAuth = useAppSelector(state => state.authSlice.isAuth)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(checkIsAuth())
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute navigateTo={'/chat'} showPage={!isAuth} />}>
          <Route element={<Login />} path={'/login'} />
        </Route>

        <Route element={<ProtectedRoute navigateTo={'/login'} showPage={isAuth} />}>
          <Route element={<Chat />} path={'/chat'} />
        </Route>

        <Route element={<Navigate replace to={'/chat'} />} path={'*'} />
      </Routes>
    </BrowserRouter>
  )
}
