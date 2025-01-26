import "swiper/css";
import "swiper/css/bundle";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useMediaQuery } from "@mui/material";

import { TestimonialsSlide } from "../testimonials-slide/testimonials-slide";
import { MobileInfiniteText } from "../../../../../components/MobileInfiniteText/MobileInfiniteText";

import * as Styled from "../../../../../styles/HomePage/Testimonials.styled";
import { ArrowContainer } from "../../../../../styles/ShowCase.styled";

import { ITestimonial } from "../../../../../types/Components.types";
import { ModalContent } from "../testimonials-modal/testimonials-modal";
import { SwiperButtonArrowIcon } from "../../../icons/components";

interface IProps {
  data?: { title: string; testimonials: ITestimonial[] };
  className?: string;
  mobileScreen?: number;
}

export const Testimonials = ({
  data,
  className = "",
  mobileScreen = 767,
}: IProps) => {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const prevButtonRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery(`(max-width: ${mobileScreen}px)`);

  const removeInitialDisabledClassOnSlideChange = () => {
    prevButtonRef.current?.classList.remove("initialDisabled");
  };

  const renderArrowButtons = () =>
    data &&
    data?.testimonials.length > 2 && (
      <Styled.TestimonialsSwiperArrowContainer>
        <ArrowContainer
          className="prevBtn swiper-button-prev testimonial initialDisabled"
          ref={prevButtonRef}
        >
          <SwiperButtonArrowIcon direction="left" />
        </ArrowContainer>
        <ArrowContainer
          className="nextBtn swiper-button-next testimonial"
          onClick={removeInitialDisabledClassOnSlideChange}
        >
          <span>next</span>
          <SwiperButtonArrowIcon direction="right" />
        </ArrowContainer>
      </Styled.TestimonialsSwiperArrowContainer>
    );

  const renderSlides = () =>
    (data?.testimonials as ITestimonial[]).map((testimonial, i) => (
      <SwiperSlide key={testimonial.videoUrl}>
        {testimonial.slideBanner.image && (
          <TestimonialsSlide
            setIsOpen={setIsOpen}
            subtitle={testimonial.slideTitle}
            name={testimonial.name}
            text={testimonial.text}
            linkedin={testimonial.linkedin}
            tiktok={testimonial.tiktok}
            setIndex={setIndex}
            slideNum={i}
            testimonialImg={testimonial.slideBanner.image.url}
            stars={testimonial.stars}
            className={className}
          />
        )}
      </SwiperSlide>
    ));

  return (
    <Styled.HeaderAndContentWrapper className={className}>
      {isMobile && (
        <MobileInfiniteText
          className="homepage"
          title={data?.title}
          withoutMargin
        />
      )}

      <Styled.TestimonialsTitleAndArrowContainer className={className}>
        <Styled.TestimonialsTitle className={className}>
          {data?.title}
        </Styled.TestimonialsTitle>
        {renderArrowButtons()}
      </Styled.TestimonialsTitleAndArrowContainer>

      <Styled.TestimonialsSwiperContainer className={className}>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView="auto"
          style={{ overflow: "visible" }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={false}
          // autoplay={{ delay: 5000, disableOnInteraction: false }}
          autoplay={false}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 30 },
            500: { slidesPerView: 1.2, spaceBetween: 30 },
            768: { slidesPerView: 1.325, spaceBetween: 24 },
            1200: {
              slidesPerView: 2.725,
              spaceBetween: 24,
            },
            1400: {
              slidesPerView: 2.55,
              spaceBetween: 24,
            },
            1800: {
              slidesPerView: 2.55,
              spaceBetween: 32,
            },
          }}
        >
          {renderSlides()}
        </Swiper>
      </Styled.TestimonialsSwiperContainer>

      {data?.testimonials && (
        <ModalContent
          isFormOpen={isOpen}
          setIsFormOpen={setIsOpen}
          testimonial={(data?.testimonials as ITestimonial[])[index]}
        />
      )}
    </Styled.HeaderAndContentWrapper>
  );
};
