import { Express } from 'express';
import assetsRoutes from './assets.routes';
import swapRoutes from './swap.routes';
import accountRoutes from './accounts.routes';
import chainsRoutes from './chains.routes';
import quoteRoutes from './quote.routes';
import balanceRoutes from './balances.routes';
import statusRoutes from './status.routes';

export function BindRoutes(app: Express){
 app.use('/api', chainsRoutes);
 app.use('/api', swapRoutes);
 app.use('/api', assetsRoutes);
 app.use('/api', accountRoutes);
 app.use('/api', quoteRoutes);
 app.use('/api', balanceRoutes);
 app.use('/api', statusRoutes);
}
