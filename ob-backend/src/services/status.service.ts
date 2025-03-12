import axios, { AxiosInstance } from 'axios';
import { AppError } from '../middleware/errorHandler';
import { TransactionHistoryResponse } from '../interfaces/datacontracts';

export class StatusService {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getTransactionHistory(user: String): Promise<TransactionHistoryResponse> {
    try {
      const response = await this.client.get(
        `/status/get-tx-history?user=${user}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new AppError(
          error.response?.status || 500,
          error.response?.data?.message || 'Axios error getting TX History'
        );
      }
      throw error;
    }
  }
}
