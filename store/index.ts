import { persist, createJSONStorage } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';

import { defaultState } from './defaultState';
import { AppSlice, AppState, createAppSlice } from './appSlice';

export type Store = AppSlice;

export const initStore = (): AppState => {
  return defaultState;
};

export const createAppStore = (initState: AppState = defaultState) => {
  return createStore<Store>()(
    persist(
      (set, get, store) => ({
        ...initState,
        ...createAppSlice(set, get, store),
      }),
      {
        name: 'app-store', // unique name for the storage
        storage: createJSONStorage(() => localStorage), // specify the storage, e.g., localStorage
      }
    )
  );
};
