import axios, { AxiosInstance } from 'axios';
import { AppError } from '../middleware/errorHandler';
import { SwapRequest, SwapResponse } from '../interfaces/datacontracts';

export class SwapService {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async executeSwap(request: SwapRequest): Promise<SwapResponse> {
    try {
      const response = await this.client.post<SwapResponse>('/swap', request);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new AppError(
          error.response?.status || 500,
          error.response?.data?.message || 'Failed to execute swap'
        );
      }
      throw error;
    }
  }

  async getSwapStatus(txHash: string): Promise<SwapResponse> {
    try {
      const response = await this.client.get<SwapResponse>(`/swap/${txHash}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new AppError(
          error.response?.status || 500,
          error.response?.data?.message || 'Failed to get swap status'
        );
      }
      throw error;
    }
  }
}
