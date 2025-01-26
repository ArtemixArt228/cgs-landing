import styled, { css } from "styled-components";
import themes from "../../../../utils/themes";
import {
  slideRight,
  slideDownText,
} from "../../../../styles/Animations.styled";
import { ISlide } from "../../../../types/Decoration.types";

interface IsFirst {
  isFirst: boolean;
}

export const Wrapper = styled.div`
  margin-bottom: 11.65em;
  width: 100%;

  @media (min-width: 1800px) {
    &.blockchainAdvantages {
      margin-top: 217.5px;
    }
  }

  @media (max-width: 1440px) {
    margin-top: -14px;
  }

  @media (max-width: 1055px) {
    margin-top: 9.3em;
    margin-bottom: 4.2em;
  }

  @media (max-width: 475px) {
    margin-top: 2em;
    margin-bottom: 3.5em;
  }
`;

export const Title = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.webAuditSubtitle};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 56px;
  text-transform: uppercase;
  margin-bottom: 62px;

  @media (min-width: 1800px) {
    margin-bottom: 100px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 132%;
    margin-bottom: 40px;
  }

  @media (max-width: 475px) {
    font-size: 24px;
    margin-bottom: 30px;
    line-height: 32px;
  }
`;

export const Content = styled.div`
  @media (max-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 5fr;
  }

  @media (max-width: 475px) {
    grid-template-columns: 1fr 7fr;
  }
`;

export const NumberItems = styled.div<ISlide>`
  opacity: 0;

  &.scrolled {
    transform-origin: left center;
    animation: ${({ ind }) =>
      css`
        ${slideRight} 700ms ${ind * 100}ms ease-in forwards
      `};
  }

  p {
    font-family: ${themes.primary.font.family.namu};
    font-size: 2.667em;
    font-weight: ${themes.primary.font.weight.heavy};
    position: absolute;
    bottom: 0em;
    margin-left: 1.5em;
  }

  img {
    vertical-align: middle;
  }

  @media (max-width: 768px) {
    opacity: 1;
    &.scrolled {
      animation: none;
    }
  }
`;

export const Numbers = styled.div`
  display: flex;
  position: relative;

  @media (min-width: 2561px) {
    width: 100px;
    div {
      p {
        margin-left: 1.2em;
        bottom: -0.2em;
      }
    }
  }

  @media (max-width: 2560px) {
    width: 100px;
    div {
      p {
        margin-left: 1.2em;
        bottom: -0.2em;
      }
    }
  }

  @media (max-width: 1560px) {
    div {
      p {
        margin-left: 1.45em;
        bottom: 0;
      }
    }
  }

  @media (max-width: 992px) {
    flex-direction: column;
    div {
      p {
        position: relative;
        margin: 0;
        margin-left: 0.7em;
        bottom: 0.1em;
      }
    }
  }

  @media (max-width: 768px) {
    width: 50px;

    div {
      p {
        margin: 0;
        margin-left: 8px;
      }
    }
  }

  @media (max-width: 475px) {
    margin-left: -23px;
    div {
      p {
        font-size: 14px;
        margin-left: 16px;
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 475px) {
    img:first-child {
      width: 22px;
    }

    img:last-of-type {
      width: 4px;
    }
  }
`;

export const BlockContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const BeforeBlock = styled.div<IsFirst>`
  display: ${({ isFirst }) => (isFirst ? "none" : "block")};
  content: "";
  height: 1px;
  background-color: #8f8e93;
  top: 50%;
  margin: 0 17px 0 8px;

  @media (min-width: 2561px) {
    width: 10vw;
  }

  @media (max-width: 2560px) {
    width: 10vw;
  }

  @media (max-width: 1920px) {
    width: 9vw;
  }

  @media (max-width: 1560px) {
    width: 8vw;
  }

  @media (max-width: 1200px) {
    width: 7vw;
  }

  @media (max-width: 1050px) {
    width: 6vw;
  }

  @media (max-width: 992px) {
    width: 2px;
    height: 4em;
    margin: 6px 0;
  }

  @media (max-width: 475px) {
    width: 0.5px;
    height: 24px;
    margin: 3px 0;
  }
`;

export const AfterBlock = styled.div`
  content: "";
  height: 1px;
  background-color: #8f8e93;
  top: 50%;
  margin: 0 8px 0 17px;

  @media (min-width: 2561px) {
    width: 10vw;
  }

  @media (max-width: 2560px) {
    width: 10vw;
  }

  @media (max-width: 1920px) {
    width: 9vw;
  }

  @media (max-width: 1560px) {
    width: 8.1vw;
  }

  @media (max-width: 1200px) {
    width: 6.5vw;
  }

  @media (max-width: 1100px) {
    width: 6vw;
  }

  @media (max-width: 992px) {
    width: 2px;
    height: 4em;
    margin: 6px 0;
  }

  @media (max-width: 768px) {
    width: 0.5px;
    height: 24px;
    margin: 3px 0;
  }
`;

export const ContentItems = styled.div<ISlide>`
  width: 21vw;
  opacity: 0;

  &.scrolled {
    transform-origin: left center;
    animation: ${({ ind }) =>
      css`
        ${slideRight} 700ms ${ind * 100}ms ease-in forwards
      `};
  }

  @media (min-width: 2561px) {
    &:not(:first-child) {
      margin-left: 3.1vw;
    }
  }

  @media (max-width: 2560px) {
    &:not(:first-child) {
      margin-left: 3.1vw;
    }
  }

  @media (max-width: 2360px) {
    &:not(:first-child) {
      margin-left: 6.1vw;
    }
  }

  @media (max-width: 1920px) {
    &:not(:first-child) {
      margin-left: 2.5vw;
    }
  }

  @media (max-width: 1880px) {
    &:not(:first-child) {
      margin-left: 3.5vw;
    }
  }

  @media (max-width: 1560px) {
    &:not(:first-child) {
      margin-left: 2.6vw;
    }
  }

  @media (max-width: 1440px) {
    &:not(:first-child) {
      margin-left: 2.5vw;
    }
  }

  @media (max-width: 1200px) {
    &:not(:first-child) {
      margin-left: 1.85vw;
    }
  }

  @media (max-width: 992px) {
    width: 100%;
    margin-bottom: 4.6em;

    &.scrolled {
      transform-origin: left center;
      animation: ${({ ind }) =>
        css`
          ${slideDownText} 700ms ${ind * 100}ms ease-in forwards
        `};
    }

    &:not(:first-child) {
      margin-left: 0;
    }
  }

  @media (max-width: 475px) {
    margin-bottom: 1.75em;
  }
`;

export const TextContent = styled.div`
  display: flex;
  position: relative;
  margin-top: 22px;

  @media (max-width: 992px) {
    flex-direction: column;
    margin-top: -5px;
    margin-left: -20px;
  }

  @media (max-width: 475px) {
    margin-top: -5px;
  }
`;

export const Subtitle = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: 2em;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 160%;
  margin-bottom: 8px;

  @media (max-width: 992px) {
    margin-bottom: 30px;
    font-size: 30px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 24px;
    margin-bottom: 10px;
  }

  @media (max-width: 475px) {
    margin-bottom: 5px;
    font-size: 18px;
  }
`;

export const Text = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: 1.34em;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 160%;

  @media (max-width: 992px) {
    font-size: 25px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 20px;
  }

  @media (max-width: 475px) {
    font-size: 16px;
  }
`;

export const MobileContent = styled.div`
  @media (max-width: 768px) {
    margin-left: -15px;
  }

  @media (max-width: 550px) {
    margin-left: -10px;
  }
`;

export const AdvantagesItem = styled.div`
  display: flex;
  column-gap: 11px;
  height: auto;
  position: relative;

  @media (max-width: 768px) {
    column-gap: 21px;
    align-items: baseline;
  }

  @media (max-width: 475px) {
    column-gap: 11px;
  }
`;

export const NumberMobileItem = styled.div`
  height: 100%;
  border: 1px solid ${themes.primary.colors.blogBackground};
  background-color: ${themes.primary.colors.blogBackground};
`;

export const TextMobileItem = styled.div<ISlide>`
  margin-bottom: 37.5px;

  @media ${themes.primary.media.maxMobilePortrait} {
    margin-bottom: 18px;
  }

  &.scrolled {
    transform-origin: left center;
    animation: ${({ ind }) =>
      css`
        ${slideDownText} 700ms ${ind * 100}ms ease-in forwards
      `};
  }
`;

export const MobileNumber = styled.div`
  font-size: 18px;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 160%;
  margin-left: 1px;
  text-align: center;
  margin-bottom: 7.5px;

  &.last::after {
    display: none;
  }

  &.last::before {
    display: none;
  }

  ::before {
    content: "";
    position: absolute;
    top: 100px;
    background-color: #8f8e93;
    left: 20px;
    height: 10%;
    width: 1px;
  }

  ::after {
    content: "";
    position: absolute;
    top: 91%;
    background-color: #8f8e93;
    left: 20px;
    height: 10%;
    width: 1px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 0;

    &.last::before {
      display: initial;
    }

    ::after {
      content: "";
      position: absolute;
      top: 70%;
      background-color: #8f8e93;
      left: 10.5px;
      height: 30%;
      width: 1px;
    }

    ::before {
      content: "";
      position: absolute;
      top: 50px;
      background-color: #8f8e93;
      left: 10.5px;
      height: 20%;
      width: 1px;
    }
  }
`;

export const Circle = styled.img`
  width: 22px;

  @media ${themes.primary.media.maxMobile} {
    width: 45px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 22px;
  }
`;

export const SmallCircle = styled.img`
  @media ${themes.primary.media.maxMobile} {
    width: 16px;
    border: 4px solid #f1efed;
    position: absolute;
    top: 80%;
    left: 1.75%;

    &.oneLine {
      top: 65%;
    }

    &.last {
      display: none;
    }
  }

  @media (max-width: 650px) {
    left: 2.4%;
    width: 13px;
  }

  @media (max-width: 560px) {
    left: 0.9%;

    &.last {
      display: block;
    }
  }

  @media (max-width: 475px) {
    width: 12px;
    border: 4px solid #f1efed;
    position: absolute;
    top: 62%;
    left: 1.2%;

    &.oneLine {
      top: 75%;
    }
  }

  @media (max-width: 400px) {
    left: 1.5%;
  }
`;
