import { HTTPStatus } from "@/constants/httpStatus";

export interface APIResponse<T = unknown> {
  status: number;
  response: {
    errors?: string[];
    data?: T;
    token?: string;
    message: string;
    status: HTTPStatus;
  };
  message?: string;
}
