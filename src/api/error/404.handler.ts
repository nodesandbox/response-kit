import { Request, Response, NextFunction } from 'express';
import { ErrorResponse } from './response';

export const NotFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  next(new ErrorResponse({ code: 'NOT_FOUND_ERROR', message: 'Resource Not Found' }));
};
