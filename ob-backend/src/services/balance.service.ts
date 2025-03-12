import axios, { AxiosInstance } from 'axios';
import { AppError } from '../middleware/errorHandler';
import { GetAggregatedBalanceResponse } from '../interfaces/datacontracts';

export class BalanceService {
    private client: AxiosInstance;
    private serviceName: string = 'balances';

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async getAggregatedBalances(address: string): Promise<GetAggregatedBalanceResponse> {
        try {
            const response = await this.client.get<GetAggregatedBalanceResponse>(
                `${this.serviceName}/aggregated-balance?address=${address}`);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new AppError(
                    error.response?.status || 500,
                    error.response?.data?.message || 'Axios Error in getAggregatedBalances'
                );
            }
            throw error;
        }
    }
}
