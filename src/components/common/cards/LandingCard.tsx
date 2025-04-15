import Slider from "../../ui/Slider";
import { LinkButton } from "../buttons";

const landing = [
  {
    imgURL: "/images/pexels-huy-phan-316220-3076899.jpg",
    title: "Create Your Perfect Indoor and Outdoor Spaces.",
    description:
      "Explore ideas to transform your home, whether it’s crafting cozy indoor corners or designing beautiful outdoor escapes.",
  },
  {
    imgURL: "/images/pexels-xayriddin-18331802.jpg",
    title: "Grow Fresh and Organic Greenery Anywhere.",
    description:
      "Discover techniques to grow thriving plants and fresh vegetables, whether you have a compact balcony or a large backyard.",
  },
  {
    imgURL: "/images/pexels-troy-guo-1586078-15255712.jpg",
    title: "Make a beautiful garden with your own hand.",
    description:
      "Bring vibrant colors and fresh air into your indoor and outdoor areas with a variety of beautiful plants and flowers.",
  },
];

export default function LandingCard() {
  return (
    <>
      <Slider
        loop
        autoPlay
        dragFree={false}
        slideGap={0}
        withIndicators
        withControls={false}
        rootStyle="!px-0"
        slides={landing.map((section, index) => (
          <div
            className="flex items-end h-[calc(100svh-4rem)] bg-cover"
            style={{ backgroundImage: `url(${section.imgURL})` }}
            key={index}
          >
            <div className="space-y-6 flex-1 text-center bg-black bg-opacity-50 px-6 sm:px-10 md:px-20 py-20">
              <h2 className="text-3xl md:text-5xl font-italiana font-bold tracking-wider text-white">
                {section.title}
              </h2>

              <p className="text-sm md:text-base text-neutral-light">
                {section.description}
              </p>

              <div>
                <LinkButton
                  label="Explore More"
                  href="/plants"
                  buttonColor=""
                />
              </div>
            </div>
          </div>
        ))}
      />
    </>
  );
}
