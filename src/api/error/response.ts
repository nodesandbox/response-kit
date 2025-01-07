import { ErrorCodes } from "./static";
import { ErrorCode } from "./types";

export class ErrorResponse extends Error {
  public statusCode: number;
  public code: string;
  public suggestions?: string[];
  public originalError?: Error;

  constructor(options: {
    code: string;
    message?: string;
    statusCode?: number;
    suggestions?: string[];
    originalError?: Error;
  }) {
    const { code, message, statusCode, suggestions, originalError } = options;
    const errorCode: ErrorCode = ErrorCodes[code] || ErrorCodes.GENERAL_ERROR;
    super(message || errorCode.message);
    this.code = errorCode.code;
    this.statusCode = statusCode ?? errorCode.statusCode;
    this.suggestions = suggestions;
    this.originalError = originalError;

    if (originalError) {
      this.stack = originalError.stack;
    }
  }

  public toJSON() {
    return {
      code: this.code,
      message: this.message,
      statusCode: this.statusCode,
      ...(this.suggestions && { suggestions: this.suggestions }),
      originalError: this.getOriginalError(),
    };
  }

  private getOriginalError() {
    // if (process.env.NODE_ENV === 'production') {
    //   return undefined;
    // }
    return {
      message: this.originalError?.message,
      stack: this.originalError?.stack,
    };
  }
}
