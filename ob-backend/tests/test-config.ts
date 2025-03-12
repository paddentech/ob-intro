// Load environment variables
import dotenv from 'dotenv';
import { OneBalanceConfig } from '../src/interfaces/onebalance.config';
dotenv.config({ path: '.env.test' });

export const testOneBalanceConfig: OneBalanceConfig = {
    port: process.env.PORT || '3000',
    logLevel: process.env.APP_LOGLEVEL || 'DEBUG',
    oneBalanceApiKey: process.env.ONEBALANCE_API_KEY,
    oneBalanceBaseUrl: process.env.ONEBALANCE_API_BASE_URL,
};

export const testConfig = {
    sessionAddress: process.env.SESSION_ADDRESS || '0xa691076B413848681c88F07038E50722d326B56F',
    adminAddress: process.env.ADMIN_ADDRESS || "0xa691076B413848681c88F07038E50722d326B56F",
};
