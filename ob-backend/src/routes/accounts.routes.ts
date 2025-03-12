import { Router } from 'express';
import { PredictedAddressRequest } from '../interfaces/datacontracts';
import { GetOneBalanceApi } from './routebinder';

const router = Router();

router.post('/account/predict-address', async (req, res, next) => {
  try {
    const api = GetOneBalanceApi(req);
    const request: PredictedAddressRequest = req.body;
    const status = await api.accountService.predictAddress(request);
    res.json(status);
  } catch (error) {
    next(error);
  }
});

export default router; 