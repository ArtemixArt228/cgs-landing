import React, { FC, useRef } from "react";
import { Swiper, SwiperRef } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

import { SliderWrapper } from "./VerticalSlider.styled";

interface ISliderProps {
  children?: React.ReactNode;
  isReverse?: boolean;
  direction?: "vertical" | "horizontal" | undefined;
  slidesPerView?: number;
  spaceBetween?: number;
}

export const VerticalSlider: FC<ISliderProps> = ({
  isReverse = false,
  direction = "vertical",
  children,
  slidesPerView,
  spaceBetween = 18,
}) => {
  const swiperRef = useRef<SwiperRef | null>(null);

  const handleMouseEnter = () => {
    swiperRef.current?.swiper.autoplay.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current?.swiper.autoplay.start();
  };

  return (
    <SliderWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isReverse={isReverse}
    >
      <Swiper
        ref={swiperRef}
        direction={direction}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView ? slidesPerView : "auto"}
        threshold={50}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[Autoplay, Navigation]}
        speed={3000}
        className="mySwiper"
        observeParents={true}
        observer={true}
      >
        {children}
      </Swiper>
    </SliderWrapper>
  );
};
