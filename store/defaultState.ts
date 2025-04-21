import { AppState, initialAppState } from './appSlice';

export type StoreState = AppState;

export const defaultState: AppState = {
  ...initialAppState,
};
