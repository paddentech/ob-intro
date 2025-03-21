import { Request, Response, NextFunction } from 'express';
import { blog, clog, flog } from '../log';

export class AppError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
    this.name = 'AppError';
  }
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  clog.error('Unhandled error:', err.message);
  flog.error('Unhandled error:', err);
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}; 