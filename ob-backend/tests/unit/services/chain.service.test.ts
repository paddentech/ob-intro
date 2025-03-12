import { ChainService } from '../../../src/services/chain.service';
import axios, { AxiosInstance } from 'axios';
import { SupportedChainResponse } from '../../../src/interfaces/datacontracts';
import { describe, it, expect, beforeEach, jest } from '@jest/globals';

// Mock axios
jest.mock('axios');

describe('UNIT: ChainService', () => {
  let chainService: ChainService;
  let mockAxiosInstance: jest.Mocked<AxiosInstance>;

  const mockSupportedChains: SupportedChainResponse[] = [
    {
      chainId: 1,
      name: 'Ethereum',
      nativeCurrency: {
        symbol: 'ETH',
        decimals: 18
      }
    },
    {
      chainId: 137,
      name: 'Polygon',
      nativeCurrency: {
        symbol: 'MATIC',
        decimals: 18
      }
    }
  ];

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
    chainService = new ChainService(mockAxiosInstance);
  });

  describe('getSupportedChains', () => {
    it('should return supported chains successfully', async () => {
      // Arrange
      mockAxiosInstance.get.mockResolvedValueOnce({ 
        data: mockSupportedChains 
      });

      // Act
      const result = await chainService.getSupportedChains();

      // Assert
      expect(result).toEqual(mockSupportedChains);
      expect(mockAxiosInstance.get).toHaveBeenCalledWith('/chains/supported-list');
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(1);
    });


    it('should handle non-Axios errors', async () => {
      // Arrange
      const mockError = new Error('Unknown error');
      mockAxiosInstance.get.mockRejectedValueOnce(mockError);

      // Act & Assert
      await expect(chainService.getSupportedChains())
        .rejects
        .toThrow('Unknown error');
    });
  });
});