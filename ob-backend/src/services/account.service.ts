import axios, { AxiosInstance } from 'axios';
import { AppError } from '../middleware/errorHandler';
import { PredictedAddressRequest, PredictedAddressResponse } from '../interfaces/datacontracts';

export class AccountService {
    private client: AxiosInstance;
    private serviceName: string = 'account';

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async predictAddress(request: PredictedAddressRequest): Promise<PredictedAddressResponse> {
        try {
            const response = await this.client.post<PredictedAddressResponse>(
                `${this.serviceName}/predict-address`, 
                request);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new AppError(
                    error.response?.status || 500,
                    error.response?.data?.message || 'Axios Error calling predict address'
                );
            }
            throw error;
        }
    }
}
