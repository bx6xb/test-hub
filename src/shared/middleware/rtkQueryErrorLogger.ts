import { addAlert } from '@/entities'
import { Middleware, MiddlewareAPI, isRejectedWithValue } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { i18n } from '../config'

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => next => action => {
  if (isRejectedWithValue(action)) {
    const actionPayload = action.payload as FetchBaseQueryError
    const actionStatus = actionPayload.status

    const t = i18n.getFixedT(i18n.language)

    if (actionStatus === 500) {
      api.dispatch(addAlert({ message: t('rtkQueryErrorLogger_server_error'), type: 'error' }))
    }

    if (actionStatus === 'FETCH_ERROR') {
      api.dispatch(addAlert({ message: t('rtkQueryErrorLogger_network_error'), type: 'error' }))
    }

    return next(action)
  }

  return next(action)
}
