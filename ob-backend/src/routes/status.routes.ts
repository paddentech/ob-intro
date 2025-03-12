import { Router } from 'express';
import { GetOneBalanceApi } from './routebinder';

const router = Router();

router.get('/status/get-tx-history', async (req, res, next) => {
  try {
    const api = GetOneBalanceApi(req);
    const user = req.query.user as string;
    
    const swap = await api.statusService.getTransactionHistory(user);
    res.json(swap);
  } catch (error) {
    next(error);
  }
});

export default router; 