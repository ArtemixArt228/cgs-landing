import React from "react";
import { SwiperSlide } from "swiper/react";
import { useMediaQuery } from "@mui/material";

import { VerticalSlider } from "./VerticalSlider";
import { Picture } from "./VerticalSlider/Picture";

import * as Styles from "./OtherServices.styled";

import { IOtherServicesComponent } from "../../../../types/ServicesComponent.types";
import { SplitBrackets } from "../../../../utils/splitBrackets";

interface IServicesProps {
  otherServices?: IOtherServicesComponent;
  className?: string;
}

export const OtherServices = ({ otherServices, className }: IServicesProps) => {
  const isMobile = useMediaQuery("(max-width:1400px)");
  const isDesktopLarge = useMediaQuery("(min-width:1800px)");

  const HORIZONTAL_GAP = 18;
  const VERTICAL_GAP = -91;
  const VERTICAL_GAP_LARGE = -126;

  const calculateGap = () => {
    let spaceBetween: number;
    if (isMobile) {
      spaceBetween = HORIZONTAL_GAP;
    } else if (isDesktopLarge) {
      spaceBetween = VERTICAL_GAP_LARGE;
    } else {
      spaceBetween = VERTICAL_GAP;
    }

    return spaceBetween;
  };

  return (
    <Styles.Container className={className}>
      <Styles.Carousel className={className}>
        {otherServices?.services && (
          <>
            <VerticalSlider
              direction={isMobile ? "horizontal" : "vertical"}
              spaceBetween={calculateGap()}
            >
              {otherServices?.services.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <Picture
                    imageColor={slide.imageColor}
                    imageGrayscale={slide.imageGrayscale}
                    link={slide.link}
                  />
                </SwiperSlide>
              ))}
            </VerticalSlider>
            {!isMobile && (
              <VerticalSlider
                slidesPerView={1}
                isReverse={true}
                spaceBetween={calculateGap()}
              >
                {otherServices?.services.reverse().map((slide, idx) => (
                  <SwiperSlide key={idx}>
                    <Picture
                      imageColor={slide.imageColor}
                      imageGrayscale={slide.imageGrayscale}
                      link={slide.link}
                    />
                  </SwiperSlide>
                ))}
              </VerticalSlider>
            )}
          </>
        )}
      </Styles.Carousel>
      <Styles.Description>
        <Styles.Title className={className}>
          <SplitBrackets text={otherServices?.title} />
        </Styles.Title>
        <Styles.Text className={className}>
          <SplitBrackets text={otherServices?.text} />
        </Styles.Text>
      </Styles.Description>
    </Styles.Container>
  );
};

export default OtherServices;
