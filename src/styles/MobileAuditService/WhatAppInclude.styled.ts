import styled, { css } from "styled-components";

import themes from "../../utils/themes";
import { ILine } from "../../types/Decoration.types";

export const Container = styled.section`
  margin-top: 7.8em;
  position: relative;
  height: 805px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 7em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 0;
    padding-top: 1.75em;
    padding-bottom: 3.6em;
    height: auto;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 1000px;
  }
`;

export const Title = styled.h2`
  font-weight: inherit;
  font-size: 2.5em;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 1em;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 2.32em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 2.5em;
    line-height: 132%;
    width: 15em;
    margin-bottom: 0.6em;
    margin-left: -5px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 1.5em;
  }
`;

export const GradientLineContainer = styled.div`
  position: relative;
  height: 79%;

  @media ${themes.primary.media.minPCFullHD} {
    height: 82.5%;
  }

  @media ${themes.primary.media.maxMobile} {
    left: -6%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    left: -6%;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin-top: 1.9em;
  }

  @media ${themes.primary.media.maxLaptop} {
    height: 76%;
  }

  @media (min-width: 551px) and ${themes.primary.media.maxMobile} {
    height: 876px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    height: 700px;
  }
`;

export const MobileAuditBgiContainer = styled.div<ILine>`
  position: absolute;
  height: 100%;
  width: 24px;
  background: ${({ angle }) =>
    css`radial-gradient(
      80px 50% at 50% ${angle},
      ${themes.primary.colors.mainGradientColor2} ,
      ${themes.primary.colors.mainGradientColor1}
    );`};
  background-size: 100% 100%;
  border: 1px solid ${themes.primary.colors.primary};
  box-shadow: 7px 2px 0px ${themes.primary.colors.primary};

  @media ${themes.primary.media.minPCFullHD} {
    width: 1.6em;
  }

  @media ${themes.primary.media.maxMobile} {
    background: linear-gradient(
      0deg,
      ${themes.primary.colors.mainGradientColor2},
      ${themes.primary.colors.mainGradientColor1}
    );
    width: 28px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    height: 99%;
  }
`;

export const SubtitlesList = styled.div`
  margin-left: 14px;
  height: 97%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${themes.primary.media.maxTabletPortrait} {
    padding-top: 1.5em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 12px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    height: 98%;
  }
`;

export const ListItem = styled.div`
  display: flex;
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 29px;

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.25em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 1.1em;
  }
`;

export const ListText = styled.div`
  position: relative;
  transition: 0.1s linear;

  &:hover {
    color: #5869dd;
  }

  @media ${themes.primary.media.minPCFullHD} {
    line-height: 140%;
    font-size: 0.95em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-left: 3.5em;
  }

  @media (min-width: 551px) and ${themes.primary.media.maxMobile} {
    margin-block: 5px 1.69em;
    font-size: 1.34em;
    & > section:first-child {
      font-size: 1.19em;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin-left: 3.8em;
    & br {
      display: none;
    }
    & > section:first-child {
      font-size: 1.52em;
    }
    section {
      font-size: 1.52em;
    }
  }
`;

export const PointWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 37px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-right: 54px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    &.subtext {
      display: none;
    }
  }
`;

export const PointLine = styled.div`
  width: 70px;
  border-bottom: 1px solid ${themes.primary.colors.primary};

  @media ${themes.primary.media.minPCFullHD} {
    width: 97px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 60px;
  }
`;

export const PointCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${themes.primary.colors.bigDigit};
  border: 1px solid ${themes.primary.colors.primary};
  box-shadow: 7px 2px 0px ${themes.primary.colors.primary};

  @media ${themes.primary.media.maxMobile} {
    width: 17px;
    height: 17px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 12px;
    height: 12px;
  }
`;

export const GlassContainer = styled.div`
  position: absolute;
  right: 17.5%;
  bottom: -2em;
  width: 421px;
  height: 415px;

  @media (min-width: 2561px) {
    top: 45%;
    right: 18%;
  }

  @media (max-width: 2560px) {
    top: 55%;
    right: 19%;
  }

  @media (max-width: 1920px) {
    top: 55%;
    right: 11%;
  }

  @media ${themes.primary.media.maxLaptop} {
    top: 47%;
    right: 17.5%;
  }

  @media (max-width: 1440px) {
    top: 52%;
    right: 17.5%;
  }

  @media (max-width: 1380px) {
    top: 52%;
    right: 12.5%;
  }

  @media (max-width: 1250px) {
    right: 4%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 35%;
    height: 37%;
    bottom: 10%;
    right: 1em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 271px;
    height: 265px;
    right: 3.5em;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    bottom: 0;
    right: 0;
    margin-top: 180px;
    margin-inline: auto;
    height: 300px;
    width: 70%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-top: 200px;
    height: 327px;
    width: 100%;
  }
`;

export const IconContainer = styled.div``;

interface IGlassItem {
  top: number;
  left: number;
  transitionTime: number;
}

export const GlassItem = styled.div.attrs(
  ({ top, left, transitionTime }: IGlassItem) => ({
    style: {
      transform: `translate(${left}px, ${top}px)`,
      transition: `${transitionTime}s ease-out`,
    },
  })
)<IGlassItem>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  left: 30%;
  top: 20%;

  @media (min-width: 2561px) {
    top: 35%;
    left: -90%;
  }

  @media ${themes.primary.media.maxPCTwoThousand} {
    left: -80%;
  }

  @media (max-width: 1920px) {
    left: -10%;
  }

  @media (max-width: 1800px) {
    top: 10%;
    left: 10%;
  }

  @media (max-width: 1560px) {
    top: 13%;
    left: -4%;
  }

  @media ${themes.primary.media.maxLaptop} {
    left: -4%;
  }

  @media (max-width: 1440px) {
    left: 30%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 55%;
    height: 55%;
    left: 3%;
    top: 17%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 60%;
    height: 60%;
    left: 18%;
    top: 23%;
  }

  @media (max-width: 850px) {
    left: 35%;
  }

  @media ${themes.primary.media.maxMobile} {
    top: -10%;
    left: 25%;
  }

  @media (max-width: 475px) {
    left: 20%;
    top: 0;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    top: -5%;
  }
`;

export const IconItems = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 10%;
  margin-top: 7em;
  margin-left: 4em;
  left: -3%;
  column-gap: 6em;
  row-gap: 0em;

  div:nth-child(2) {
    margin-top: -7em;
  }

  div:nth-child(5) {
    margin-top: 7em;
  }

  @media (min-width: 2561px) {
    left: -130%;
    column-gap: 3em;

    div:nth-child(2) {
      margin-top: -4em;
    }

    div:nth-child(5) {
      margin-top: 4em;
    }
  }

  @media ${themes.primary.media.maxPCTwoThousand} {
    width: 150%;
    margin-top: 3em;
    margin-left: -20em;
    column-gap: 5em;

    div:nth-child(2) {
      margin-top: -5em;
    }

    div:nth-child(5) {
      margin-top: 5em;
    }
  }

  @media ${themes.primary.media.maxLaptop} {
    div:nth-child(3) {
      margin-left: 0.5em;
    }
  }

  @media (max-width: 1920px) {
    margin-left: -10em;
  }

  @media (max-width: 1800px) {
    column-gap: 7em;
  }

  @media (max-width: 1560px) {
    width: 100%;
    margin-left: -5em;
    margin-top: 5em;
    column-gap: 6em;
  }

  @media (max-width: 1440px) {
    margin-left: 3em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    column-gap: 4em;
    margin-left: -5em;
    margin-top: 4em;

    div:nth-child(2) {
      margin-top: -5em;
    }

    div:nth-child(5) {
      margin-top: 5em;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-left: 0em;
    column-gap: 3em;

    div:nth-child(2) {
      margin-top: -4em;
    }

    div:nth-child(5) {
      margin-top: 4em;
    }
  }

  @media (max-width: 850px) {
    margin-left: 3em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 90%;
    column-gap: 5em;
    margin-left: 2.5em;
    margin-top: -1em;

    div:nth-child(2) {
      margin-top: -6em;
    }

    div:nth-child(5) {
      margin-top: 6em;
    }
  }

  @media (max-width: 580px) {
    margin-left: 1em;
    column-gap: 3em;

    div:nth-child(2) {
      margin-top: -5em;
    }

    div:nth-child(5) {
      margin-top: 5em;
    }
  }

  @media (max-width: 497px) {
    margin-top: -4em;
    margin-left: 0;
    width: 100%;
    column-gap: 3em;

    div:nth-child(2) {
      margin-top: -4em;
    }

    div:nth-child(5) {
      margin-top: 4em;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    column-gap: 4em;

    div:nth-child(2) {
      margin-top: -5em;
    }

    div:nth-child(5) {
      margin-top: 5em;
    }
  }
`;

export const IconItem = styled.div<{ activeIcon: boolean }>`
  position: relative;
  width: 60px;
  height: 60px;
  margin-bottom: 25%;
  margin-left: 3%;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 50px;
    height: 50px;
  }
  & > span {
    position: absolute !important;
    top: 0;
    left: 0;
    :nth-child(1) {
      opacity: ${({ activeIcon }) => (activeIcon ? 0 : 1)} !important;
    }
    :nth-child(2) {
      opacity: ${({ activeIcon }) => (activeIcon ? 1 : 0)} !important;
    }
  }
`;

export const SubtextContainer = styled.div`
  position: absolute;
  top: 13px;
  right: -43%;
  display: flex;

  @media ${themes.primary.media.minPCFullHD} {
    top: 20px;
    right: -40%;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    top: 19px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    position: relative;
    top: 0;
    right: 0;
    margin-top: 0.5em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 10px;
  }
`;

export const ConectLine = styled.div`
  width: 69px;
  height: 98px;
  border-style: solid;
  border-color: ${themes.primary.colors.primary};
  border-width: 1px 1px 0 0;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 29px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    display: none;
  }
`;

export const SubtextPointLine = styled.div`
  width: 70px;
  border-bottom: 1px solid ${themes.primary.colors.primary};
`;

export const Subtext = styled.div`
  top: -40%;
  left: 90%;
  text-transform: none;
  white-space: nowrap;
  position: absolute;
  font-size: 0.83em;

  @media ${themes.primary.media.minPCFullHD} {
    top: -60%;
    font-size: 0.8em;
    line-height: normal;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    top: 0;
    left: 0;
    position: relative;
    font-size: 0.75em;
    line-height: 20px;
    white-space: pre-wrap;
    max-width: 80%;
    margin-bottom: 0.5em;

    & br {
      display: none;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 0.8em;
    line-height: 19px;
    max-width: 100%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    max-width: none;
  }
`;

export const SubtextWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
`;

export const SubtextContentWrapper = styled.div`
  margin-top: -5.5px;
  margin-bottom: -5.5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: -6px;
  }

  @media (min-width: 2190px) {
    margin-top: -5.5px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin: 0;
  }
`;
