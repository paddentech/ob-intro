import { Router } from 'express';
import { SwapRequest } from '../interfaces/datacontracts';
import { GetOneBalanceApi } from './routebinder';

const router = Router();

router.post('/swap', async (req, res, next) => {
  try {
    const api = GetOneBalanceApi(req);
    const swapRequest: SwapRequest = req.body;
    
    const swap = await api.swapService.executeSwap(swapRequest);
    res.json(swap);
  } catch (error) {
    next(error);
  }
});

router.get('/swap/:txHash', async (req, res, next) => {
  try {
    const api = GetOneBalanceApi(req);
    const { txHash } = req.params;
    
    const status = await api.swapService.getSwapStatus(txHash);
    res.json(status);
  } catch (error) {
    next(error);
  }
});

export default router; 