import { RootState } from '@/shared';

export const selectIsMessageSent = (state: RootState) => state.appSlice.isMessageSent;
export const selectAlerts = (state: RootState) => state.appSlice.alerts;
export const selectSearchTerm = (state: RootState) => state.appSlice.searchTerm;
