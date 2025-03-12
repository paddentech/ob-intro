import { Router } from 'express';
import { SwapQuoteRequest } from '../interfaces/datacontracts';
import { GetOneBalanceApi } from './routebinder';

const router = Router();

router.post('/quotes/swap-quote', async (req, res, next) => {
  try {
    const api = GetOneBalanceApi(req);
    const quoteRequest: SwapQuoteRequest = req.body;
    const status = await api.quoteService.getSwapQuote(quoteRequest);
    res.json(status);
  } catch (error) {
    next(error);
  }
});


export default router; 