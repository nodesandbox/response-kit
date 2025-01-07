import { Response } from 'express';
import { ErrorResponseType, SuccessResponseType } from '.';

export class ApiResponse {
  static success<T>(
    res: Response,
    data:  unknown | SuccessResponseType<T>,
    statusCode = 200,
  ): Response {
    const responseBody = data as SuccessResponseType<T>;
    return res.status(statusCode).json(responseBody);
  }

  static error(res: Response, error: ErrorResponseType): Response {
    const {
      error: { message, suggestions, statusCode },
    } = error;
    return res.status(statusCode).json({
      success: false,
      error: { status: statusCode, message, suggestions },
    });
  }
}