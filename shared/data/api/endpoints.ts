export const API_BASE_URL = 'https://back-app-equisoft-production.up.railway.app/api/sign/v1';

export const ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login-email`
  },
  ALERTS: {
    BASE: '/alerts',
    BY_ID: (id: string) => `/alerts/${id}`,
    DOCUMENTS: (alertId: string) => `/alerts/${alertId}/documents`,
    STATUS: (alertId: string) => `/alerts/${alertId}/status`,
  },
  ASSETS: {
    BASE: '/assets',
    BY_ID: (id: string) => `/assets/${id}`,
    ALERTS: (assetId: string) => `/assets/${assetId}/alerts`,
  }
} as const;
