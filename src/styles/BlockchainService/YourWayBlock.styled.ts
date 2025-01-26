import styled, { css } from "styled-components";
import { ILine } from "../../types/Decoration.types";
import themes from "../../utils/themes";
import { slideRight } from "../Animations.styled";

export const Container = styled.section`
  margin-top: 8.75em;
  position: relative;
  padding-bottom: 20px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 9em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    padding-bottom: 50px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-bottom: 30px;
    margin-block: -5px 4.38em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    padding-bottom: 40px;
    margin-block: 2em 4.38em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-bottom: 40px;
  }
`;

interface IMobileLine {
  grad1: string;
  grad2: string;
  ind: number;
}

export const MobileLine = styled.div<IMobileLine>`
  display: none;
  width: 120%;

  position: relative;
  left: -5%;
  height: 24px;
  background: linear-gradient(
    ${({ grad1, grad2 }) => css`90deg,
    ${grad1} 13.67%,
    ${grad2} 90.39%`}
  );

  border: 1px solid ${themes.primary.colors.black};
  box-shadow: 7px 2px 0px ${themes.primary.colors.black};
  z-index: -1;
  &:not(:last-child) {
    margin-bottom: 10em;
  }

  @media ${themes.primary.media.maxMobile} {
    display: block;
    opacity: 0;
    &.scrolled {
      animation: ${({ ind }) => css`
        ${slideRight} 1.5s ${ind * 200}ms forwards
      `};
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    &:not(:last-child) {
      margin-bottom: 7.56em;
    }
  }
`;

export const BgiContainer = styled.div<ILine>`
  width: 115%;
  height: 25px;
  position: relative;
  left: -6%;
  top: 2em;
  background: ${({ angle }) =>
    css`radial-gradient(
      50% 80px at ${angle},
      ${themes.primary.colors.mainGradientColor2} ,
      ${themes.primary.colors.mainGradientColor1}
    );`};
  background-size: 100% 100%;
  border: 1px solid ${themes.primary.colors.black};
  box-shadow: 7px 2px 0px ${themes.primary.colors.black};

  @media ${themes.primary.media.minPCFullHD} {
    top: 1.3em;
  }

  @media (min-width: 2200px) {
    top: 0.6em;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    top: 3em;
    left: -8%;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    background: none;
    border: none;
    box-shadow: none;
    height: auto;
    margin-top: 7.75em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    position: relative;
    background: none;
    border: none;
    box-shadow: none;
    height: auto;
    margin-top: 5.9em;
  }
`;

export const Title = styled.h2`
  font-weight: inherit;
  font-size: 2.5em;
  line-height: 140%;
  text-transform: uppercase;
  margin-bottom: 2em;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 2.75em;
  }

  @media ${themes.primary.media.maxMobile} {
    line-height: 132%;
    font-size: 2.5em;
    max-width: 70%;
    margin-bottom: 2.85em;
  }

  @media (max-width: 755px) {
    max-width: 100%;
    margin-bottom: 4.25em;
  }

  @media (max-width: 655px) {
    margin-bottom: 2.5em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 1.5em;
    line-height: 132%;
    width: 15em;
    margin-bottom: 0.6em;
    margin-left: -5px;
    max-width: 90%;
  }

  @media (max-width: 475px) {
    width: 14em;
  }
`;

export const SubTextWrapper = styled.div`
  display: grid;
  font-size: 1.5em;
  line-height: 160%;

  @media ${themes.primary.media.maxMobile} {
    display: flex;
    justify-content: start;
    position: absolute;
    top: 8.9em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    top: 4.9em;
  }

  @media (max-width: 475px) {
    top: 5.3em;
  }
`;

export const GridLine1 = styled.div`
  margin-top: -1.875em;
  display: grid;
  grid-template-columns: 1.26fr 1.28fr 1fr;

  @media ${themes.primary.media.maxMobile} {
    display: block;
    margin-top: 0.74em;
    padding-left: 0.375em;

    & > div {
      font-size: 0.75em;
      height: 5em;
      width: 10em;
      &:not(:last-child) {
        margin-bottom: 5em;
      }
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    & > div {
      &:not(:last-child) {
        margin-bottom: 3em;
      }
    }
  }
`;

export const GridLine2 = styled.div`
  display: grid;
  grid-template-columns: 4.63fr 3.65fr 1fr;
  margin-left: 6.5em;
  position: relative;
  left: -1.875em;

  @media ${themes.primary.media.maxMobile} {
    display: block;
    padding-top: 2.7em;
    margin: 0;

    & > div {
      font-size: 0.75em;
      height: 2.33em;
      width: 15em;
      align-items: flex-start;
      & > div {
        transform: translateY(-90%);
      }
      & > p {
        transform: translateY(-65%);
      }
      &:not(:last-child) {
        margin-bottom: 7.72em;
      }
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    & > div {
      &:not(:last-child) {
        margin-bottom: 5.72em;
      }

      &:first-child {
        position: relative;
        left: -60px;
      }
    }
  }
`;
