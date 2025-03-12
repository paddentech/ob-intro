import { currentConfig } from "./config";
import winston, { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';

const { combine, timestamp, json } = winston.format;

const fileRotateTransport = new winston.transports.DailyRotateFile({
  filename: 'combined-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  maxFiles: '14d',
});


// ConsoleLOG: Log to console only
export const clog = createLogger({
  level: currentConfig.logLevel || 'info',
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.Console()
  ]
});

// FileLOG: Log to file only
export const flog = createLogger({
  level: currentConfig.logLevel || 'info',
  format: format.combine(format.timestamp(), format.json()),
  transports: [fileRotateTransport]
});

// BothLOG : LOG TO BOTH CONSOLE AND FILE
export const blog = createLogger({
  level: currentConfig.logLevel || 'info',
  format: format.combine(format.timestamp(), format.json()),
  transports: [fileRotateTransport, new transports.Console(),]
});