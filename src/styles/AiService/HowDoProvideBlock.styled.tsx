import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  margin-block: 21.2em 8.5em;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 23.3em;
    height: 74em;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: calc(
      1.5 * ${themes.primary.spacing.servicesGlobalMarginBetweenBlocks}
    );
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-block: 3.75em 111px;
  }
  @media ${themes.primary.media.maxMobile} {
    margin-top: 0em;
    padding-inline: 0;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    margin-top: 2.3em;
  }
`;

export const ItemContainer = styled.div`
  z-index: 2;

  &.first {
    margin-top: 2.7em;
  }

  @media (min-width: 1650px) {
    font-size: 1.1em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.05em;
    &.first {
      margin-top: 3em;
    }
  }

  @media (max-width: 1400px) {
    font-size: 0.9em;
  }

  @media (max-width: 1280px) {
    font-size: 0.8em;
  }

  @media (max-width: 1100px) {
    font-size: 0.7em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1em;
    &.first {
      margin-top: 0.1em;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    &.first {
      margin-top: 0.1em;
    }
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 1em;
    &.first {
      margin-top: 0.1em;
    }
  }
`;

export const ItemTitleContainer = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 1.6em;
  @media ${themes.primary.media.maxTabletPortrait} {
    gap: 1.6em;
    align-items: center;
    margin-top: 1em;
    margin-bottom: 1em;
  }
  @media ${themes.primary.media.maxMobile} {
    /* gap: 1.3em; */
    align-items: center;
    margin-top: 1em;
    margin-bottom: 1em;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    gap: 1.3em;
    align-items: baseline;
    margin-bottom: 1em;
    margin-top: 0.3em;
  }
`;

export const BigDigit = styled.p`
  font-size: 5em;
  color: ${themes.primary.colors.bigDigit};
  -webkit-text-stroke: 1px ${themes.primary.colors.primary};
  text-shadow: 7px 2px 0px ${themes.primary.colors.primary};
  line-height: 100%;
  margin: 0;
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 5.27em;
  }
`;

export const ItemTitle = styled.h4`
  font-size: ${themes.primary.font.size.secondary};
  line-height: 170%;
  margin: 0;
  text-transform: uppercase;
  color: ${themes.primary.colors.darkBlue};

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 2.08em;
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 2em;
    line-height: 175%;
    align-self: center;
    padding-top: 0.3em;
    &.optional {
      margin-top: 0px;
    }
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: ${themes.primary.font.size.oneAndHalf};
    line-height: 115%;
    align-self: flex-end;
    &.optional {
      margin-top: 0px;
    }
  }
`;

export const OptionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.375em;
  margin-top: 7px;
  position: relative;
  top: 13px;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-left: 1em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 0;
    top: 10px;
  }
`;

export const OptionalText = styled.div`
  position: relative;
  top: -15px;
  font-size: 1.125em;
  line-height: 160%;
  color: ${themes.primary.colors.comment};
  opacity: 0;

  &.optional {
    opacity: 1;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    top: 0;
  }
`;

export const Description = styled.div`
  margin-top: 5px;
  font-size: 1.125em;
  line-height: 160%;
  max-width: 34.1em;

  &.first {
    max-width: 32.2em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.2em;
    &.description-1 {
      margin-top: 0.3em;
    }
    &.description-2 {
      margin-top: 0.8em;
    }
    &.description-3 {
      margin-top: 0.6em;
    }
  }

  @media ${themes.primary.media.maxPCFullHD} {
    &.description-1 {
      margin-top: 0.5em;
    }
    &.description-2 {
      margin-top: 0.3em;
      font-size: 1.13em;
      max-width: 37em;
      line-height: 1.6;
    }
    &.description-3 {
      margin-top: 1em;
      font-size: 1.13em;
      line-height: 1.6;
      max-width: 43em;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    max-width: 66vw;
    font-size: 1.13em;

    & br {
      display: none;
    }
    &.description-2 {
      margin-top: 0em;
      max-width: 28em;
      font-size: 1.13em;
    }
    &.description-3 {
      max-width: 86vw;
      max-width: 43em;
      font-size: 1.13em;
    }
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    margin-top: 0em;
    max-width: 31.1em;
    font-size: 1em;
    & br {
      display: none;
    }
    &.description-2 {
      margin-top: 0em;
      font-size: 1em;
    }
    &.description-3 {
      max-width: 86vw;
      font-size: 1em;
    }
  }
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  /* height: 280px;
  width: 562px; */
  width: 27.2vw;
  height: auto;
  aspect-ratio: 1.46/1;
  margin-right: 3.8em;

  @media (min-width: 2200px) {
    height: 380px;
    width: 662px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    height: 180px;
    width: 362px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 45%;
    height: auto;
    aspect-ratio: 1.46/1;
    margin: 2.3em 0 0 30%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 65%;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 71%;
    height: auto;
    aspect-ratio: 1.46/1;
    margin: 1.5em 0 0 29%;
  }
`;

export const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: ${themes.primary.spacing.tertiary};
  margin-top: 3.5em;

  @media ${themes.primary.media.minPCFullHD} {
    height: 600px;
    margin-left: 0em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    height: 600px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 2.9em;
    height: auto;
  }
`;

export const BgImage = styled.img`
  object-fit: contain;
  position: absolute;
  left: -93px;
  width: 110vw;

  @media (min-width: 2560px) {
    width: 100%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    left: -130px;
    top: 0px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    display: none;
  }
`;

export const SubContentWrapper = styled.div`
  margin-inline: 4.5em 3em;
  position: relative;
  top: -8px;
  display: flex;
  justify-content: space-between;
  height: 300px;

  @media (min-width: 1480px) {
    margin-inline: 6em 8em;
    padding-top: 0.2%;
  }

  @media (min-width: 1650px) {
    margin-inline: 6em 12em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding: 0;
    margin-inline: 4.4em 5em;
  }

  @media (min-width: 1920px) {
    padding: 0;
    margin-inline: 4.4em 7em;
  }

  @media (min-width: 2000px) {
    margin-inline: 7em 7em;
  }

  @media (min-width: 2100px) {
    margin-inline: 8em 10em;
  }

  @media (min-width: 2200px) {
    margin-inline: 10em 14em;
  }

  @media (min-width: 2560px) {
    margin-inline: 10em 30em;
  }

  @media (max-width: 1440px) {
    margin-inline: 4em 6.5em;
  }

  @media (max-width: 1400px) {
    margin-inline: 4em 10em;
  }

  @media (max-width: 1350px) {
    margin-inline: 4em 8em;
  }

  /* @media (max-width: 1280px) {
    padding-top: 0.4%;
    margin-inline: 3em 3em;
  } */

  /* @media ${themes.primary.media.maxTabletLandScape} {
    padding-top: 0.2%;
    margin-inline: 2.5em 2em;
  } */

  /* @media (max-width: 1199px) {
    margin-inline: 2.5em 1em;
  } */

  @media (max-width: 1150px) {
    margin-inline: 2.5em 5em;
  }

  /* @media (max-width: 1100px) {
    padding-top: 0;
    margin-inline: 2em 0;
  } */

  @media ${themes.primary.media.maxTabletPortrait} {
    margin: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 1.5em;
    margin-bottom: 28px;
    height: auto;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    row-gap: 2em;
    margin-bottom: 20px;
  }
`;

export const SubContainer = styled.div`
  max-width: 40em;
  font-size: 1.1em;

  @media (min-width: 1601px) {
    font-size: 1.1em;
    &:nth-child(2) {
      margin-top: 60px;
    }
  }

  @media (min-width: 1800px) {
    &:nth-child(2) {
      margin-top: 75px;
    }
  }

  @media (min-width: 2200px) {
    &:nth-child(2) {
      margin-top: 4em;
    }
  }

  @media (max-width: 1600px) {
    /* max-width: 513px; */
    &:nth-child(2) {
      margin-top: 3em;
    }
  }

  @media (max-width: 1400px) {
    font-size: 0.9em;
    &:nth-child(2) {
      margin-top: 3.5em;
    }
  }

  @media (max-width: 1280px) {
    font-size: 0.8em;
    max-width: 450px;
    &:nth-child(2) {
      margin-top: 3.5em;
    }
  }

  @media (max-width: 1100px) {
    font-size: 0.7em;
    max-width: 400px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    max-width: 72vw;
    font-size: 1.13em;
    & br {
      display: none;
    }
    &:nth-child(2) {
      margin-top: 0em;
    }
  }
  /* &:last-child {
    margin-right: 15px;
  } */
  @media (max-width: 685px) {
    position: relative;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 1em;
    max-width: 400px;
  }
`;

export const SubTitle = styled.div`
  font-size: ${themes.primary.font.size.oneAndHalf};
  color: ${themes.primary.colors.darkBlue};
  margin-bottom: 0.67em;
  position: relative;

  @media ${themes.primary.media.minPCFullHD} {
    letter-spacing: 1px;
    margin-bottom: 0.87em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    max-width: 72vw;
    display: flex;
    column-gap: 28px;
    letter-spacing: 1.2;

    left: -20px;
    margin-bottom: 0em;
    margin-left: -0.6em;
    height: 2.6em;
    font-size: 1.33em;
    line-height: 160%;
    align-items: flex-start;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    max-width: 85vw;
    letter-spacing: 1.2px;
    column-gap: 15px;
    font-size: 1.13em;
    margin-left: 0;
    margin-bottom: 1.5em;
    line-height: 160%;
  }
`;

export const SubText = styled.div`
  font-size: 1.02em;
  line-height: 160%;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.15em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: -0.6em;
    font-size: 1em;
    padding-left: 2.5em;
  }
  @media (max-width: 685px) {
    margin-top: 1em;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 1em;
    padding-left: 0em;
    margin-top: 0;
  }
`;

export const SecondSubtitleContainer = styled.div`
  margin-top: 76px;

  @media (min-width: 2000px) {
    margin-top: 110px;
  }

  @media (max-width: 1920px) {
    margin-top: 70px;
  }

  @media (max-width: 1800px) {
    margin-top: 2em;
  }

  @media (max-width: 1600px) {
    margin-top: -0.7em;
  }

  @media (max-width: 1440px) {
    margin-top: -1.5em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: -5.5em;
  }

  @media (max-width: 1100px) {
    margin-top: -6.5em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 0.1em;
  }
`;

export const ThirdSubtitleContainer = styled.div`
  position: relative;
  top: -50px;
  margin-left: 54.9%;

  @media ${themes.primary.media.minPC} {
    top: -3%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    top: -9%;
  }

  @media (min-width: 2400px) {
    top: 0;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    top: 0;
    margin: 43px 0 0 0;
  }
`;

export const MobilePointWrapper = styled.div`
  display: none;

  @media ${themes.primary.media.maxTabletPortrait} {
    display: flex;
    align-items: center;
    align-self: flex-end;
    margin-top: 0.4em;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    display: flex;
    align-items: center;
    align-self: auto;
    margin-top: 0.4em;
  }
`;

export const PointLine = styled.div`
  width: 56px;
  margin-left: -20px;
  border-bottom: 2px solid ${themes.primary.colors.comment};
  @media ${themes.primary.media.maxTabletPortrait} {
    width: 113px;
    margin-left: -77px;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    width: 36px;
    margin-left: 0px;
  }
`;

export const PointDiamond = styled.div`
  width: 21px;
  height: 21px;
  background-color: ${themes.primary.colors.bigDigit};
  box-shadow: 7px 2px 0px ${themes.primary.colors.primary};
  border: 0.951684px solid ${themes.primary.colors.primary};
  border-radius: 50%;

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 16px;
    height: 16px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 12px;
    height: 12px;
  }
`;
