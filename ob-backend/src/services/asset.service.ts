import axios, { AxiosInstance } from 'axios';
import { AppError } from '../middleware/errorHandler';
import { AssetListResponse } from '../interfaces/datacontracts';

export class AssetService {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async getAllAssets(): Promise<AssetListResponse> {
        try {
            const response = await this.client.get<AssetListResponse>('/assets/list');
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new AppError(
                    error.response?.status || 500,
                    error.response?.data?.message || 'Failed to get assets'
                );
            }
            throw error;
        }
    }
}
