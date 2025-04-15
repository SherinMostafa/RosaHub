import { Plant } from "@/interfaces/data";
import { Image } from "@mantine/core";
import Link from "next/link";

export default function PlantCard({ plant }: { plant: Plant }) {
  return (
    <>
      <Link href={`/plants/${plant._id}`} className="space-y-6">
        <div className="overflow-hidden">
          <Image
            src={"/images/pexels-anna-nekrashevich-7214588.jpg"}
            alt={`${plant.name}`}
            mah={320}
            className="transition-transform duration-300 ease-out group-hover:scale-110"
          />
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold text-lg font-italiana tracking-wider">
            {plant.name}
          </h2>
          <p className="text-sm text-neutral-grey-dark line-clamp-2">
            {plant.description}
          </p>
        </div>
      </Link>
    </>
  );
}
