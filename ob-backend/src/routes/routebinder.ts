import { flog } from '../log';
import { AppError } from '../middleware/errorHandler';
import { OneBalanceApi } from '../services/onebalance.api';

export function GetOneBalanceApi(req: any) {
    const api = req.app.locals.oneBalanceApi as OneBalanceApi;
    flog.debug(`GetOneBalanceApi, req:${JSON.stringify(req.body)}`);
    if (!api) {
        throw new AppError(500, 'OneBalance service not initialized');
    }
    return api;
};

