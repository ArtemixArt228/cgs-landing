import styled from "styled-components";
import themes from "../../../../../utils/themes";

interface ISliderProps {
  isReverse: boolean;
}

export const SliderWrapper = styled("div")<ISliderProps>`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 335px;
  height: 100%;

  transform: ${({ isReverse }) => (isReverse ? "rotate(180deg)" : "none")};

  .swiper-wrapper {
    transition-timing-function: linear;
  }

  .swiper {
    width: 100%;
    height: 383px;
    overflow: visible;
  }

  .swiper-slide {
    width: 335px;
    transform: ${({ isReverse }) => (isReverse ? "rotate(180deg)" : "none")};
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 447.5px;

    .swiper-slide {
      width: 447.5px;
    }

    .swiper {
      width: 100%;
      height: 511px;
      overflow: visible;
    }
  }

  @media ${themes.primary.media.maxServiceWeb} {
    margin-left: -61px;
    width: 130%;
  }

  @media ${themes.primary.media.minServiceWeb} {
    .swiper {
      width: 100%;
      height: 100%;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;

    .swiper {
      width: 100%;
      height: 724px;
    }

    .swiper-slide {
      width: 768px;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    position: relative;

    .swiper {
      width: 100%;
      height: 383px;
    }

    .swiper-slide {
      width: 335px;
    }
  }
`;
