import React from "react";
import Image from "next/image";
import clsx from "clsx";

import * as Styled from "../../../../../styles/HomePage/Testimonials.styled";
import { ITestimonialsSlideProps } from "../../../../../types/Components.types";

import star from "/public/HomePageDecoration/testimonialsStar.svg";
import { PlayBtn } from "../../../icons/components/play-video-button";
import { TestimonialsIconLinks } from "..";

export const TestimonialsSlide = ({
  setIsOpen,
  subtitle,
  setIndex,
  slideNum,
  testimonialImg,
  stars,
  text,
  name,
  linkedin,
  tiktok,
  className = "",
}: ITestimonialsSlideProps) => {
  const clickHandler = () => {
    setIsOpen(true);
    setIndex(slideNum);
  };

  return (
    <Styled.TestimonialsSlideContainer
      onClick={clickHandler}
      className={className}
    >
      <Styled.TestimonialsSlideImageContainer className={className}>
        <Image
          className="slideImage"
          layout={"fill"}
          src={testimonialImg}
          alt={"clients"}
        />
        <Styled.TestimonialsStarsWrapper className={className}>
          <Styled.TestimonialsSlideStar className={className}>
            {[...Array(Math.round(stars))].map((_, i) => (
              <Image key={i} src={star} alt={"star"} />
            ))}
          </Styled.TestimonialsSlideStar>
        </Styled.TestimonialsStarsWrapper>
        <Styled.TestimonialsSlidePlayBtnContainer className={className}>
          <PlayBtn />
        </Styled.TestimonialsSlidePlayBtnContainer>
      </Styled.TestimonialsSlideImageContainer>
      <Styled.TestimonialsIntroInfoContainer className={className}>
        <div className={clsx("subtitle", className)}>
          <span>{subtitle}</span>
          <TestimonialsIconLinks linkedin={linkedin} tiktok={tiktok} />
        </div>
        <p className={clsx("name", className)}>{name}</p>
        <p className={clsx("text", className)}>{text}</p>
      </Styled.TestimonialsIntroInfoContainer>
      <Styled.HoverBlockTestimonials className={clsx("hidden", className)}>
        <Styled.HoverBlackBlockTestimonials className={className} />
      </Styled.HoverBlockTestimonials>
    </Styled.TestimonialsSlideContainer>
  );
};
