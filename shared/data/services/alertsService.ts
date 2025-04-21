import { api, ApiResponse, handleApiError } from '../api/httpClient';
import { ENDPOINTS } from '../api/endpoints';

export interface Alert {
  id: string;
  title: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export const alertsService = {
  getAll: async (): Promise<ApiResponse<Alert[]>> => {
    try {
      const response = await api.get<Alert[]>(ENDPOINTS.ALERTS.BASE);
      return { success: true, data: response.data };
    } catch (error) {
      return handleApiError(error);
    }
  },

  getById: async (id: string): Promise<ApiResponse<Alert>> => {
    try {
      const response = await api.get<Alert>(ENDPOINTS.ALERTS.BY_ID(id));
      return { success: true, data: response.data };
    } catch (error) {
      return handleApiError(error);
    }
  },

  create: async (data: Partial<Alert>): Promise<ApiResponse<Alert>> => {
    try {
      const response = await api.post<Alert>(ENDPOINTS.ALERTS.BASE, data);
      return { success: true, data: response.data };
    } catch (error) {
      return handleApiError(error);
    }
  },

  update: async (id: string, data: Partial<Alert>): Promise<ApiResponse<Alert>> => {
    try {
      const response = await api.put<Alert>(ENDPOINTS.ALERTS.BY_ID(id), data);
      return { success: true, data: response.data };
    } catch (error) {
      return handleApiError(error);
    }
  },

  delete: async (id: string): Promise<ApiResponse<void>> => {
    try {
      await api.delete(ENDPOINTS.ALERTS.BY_ID(id));
      return { success: true };
    } catch (error) {
      return handleApiError(error);
    }
  },

  updateStatus: async (id: string, status: string): Promise<ApiResponse<Alert>> => {
    try {
      const response = await api.patch<Alert>(ENDPOINTS.ALERTS.STATUS(id), { status });
      return { success: true, data: response.data };
    } catch (error) {
      return handleApiError(error);
    }
  },
};
