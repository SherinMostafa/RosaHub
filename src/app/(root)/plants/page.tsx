import PlantsFilterGrid from "@/components/common/grids/PlantsFilterGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plants",
};

export default function Plants() {
  return (
    <>
      <h2 className="p-10 text-center text-4xl font-italiana font-bold tracking-wider">
        Plants
      </h2>

      <PlantsFilterGrid />
    </>
  );
}
