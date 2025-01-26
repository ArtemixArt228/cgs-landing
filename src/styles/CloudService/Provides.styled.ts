import styled, { css } from "styled-components";
import { ISlide } from "../../types/Decoration.types";
import themes from "../../utils/themes";
import { slideRight } from "../Animations.styled";

export const Container = styled.section`
  margin-top: 6.2em;
  position: relative;
  margin-bottom: 10.2em;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 5.5em;
    margin-bottom: 8.6em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    h2 {
      line-height: 132%;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    padding-bottom: 3.75em;
    margin-block: 1.875em 3em;

    ::after {
      content: "";
      height: 1px;
      position: absolute;
      background-color: ${themes.primary.colors.headerBorder};
      width: 130%;
      bottom: 0;
      left: -10%;
    }

    &.withoutShowcase {
      &::after {
        height: 0px;
      }
      margin-bottom: 0;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    padding-bottom: 3.75em;
    margin-block: 1.875em 3em;
  }
`;

export const BGImage = styled.img`
  position: absolute;
  width: 96.5625em;
  left: -8vw;
  top: 0.5em;

  @media ${themes.primary.media.minPCFullHD} {
    width: 85em;
    top: -1em;
  }

  @media ${themes.primary.media.maxPCFullHD} {
    top: -0.5em;
  }

  @media (min-width: 1900px) {
    width: 93em;
    top: -1em;
  }

  @media (max-width: 1400px) {
    left: -9.5vw;
    width: 85.5625em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    display: none;
  }
`;

export const BGImageMobile = styled.img`
  display: none;
  @media ${themes.primary.media.maxTabletLandScape} {
    display: block;
    position: absolute;
    left: -3.2em;
    top: 3.5em;
    height: 41em;
  }

  @media ${themes.primary.media.maxMobile} {
    top: 6.5em;
    left: -1.5em;
    height: 55em;
    z-index: -1;
    scale: 1.075;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    top: 3.5em;
    left: -1.2em;
    height: 44em;
  }
`;

export const BlockWrapper = styled.div`
  padding: 2em 0 0 11.5vw;
  position: relative;
  display: grid;
  row-gap: 50px;

  @media ${themes.primary.media.minPCFullHD} {
    padding-top: 1.75em;
    row-gap: 40px;
  }

  @media (min-width: 1900px) {
    row-gap: 62.5px;
  }

  @media (min-width: 2200px) {
    row-gap: 60px;
  }

  @media (max-width: 1400px) {
    padding-left: 9em;
    row-gap: 56px;
    font-size: 0.8em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 1.5em 0 0;
    row-gap: 95px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 100px 0 0;
    row-gap: 115px;
    width: 100%;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    padding: 60px 0 0;
    row-gap: 70px;
    width: 100%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 55px 0em 0;
    row-gap: 60px;
  }

  @media (max-width: 344px) {
    row-gap: 50px;
  }
`;

export const Block = styled.div<ISlide>`
  position: relative;
  opacity: 0;

  &.scrolled {
    animation: ${({ ind }) => css`
      ${slideRight} 1.5s ${ind * 200}ms forwards
    `};
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-bottom: 0;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    position: static;
  }
  @media ${themes.primary.media.maxMobile} {
    min-height: 150px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    min-height: 140px;
  }

  & p {
    margin: 0;
  }

  &:nth-child(1) {
    left: 0;
  }

  &:nth-child(2) {
    left: 16.8vw;
    @media ${themes.primary.media.maxLowScreenMobile} {
      min-height: 188px;
    }
  }

  &:nth-child(3) {
    left: 44.5vw;
    margin-bottom: 0;

    @media ${themes.primary.media.maxTabletLandScape} {
      left: 32em;
    }

    @media ${themes.primary.media.maxTabletPortrait} {
      left: 26em;
    }
  }
`;

export const Title = styled.p`
  font-size: 2em;
  margin: 0;

  br {
    display: none;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.875em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 2.5em;
    max-width: 100%;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 1.6em;
    max-width: 14em;

    br {
      display: block;
    }
  }
`;

export const Description = styled.div`
  font-size: 1.125em !important;
  margin-top: 1.28em;
  line-height: 160%;
  max-width: 26.39em;

  @media (max-width: 1300px) {
    & p {
      display: inline;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    & p {
      display: inline;

      &::after {
        content: " ";
      }
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.425em !important;
    max-width: 65%;
    margin-top: 1.15em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 1.25em !important;
    max-width: 100%;
    margin-top: 0.81em;
  }
`;
