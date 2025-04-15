"use client";

import { QueryKey, useQuery } from "@tanstack/react-query";
import APIRequest from "@/utils/api/APIRequest";

export function useApiQuery<T>({
  endpoint,
  token,
  queryKey,
}: {
  endpoint: string;
  token?: string;
  queryKey: QueryKey;
}) {
  return useQuery<T[]>({
    queryKey: queryKey,
    queryFn: async (): Promise<T[]> => {
      const { response } = await APIRequest({
        method: "GET",
        endpoint: endpoint,
        token: token,
      });

      return response?.data ? (response.data as T[]) : [];
    },
  });
}
