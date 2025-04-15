import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function ApiClient(config?: AxiosRequestConfig): AxiosInstance {
  return axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...config?.headers,
    },
    withCredentials: false,
    ...config,
  });
}
