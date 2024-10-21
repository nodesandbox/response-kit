/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from 'express';
import { ApiResponse } from '..';
import { ErrorResponse } from './response';

export const GlobalErrorHandler = (
  err: Error | ErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const isErrorResponse = err instanceof ErrorResponse;
  const error = isErrorResponse
    ? err
    : new ErrorResponse(
        'GENERAL_ERROR',
        err.message || 'An unexpected error occurred',
      );

  ApiResponse.error(res, {
    success: false,
    error,
    ...(!isErrorResponse && { stack: err.stack }),
  });
};
