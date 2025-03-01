import { addAlert } from '@/entities';
import { Middleware, MiddlewareAPI, isRejectedWithValue } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { i18n } from '../config';
import { ServerError } from '../types';

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => next => action => {
  if (isRejectedWithValue(action)) {
    const actionPayload = action.payload as FetchBaseQueryError;
    const actionStatus = actionPayload.status;

    const t = i18n.getFixedT(i18n.language);

    if (actionStatus === 'FETCH_ERROR') {
      api.dispatch(addAlert({ message: t('rtkQueryErrorLogger_network_error'), type: 'error' }));
    }

    const {
      error: { code, message },
    } = actionPayload.data as ServerError;
    const isModelError = code === 'DEFAULT_MODEL_NOT_FOUND';

    const errorMessage = isModelError
      ? t('rtkQueryErrorLogger_model_error')
      : message || t('rtkQueryErrorLogger_server_error');

    api.dispatch(addAlert({ message: errorMessage, type: 'error' }));

    return next(action);
  }

  return next(action);
};
