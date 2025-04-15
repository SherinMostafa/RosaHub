import NotFound from "@/components/ui/NotFound";
import FetchSinglePlantData from "@/services/FetchSinglePlantData";
import Image from "next/image";
import plantImage from "../../../../../public/images/pexels-anna-nekrashevich-7214588.jpg";
import PlantsCard from "@/components/common/cards/PlantsCard";

export default async function Plant({
  params,
}: {
  params: { plantID: string };
}) {
  const { plantID } = await params;

  const plant = await FetchSinglePlantData(plantID);

  if (!plant) {
    return <NotFound title="Plant" />;
  }

  return (
    <div>
      <h2 className="p-10 text-center text-4xl font-italiana font-bold tracking-wider">
        {plant.name}
      </h2>

      <section className="bg-white px-10 pt-20 flex flex-col md:flex-row items-center justify-evenly gap-x-20 lg:gap-x-10 gap-y-20">
        <div className="md:w-2/3 border rounded-3xl p-8 space-y-8">
          <h2 className="-mt-12 mb-6 rounded-full bg-neutral-light w-fit px-4 title">
            About Plant
          </h2>

          <p className="text-neutral-grey-dark italic leading-6">
            {plant.description}
          </p>

          <div>
            <div className="flex gap-x-4 items-center">
              <h3 className="font-italiana font-semibold text-lg text-accent-pink">
                Category -
              </h3>

              <p className="text-sm text-neutral-grey-dark leading-6">
                {plant.category.name}
              </p>
            </div>
            <div className="flex gap-x-4 items-center">
              <h3 className="font-italiana font-semibold text-lg text-accent-pink">
                Temperature Range -
              </h3>

              <p className="text-sm text-neutral-grey-dark leading-6">
                {plant.temperatureRange}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto">
          <Image
            src={plantImage}
            alt={`Plant Image`}
            height={400}
            className="object-cover rounded-full pb-20"
          />
        </div>
      </section>

      <section className="bg-white px-10 py-20 flex flex-col md:flex-row items-start justify-evenly gap-x-20 lg:gap-x-10 gap-y-20">
        <div className="md:w-1/2 border rounded-3xl p-8 space-y-8">
          <h2 className="-mt-12 mb-6 rounded-full bg-neutral-light w-fit px-4 title">
            Growing Process
          </h2>

          <div className="space-y-4">
            {plant.growingProcess.map((step, index) => (
              <p key={index} className="text-neutral-grey-dark leading-6">
                {index + 1}. {step.instructions}
              </p>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 border rounded-3xl p-8 space-y-2">
          <h2 className="-mt-12 mb-6 rounded-full bg-neutral-light w-fit px-4 title">
            Other Info
          </h2>

          <div className="flex gap-x-4 items-center">
            <h3 className="font-italiana font-semibold text-lg text-accent-pink">
              &bull; Growing Seasons -
            </h3>

            <p className="text-neutral-grey-dark leading-6">
              {plant.growingSeason.join(", ")}
            </p>
          </div>
          <div className="flex gap-x-4 items-center">
            <h3 className="font-italiana font-semibold text-lg text-accent-pink">
              &bull; Watering Requirements -
            </h3>

            <p className="text-neutral-grey-dark leading-6">
              {plant.wateringRequirements}
            </p>
          </div>
          <div className="flex gap-x-4 items-center">
            <h3 className="font-italiana font-semibold text-lg text-accent-pink">
              &bull; Light Requirements -
            </h3>

            <p className="text-neutral-grey-dark leading-6">
              {plant.lightRequirements}
            </p>
          </div>
          <div className="flex gap-x-4 items-center">
            <h3 className="font-italiana font-semibold text-lg text-accent-pink">
              &bull; Soil Requirements -
            </h3>

            <p className="text-neutral-grey-dark leading-6">
              {plant.soilRequirements}
            </p>
          </div>
        </div>
      </section>

      {/* <section className="space-y-8 py-14 bg-white">
        <h2 className="title text-center">Similar Plants</h2>

        <PlantsCard />
      </section> */}
    </div>
  );
}
