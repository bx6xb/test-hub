import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { AlertType, AppState } from './types';

const initialState: AppState = {
  searchTerm: '',
  alerts: [],
  isMessageSent: false,
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    addAlert(state, action: PayloadAction<Omit<AlertType, 'id'>>) {
      state.alerts.push({ ...action.payload, id: v4() });
    },
    removeAlert(state, action: PayloadAction<string>) {
      state.alerts = state.alerts.filter(alert => alert.id !== action.payload);
    },
    setIsMessageSent(state, action: PayloadAction<boolean>) {
      state.isMessageSent = action.payload;
    },
  },
});

export const { setSearchTerm, addAlert, removeAlert, setIsMessageSent } = appSlice.actions;
