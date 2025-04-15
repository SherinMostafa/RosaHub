import { APIResponse } from "@/interfaces/api";
import ApiClient from "./ApiClient";

export default async function APIRequest<T, D>({
  method,
  endpoint,
  payload,
  params,
  token,
}: {
  method: "GET" | "POST" | "PUT" | "DELETE";
  endpoint: string;
  payload?: T;
  params?: Record<string, unknown>;
  token?: string;
}): Promise<APIResponse<D>> {
  try {
    const headers: Record<string, string> = {};

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const { data, status } = await ApiClient().request({
      method: method,
      url: endpoint,
      data: payload,
      params: params,
      headers: headers,
    });

    return { response: data, status: status };
  } catch (error: any) {
    return {
      response: error.response?.data,
      message: error.message,
      status: error.status,
    };
  }
}
