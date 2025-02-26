import { Navigate, Outlet } from 'react-router-dom'

type Props = {
  showPage: boolean
  navigateTo: string
}

export const ProtectedRoute = ({ navigateTo, showPage }: Props) => {
  return showPage ? <Outlet /> : <Navigate to={navigateTo} replace />
}
