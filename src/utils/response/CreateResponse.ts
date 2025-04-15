import { HTTPStatus } from "@/constants/httpStatus";
import { NextResponse } from "next/server";

interface CreateResponse<T = unknown> {
  message: string;
  data?: T;
  status?: HTTPStatus;
  errors?: string[];
  headers?: Record<string, string>;
}

export default function CreateResponse<T = unknown>({
  message,
  data,
  status = HTTPStatus.OK,
  errors = [],
  headers = {},
}: CreateResponse<T>) {
  const payload = JSON.stringify({ message, data, status, errors });

  return new NextResponse(payload, {
    status,
    headers: { "Content-Type": "application/json", ...headers },
  });
}
