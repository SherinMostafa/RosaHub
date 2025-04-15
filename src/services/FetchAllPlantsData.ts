"use client";

import { useApiQuery } from "@/hooks/useAPIQuery";
import { Plant } from "@/interfaces/data";

export default function FetchAllPlantsData() {
  const { data: plantsData = [], isPending } = useApiQuery<Plant>({
    endpoint: "/dashboard/plants",
    queryKey: ["Plants"],
  });

  return { plants: plantsData, isPending: isPending };
}
