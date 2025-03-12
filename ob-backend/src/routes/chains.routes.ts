import { Router } from 'express';
import { GetOneBalanceApi } from './routebinder';

const router = Router();

router.get('/chains/supported-list', async (req, res, next) => {
  try {
    const api = GetOneBalanceApi(req);   
    const status = await api.chainService.getSupportedChains();
    res.json(status);
  } catch (error) {
    next(error);
  }
});

export default router; 