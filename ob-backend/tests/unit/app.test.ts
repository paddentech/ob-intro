import request from 'supertest';
import express from 'express';
import { OneBalanceApi } from '../../src/services/onebalance.api';
import { errorHandler } from '../../src/middleware/errorHandler';
import { describe, it, expect, beforeEach, jest } from '@jest/globals';
describe('UNIT: Express App', () => {
  let app: express.Application;
  let mockOneBalanceApi: jest.Mocked<OneBalanceApi>;

  beforeEach(() => {
    // Create a fresh Express app for each test
    app = express();
    
    // Mock OneBalanceService
    mockOneBalanceApi = {
      initialize: jest.fn(),
      getQuote: jest.fn(),
      executeSwap: jest.fn(),
      getSwapStatus: jest.fn(),
      getSupportedChains: jest.fn(),
    } as unknown as jest.Mocked<OneBalanceApi>;

    // Add middleware
    app.use(express.json());

    // Add health check endpoint
    app.get('/health', (req, res) => {
      res.json({ status: 'ok' });
    });

    // Add error handler
    app.use(errorHandler);

    // Store mock service in app.locals
    app.locals.oneBalanceApi = mockOneBalanceApi;
  });

  describe('GET /health', () => {
    it('should return 200 and status ok', async () => {
      const response = await request(app)
        .get('/health')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(response.body).toEqual({ status: 'ok' });
    });
  });
}); 