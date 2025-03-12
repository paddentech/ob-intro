import express from 'express';
import { setupOneBalance, OneBalanceApi } from './services/onebalance.api';
import morganBody from "morgan-body";
import bodyParser from "body-parser";
import cors from "cors";
import { errorHandler } from './middleware/errorHandler';
import { BindRoutes } from './routes/api.routes';
import { currentConfig } from './config';
import { clog, flog } from './log';

// Configure middleware
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

if (currentConfig.logLevel === 'debug') {
  morganBody(app, { logAllReqHeader: true, maxBodyLength: 5000 });
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

BindRoutes(app);
app.use(errorHandler);

// Initialize OneBalance service
setupOneBalance(currentConfig)
  .then((service: OneBalanceApi) => {
    // Store service instance in app.locals for route handlers to access
    app.locals.oneBalanceApi = service;

    const server = app.listen(currentConfig.port, () => {
      clog.debug(`Server running on port ${currentConfig.port}`);
      flog.debug(`Server running on port ${currentConfig.port}`);
    });

    const shutdown = () => {
      server.close(() => {
        clog.debug('Server shutting down');
        flog.debug('Server shutting down');
        process.exit(0);
      });
    };

    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);
  })
  .catch((error) => {
    clog.error('Failed to initialize OneBalance:', error);
    flog.error('Failed to initialize OneBalance:', error);
    process.exit(1);
  }); 