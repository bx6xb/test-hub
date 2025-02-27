export type AlertType = {
  id: string
  type: 'success' | 'error'
  message: string
}
export type AppState = {
  searchTerm: string
  alerts: AlertType[]
}
