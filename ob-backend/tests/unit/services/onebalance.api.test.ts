import axios, { AxiosInstance } from 'axios';
import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import { OneBalanceApi } from '../../../src/services/onebalance.api';
import { testOneBalanceConfig } from '../../test-config';

describe('UNIT: API Call', () => {

  let service: OneBalanceApi;
  let client: AxiosInstance;

  beforeEach(() => {
    client = axios.create({
      baseURL: testOneBalanceConfig.oneBalanceBaseUrl,
      headers: {
        'x-api-key': `${testOneBalanceConfig.oneBalanceApiKey}`,
        'Content-Type': 'application/json',
      },
    });
  });
  it('is a dummy', async () => {
    //console.log('testConfig:', testConfig);
    expect(true).toBeTruthy();
    //console.log('api:', api);
    expect(client).toBeDefined();
  });

});
