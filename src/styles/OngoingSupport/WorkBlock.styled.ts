import styled, { css } from "styled-components";
import { ISlide } from "../../types/Decoration.types";
import themes from "../../utils/themes";
import { slideRight } from "../Animations.styled";

export const Container = styled.section`
  margin-top: 14.95em;
  display: flex;
  gap: 10px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 14.14em;
  }

  @media ${themes.primary.media.maxMobile} {
    display: block;
    margin-top: -4.8em;
    gap: 0;
    justify-content: initial;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    display: block;
    margin-top: 2.6em;
  }
`;

export const Title = styled.h2`
  font-weight: inherit;
  max-width: 9.2em;
  font-size: 2.5em;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;

  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.oneAndHalf};
    display: none;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 1800px) {
    & > div {
      margin-left: 1.5em;
      p:nth-child(1) {
        padding-left: 0.4em;
      }
      p:nth-child(2) {
        max-width: 99%;
        padding-left: 0.5em;
        font-size: 0.892855em;
        padding-top: 0.2em;
      }
    }
    & > div:nth-child(3) {
      p {
        img {
          min-width: 0;
          max-width: 2.1em;
          min-height: 2.036em;
        }
      }
    }
  }

  @media (min-width: 769px) and (max-width: 1800px) {
    & > div {
      p:nth-child(2) {
        margin-top: 0.5em;
      }
    }
    & > div:nth-child(2) {
      margin-left: 2.77em;
    }
    & > div:nth-child(3) {
      margin-left: 2.77em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 1em 0 0;
    padding: 0;
    flex-direction: column;
    row-gap: 1.1em;

    & > div {
      p:nth-child(2) {
        margin-top: 0.5em;
      }
    }
    & > div:nth-child(1) {
      margin-top: 0.3em;
      p:nth-child(2) {
        margin-top: 0em;
        padding-right: 9em;
      }
    }
    & > div:nth-child(2) {
      margin-top: 0.3em;
      p:nth-child(2) {
        margin-top: 0em;
        padding-right: 9em;
      }
    }
    & > div:nth-child(3) {
      margin-top: 1.8em;
      p:nth-child(2) {
        margin-top: 0em;
        padding-right: 10em;
      }
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    padding: 0;
    flex-direction: column;
    row-gap: 16px;

    & > div:nth-child(3) {
      margin-top: 0;
    }
  }
`;

export const Subtitle = styled.p`
  font-size: ${themes.primary.font.size.linkText};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 120%;
  display: grid;
  grid-template-rows: 1.5fr 1fr;
  margin: 0;
  position: relative;

  @media (min-width: 1920px) {
    font-size: 1.25em;
  }

  @media (max-width: 992px) {
    font-size: 20px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.38em;
  }
`;

export const Text = styled.p`
  font-size: 1em;
  line-height: 160%;
  margin: 0;
  max-width: 19.45em;

  @media (max-width: 992px) {
    font-size: 14px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    max-width: 95vw;
    width: 90vw;
    margin: 6px 0 0;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin: 1.3px 0 0;
    padding-right: 0 !important;
  }
`;

export const Svg = styled.img`
  max-width: 1.92em;
  margin-bottom: 18px;

  @media (min-width: 1800px) {
    min-width: 57px;
  }

  @media ${themes.primary.media.maxMobile} {
    max-width: 2.15em;
    left: 0;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    max-width: 1.99em;
    margin-bottom: 16px;
  }
`;

export const Wrapper = styled.div<ISlide>`
  width: 17.5em;
  position: relative;
  display: grid;
  padding-top: 18px;
  grid-template-rows: 1fr 2fr;

  @media (max-width: 1200px) {
    width: 14em;
  }

  @media (max-width: 992px) {
    width: 9em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 0;
    grid-template-rows: 1fr 0.7fr;
    padding-top: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    opacity: 0;

    &.scrolled {
      animation: ${({ ind }) => css`
        ${slideRight} 1.5s ${ind * 200}ms forwards
      `};
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin: 0;
    padding-top: 0;
    grid-template-rows: 1.3fr 0.7fr;
  }
`;
