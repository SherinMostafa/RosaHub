"use client";

import Slider from "../../ui/Slider";
import { Image } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useApiQuery } from "@/hooks/useAPIQuery";
import { Category } from "@/interfaces/data";

export default function CategoriesCard() {
  const { data: categoriesData = [] } = useApiQuery<Category>({
    endpoint: "/dashboard/categories",
    queryKey: ["Categories"],
  });

  return (
    <div>
      <Slider
        slideSize="360px"
        slideGap={{ base: 0, sm: "md", md: "lg" }}
        align={"start"}
        withIndicators={false}
        withControls={false}
        slideStyle="!p-0 h-full mx-4 group"
        slides={
          categoriesData.length !== 0
            ? categoriesData.map((category, index) => (
                <div key={index} className="overflow-hidden rounded">
                  <div className="relative">
                    <Image
                      src={"/images/pexels-anna-nekrashevich-7214588.jpg"}
                      alt={`${category.name}`}
                      mah={320}
                      className="transition-all duration-300 ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-15"></div>

                    <h2 className="absolute bottom-2 left-4 font-semibold text-lg font-italiana tracking-wider inline-flex items-center gap-x-2 group-hover:gap-x-6 transition-all duration-300">
                      {category.name}
                      <span>
                        <IconArrowRight />
                      </span>
                    </h2>
                  </div>
                </div>
              ))
            : [
                <div className="w-full" key={0}>
                  <div className="space-y-2">
                    <h2 className="font-semibold text-lg font-italiana tracking-wider">
                      No categories found at the moment
                    </h2>
                  </div>
                </div>,
              ]
        }
      />
    </div>
  );
}
