import styled, { css, keyframes } from "styled-components";
import themes from "../../../../utils/themes";

export const FeatureBlockDescription = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  max-width: 93%;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  width: 100%;
  line-height: 24px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;

  @media ${themes.primary.media.maxMobile} {
  }
  @media ${themes.primary.media.min768Mobile} {
  }
  @media ${themes.primary.media.minBreakpoint1100} {
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 20px;
    line-height: 32px;
  }
`;

export const LoadMoreButtonInline = styled.button`
  display: inline;
  border: none;
  background: none;
  color: #5869dd;
  font-size: 15px;
  width: 86px;
  margin-left: 4px;
  font-family: ${themes.primary.font.family.namu};
  float: top;
  padding: 0;
  cursor: pointer;
  text-decoration: underline;
  align-self: flex-end;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 20px;
    width: 120px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  @media ${themes.primary.media.min768Mobile} {
  }
  @media ${themes.primary.media.minPCFullHD} {
    padding: 20px;
    gap: 20px;
  }
`;

export const FeatureBlockTitle = styled.div`
  color: #5869dd;
  font-size: 20px;
  display: flex;
  align-items: center;
  font-family: ${themes.primary.font.family.namu};
  width: 90%;

  @media ${themes.primary.media.maxMobile} {
    height: 36px;
  }
  @media ${themes.primary.media.min768Mobile} {
    height: 36px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
    height: 48px;
  }
`;

export const FeatureCardWrapper = styled.div`
  border: 1px solid #c0bfc0;
  border-radius: 16px;
  width: 100%;
  height: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    margin-top: 24px;
    height: calc(100% - 26px);
  }

  @media ${themes.primary.media.min768Mobile} {
    min-width: 424px;
    height: calc(100% - 24px);
    margin-top: 24px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    min-width: calc(
      clamp(
        324px,
        324px + (100vw - 1100px) * ((424 - 324) / (1440 - 1100)),
        424px
      )
    );
    margin-top: 24px;
    height: calc(100% - 24px);
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 32px;
    height: calc(100% - 32px);
    border-radius: 21.43px;
  }
`;
const expandWidth = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;

export const FeaturesText = styled.div`
  color: #000;
  font-family: ${themes.primary.font.family.namu};
  font-size: 34px;
  font-style: normal;
  font-weight: 900;
  line-height: 160%;
  text-transform: uppercase;
`;

export const TimeIdentifier = styled.div`
  width: 24px;
  height: 6px;
  border-radius: 999px;
  background-color: #b3b1b3;
  overflow: hidden;
`;

export const TimeLoader = styled.div<{ time: number }>`
  height: 6px;
  border-radius: 999px;
  background-color: black;
  ${(props) =>
    props.time > 0
      ? css`
          animation: ${expandWidth} ${props.time}s forwards;
        `
      : css`
          animation: none;
        `}
`;

export const DotsContainer = styled.div`
  display: flex;
  gap: 7px;
  width: 100%;
  justify-content: center;
  margin-top: 11px;
`;

export const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 6px;
`;

export const TestimonialsModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(241, 239, 237, 0.7);
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
  width: 100%;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.mainGradientColor2} 0%,
    ${themes.primary.colors.mainGradientColor1} 100%
  );
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid ${themes.primary.colors.primary};

  @media ${themes.primary.media.minPCFullHD} {
    height: 70px;
  }
`;

export const TestimonialsCrossWrapper = styled.div`
  align-self: flex-end;
  display: block;
  width: 3.33em;
  height: 100%;
  border-left: 1px solid ${themes.primary.colors.primary};
  background: ${themes.primary.colors.grey};
  cursor: pointer;
`;

export const TestimonialsModalVideoContainer = styled.div`
  box-shadow: 0 0 0 0.5px black;
  padding: 1.5em 2em 2em;

  @media ${themes.primary.media.minPCFullHD} {
    padding: 22px 31px 33px;
  }

  @media ${themes.primary.media.maxMobile} {
    box-shadow: none;
    padding: 0.77em 0.67em 0.67em;
  }
`;

export const TestimonialsVideoInfoContainer = styled.div`
  margin-top: 1.3em;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 15px;
  }
`;

export const TestimonialsTitleAndArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${themes.primary.media.minTablet} {
    display: none;
  }
`;

export const TestimonialsTitle = styled.div`
  color: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-size: 3.333em;
  font-weight: 900;
  line-height: 140%;
  text-transform: uppercase;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 52px;
  }
`;

export const TestimonialsInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const TestimonialsHeaderStar = styled.div`
  @media ${themes.primary.media.minPCFullHD} {
    span {
      width: 45px !important;
      height: 45px !important;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    span {
      width: 20px !important;
      height: 20px !important;
    }
  }
`;

export const TestimonialsInfoText = styled.div`
  color: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-size: 1.5em;
  font-style: normal;
  font-weight: 900;
  line-height: 160%; /* 28.8px */
  margin-top: 0.445em;

  &.adminSlide {
    font-size: 10px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 16px;
    font-size: 16px;
  }
`;

export const TestimonialsStarsWrapper = styled.div`
  position: absolute;
  bottom: 0.7em;
  left: 0;
  padding: 0 16px;
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media ${themes.primary.media.onlyTabletLandScape} {
    padding: 0 12px;
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

  span {
    width: 28px !important;
    height: 28px !important;
  }

  @media ${themes.primary.media.minPCFullHD} {
    span {
      width: 37px !important;
      height: 37px !important;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    span {
      width: 20px !important;
      height: 20px !important;
    }
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    span {
      width: 21px !important;
      height: 21px !important;
    }
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

export const HoverBlockTestimonials = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${themes.primary.colors.blogBackground};
  right: -14px;
  bottom: -14px;
  border: 1.5px solid ${themes.primary.colors.primary};
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
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    top: -8px;
    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    border-radius: 0;

    & .slideImage {
      border-radius: 0;
    }
  }
`;

export const TestimonialsSlideImageContainer = styled.div`
  width: 100%;
  height: 23em;
  position: relative;
  display: grid;
  place-items: center;

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

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 193px;
    aspect-ratio: 16 / 10;
  }
`;

export const TestimonialsSwiperContainer = styled.div`
  width: 100%;
  overflow: hidden;

  @media (max-width: 850px) {
    position: relative;
    width: calc(100vw - 40px);
    padding-right: 45px;
  }
  @media (max-width: 767px) {
    width: 100%;
    overflow: hidden;
    padding-right: 0;
  }

  & .mySwiper {
    @media (min-width: 1600px) {
      padding-left: -51px;
    }
  }
  /* .swiper-wrapper,
  .swiper-slide {
    -webkit-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0) !important;
  } */
`;

export const TestimonialsSwiperArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  .swiper-button-next,
  .swiper-button-prev {
    right: initial;
    left: initial;
  }

  @media ${themes.primary.media.min768Mobile} {
    margin-top: 0;
    gap: 16px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
  }
  &.mobile-hidden {
    @media ${themes.primary.media.max767Mobile} {
      display: none;
    }
  }
  &.bottom-buttons {
    justify-content: flex-start;
    gap: 1.2em;
    @media ${themes.primary.media.max767Mobile} {
      margin-top: 13px;
    }
    @media ${themes.primary.media.min768Mobile} {
      display: none;
    }
  }
`;

export const FeaturesContainer = styled.div`
  @media ${themes.primary.media.min1440} {
    margin-top: -50px;
  }
`;
