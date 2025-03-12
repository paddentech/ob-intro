import axios, { AxiosInstance } from 'axios';
import { AppError } from '../middleware/errorHandler';
import { SwapQuoteResponse, SwapQuoteRequest } from '../interfaces/datacontracts';

export class QuoteService {
    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async getSwapQuote(request: SwapQuoteRequest): Promise<SwapQuoteResponse> {
        try {
            const response = await this.client.post<SwapQuoteResponse>('/quotes/swap-quote', request);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new AppError(error.response?.status || 500, error.response?.data?.message || 'Failed to get quote');
            }
            throw error;
        }
    }
}