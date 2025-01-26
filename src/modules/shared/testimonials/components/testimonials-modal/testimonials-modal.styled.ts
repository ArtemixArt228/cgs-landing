import styled from "styled-components";

import themes from "../../../../../utils/themes";

export const ContentWrapper = styled.div`
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @media ${themes.primary.media.max1199} {
    height: calc(100vh - 140px);
    padding-bottom: 90px;
  }
  @media ${themes.primary.media.maxMobile} {
    height: calc(100vh - 283px);
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    height: calc(100vh - 215px);
  }

  @media (max-width: 470px) {
    height: calc(100% - 95px);
  }

  @media ${themes.primary.media.minLaptop} {
    overflow-y: visible;
  }
`;

export const HeroSectionMobileFormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: ${themes.primary.colors.grey};
  z-index: 9999;
  height: 100vh;

  @media ${themes.primary.media.minLaptop} {
    background-color: #00000066;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: visible;
  }
`;

export const PlayerWrapper = styled.div`
  & .react-player {
    border-radius: 10px;
    overflow: hidden;
    width: 100%;

    @media ${themes.primary.media.maxMobile} {
      height: calc(
        clamp(
          193px,
          193px + (100vw - 375px) * ((388 - 193) / (768 - 375)),
          388px
        )
      ) !important;
    }
    @media ${themes.primary.media.min768Mobile} {
      height: calc(
        clamp(
          388px,
          388px + (100vw - 768px) * ((488 - 388) / (1200 - 768)),
          488px
        )
      ) !important;
    }

    @media ${themes.primary.media.minLaptop} {
      height: calc(
        clamp(
          340px,
          340px + (100vw - 1440px) * ((408 - 388) / (1800 - 1440)),
          408px
        )
      ) !important;
    }

    @media ${themes.primary.media.minPCFullHD} {
      height: 408px !important;
    }
  }
`;

export const TestimonialsVideoInfoContainer = styled.div`
  margin-top: 1.3em;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 15px;
  }
`;

export const TestimonialsInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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

export const TestimonialsHeaderStar = styled.div`
  display: flex;
  flex-wrap: nowrap;
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
export const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 0 40px;
  position: relative;

  @media ${themes.primary.media.max1199} {
    height: calc(100vh - 40px);
  }
  @media ${themes.primary.media.maxMobile} {
    height: calc(100vh - 183px);
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    height: calc(100vh - 115px);
  }

  @media (max-width: 470px) {
    height: 100%;
  }

  @media ${themes.primary.media.minLaptop} {
    overflow-y: visible;

    &.meet {
      min-width: 600px;
    }
  }

  .calendly-overlay {
    position: relative;
    background: transparent;
    height: 459px;
    width: 100%;
    bottom: 0;
    border: 10px solid red;
    margin-top: -20px;

    .calendly-close-overlay {
      display: none;
    }

    .calendly-popup-close {
      display: none !important;
    }

    .calendly-popup {
      .calendly-popup {
        position: relative;
        top: 0;
        height: 100%;
        width: 100%;
        max-width: 100%;
        min-width: 100%;
      }
    }
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 0 16px;
  }
  @media ${themes.primary.media.min768Mobile} {
    padding: 0 40px;
  }

  @media ${themes.primary.media.minLaptop} {
    background-color: ${themes.primary.colors.grey};
    width: 57%;
    height: unset;
    padding: 0 40px 40px 40px;
    border: 1px solid ${themes.primary.colors.black};
    border-radius: 20px;
    position: relative;
    overflow-y: visible;
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: 42%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;

  > span {
    cursor: pointer;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 16px 0;
    margin-bottom: 12px;
  }

  @media ${themes.primary.media.minLaptop} {
    justify-content: flex-end;
    padding: 0;
    margin: 6px -32px 0 0;
  }
`;

export const CloseButton = styled.button`
  border: none;
  padding: 12px;
  background-color: transparent;
  cursor: pointer;

  @media ${themes.primary.media.minLaptop} {
    padding-bottom: 0;
  }
`;

export const HoverBlock = styled.div`
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
  border-radius: 20px;

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

export const HoverBlackBlock = styled.div`
  height: 50%;
  width: 100%;
  outline: 1.5px solid ${themes.primary.colors.primary};
  background-color: black;

  @media ${themes.primary.media.maxMobile} {
    outline: 1.5px solid ${themes.primary.colors.primary};
  }

  border-radius: 0 0 20px 20px;
`;

export const FooterContainer = styled.div`
  position: relative;
  margin-top: auto;

  @media ${themes.primary.media.maxLowScreenMobile} {
    min-height: 50px;
  }
  @media ${themes.primary.media.minLaptop} {
    display: none;
  }
`;

export const FooterWrapper = styled.div``;
