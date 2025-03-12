// Load environment variables
import dotenv from 'dotenv';
import { OneBalanceConfig } from './interfaces/onebalance.config';
dotenv.config({ path: '.env.local' });

export const currentConfig: OneBalanceConfig = {
    port: process.env.PORT || '3000',
    logLevel: process.env.APP_LOGLEVEL || 'DEBUG',
    oneBalanceApiKey: process.env.ONEBALANCE_API_KEY,
    oneBalanceBaseUrl: process.env.ONEBALANCE_API_BASE_URL,  
 }; 