import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Slide from "./Slide";

import * as Styled from "../../styles/ShowCase.styled";

import { adminPortfolioService } from "../../services/adminPortfolioPage";
import { IShowCaseProps } from "../../types/Services.types";
import { queryKeys } from "../../consts/queryKeys";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { IPortfolioReview } from "../../types/Admin/AdminPortfolio.types";

const ShowCase = ({ projects }: IShowCaseProps) => {
  const [currentProjects, setCurrentProjects] = useState<
    (IPortfolioReview | undefined)[]
  >([]);
  const { data } = useQuery([queryKeys.getPortfolio], () =>
    adminPortfolioService.getReviews()
  );

  useEffect(() => {
    if (data && projects) {
      setCurrentProjects(
        projects.map((proj) => data?.find((el) => el.general.title === proj))
      );
    }
  }, [data, projects]);
  return projects && projects.length !== 0 ? (
    <div>
      <Styled.SwiperArrowContainer>
        <div>
          <Styled.ArrowContainer className="prevBtn swiper-button-prev">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.25 1.39844L2 9.39844M2 9.39844L10.25 17.3984M2 9.39844L20 9.39844"
                stroke="black"
                strokeWidth="1.5"
              />
              <path
                d="M10.25 1.39844L2 9.39844M2 9.39844L10.25 17.3984M2 9.39844L20 9.39844"
                stroke="black"
                strokeWidth="1.5"
              />
            </svg>
          </Styled.ArrowContainer>
          <Styled.ArrowContainer className="nextBtn swiper-button-next">
            <span>next</span>
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.75 16.6016L18 8.60156M18 8.60156L9.75 0.601563M18 8.60156L-6.84812e-07 8.60156"
                stroke="#F1EFED"
                strokeWidth="1.5"
              />
              <path
                d="M9.75 16.6016L18 8.60156M18 8.60156L9.75 0.601563M18 8.60156L-6.84812e-07 8.60156"
                stroke="#F1EFED"
                strokeWidth="1.5"
              />
            </svg>
          </Styled.ArrowContainer>
        </div>
      </Styled.SwiperArrowContainer>
      <Styled.SliderWrapper>
        <Styled.SliderContainerBg></Styled.SliderContainerBg>
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          // autoplay={{ delay: 7000, disableOnInteraction: false }}
          autoplay={false}
          slidesPerView={1}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="mySwiper"
        >
          {currentProjects?.map(
            (el, ind) =>
              el && (
                <SwiperSlide key={ind}>
                  {({ isActive }) => (
                    <Slide ind={ind} review={el} isActive={isActive} />
                  )}
                </SwiperSlide>
              )
          )}
        </Swiper>
      </Styled.SliderWrapper>
    </div>
  ) : null;
};

export default ShowCase;
