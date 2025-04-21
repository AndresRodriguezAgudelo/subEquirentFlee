import { ENDPOINTS } from '../api/endpoints';

export interface Asset {
  id: string;
  name: string;
  type: string;
  status: string;
}

export const assetsService = {
  getAll: async () => {},
  getById: async (id: string) => {},
  create: async (data: Partial<Asset>) => {},
  update: async (id: string, data: Partial<Asset>) => {},
  delete: async (id: string) => {},
  getAssetAlerts: async (id: string) => {},
};
