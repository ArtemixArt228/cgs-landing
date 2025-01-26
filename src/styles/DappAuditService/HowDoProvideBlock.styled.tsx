import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  margin-block: 10.5em 6.6em;

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: 5em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-block: 3.75em 111px;
  }
`;

export const ItemContainer = styled.div`
  z-index: 2;

  &.first {
    margin-top: 0.3em;
  }

  @media (min-width: 1650px) {
    font-size: 1.1em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.05em;
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
      margin-top: 1em;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    &.first {
      margin-top: 0.1em;
    }
  }
`;

export const ItemTitleContainer = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;

  &.gapBottom {
    margin-bottom: 0.75em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    &.gapBottom {
      margin-bottom: 0px;
    }
  }
`;

export const BigDigit = styled.div`
  font-size: 5em;
  color: ${themes.primary.colors.bigDigit};
  -webkit-text-stroke: 1px ${themes.primary.colors.primary};
  text-shadow: 7px 2px 0px ${themes.primary.colors.primary};
  line-height: 120%;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 5.26em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 5em;
  }
`;

export const ItemTitle = styled.h4`
  font-size: ${themes.primary.font.size.secondary};
  line-height: 170%;
  margin: 0;
  text-transform: uppercase;
  color: ${themes.primary.colors.darkBlue};

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 2.1em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 2em;
    line-height: 115%;
    margin-top: 20px;

    &.optional {
      margin-top: 0px;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: ${themes.primary.font.size.oneAndHalf};
  }
`;

export const OptionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.375em;
  margin-top: 5px;
  position: relative;
  top: 13px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 20px;
  }

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
    margin-top: 0;
    font-size: 1.195em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.15em;
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 1em;
  }
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 0.5em;

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 280px;
  width: 562px;
  margin-right: 3.5625em;

  @media (min-width: 1800px) {
    height: 375px;
    width: 720px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    height: 180px;
    width: 362px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 50px;
    height: 230px;
    width: 100%;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin-top: 0;
    width: 100%;
    height: 180px;
  }
`;

export const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 1.15em;

  @media ${themes.primary.media.maxTabletLandScape} {
    height: 600px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 3.125em;
    height: auto;
  }
`;

export const BgImage = styled.img`
  object-fit: contain;
  position: absolute;
  left: -51px;
  width: 100vw;

  @media (min-width: 1800px) {
    left: -70px;
  }

  @media (min-width: 2560px) {
    width: 100%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    display: none;
  }
`;

export const SubContentWrapper = styled.div`
  margin-inline: 4.5em 6em;
  position: relative;
  top: -8px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (min-width: 1650px) {
    margin-inline: 5em 9em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding: 0;
    margin-inline: 5em 7.4em;
  }

  @media (min-width: 2000px) {
    margin-inline: 7em 8em;
  }

  @media (min-width: 2400px) {
    margin-inline: 7em 10em;
  }

  @media (min-width: 2560px) {
    margin-inline: 6% 16%;
  }

  @media (max-width: 1400px) {
    margin-inline: 3em 6em;
  }

  @media (max-width: 1300px) {
    margin-inline: 4em 1em;
  }

  @media (max-width: 1280px) {
    padding-top: 0.4%;
    margin-inline: 3em 6em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-top: 0.2%;
    margin-inline: 3em 5em;
  }

  @media (max-width: 1100px) {
    padding-top: 5px;
    margin-inline: 2.8em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 20px;
    margin-bottom: 19px;
  }
`;

export const SubContainer = styled.div`
  max-width: 32.3em;

  &:last-child {
    margin-right: 15px;
  }

  @media (min-width: 1650px) {
    font-size: 1.1em;
  }

  @media (max-width: 1400px) {
    font-size: 0.9em;
  }

  @media (max-width: 1280px) {
    font-size: 0.8em;
  }

  @media (max-width: 1100px) {
    font-size: 0.7em;

    &:last-child {
      margin-right: 4.2em;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1em;
    & br {
      display: none;
    }
  }
`;

export const SubTitle = styled.div`
  font-size: ${themes.primary.font.size.oneAndHalf};
  color: ${themes.primary.colors.darkBlue};
  margin-bottom: 0.95em;
  position: relative;

  @media ${themes.primary.media.minPCFullHD} {
    margin-bottom: 0.9em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    display: flex;
    font-size: 1.125em;
    left: -51px;
    column-gap: 15px;
  }

  @media ${themes.primary.media.maxMobile} {
    left: -25px;
    font-size: 1.65em;
    column-gap: 0;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    left: -20px;
    font-size: 1.125em;
    column-gap: 15px;
  }
`;

export const SubText = styled.div`
  font-size: 1.125em;
  line-height: 160%;

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.1em;
    margin-left: 45px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 1em;
    margin-left: 0;
  }
`;

export const SecondSubtitleContainer = styled.div`
  margin-top: 70px;

  @media (min-width: 1800px) {
    margin-top: 95px;
  }

  @media (min-width: 2000px) {
    margin-top: 150px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: 50px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: -1.75em;
  }
`;

export const ThirdSubtitleContainer = styled.div`
  position: relative;
  top: -65px;
  margin-left: 55.5%;

  @media ${themes.primary.media.minPC} {
    top: -80px;
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
    margin: 14px 0 0 0;
  }
`;

export const MobilePointWrapper = styled.div`
  display: none;

  @media ${themes.primary.media.maxTabletPortrait} {
    display: flex;
    align-items: center;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    left: -25px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    left: 0;
  }
`;

export const PointLine = styled.div`
  width: 30px;
  border-bottom: 1px solid ${themes.primary.colors.comment};

  @media ${themes.primary.media.maxMobile} {
    width: 50px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 30px;
  }
`;

export const PointDiamond = styled.div`
  width: 21px;
  height: 21px;
  transform: rotate(45deg);
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.mainGradientColor1} 13.67%,
    ${themes.primary.colors.mainGradientColor2} 90.39%
  );

  box-shadow: 5.41609px 1.54745px 0px ${themes.primary.colors.primary};

  border: 0.951684px solid ${themes.primary.colors.primary};

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 19px;
    height: 19px;
  }
`;
