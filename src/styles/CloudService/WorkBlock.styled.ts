import styled, { css } from "styled-components";
import { ISlide } from "../../types/Decoration.types";
import themes from "../../utils/themes";
import { slideRight } from "../Animations.styled";

export const Container = styled.section`
  position: relative;
  @media ${themes.primary.media.maxMobile} {
    ::after {
      content: "";
      height: 1px;
      position: absolute;
      background-color: ${themes.primary.colors.headerBorder};
      width: 130%;
      bottom: -10%;
      left: -10%;
    }
  }
`;

export const Title = styled.h2`
  font-size: 2.5em;
  font-weight: inherit;
  margin: 0;
  text-transform: uppercase;
  line-height: 140%;

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const BlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4.31em;
  width: 110%;
  left: -5%;
  position: relative;
  column-gap: 25px;

  @media ${themes.primary.media.maxServiceWeb} {
    padding: 0;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    left: -45px;
    flex-direction: column;
    padding-right: 0;
    margin: 0;
  }
`;

export const Block = styled.div<ISlide>`
  position: relative;
  display: flex;
  flex-grow: 1;
  opacity: 0;

  &.scrolled {
    animation: ${({ ind }) => css`
      ${slideRight} 1.5s ${ind * 200}ms forwards
    `};
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: fit-content;
    left: -30px;

    &:not(:first-child) {
      margin-top: 1.25em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    left: -20px;
  }
`;

export const Line = styled.div`
  position: relative;
  right: -10px;
  z-index: -1;
  top: -1px;
  background-color: ${themes.primary.colors.comment};
  flex: 1;
  margin-top: 1.15em;
  max-height: 2px;
  width: 100%;

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 60px;
    right: -5px;
    margin-inline: 0;
  }
`;

export const Image = styled.img`
  width: 2.95em;
  height: 2.5em;

  @media ${themes.primary.media.maxMobile} {
    width: 2em;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.375em;
  line-height: 160%;
  text-transform: uppercase;
  white-space: nowrap;
  margin: 0;
  padding-left: 0.5em;

  @media (max-width: 1350px) {
    white-space: normal;
  }

  @media ${themes.primary.media.maxMobile} {
    align-self: center;
    font-size: 1em;
  }
`;
