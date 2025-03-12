import { AxiosInstance } from 'axios';
import { SupportedChainResponse } from '../interfaces/datacontracts';
export class ChainService {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getSupportedChains(): Promise<SupportedChainResponse[]> {
    try {
      const response = await this.client.get<SupportedChainResponse[]>('/chains/supported-list');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
