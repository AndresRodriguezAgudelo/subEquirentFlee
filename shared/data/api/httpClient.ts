import axios, { AxiosError, AxiosResponse, isAxiosError } from 'axios';
import { API_BASE_URL } from './endpoints';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
// Interceptor para las peticiones
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para las respuestas
api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Limpiar token y redirigir al login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Función helper para manejar errores
export const handleApiError = (error: any): ApiResponse => {
  if (isAxiosError(error)) {
    return {
      success: false,
      error: error.response?.data?.message || 'Error en la petición'
    };
  }
  return {
    success: false,
    error: 'Error inesperado'
  };
};


// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
