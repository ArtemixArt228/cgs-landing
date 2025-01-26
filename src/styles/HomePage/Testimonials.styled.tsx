import styled from "styled-components";
import themes from "../../utils/themes";

export const FeaturesText = styled.div`
  color: #000;
  font-family: ${themes.primary.font.family.namu};
  font-size: 34px;
  font-style: normal;
  font-weight: 900;
  line-height: 160%;
  text-transform: uppercase;
`;

export const TestimonialsModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #00000066;
  top: 0;
  right: 0;
  z-index: 99;
  display: grid;
  place-content: center;
`;

export const TestimonialsVideoContainer = styled.div`
  position: relative;
  width: 59.5em;
  min-height: 53.3em;
  box-shadow: 0 0 0 1.5px black;
  background: ${themes.primary.colors.grey};
  border-radius: 16px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 956px;
    min-height: 847px;
  }

  @media ${themes.primary.media.maxMobile} {
    box-shadow: 0 0 0 1px black;
    width: 360px;
    min-height: 448px;

    > div:nth-child(2) {
      > div:first-child {
        height: 213px !important;
      }
    }
  }
`;

export const TestimonialsCrossContainer = styled.div`
  height: 3.33em;
  display: flex;
  justify-content: flex-end;

  @media ${themes.primary.media.minPCFullHD} {
    height: 70px;
  }

  margin-top: 13px;
`;

export const TestimonialsCrossWrapper = styled.div`
  align-self: flex-end;
  display: block;
  width: 3.33em;
  height: 100%;
  background: ${themes.primary.colors.grey};
  cursor: pointer;
  border-radius: 16px;
  margin-right: 16px;
`;

export const TestimonialsModalVideoContainer = styled.div`
  padding: 0 2em 2em;

  @media ${themes.primary.media.minPCFullHD} {
    padding: 22px 31px 33px;
  }

  @media ${themes.primary.media.maxMobile} {
    box-shadow: none;
    padding: 0.77em 0.67em 0.67em;
  }
`;

export const HeaderAndContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media ${themes.primary.media.min768Mobile} {
    gap: 32px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 40px;
    &.ai-chatbot-page {
      gap: 43px;
    }
  }
`;

export const TestimonialsTitleAndArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${themes.primary.media.max767Mobile} {
    display: none;
  }
  &.upcoming-products {
    @media ${themes.primary.media.maxMobile} {
      display: none;
    }
    @media ${themes.primary.media.min768Mobile} {
      display: flex;
    }
    &.bottom-show {
      @media ${themes.primary.media.maxMobile} {
        display: flex;
        justify-content: center;
      }
      @media ${themes.primary.media.min768Mobile} {
        display: none;
      }
    }
  }
  &.ai-chatbot-page {
    @media ${themes.primary.media.max767Mobile} {
      display: none;
    }
  }
`;

export const TestimonialsTitle = styled.div`
  color: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-size: 32px;
  font-weight: 900;
  line-height: 140%;
  text-transform: uppercase;
  &.ai-chatbot-page {
    font-size: 32px;
    line-height: 56px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    &.ai-chatbot-page {
      font-size: 40px;
      line-height: 48px;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 48px;
    line-height: 74.67px;
    &.ai-chatbot-page {
      font-size: 48px;
      line-height: 64px;
    }
  }
`;

export const TestimonialsHeaderName = styled.div`
  color: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-size: 2.84em;
  font-weight: 900;
  line-height: normal;

  &.adminSlide {
    font-size: 30px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 45px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;
  }
`;

export const TestimonialsHeaderPosition = styled.div`
  margin-top: 0.445em;
  color: ${themes.primary.colors.darkBlue};
  font-family: ${themes.primary.font.family.namu};
  font-size: 1.5em;
  font-weight: 900;
  line-height: normal;

  &.grey {
    color: ${themes.primary.colors.darkGrey};
  }

  &.adminSlide {
    font-size: 18px;
  }

  &.mobile {
    display: none;
  }

  &:hover {
    text-decoration: underline;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 14px;

    &.mobile {
      display: inline-block;
    }
    &.desktop {
      display: none;
    }
  }
`;

export const TestimonialsStarsWrapper = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media ${themes.primary.media.maxMobile} {
    padding: 0 16px;
    bottom: 10px;
  }
  @media ${themes.primary.media.min768Mobile} {
    padding: 0 16px;
    bottom: 20px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    padding: 0 12px;
    bottom: 22px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    padding: 0 22px;
    bottom: 30px;
  }
`;

export const TestimonialsSlideHeadline = styled.div`
  color: ${themes.primary.colors.grey};
  font-family: ${themes.primary.font.family.namu};
  font-size: 1.5em;
  font-weight: 900;
  max-width: 66%;
  text-shadow: 0 0 24px ${themes.primary.colors.primary};

  &.adminSlide {
    font-size: 9px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.25em;
    max-width: 15.5em;
    text-shadow: 0 0 25px #000;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    text-shadow: none;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    font-size: 13.5px;
  }
`;

export const TestimonialsSlideStar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  @media ${themes.primary.media.maxMobile} {
    span {
      width: 18px !important;
      height: 18px !important;
    }
  }

  @media ${themes.primary.media.min768Mobile} {
    span {
      width: 28px !important;
      height: 28px !important;
    }
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    span {
      width: 28px !important;
      height: 28px !important;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    span {
      width: 37px !important;
      height: 37px !important;
    }
  }
`;

export const TestimonialsSlideStarAdmin = styled(TestimonialsSlideStar)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  & span {
    width: 18px !important;
    height: 18px !important;
  }
`;

export const TestimonialsSlidePlayBtnContainer = styled.div`
  position: relative;
  z-index: 2;

  @media ${themes.primary.media.minPCFullHD} {
    svg {
      width: 53px;
      height: 53px;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    svg {
      width: 30.5px;
      height: 30.5px;
    }
  }
`;

export const TestimonialsIntroInfoContainer = styled.div`
  font-family: ${themes.primary.font.family.namu};
  padding: 16px 16px 24px 16px;
  border: 1px solid ${themes.primary.colors.testimonialBorder};
  border-radius: 0 0 16px 16px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  color: ${themes.primary.colors.primary};
  overflow: hidden;

  p {
    margin: 0;
  }

  & .subtitle {
    color: ${themes.primary.colors.darkGrey};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    height: 32px;

    @media screen and ${themes.primary.media.maxMobile} {
      font-size: 12px;
      gap: 5px;
      line-height: 1.5;
      margin-bottom: -4px;
    }
    @media ${themes.primary.media.min768Mobile} {
      margin-bottom: -10px;
      font-size: 16px;
    }

    @media ${themes.primary.media.min768Mobile} and ${themes.primary.media
        .maxBreakpoint1100} {
      &.ai-chatbot-page {
        font-size: 14px;
        line-height: 16.8px;
        margin-bottom: -7px;
      }
    }

    @media ${themes.primary.media.minBreakpoint1100} {
      margin-bottom: -4px;
      font-size: 16px;
    }
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 20px;
      height: 43px;
      line-height: 24px;
    }
  }

  & .name {
    @media screen and ${themes.primary.media.maxMobile} {
      font-size: 16px;
      line-height: 1.5;
    }

    @media ${themes.primary.media.min768Mobile} {
      font-size: 20px;
      line-height: 32px;
    }

    @media ${themes.primary.media.min768Mobile} and ${themes.primary.media
        .maxBreakpoint1100} {
      &.ai-chatbot-page {
        font-size: 22px;
        line-height: 32px;
      }
    }
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 24px;
      line-height: 42.67px;
    }
  }

  & .text {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;
    text-overflow: ellipsis;
    align-self: end;

    @media screen and ${themes.primary.media.maxMobile} {
      line-height: 175%;
      font-size: 14px;
    }
    @media screen and ${themes.primary.media.min768Mobile} {
      font-size: 16px;
    }
    @media ${themes.primary.media.min768Mobile} and ${themes.primary.media
        .maxBreakpoint1100} {
      &.ai-chatbot-page {
        font-size: 14px;
        line-height: 24px;
      }
    }
    @media screen and ${themes.primary.media.minTabletLandScape} {
      line-height: 24px;
    }

    @media screen and ${themes.primary.media.minPCFullHD} {
      -webkit-line-clamp: 2;
      line-height: 32px;
      font-size: 20px;
      margin-top: 6px;
    }
  }

  @media screen and ${themes.primary.media.maxMobile} {
    padding: 8px 16px 25px 15px;
    gap: 4px;
  }
  @media screen and ${themes.primary.media.min768Mobile} {
    padding: 16px 16px 24px 16px;
    gap: 8px;
  }
  @media screen and ${themes.primary.media.minBreakpoint1100} {
    padding: 16px 16px 24px 16px;
    gap: 4px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    padding: 20px 20px 32px;
    gap: 0;
  }
`;

export const HoverBlockTestimonials = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${themes.primary.colors.blogBackground};
  right: -14px;
  bottom: -14px;
  border: 1.5px solid ${themes.primary.colors.primary};
  border-radius: 16px;
  overflow: hidden;
  z-index: -1;
  display: flex;
  align-items: flex-end;

  &.hidden {
    right: -8px;
    bottom: -8px;
    visibility: hidden;
  }

  @media ${themes.primary.media.maxMobile} {
    border: 1.5px solid ${themes.primary.colors.primary};
    right: -4px;
    bottom: -4px;
  }
`;

export const HoverBlackBlockTestimonials = styled.div`
  height: 50%;
  width: 100%;
  outline: 1.5px solid ${themes.primary.colors.primary};
  background-color: black;

  @media ${themes.primary.media.maxMobile} {
    outline: 1.5px solid ${themes.primary.colors.primary};
  }
`;

export const TestimonialsSlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 16px;
  top: 0;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    top: -8px;
  }

  @media ${themes.primary.media.max767Mobile} {
    border-radius: 0;

    & .slideImage {
      border-radius: 0;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 574px;
  }
`;
export const TestimonialsSlideContainerAdminPage = styled(
  TestimonialsSlideContainer
)`
  width: 246px;
  height: 153px;
  justify-content: center;
  align-items: center;
`;

export const TestimonialsStarsAndPlayBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const TestimonialsSlideImageContainer = styled.div`
  width: 100%;
  height: 23em;
  position: relative;
  display: grid;
  place-items: center;
  aspect-ratio: 16 / 10;

  & .slideImage {
    margin: 10px;
    object-fit: cover;
    border-radius: 16px 16px 0 0;
    position: relative;
  }

  &.adminSlide {
    width: 300px;
    height: 170px;
  }

  @media ${themes.primary.media.maxMobile} {
    height: 193px;
  }

  @media ${themes.primary.media.min768Mobile} {
    height: 274px;
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    height: 274px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 365px;
  }
`;

export const TestimonialsSwiperContainer = styled.div`
  width: 100%;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 0;

    .swiper-slide {
      height: 335px;
    }
  }
  @media ${themes.primary.media.min768Mobile} {
    margin-top: 0;

    .swiper-slide {
      height: 430px;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    .swiper-slide {
      height: 574px;
    }
  }

  &.services {
    width: 100%;
    border-radius: 16px;
    .swiper-slide {
      height: 100%;
      transition: width 0.3s, height 0.3s;
    }
    @media ${themes.primary.media.maxMobile} {
      margin-left: 0;
      .swiper-slide {
        height: 296px;
        width: 518px !important;
        &.clicked {
          height: 293px;
        }
      }
    }

    @media ${themes.primary.media.maxMobilePortrait} {
      margin-left: 0;
      .swiper-slide {
        height: 184px;
        width: 343px !important;
        &.clicked {
          height: 194px;
        }
      }
    }

    @media ${themes.primary.media.min768Mobile} {
      margin-top: 0;
      height: 394px;
      .swiper-slide {
        height: 394px;
        width: 688px !important;
        &.clicked {
          height: 386px;
        }
      }
    }
    @media ${themes.primary.media.minLaptop} {
      height: 591px;
      .swiper-slide {
        width: 1040px !important;
        height: 591px;
        &.clicked {
          height: 588px;
        }
      }
      .swiper {
        overflow: visible !important;
      }
    }
    @media ${themes.primary.media.minPCFullHD} {
      height: 799px;
      .swiper-slide {
        height: 799px;
        width: 1405px !important;

        &.clicked {
          height: 791px;
        }
      }
    }
    @media ${themes.primary.media.minWidth2200} {
      .swiper {
        overflow: hidden !important;
      }
    }
  }
  &.ai-chatbot-page {
    .swiper-slide {
      height: 100%;
    }
    @media ${themes.primary.media.min1440} {
      .swiper-slide {
        height: 100%;
      }
    }
    @media ${themes.primary.media.minPC} {
      height: 475px;
    }
    @media ${themes.primary.media.minPCFullHD} {
      height: 575px;
    }
    @media ${themes.primary.media.minWidth2200} {
      .swiper {
        overflow: hidden !important;
      }
    }
  }
`;

export const TestimonialsSwiperArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;

  .swiper-button-next,
  .swiper-button-prev {
    right: initial;
    left: initial;
  }

  &.upcoming-products {
    margin-top: 0;
    @media ${themes.primary.media.max767Mobile} {
      gap: 23px;
      .swiper-button-next,
      .swiper-button-prev {
        height: 38px;
        font-size: 14px;
        position: relative;
      }
      .swiper-button-prev {
        width: 38px;
        border: 1.5px solid #8f8e93;
      }
      .swiper-button-next {
        width: 93px;
        border: 1.5px solid black;
      }
    }
    @media ${themes.primary.media.minPCFullHD} {
      .swiper-button-next,
      .swiper-button-prev {
        top: 0;
      }
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    .swiper-button-next,
    .swiper-button-prev {
      height: 50px;
      font-size: 18px;
      position: relative;
      border: 2px solid black;
    }
    .swiper-button-prev {
      width: 50px;
      border: 2px solid #8f8e93;
    }
  }
`;
