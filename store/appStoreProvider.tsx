'use client';

import { createContext, type ReactNode, useContext, useRef } from 'react';
import { type StoreApi, useStore as useZustandStore } from 'zustand';

import { createAppStore, initStore, Store } from '@/store';

export const AppStoreContext = createContext<StoreApi<Store> | null>(null);

export interface AppStoreProviderProps {
  children: ReactNode;
}

export const AppStoreProvider = ({ children }: AppStoreProviderProps) => {
  const storeRef = useRef<StoreApi<Store>>();
  if (!storeRef.current) storeRef.current = createAppStore(initStore());

  return (
    <AppStoreContext.Provider value={storeRef.current}>
      {children}
    </AppStoreContext.Provider>
  );
};

// eslint-disable-next-line prettier/prettier
export const useStore = <T,>(selector: (store: Store) => T): T => {
  const appStoreContext = useContext(AppStoreContext);

  if (!appStoreContext) {
    throw new Error('useStore must be used within AppStoreProvider');
  }

  return useZustandStore(appStoreContext, selector);
};
