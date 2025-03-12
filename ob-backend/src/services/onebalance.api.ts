import axios, { AxiosInstance } from 'axios';
import axiosRetry from 'axios-retry';

import { AppError } from '../middleware/errorHandler';
import { ChainService } from './chain.service';
import { SwapService } from './swap.service';
import { AssetService } from './asset.service';
import { QuoteService } from './quote.service';
import { OneBalanceConfig } from '../interfaces/onebalance.config';
import { AccountService } from './account.service';
import { BalanceService } from './balance.service';
import { StatusService } from './status.service';

export class OneBalanceApi {
  private client: AxiosInstance;
  public swapService: SwapService;
  public chainService: ChainService;
  public assetService: AssetService;
  public quoteService: QuoteService;
  public accountService: AccountService;
  public balanceService: BalanceService;
  public statusService: StatusService;

  constructor(baseURL?: string, apiKey?: string) {
    this.client = axios.create({
      baseURL: `${baseURL}/api`,
      headers: {
        'x-api-key': `${apiKey}`,
        'Content-Type': 'application/json',
      },
    });
    axiosRetry(this.client, { retries: 5, retryDelay: axiosRetry.exponentialDelay });
    this.swapService = new SwapService(this.client);
    this.chainService = new ChainService(this.client);
    this.assetService = new AssetService(this.client);
    this.quoteService = new QuoteService(this.client);
    this.accountService = new AccountService(this.client);
    this.balanceService = new BalanceService(this.client);
    this.statusService = new StatusService(this.client);
  }

  async initialize() {
    try {
      // Verify API connection
      await this.chainService.getSupportedChains();
    } catch (error) {
      throw new AppError(500, 'Failed to initialize OneBalance service');
    }
  }

}

export async function setupOneBalance(cfg: OneBalanceConfig): Promise<OneBalanceApi> {
  if (!cfg.oneBalanceApiKey) {
    throw new AppError(400, 'ONEBALANCE_API_KEY environment variable is required');
  }

  const apiWrapper = new OneBalanceApi(cfg.oneBalanceBaseUrl, cfg.oneBalanceApiKey);
  await apiWrapper.initialize();
  return apiWrapper;
} 