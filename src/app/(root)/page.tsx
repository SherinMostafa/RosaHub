import { LinkButton } from "@/components/common/buttons";
import Image from "next/image";
import journeyImage from "../../../public/images/pexels-beyzaa-yurtkuran-279977530-16614530.jpg";
import plantImage from "../../../public/images/pexels-anna-nekrashevich-7214588.jpg";
import CategoriesCard from "@/components/common/cards/CategoriesCard";
import LandingCard from "@/components/common/cards/LandingCard";
import PlantsSlider from "@/components/common/sliders/PlantsSlider";

export default function Home() {
  return (
    <>
      {/* Landing Section */}
      <div className="h-[calc(100svh-4rem)] ">
        <LandingCard />
      </div>

      {/* Plants Section */}
      <section className="space-y-8 py-14 bg-white">
        <h2 className="title text-center">Our Seasonal Plants</h2>

        <PlantsSlider />
      </section>

      {/* Journey Section */}
      <section className="bg-neutral-light px-10 py-20 flex flex-col md:flex-row items-center gap-x-10 gap-y-16">
        <div className="flex-1">
          {/* Large Image */}
          <Image
            src={journeyImage}
            alt="Journey Image"
            className="object-cover"
          />
        </div>

        <div className="flex-1 space-y-6">
          <h2 className="text-2xl lg:text-3xl font-italiana font-bold tracking-wider">
            Our Journey
          </h2>

          <div className="space-y-2">
            <p className="text-sm lg:text-base text-neutral-grey-dark">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem rem quam officia libero eveniet. Enim asperiores
              quae ullam esse explicabo vero voluptas, illum iusto culpa rerum
              voluptatem modi tenetur atque! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Exercitationem rem quam officia
              libero eveniet.
            </p>

            <p className="text-sm lg:text-base text-neutral-grey-dark">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem rem quam officia libero eveniet. Enim asperiores
              quae ullam esse explicabo vero voluptas, illum iusto culpa rerum
              voluptatem modi tenetur atque!
            </p>
          </div>

          <LinkButton label="Read More" href="/about" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white space-y-8 py-14">
        <h2 className="title text-center">Our Collections</h2>

        <CategoriesCard />
      </section>

      {/* Blogs Section
      <section className="px-10 py-20 flex flex-col-reverse md:flex-row items-center justify-evenly gap-x-20 lg:gap-x-10 gap-y-20">
        <div>
          <Image
            src={plantImage}
            alt={`Plant Image`}
            height={400}
            className="object-cover rounded-full pb-20"
          />
        </div>

        <div className="md:w-1/2 border rounded-3xl p-8 space-y-8 md:mt-10">
          <h2 className="-mt-12 mb-6 bg-neutral-light w-fit px-4 title">
            Plant Care Tips And Tricks
          </h2>

          <p className="text-sm text-neutral-grey-dark italic leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem rem quam officia libero eveniet. Enim asperiores quae
            ullam esse explicabo vero voluptas, illum iusto culpa rerum
            voluptatem modi tenetur atque! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Exercitationem rem quam officia libero
            eveniet.
          </p>

          <p className="font-italiana font-semibold text-right text-sm text-accent-pink">
            Category - Flowers
          </p>
        </div>
      </section> */}

      {/* Quote Section */}
      <section className="bg-neutral-light px-10 pt-20 flex flex-col-reverse md:flex-row items-center justify-evenly gap-x-20 lg:gap-x-10 gap-y-20">
        <div>
          <Image
            src={plantImage}
            alt={`Plant Image`}
            height={400}
            width={280}
            className="object-cover rounded-full pb-20"
          />
        </div>

        <div className="md:w-1/2 border rounded-3xl p-8 space-y-8">
          <h2 className="-mt-12 mb-6 bg-neutral-light rounded-full w-fit px-4 title">
            Today&apos;s Plant
          </h2>

          <p className="text-sm text-neutral-grey-dark italic leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem rem quam officia libero eveniet. Enim asperiores quae
            ullam esse explicabo vero voluptas, illum iusto culpa rerum
            voluptatem modi tenetur atque! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Exercitationem rem quam officia libero
            eveniet.
          </p>

          <p className="font-italiana font-semibold text-right text-sm text-accent-pink">
            Category - Flowers
          </p>
        </div>
      </section>
    </>
  );
}
