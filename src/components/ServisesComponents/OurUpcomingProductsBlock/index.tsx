import { useMediaQuery } from "@mui/material";
import React, { useRef, useState } from "react";
import { ArrowContainer } from "../../../styles/ShowCase.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

import { MobileInfiniteText } from "../../MobileInfiniteText/MobileInfiniteText";

import * as TestimonialsStyled from "../../../styles/HomePage/Testimonials.styled";
import * as Styled from "./OurUpcomingProductsBlock.styled";
import * as StyledGeneral from "../../../styles/Services.styled";
import Slide from "./Slide";
import { IUpcomingProduct } from "../../../types/Admin/AdminServices.types";
import clsx from "clsx";
import { SwiperButtonArrowIcon } from "../../../modules/shared/icons/components";

interface IProps {
  data?: IUpcomingProduct[];
  title?: string;
  className?: string;
}

const OurUpcomingProductsBlock: React.FC<IProps> = ({ data, title }) => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [clickedSlides, setClickedSlides] = useState<string[]>([]);

  const swiperRef = useRef<SwiperClass | null>(null);

  const isMobile = useMediaQuery("(max-width: 767px)");

  const handleVideoPlay = (url: string, id?: string) => {
    setPlayingVideo(url);
    if (id && !clickedSlides.includes(id)) {
      setClickedSlides((prev) => [...prev, id]);
    }

    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };
  const renderArrowButtons = () =>
    data?.length && (
      <TestimonialsStyled.TestimonialsSwiperArrowContainer className="upcoming-products">
        <ArrowContainer className="prevBtn swiper-button-prev testimonial upcoming-products">
          <SwiperButtonArrowIcon direction="left" />
        </ArrowContainer>
        <ArrowContainer className="nextBtn swiper-button-next testimonial upcoming-products">
          <span>next</span>
          <SwiperButtonArrowIcon direction="right" />
        </ArrowContainer>
      </TestimonialsStyled.TestimonialsSwiperArrowContainer>
    );

  const renderSlides = () =>
    data?.map((slide, i) => (
      <SwiperSlide
        key={i}
        id={slide.videoLink}
        className={clsx(
          slide._id && clickedSlides.includes(slide._id) && "clicked"
        )}
      >
        <Slide
          id={slide._id}
          videoPreviewImage={slide.image?.url}
          videoUrl={slide.videoLink}
          text={slide.text}
          handleVideoPlay={handleVideoPlay}
          isPlaying={playingVideo === slide.videoLink}
        />
      </SwiperSlide>
    ));

  const buttons = renderArrowButtons();
  return (
    <Styled.HeaderAndContentWrapper>
      {isMobile && (
        <MobileInfiniteText
          className="services products"
          title={title}
          withoutMargin
        />
      )}

      <TestimonialsStyled.TestimonialsTitleAndArrowContainer className="upcoming-products">
        <StyledGeneral.BlockHeader className="upcoming-products">
          {title}
        </StyledGeneral.BlockHeader>
        {buttons}
      </TestimonialsStyled.TestimonialsTitleAndArrowContainer>

      <TestimonialsStyled.TestimonialsSwiperContainer className="services">
        <Swiper
          modules={[Autoplay, Navigation]}
          onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
          slidesPerView={"auto"}
          style={{
            overflow: "hidden",
            height: "100%",
            borderRadius: 16,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={false}
          // autoplay={{ delay: 7000, disableOnInteraction: false }}
          autoplay={false}
          spaceBetween={30}
          breakpoints={{
            375: { slidesPerView: "auto", spaceBetween: 30 },
            1100: {
              slidesPerView: "auto",
              spaceBetween: 40,
            },
            1900: {
              slidesPerView: 1.2625,
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
        >
          {renderSlides()}
        </Swiper>
      </TestimonialsStyled.TestimonialsSwiperContainer>

      <TestimonialsStyled.TestimonialsTitleAndArrowContainer className="upcoming-products bottom-show">
        {buttons}
      </TestimonialsStyled.TestimonialsTitleAndArrowContainer>
    </Styled.HeaderAndContentWrapper>
  );
};

export default OurUpcomingProductsBlock;
