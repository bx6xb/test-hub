import { Navigate, Route, Routes } from 'react-router-dom'
import { checkIsAuth } from '@/entities'
import { Preloader, ProtectedRoute, useAppDispatch, useAppSelector } from '@/shared'
import { ChatPage, LoginPage } from '@/pages'
import { Alert } from '@/features'
import { useEffect, useState } from 'react'

export const App = () => {
  const isAuth = useAppSelector(state => state.authSlice.isAuth)
  const dispatch = useAppDispatch()

  const [isAppLoading, setIsAppLoading] = useState(true)

  useEffect(() => {
    const id = setTimeout(() => {
      setIsAppLoading(!isAppLoading)
    }, 1000)

    return () => clearTimeout(id)
  }, [])

  if (isAuth === null) {
    dispatch(checkIsAuth())

    return null
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

      <Preloader isHidden={!isAppLoading} />
    </>
  )
}
