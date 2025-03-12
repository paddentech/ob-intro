import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import { OneBalanceApi, setupOneBalance } from '../../../src/services/onebalance.api';
import { OneBalanceConfig } from '../../../src/interfaces/onebalance.config';
import { testConfig, testOneBalanceConfig } from '../../test-config';
import { PredictedAddressRequest, SwapQuoteRequest } from '../../../src/interfaces/datacontracts';
import exp from 'constants';
import { AppError } from '../../../src/middleware/errorHandler';

describe('E2E: OneBalance', () => {
  let api: OneBalanceApi;

  beforeEach(async () => {
    // setupOneBalance(testConfig).then((service: OneBalanceApi) => {
    api = await setupOneBalance(testOneBalanceConfig);
  });

  describe('List Chains', () => {
    it('is a dummy', async () => {
      //console.log('testConfig:', testConfig);
      expect(true).toBeTruthy();
      //console.log('api:', api);
      expect(api).toBeDefined();
    });

    let result;
    it('should return a list of chains successfully', async () => {
      result = await api.chainService.getSupportedChains();
      expect(result).toBeDefined();
    });
  });

  describe('List Assets', () => {
    let result;
    it('should return a list of assets', async () => {
      result = await api.assetService.getAllAssets();
      expect(result).toBeDefined();
    });
  });

  describe('Predict Address', () => {
    it('should return an address', async () => {
      let result;
      let addressRequest: PredictedAddressRequest = {
        sessionAddress: testConfig.sessionAddress,
        adminAddress: testConfig.adminAddress,
      };
      result = await api.accountService.predictAddress(addressRequest);
      expect(result).toBeDefined();
    });

    describe('Swap fails', () => {
      it('should throw a validation error', async () => {
        let result;
        let addressRequest: PredictedAddressRequest = {
          sessionAddress: testConfig.sessionAddress,
          adminAddress: testConfig.adminAddress,
        };
        result = await api.accountService.predictAddress(addressRequest);
        expect(result).toBeDefined();
  
        let swapQuoteRequest: SwapQuoteRequest = {
          account: {
            sessionAddress: "0xa691076B413848681c88F07038E50722d326B56F",
            adminAddress: "0xa691076B413848681c88F07038E50722d326B56F",
            accountAddress: "0x254d2001dE21fe8e633000EB15698291E162c3E1"
          },
          fromTokenAmount: "000000000000000",
          fromAggregatedAssetId: "ds:eth",
          toAggregatedAssetId: "ds:usdc"
        }
        try {
          let swapQuoteResult = await api.quoteService.getSwapQuote(swapQuoteRequest);
          expect(true).toBe(false); // This line shouldn't be reached
        } catch (error) {
          expect(error).toBeInstanceOf(AppError);
          let appError = error as AppError;       
          expect(appError.name).toBe('AppError');
          expect(appError.message).toBe('Validation error: fromTokenAmount must be a valid positive integer at \"fromTokenAmount\"');
          expect(appError.statusCode).toBe(400);
        }
  
      });
    });
  });
});