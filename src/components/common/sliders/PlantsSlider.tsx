"use client";

import Slider from "../../ui/Slider";
import { useApiQuery } from "@/hooks/useAPIQuery";
import { Plant } from "@/interfaces/data";
import PlantCard from "../cards/PlantsCard";

export default function PlantsSlider({ filterBy }: { filterBy?: string[] }) {
  const { data: plantsData = [] } = useApiQuery<Plant>({
    endpoint: "/dashboard/plants",
    queryKey: ["Plants"],
  });

  const filteredPlants =
    plantsData && plantsData.length > 0
      ? plantsData.filter((plant) =>
          plant.growingSeason?.some((season) =>
            filterBy && filterBy.length > 0
              ? filterBy.some(
                  (filter) =>
                    season.toLowerCase().trim() === filter.toLowerCase().trim()
                )
              : plantsData
          )
        )
      : [];

  return (
    <div>
      <Slider
        loop
        slideSize={{ base: "280px" }}
        slideGap={{ base: 0, sm: "md", md: "lg" }}
        align={"center"}
        withIndicators
        slideStyle="border rounded mb-16 !p-4 m-4 h-full hover:shadow-xl group"
        activeSlideStyle="border-primary-light shadow-xl scale-105"
        slides={
          filteredPlants.length !== 0
            ? filteredPlants.map((plant, index) => (
                <PlantCard key={index} plant={plant} />
              ))
            : [
                <div className="w-full" key={0}>
                  <div className="space-y-2">
                    <h2 className="font-semibold text-lg font-italiana tracking-wider">
                      No plants found at the moment
                    </h2>
                  </div>
                </div>,
              ]
        }
      />
    </div>
  );
}
