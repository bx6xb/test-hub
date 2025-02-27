import { addAlert } from '@/entities'
import { Middleware, MiddlewareAPI, isRejectedWithValue } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => next => action => {
  if (isRejectedWithValue(action)) {
    const actionPayload = action.payload as FetchBaseQueryError
    const actionStatus = actionPayload.status

    if (actionStatus === 500) {
      api.dispatch(addAlert({ message: 'Internal server error', type: 'error' }))

      return next({ ...action, error: undefined, payload: undefined })
    }

    if (actionStatus === 'FETCH_ERROR') {
      api.dispatch(addAlert({ message: 'Network error', type: 'error' }))

      return next({ ...action, error: undefined, payload: undefined })
    }

    return next(action)
  }

  return next(action)
}
