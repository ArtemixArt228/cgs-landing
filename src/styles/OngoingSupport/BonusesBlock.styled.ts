import styled, { css } from "styled-components";
import { ISlide } from "../../types/Decoration.types";
import themes from "../../utils/themes";
import { slideRight } from "../Animations.styled";

export const Container = styled.section`
  @media ${themes.primary.media.maxMobile} {
    position: relative;
    ::after {
      content: "";
      height: 1px;
      position: absolute;
      background-color: ${themes.primary.colors.headerBorder};
      width: 130%;
      bottom: -15%;
      left: -10%;
    }
  }
`;

export const Title = styled.h2`
  font-weight: inherit;
  font-size: 2.5em;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;
  max-width: 15.75em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 132%;
    width: 14.6em;
  }
`;

export const TextWrapper = styled.div`
  margin: 0 -8em;

  @media ${themes.primary.media.onlyTabletLandScape} {
    margin: 0 -5em;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    margin: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 1em 0 0 3.5em;
  }
`;

export const Text = styled.p<ISlide>`
  font-size: 1.375em;
  line-height: 160%;
  text-transform: uppercase;
  min-width: max-content;
  margin: 0;

  position: relative;

  @media ${themes.primary.media.onlyTabletPortrait} {
    min-width: auto;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin-bottom: 1.38em;
    opacity: 0;
    &.scrolled {
      animation: ${({ ind }) => css`
        ${slideRight} 1.5s ${ind * 200}ms forwards
      `};
    }
  }
`;

export const Row1 = styled.div`
  display: grid;
  grid-template-columns: 0.85fr 1fr 0.7fr 1.4fr 0.7fr 1.6fr 0.9fr;
  margin: 4.75em 0 2.94em;

  @media ${themes.primary.media.maxMobile} {
    display: block;
    margin: 0;
    position: relative;

    & > div:last-child {
      display: none;
    }
  }
`;

export const Row2 = styled.div`
  display: grid;
  grid-template-columns: 1.13fr 0.9fr 0.45fr 0.9fr 1.2fr;

  @media ${themes.primary.media.maxMobile} {
    display: block;
    margin: 0;
    position: relative;

    & > div:last-child {
      display: none;
    }
  }
`;

export const Line = styled.div<{ ind?: number }>`
  height: 2px;
  background: ${themes.primary.colors.comment};
  flex: 1;
  margin: 1.15em 36px 0 15px;
  max-height: 2px;
  max-width: stretch;

  @media ${themes.primary.media.maxMobile} {
    margin: 0;
    position: relative;
    top: 0.93em;
    left: -105%;
    opacity: 0;
    &.scrolled {
      animation: ${({ ind }) =>
        typeof ind === "number" &&
        css`
          ${slideRight} 1.5s ${ind * 200}ms forwards
        `};
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 0.9em;
  }
`;

export const Image = styled.img`
  position: absolute;
  left: -2.5em;
  top: 0.1em;

  @media ${themes.primary.media.maxMobile} {
    width: 2em;
    top: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    left: -1.5em;
    top: 0.2em;
  }
`;
