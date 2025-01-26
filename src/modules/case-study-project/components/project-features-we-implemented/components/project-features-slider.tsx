import React, { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useMediaQuery } from "@mui/material";

import { MobileInfiniteText } from "../../../../../components/MobileInfiniteText/MobileInfiniteText";
import { CaseStudyModal } from "../../project-info-modal/project-info-modal";

import * as StyledPortfolio from "../../../../case-studies/styles";
import * as Styled from "../project-features-we-implemented.styled";
import { ArrowContainer } from "../../../../../styles/ShowCase.styled";

import { IFeature } from "../../../../../types/Admin/AdminPortfolio.types";
import { ICaseStudyModalData } from "../../../../../types/CaseStudy";

import "swiper/css";
import "swiper/css/bundle";

import { FeatureCard } from "./project-feature-card";
import BlockRectangles from "../../../../../components/TitleWithRects/BlockRectangles";
import { SwiperButtonArrowIcon } from "../../../../shared/icons/components";

interface IProps {
  data?: { title: string; testimonials: IFeature[] };
}

export const FeatureSlide = ({ data }: IProps) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1099px)");
  const isLargeDesktop = useMediaQuery("(min-width: 1800px)");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ICaseStudyModalData | null>();
  const swiperRef = useRef<SwiperRef>(null);

  const renderButtons = () => (
    <Styled.TestimonialsSwiperArrowContainer>
      <ArrowContainer className="prevBtn swiper-button-prev testimonial">
        <SwiperButtonArrowIcon direction="left" />
      </ArrowContainer>
      <ArrowContainer className="nextBtn swiper-button-next testimonial">
        <span>next</span>
        <SwiperButtonArrowIcon direction="right" />
      </ArrowContainer>
    </Styled.TestimonialsSwiperArrowContainer>
  );
  const buttons = renderButtons();

  const renderSlides = () => {
    return data?.testimonials.map((feature) => (
      <SwiperSlide key={feature._id}>
        <FeatureCard
          setIsModalOpen={setIsModalOpen}
          setModalData={setModalData}
          feature={feature}
        />
      </SwiperSlide>
    ));
  };

  return (
    <div>
      {isMobile && (
        <MobileInfiniteText
          className={"case-study"}
          title={data?.title}
          withoutMargin
        />
      )}

      <Styled.TestimonialsTitleAndArrowContainer>
        {!isMobile && (
          <StyledPortfolio.FeaturesText>
            <BlockRectangles className="impl-process-rect" />
            <div>{data?.title}</div>
          </StyledPortfolio.FeaturesText>
        )}
        <Styled.TestimonialsSwiperArrowContainer className="mobile-hidden">
          {buttons}
        </Styled.TestimonialsSwiperArrowContainer>
      </Styled.TestimonialsTitleAndArrowContainer>
      <Styled.TestimonialsSwiperContainer>
        <Swiper
          modules={[Autoplay, Navigation]}
          style={{ overflow: "unset", display: "grid" }}
          loop={false}
          ref={swiperRef}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          // autoplay={{ delay: 7000, disableOnInteraction: false }}
          autoplay={false}
          spaceBetween={isTablet ? 44 : isLargeDesktop ? 40 : 32}
          className="mySwiper"
          breakpoints={{
            375: {
              slidesPerView: 1,
            },
            625: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.6,
            },
            850: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1500: {
              slidesPerView: 3,
            },
            1800: {
              slidesPerView: 3,
            },
          }}
        >
          {renderSlides()}
        </Swiper>
      </Styled.TestimonialsSwiperContainer>
      <Styled.TestimonialsSwiperArrowContainer className="bottom-buttons">
        {buttons}
      </Styled.TestimonialsSwiperArrowContainer>

      <CaseStudyModal
        isModalOpen={isModalOpen}
        modalData={modalData!}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};
