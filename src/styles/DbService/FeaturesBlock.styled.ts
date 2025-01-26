import styled, { css } from "styled-components";
import { ISlide } from "../../types/Decoration.types";
import themes from "../../utils/themes";
import { slideDownText } from "../Animations.styled";

export const Container = styled.section`
  position: relative;
  width: 100%;
  margin-top: 1.875em;

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    margin-top: 62.5px;
    ::after {
      content: "";
      height: 1px;
      position: absolute;
      background-color: ${themes.primary.colors.headerBorder};
      width: 130%;
      bottom: -128px;
      left: -10%;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin-top: 50px;
  }
`;

export const Title = styled.h2`
  margin: 5.5em 0 0;
  line-height: 140%;
  font-size: 2.5em;
  text-transform: uppercase;
  width: fit-content;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 2.32em;
    margin-top: 5.6em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 2.5em;
    line-height: 132%;
    margin-top: 4.4em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 1.5em;
    margin-top: 112.5px;
  }
`;

export const Subtitle = styled.h2`
  margin: 0;
  font-size: 1.875em;
  line-height: 1.2;
  width: fit-content;
  margin-bottom: 0.5;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.975em;
  }

  @media ${themes.primary.media.maxMobile} {
    position: absolute;
    top: -28px;
    left: -48px;
    font-size: 24px;
    line-height: 24px;
    margin: 0;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    position: absolute;
    top: -28px;
    left: -48px;
    font-size: 20px;
    line-height: 24px;
    margin: 0;
  }
`;

export const TextContent = styled.div<ISlide>`
  font-size: 1.125em;
  line-height: 160%;
  padding-top: 1.11em;
  max-width: 40em;
  opacity: 0;

  &:nth-child(n + 3) {
    padding-top: 1.45em;
  }

  @media (min-width: 1560px) {
    &:nth-child(n + 3) {
      padding-top: 1.95em;
    }
  }

  @media (min-width: 1800px) {
    font-size: 1.1875em;
    padding-top: 1em;

    &:nth-child(n + 3) {
      padding-top: 1.45em;
    }
  }

  @media (min-width: 2200px) {
    &:nth-child(2) {
      padding-top: 0.5em;
    }
    &:nth-child(n + 3) {
      padding-top: 2.3em;
    }
  }

  @media (min-width: 2200px) {
    &:nth-child(2) {
      padding-top: 0.5em;
    }
    &:nth-child(n + 3) {
      padding-top: 2.3em;
    }
  }

  &.scrolled {
    transform-origin: top center;
    animation: ${({ ind }) =>
      css`
        ${slideDownText} 700ms ${ind * 100}ms ease-in forwards
      `};
  }

  & span {
    &:nth-child(1) {
      color: ${themes.primary.colors.darkBlue};
    }
  }

  @media (max-width: 1300px) {
    padding-top: 0.5em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-top: 0.5em;
  }

  @media (max-width: 1150px) {
    padding-top: 0.5em;
  }

  @media (max-width: 1100px) {
    padding-top: 0.5em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.3em;
    width: 17em;

    &:not(:first-child) {
      padding-top: 2.1em;
    }

    &:nth-child(n + 3) {
      padding-top: 3em;
    }

    &:nth-child(2) {
      padding-top: 1.5em;
    }

    & span:not(:first-child) {
      font-size: 0.875em;
      & > br {
        display: none;
      }
    }
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 20px;
    line-height: 32px;
    width: 100%;

    &:not(:first-child) {
      padding-top: 1.3em;
      width: 70%;
    }

    &:nth-child(2) {
      padding-top: 38px;
    }
  }

  @media (max-width: 767px) {
    width: 100%;

    &:not(:first-child) {
      padding-top: 1.1em;
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22.4px;
    padding-top: 14px;

    &:nth-child(2) {
      padding-top: 14px;
      width: 100%;
    }
  }
`;

export const ContentWrapper = styled.div`
  padding-left: 7.4em;
  padding-right: 6.25em;
  display: flex;
  column-gap: 20vw;
  z-index: 5;

  @media (min-width: 1550px) {
    padding-left: 7em;
    column-gap: 12vw;
    padding-top: 7px;
    & span:not(:first-child) br {
      display: none;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-top: 0;
    padding-left: 7.8em;
    padding-right: 5.25em;
    font-size: 0.9em;
  }

  @media (min-width: 1900px) {
    column-gap: 12.75vw;
  }

  @media (min-width: 2200px) {
    font-size: 0.9em;
    padding-left: 9.25em;
    column-gap: 15vw;
    padding-top: 1.5em;
  }

  @media (max-width: 1450px) {
    column-gap: 13em;
    justify-content: start;
    padding-right: 3em;
  }

  @media ${themes.primary.media.maxServiceMobile} {
    display: flex;
    justify-content: space-between;
    column-gap: 15em;
    & span:not(:first-child) br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxServiceWeb} {
    font-size: 0.9em;
    padding-right: 0em;
    column-gap: 12vw;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-inline: 0;
    column-gap: 15%;
    padding-top: 11px;

    padding-left: 2.5em;
  }

  @media (max-width: 1100px) {
    font-size: 0.8em;
    padding-left: 0;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;
    row-gap: 8em;
    padding: 0 0 0 2.75em;
  }

  @media ${themes.primary.media.maxMobile} {
    max-width: 100%;
    row-gap: 5.5em;
    padding: 0 0 0 3.75em;
    padding-bottom: 30px;
    position: relative;
  }
`;

export const BgImage = styled.img`
  position: absolute;
  top: -1em;
  left: -9.5vw;
  width: 116.5vw;
  z-index: -1;

  @media ${themes.primary.media.maxPCFullHD} {
    /* top: -1.1em; */
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 140%;
    left: -12em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    display: none;
  }
`;

export const BgImageMobile = styled.img`
  display: none;
  @media ${themes.primary.media.maxTabletPortrait} {
    position: absolute;
    display: block;
    width: 525px;
    height: 1129px;
    left: -3.3em;
    top: -1em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 65%;
    height: auto;
    position: absolute;
    display: block;
    left: -2.4em;
    top: 3em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: auto;
    height: auto;
    position: absolute;
    display: block;
    left: -1.3em;
    top: 1.26em;
  }
`;
