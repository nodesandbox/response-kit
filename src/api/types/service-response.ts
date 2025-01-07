import { ErrorResponse } from "..";

export type SuccessResponseType<T> = {
  success: true;
  meta?: MetaType;
  data?: {
      docs?: T | T[];
      [key: string]: any;
  };
  error?: never;
};


export type ErrorResponseType = {
  success: boolean;
  error: ErrorResponse;
  data?: never;
  meta?: never;
};

type MetaType = {
  total?: number;
  results?: number;
  page?: number;
  limit?: number;
  totalPages?: number;
  remainingItems?: number;
  pageItemsCount?: number;
  [key: string]: any;
};
