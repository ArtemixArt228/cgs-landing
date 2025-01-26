import styled, { keyframes } from "styled-components";
import themes from "../../../../utils/themes";

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
  flex-direction: column;
  gap: 4.5em;
  @media ${themes.primary.media.minBreakpoint1100} {
    flex-direction: row;
    gap: 1.5em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    gap: 4em;
  }
`;

export const HeroSectionContent = styled.div`
  position: relative;

  @media ${themes.primary.media.maxBreakpoint1100} {
    max-width: 100%;
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    max-width: clamp(
      550px,
      calc(550px + (100vw - 1100px) * ((660 - 550) / (1440 - 1100))),
      660px
    );
  }
  @media ${themes.primary.media.min1440} {
    max-width: clamp(
      660px,
      calc(660px + (100vw - 1440px) * ((795 - 660) / (1920 - 1440))),
      795px
    );
  }
  @media ${themes.primary.media.minPCFullHD} {
    max-width: 795px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 135%;
  text-transform: uppercase;
  width: 100%;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;

  p {
    margin: 0;
    padding: 0;
  }

  span {
    color: ${themes.primary.colors.darkBlue};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 26px;
    line-height: 35.1px;
    margin-bottom: 10px;
  }
  @media ${themes.primary.media.minMobilePortrait} {
    padding-right: 28%;
    margin-bottom: 20px;
  }
  @media ${themes.primary.media.min768Mobile} {
    padding-right: 0;
    font-size: 40px;
    line-height: 53.6px;
  }
  @media ${themes.primary.media.min1440} {
    font-size: 40px;
    line-height: 57.2px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 60px;
    line-height: 66px;
    letter-spacing: -0.4px;
    margin-bottom: 26px;
  }
`;

const HighlightingAnimation = keyframes`
    to {
        opacity: 1;
    }
`;

export const Text = styled.div`
  font-weight: ${themes.primary.font.weight.heavy};
  margin-bottom: 48px;
  line-height: 162.5%;

  p {
    margin: 0;
    padding: 0;

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
    margin-bottom: 32px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 62px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 20px;
    line-height: 160%;
    margin-bottom: 42px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
    margin-bottom: 56px;
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

  @media ${themes.primary.media.minBreakpoint1100} {
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

export const HeroSectionImageWrapper = styled.div`
  z-index: -1;
  width: 100%;
  display: flex;
  justify-content: center;
  @media ${themes.primary.media.maxMobile} {
    height: clamp(
      250px,
      calc(250px + (100vw - 375px) * ((282 - 250) / (768 - 375))),
      282px
    );
  }

  @media ${themes.primary.media.min768Mobile} {
    //max-width: 100%;
    height: 282px;
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    width: 570px;
    max-width: 100%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 858px;
  }
`;

export const HeroSectionImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  left: 1.5em;
  top: 6em;
  scale: 1.5;
  height: 338px;
  @media ${themes.primary.media.maxMobile} {
    max-width: 38em;
    top: 7vw;
    left: -13px;
    scale: 1.5;
    width: 100%;
    height: 205px;
  }

  @media ${themes.primary.media.min768Mobile} {
    max-width: 40em;
    top: -21px;
    left: -29px;
    height: 286px;
    scale: 1.5;
    width: 100%;
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    height: 305px;
    max-width: 100%;
    width: 100%;
    top: 49px;
    left: -15px;
    scale: 1.57;
  }
  @media ${themes.primary.media.min1440} {
    height: 329px;
    max-width: 100%;
    width: 100%;
    top: 49px;
    left: -66px;
    scale: 1.57;
  }

  @media ${themes.primary.media.minPCFullHD} {
    scale: 1.25;
    left: 0;
    top: 20px;
    height: 501px;
  }
`;

export const HeroSectionFormSubmitBtn = styled.button`
  font-family: ${themes.primary.font.family.namu};
  position: absolute;
  background-color: ${themes.primary.colors.dropdownHover};

  cursor: pointer;

  text-align: center;
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
  max-width: fit-content;
  border: 1px solid ${themes.primary.colors.greyAdminServices};
  padding: 12px 28px;
  font-size: 1.7em;
  font-weight: ${themes.primary.font.weight.heavy};
  text-align: center;
  transition: all 0.3s;
  left: 0;
  bottom: 0;
  align-self: flex-end;
  white-space: nowrap;
  font-size: 16px;

  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    background-color: black;
    color: white;
  }

  img {
    transition: filter 0.3s;
  }

  &:hover img {
    filter: invert(1) brightness(100);
  }

  span {
    max-width: 22px !important;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 22px;
    padding: 16px 37px;
    span {
      max-width: 36px !important;
    }
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
