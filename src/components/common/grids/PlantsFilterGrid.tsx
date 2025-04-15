"use client";

import { useState, useEffect } from "react";
import { useApiQuery } from "@/hooks/useAPIQuery";
import { Category, Plant } from "@/interfaces/data";
import PlantCard from "../cards/PlantsCard";
import { RadioInput } from "../inputs";
import { Divider, Pagination } from "@mantine/core";
import Loading from "@/components/ui/Loader";

function paginate<T>(array: T[], size: number): T[][] {
  if (!array.length) {
    return [];
  }

  const head = array.slice(0, size);
  const tail = array.slice(size);

  return [head, ...paginate(tail, size)];
}

export default function PlantsFilterGrid() {
  const [seasonFilter, setSeasonFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const { data: plantsData = [], isPending: plantsLoading } =
    useApiQuery<Plant>({
      endpoint: "/dashboard/plants",
      queryKey: ["Plants"],
    });

  const { data: categoriesData = [], isPending: categoriesLoading } =
    useApiQuery<Category>({
      endpoint: "/dashboard/categories",
      queryKey: ["Categories"],
    });

  // if (plantsLoading || categoriesLoading) return <Loading display="Loading" />;

  const [filteredPlants, setFilteredPlants] = useState<Plant[]>(plantsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedPlants, setPaginatedPlants] = useState<Plant[][]>([]);

  const pageSize = 6;

  useEffect(() => {
    if (!plantsData) return;

    const filteredBySeason =
      seasonFilter === "all"
        ? plantsData
        : plantsData.filter((plant) =>
            plant.growingSeason?.some(
              (season) => season.toLowerCase() === seasonFilter
            )
          );

    const filteredByCategory =
      categoryFilter === "all"
        ? filteredBySeason
        : filteredBySeason.filter((plant) =>
            (plant.category._id ?? "").includes(categoryFilter)
          );

    if (filteredByCategory.length !== filteredPlants.length) {
      setFilteredPlants(filteredByCategory);
      setCurrentPage(1);
    }
  }, [seasonFilter, categoryFilter, plantsData, filteredPlants.length]);

  useEffect(() => {
    setPaginatedPlants(paginate(filteredPlants, pageSize));
  }, [filteredPlants]);

  const currentPlants = paginatedPlants[currentPage - 1] || [];

  return (
    <section className="flex flex-col md:flex-row justify-center md:justify-evenly gap-8 px-6 py-14 bg-white">
      <div className="md:w-1/4 mx-auto bg-neutral-light rounded shadow p-8">
        <div className="text-neutral-grey-dark leading-6">
          <h3 className="title">Filter By</h3>
          <div className="p-4 space-y-4">
            <h3 className="font-italiana font-semibold text-lg text-accent-pink">
              Categories
            </h3>

            <RadioInput
              options={[
                { label: "All", value: "all" },
                ...categoriesData.map((category) => ({
                  label: category.name,
                  value: category._id,
                })),
              ]}
              groupName="categories"
              onChange={(value) => setCategoryFilter(value)}
              defaultValue="all"
            />
          </div>

          <Divider color="#5cb25d" />

          <div className="p-4 space-y-4">
            <h3 className="font-italiana font-semibold text-lg text-accent-pink">
              Seasons
            </h3>

            <RadioInput
              options={[
                { label: "All", value: "all" },
                { label: "Spring", value: "spring" },
                { label: "Summer", value: "summer" },
                { label: "Fall", value: "fall" },
                { label: "Winter", value: "winter" },
              ]}
              groupName="seasons"
              onChange={(value) => setSeasonFilter(value)}
              defaultValue="all"
            />
          </div>
        </div>
      </div>

      <div className="md:w-2/3 mx-auto space-y-10">
        <div className="flex justify-center md:justify-start flex-wrap gap-6">
          {currentPlants.length > 0 ? (
            currentPlants.map((plant, index) => (
              <div className="border rounded !p-4 hover:shadow-xl group w-[17.5rem]">
                <PlantCard key={index} plant={plant} />
              </div>
            ))
          ) : (
            <div className="w-full text-center">
              <h2 className="font-semibold text-lg font-italiana tracking-wider">
                No plants found at the moment
              </h2>
            </div>
          )}
        </div>

        {paginatedPlants.length > 1 && (
          <div className="flex justify-center md:justify-start">
            <Pagination
              total={paginatedPlants.length}
              value={currentPage}
              onChange={setCurrentPage}
              color="#5cb25d"
            />
          </div>
        )}
      </div>
    </section>
  );
}
