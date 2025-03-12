import { currentConfig } from "./config";
import winston, { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';

const { combine, timestamp, json } = winston.format;

const fileRotateTransport = new winston.transports.DailyRotateFile({
  filename: 'combined-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  maxFiles: '14d',
});

export const clog = createLogger({
  level: currentConfig.logLevel || 'info',
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.Console()
  ]
});
export const flog = createLogger({
  level: currentConfig.logLevel || 'info',
  format: format.combine(format.timestamp(), format.json()),
  transports: [fileRotateTransport]
});
