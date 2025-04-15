"use client";

import { Carousel } from "@mantine/carousel";
import { MantineSpacing, StyleProp } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

import classes from "../../styles/ui/Slider.module.css";
import { useRef, useState } from "react";

export default function Slider({
  slides,
  carouselHeight = "100%",
  align,
  slideSize,
  slideGap,
  slideStyle,
  activeSlideStyle,
  rootStyle,
  indicatorStyle,
  controlStyle,
  containerStyle,
  loop,
  withControls,
  withIndicators,
  autoPlay = false,
  dragFree = true,
}: {
  slides: React.ReactNode[];
  carouselHeight?: string | number;
  align?: number | "center" | "start" | "end";
  slideSize?: StyleProp<string | number>;
  slideGap?: StyleProp<MantineSpacing>;
  slideStyle?: string;
  activeSlideStyle?: string;
  rootStyle?: string;
  indicatorStyle?: string;
  controlStyle?: string;
  containerStyle?: string;
  loop?: boolean;
  withControls?: boolean;
  withIndicators?: boolean;
  autoPlay?: boolean;
  dragFree?: boolean;
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  return (
    <Carousel
      loop={loop}
      plugins={autoPlay ? [autoplay.current] : []}
      dragFree={dragFree}
      height={carouselHeight}
      className="flex-1"
      align={align}
      slideSize={slideSize}
      slideGap={slideGap}
      withControls={withControls}
      withIndicators={withIndicators}
      nextControlIcon={<IconArrowRight size={18} />}
      previousControlIcon={<IconArrowLeft size={18} />}
      onSlideChange={(index) => setActiveSlide(index)}
      classNames={{
        root: `px-8 ${rootStyle}`,
        control: `bg-primary-light p-2 hover:bg-primary-dark transition-all duration-300 border-none text-white ${classes.control} ${controlStyle}`,
        indicator: `bg-primary-light transition-all duration-300 ease-linear size-[0.5rem] ${indicatorStyle}`,
        container: `!items-end ${containerStyle}`,
      }}
    >
      {slides?.map((slide, index) => {
        if (!slide) return;
        return (
          <Carousel.Slide
            key={index}
            className={`${slideStyle} ${
              index === activeSlide && activeSlideStyle
            }`}
          >
            {slide}
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
}
