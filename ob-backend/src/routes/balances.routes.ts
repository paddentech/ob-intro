import { Router } from 'express';
import { GetOneBalanceApi } from './routebinder';

const router = Router();

router.get('/balances/aggregated-balance', async (req, res, next) => {
  try {
    const api = GetOneBalanceApi(req);
    const address = req.query.address as string;

    const status = await api.balanceService.getAggregatedBalances(address);
    res.json(status);
  } catch (error) {
    next(error);
  }
});

export default router; 