import { Router } from 'express';
import { GetOneBalanceApi } from './routebinder';

const router = Router();

router.get('/assets/list', async (req, res, next) => {
  try {
    const api = GetOneBalanceApi(req);
    
    const status = await api.assetService.getAllAssets();
    res.json(status);
  } catch (error) {
    next(error);
  }
});

export default router; 