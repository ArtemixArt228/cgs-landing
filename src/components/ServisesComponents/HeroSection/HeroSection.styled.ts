import styled, { keyframes } from "styled-components";
import themes from "../../../utils/themes";

export const arrowOne = keyframes`
    0% {
        transform: translate(-36px, 36px);
    }
    100% {
        transform: translate(0px, 0px);;
    }
`;

export const arrowTwo = keyframes`
    0% {
        transform: translate(0px, 0px);
    }
    100% {
        transform: translate(36px, -36px);
    }
`;

export const HeroSectionContainer = styled.section`
  font-family: ${themes.primary.font.family.namu};
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 1.5em;
  flex-direction: column;

  @media ${themes.primary.media.maxMobile} {
    gap: 2em;
  }

  @media ${themes.primary.media.min768Mobile} {
    gap: 0;
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    flex-direction: row;
  }
`;

export const HeroSectionContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 64px;
  @media ${themes.primary.media.maxTabletPortrait} {
    max-width: 100%;
  }

  @media ${themes.primary.media.maxMobile} {
    max-width: 100%;
    margin-top: 32px;
    gap: 32px;
  }
  @media ${themes.primary.media.min768Mobile} {
    gap: 40px;
    margin-top: 40px;
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    margin-top: 60px;
    max-width: clamp(
      500px,
      calc(500px + (100vw - 992px) * ((700 - 500) / (1400 - 992))),
      700px
    );
  }

  @media ${themes.primary.media.min1440} {
    max-width: clamp(
      672px,
      calc(672px + (100vw - 1440px) * ((1100 - 672) / (1920 - 1440))),
      1100px
    );
    gap: 42px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    max-width: 848px;
    margin-top: 121px;
    gap: 56px;
  }
`;
export const HeroSectionText = styled.div`
  display: flex;
  flex-direction: column;
  @media ${themes.primary.media.maxMobile} {
    gap: 12px;
  }
  @media ${themes.primary.media.min768Mobile} {
    gap: 20px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 26.67px;
  }
`;
export const Title = styled.h1`
  p {
    margin: 0;
  }
  font-weight: ${themes.primary.font.weight.heavy};
  text-transform: uppercase;
  color: ${themes.primary.colors.jetBlack};
  width: 100%;
  margin: 0;
  @media ${themes.primary.media.maxMobile} {
    font-size: 26px;
    line-height: 135%;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 40px;
    word-spacing: normal;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 52px;
    line-height: 110%;
    letter-spacing: -0.3px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 60px;
    line-height: 66px;
    padding-right: 3em;
    letter-spacing: -0.4px;
  }
`;

const HighlightingAnimation = keyframes`
    to {
        opacity: 1;
    }
`;

export const Text = styled.div`
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 162.5%;

  p {
    margin: 0;
    & > span {
      opacity: 1;
      position: relative;
      margin: 0;
      padding: 4px 5px;

      & > span:first-child {
        position: relative;
        z-index: 2;
        white-space: nowrap;
      }

      & > span:nth-child(2) {
        color: transparent;
        border-radius: 6px;
        background: linear-gradient(360deg, #cacde9 0%, #e4e4ee 100%);
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        margin: 0;
        left: 0;
        box-shadow: 0 0 8px 0 #233ce126;
        top: 0;
        animation: 1.5s ${HighlightingAnimation} 1.5s 1 normal forwards;
      }
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 18px;
    line-height: 160%;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 20px;
    line-height: 160%;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
    line-height: 38.4px;
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

export const HeroSectionBtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const HeroSectionImageContainer = styled.div`
  position: relative;
  z-index: -1;
  height: 100%;
  display: flex;
  @media ${themes.primary.media.max767Mobile} {
    align-self: center;
    width: calc(
      clamp(357px, 357px + (100vw - 375px) * ((559 - 357) / (768 - 375)), 559px)
    );
    height: calc(
      clamp(330px, 330px + (100vw - 375px) * ((565 - 330) / (768 - 375)), 565px)
    );
    top: 18px;
    right: 7px;
    & span {
      scale: 1.02;
    }
  }

  @media ${themes.primary.media.min768Mobile} {
    align-self: center;
    width: calc(
      clamp(
        559px,
        559px + (100vw - 768px) * ((643 - 559) / (1440 - 768)),
        643px
      )
    );
    height: 491px;
    top: 13px;
    right: 13px;
    & span {
      scale: 1.1;
    }
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    width: calc(
      clamp(
        500px,
        500px + (100vw - 1100px) * ((643 - 500) / (1400 - 1100)),
        643px
      )
    );

    height: calc(
      clamp(
        420px,
        420px + (100vw - 1100px) * ((493 - 420) / (1440 - 1100)),
        493px
      )
    );
  }

  @media ${themes.primary.media.min1440} {
    align-self: flex-end;

    width: calc(
      clamp(
        643px,
        643px + (100vw - 1440px) * ((720 - 643) / (1920 - 1440)),
        720px
      )
    );
    height: calc(
      clamp(
        493px,
        493px + (100vw - 1440px) * ((700 - 493) / (1920 - 1440)),
        700px
      )
    );
    width: 643px;
    height: 493px;
    top: 51px;
    right: 24px;
    & span {
      scale: 1.27;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    top: 79px;
    left: 2px;
    width: 858px;
    height: 634px;
    & span {
      scale: 1.2;
    }
  }
`;

export const HeroSectionFormSubmitBtn = styled.button`
  font-family: ${themes.primary.font.family.namu};
  position: absolute;
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.primary};
  width: 80%;
  border: 2px solid ${themes.primary.colors.primary};
  cursor: pointer;
  padding: 15px 17px 15px 17px;
  font-size: 20px;
  font-weight: ${themes.primary.font.weight.heavy};
  text-align: center;
  text-transform: uppercase;
  transition: all 0.3s;
  bottom: 57px;
  left: 50px;
  border-radius: 10px;

  &:hover {
    & path:nth-child(1) {
      animation: ${arrowOne} 1s 1 forwards ease-in-out;
    }
    & path:nth-child(2) {
      animation: ${arrowTwo} 1s 1 forwards ease-in-out;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    left: 70px;
    font-size: 27px;
    bottom: 40px;
    height: 75px;
  }
`;

export const HeroSectionBtn = styled(HeroSectionFormSubmitBtn)`
  position: relative;
  max-width: 13em;
  border: 2px solid ${themes.primary.colors.primary};
  font-weight: ${themes.primary.font.weight.heavy};
  text-align: center;
  text-transform: uppercase;
  transition: all 0.3s;
  left: 0;
  bottom: 0;
  align-self: flex-end;

  &:hover {
    & path:nth-child(1) {
      animation: ${arrowOne} 1s 1 forwards ease-in-out;
    }
    & path:nth-child(2) {
      animation: ${arrowTwo} 1s 1 forwards ease-in-out;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    line-height: 15.84px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 20px;
    line-height: 19.8px;
  }
  @media ${themes.primary.media.onlyLaptopL} {
    max-width: 254px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 26.67px;
    line-height: 26.4px;
    max-width: 338px;
  }
`;

export const ContentModal = styled.div`
  height: 70%;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  max-width: 580px;
  margin: 0 auto;

  @media ${themes.primary.media.maxTablet} {
    max-width: 580px;
  }
`;
