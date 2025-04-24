import { persist, createJSONStorage } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';

import { defaultState } from './defaultState';
import { AppSlice, AppState, createAppSlice } from './appSlice';

export type Store = AppSlice;

export const initStore = (): AppState => {
  return defaultState;
};

// Función auxiliar para verificar si estamos en el navegador
const isBrowser = () => typeof window !== 'undefined';

export const createAppStore = (initState: AppState = defaultState) => {
  return createStore<Store>()(
    persist(
      (set, get, store) => ({
        ...initState,
        ...createAppSlice(set, get, store),
      }),
      {
        name: 'app-store', // unique name for the storage
        storage: createJSONStorage(() => {
          // Solo usar localStorage en el cliente
          if (isBrowser()) {
            return localStorage;
          }
          // Proporcionar un almacenamiento vacío para el servidor
          return {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          };
        }),
      }
    )
  );
};
