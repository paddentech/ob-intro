import axios, { AxiosInstance } from 'axios';
import { SupportedChainResponse, SwapQuoteRequest, SwapQuoteResponse } from '../../../src/interfaces/datacontracts';
import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import { QuoteService } from '../../../src/services/quote.service';

// Mock axios
jest.mock('axios');

describe('UNIT: QuoteService', () => {
  let quoteService: QuoteService;
  let mockAxiosInstance: jest.Mocked<AxiosInstance>;

  const mockSwapQuoteRequest: SwapQuoteRequest =
  {
    "account": {
      "sessionAddress": "0x1cBFbFd62a276BF6D79d504eA4CA75a7baDcf5b1",
      "adminAddress": "0xc162a3cE45ad151eeCd0a5532D6E489D034aB3B8",
      "accountAddress": "0xa8305CAD3ECEA0E4B4a02CE45E240e8687B4C2E0"
    },
    "fromTokenAmount": "800000000000000",
    "fromAggregatedAssetId": "ds:eth",
    "toAggregatedAssetId": "ds:usdc"
  }

  const mockSwapQuoteResponse: SwapQuoteResponse =
  {
    "id": "0x518529b9bafb19eb6c88a2cef66ddf144955a67cf373c8fc29b3d32423ae099e",
    "account": {
      "sessionAddress": "0x1cBFbFd62a276BF6D79d504eA4CA75a7baDcf5b1",
      "adminAddress": "0xc162a3cE45ad151eeCd0a5532D6E489D034aB3B8",
      "accountAddress": "0xa8305CAD3ECEA0E4B4a02CE45E240e8687B4C2E0"
    },
    "originChainsOperations": [
      {
        "userOp": {
          "sender": "0xe20295ec513def805d9c3083b0c8eab64692d764",
          "nonce": "1120126849530300722547379539971600052481264750391572034956634531672621056",
          "factory": "0xd703aae79538628d27099b8c4f621be4ccd142d5",
          "factoryData": "0xc5265d5d000000000000000000000000aac5d4240af87249b3f71bc8e4a2cae074a3e4190000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002443c3b752b01a24bd06230f3f54e5bf266ae7a41750ee3b789fa0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002200000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000030000000000000000000000001cbfbfd62a276bf6d79d504ea4ca75a7badcf5b1000000000000000000000000c162a3ce45ad151eecd0a5532d6e489d034ab3b8000000000000000000000000f6112bd3da673b15926f16537d2b399844a9ed9100000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "callData": "0xe9ae5c530100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000a5f565650890fba1824ee0f21ebbbf660a1799340000000000000000000000000000000000000000000000000002c1646c3e56cc00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000020518529b9bafb19eb6c88a2cef66ddf144955a67cf373c8fc29b3d32423ae099e0000000000000000000000003c6d5bdc733448130f30067ccc64ec8e47ff3468000000000000000000000000000000000000000000000000000016341793a93400000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000",
          "callGasLimit": "132000",
          "verificationGasLimit": "1000000",
          "preVerificationGas": "1846154",
          "maxFeePerGas": "16587538",
          "maxPriorityFeePerGas": "1375000",
          "paymaster": "0x0000000000000039cd5e8ae05257ce51c473ddd1",
          "paymasterVerificationGasLimit": "37165",
          "paymasterPostOpGasLimit": "1",
          "paymasterData": "0x00000067cdd02d000000000000791c587952a5a4f8295a7a5d37f19a4bbce86fa00661ef0ca4394bcf69c57e153b902bc880f3b7e07582462ac081c7a3479e17511f4af0e583da729c925c53421b",
          "signature": "0x"
        },
        "typedDataToSign": {
          "domain": {
            "name": "RoleBasedECDSAValidator",
            "version": "1.4.3",
            "chainId": 8453,
            "verifyingContract": "0xA24bD06230f3F54e5bf266AE7A41750eE3b789FA"
          },
          "types": {
            "Approve": [
              {
                "name": "callDataAndNonceHash",
                "type": "bytes32"
              }
            ]
          },
          "primaryType": "Approve",
          "message": {
            "callDataAndNonceHash": "0x20c8e745f6cf6e7e9643930d86a8dd47add428542516de1eca3bfe743f315f27"
          }
        },
        "assetType": "eip155:8453/slip44:60",
        "amount": "775587010336460"
      }
    ],
    "originToken": {
      "aggregatedAssetId": "ds:eth",
      "assetType": [
        "eip155:8453/slip44:60"
      ],
      "amount": "800000000000000",
      "fiatValue": [
        {
          "assetType": "eip155:8453/slip44:60",
          "amount": "775587010336460",
          "fiatValue": "1.59"
        }
      ]
    },
    "destinationToken": {
      "aggregatedAssetId": "ds:usdc",
      "assetType": "eip155:42161/erc20:0xaf88d065e77c8cc2239327c5edb3a432268e5831",
      "amount": "1562948",
      "minimumAmount": "1531689",
      "fiatValue": "1.56",
      "minimumFiatValue": "1.53"
    },
    "expirationTimestamp": "1741540850",
    "tamperProofSignature": "0x6f1259c3560c86d50b7ddad1971b530b69353f2d8904ca97212cd54bf9dfbc3b3640eec95bebb2d942d1d22eeccb3f2197e5c7bc2ab14e7eb119932c886ae2241c",
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
    quoteService = new QuoteService(mockAxiosInstance);
  });

  describe('getSwapQuote', () => {
    it('should return a swap quote successfully', async () => {
      // Arrange
      mockAxiosInstance.post.mockResolvedValueOnce({
        data: mockSwapQuoteResponse
      });

      // Act
      const result = await quoteService.getSwapQuote(mockSwapQuoteRequest);

      // Assert
      expect(result).toEqual(mockSwapQuoteResponse);
      expect(mockAxiosInstance.post).toHaveBeenCalledWith('/quotes/swap-quote', mockSwapQuoteRequest);
      expect(mockAxiosInstance.post).toHaveBeenCalledTimes(1);
    });


    it('should handle non-Axios errors', async () => {
      // Arrange
      const mockError = new Error('Unknown error');
      mockAxiosInstance.post.mockRejectedValueOnce(mockError);

      // Act & Assert
      await expect(quoteService.getSwapQuote(mockSwapQuoteRequest))
        .rejects
        .toThrow('Unknown error');
    });
  });
});