import axios, { AxiosInstance } from 'axios';
import { PredictedAddressRequest, PredictedAddressResponse, SupportedChainResponse, SwapQuoteRequest, SwapQuoteResponse } from '../../../src/interfaces/datacontracts';
import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import { AccountService } from '../../../src/services/account.service';

// Mock axios
jest.mock('axios');
describe('UNIT: AccountService dummy', () => {
  describe('Predict Address Mock', () => {

  let service: AccountService;
  let mockAxiosInstance: jest.Mocked<AxiosInstance>;

  const mockRequest: PredictedAddressRequest =
  {
    "sessionAddress": "0xa691076B413848681c88F07038E50722d326B56F",
    "adminAddress": "0xa691076B413848681c88F07038E50722d326B56F"
  }

  const mockResponse: PredictedAddressResponse =
  {
    "predictedAddress": "0x254d2001dE21fe8e633000EB15698291E162c3E1"
  };

  beforeEach(() => {
    // Create mock Axios instance
    mockAxiosInstance = {
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
      patch: jest.fn(),
      request: jest.fn()
    } as unknown as jest.Mocked<AxiosInstance>;

    // Initialize ChainService with mock client
    service = new AccountService(mockAxiosInstance);
  });

    // Create mock Axios instance
    mockAxiosInstance = {
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
      patch: jest.fn(),
      request: jest.fn()
    } as unknown as jest.Mocked<AxiosInstance>;

    // Initialize ChainService with mock client
    service = new AccountService(mockAxiosInstance);
    it('should return a swap quote successfully', async () => {
      // Arrange
      mockAxiosInstance.post.mockResolvedValueOnce({
        data: mockResponse
      });

      // Act
      const result = await service.predictAddress(mockRequest);

      // Assert
      expect(result).toEqual(mockResponse);
      expect(mockAxiosInstance.post).toHaveBeenCalledWith('account/predict-address', mockRequest);
      expect(mockAxiosInstance.post).toHaveBeenCalledTimes(1);

    });

  });

});