import { AppError } from '../middleware/errorHandler';
import { OneBalanceApi } from '../services/onebalance.api';

export function GetOneBalanceApi(req: any) {
    const api = req.app.locals.oneBalanceApi as OneBalanceApi;
    if (!api) {
        throw new AppError(500, 'OneBalance service not initialized');
    }
    return api;
};

