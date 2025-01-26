import styled, { css } from "styled-components";
import themes from "../../utils/themes";
import LoaderImg from "../../../public/Calculator/calculatorLoader.gif";
import { glow, horizontalGlowReverse } from "../Animations.styled";

export const CalculatorPreview = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    height: 60px;

    &::after {
      content: "";
      left: -5px;
      position: absolute;
      bottom: -6px;
      width: 120%;
      height: 4px;
      border: 1.8px solid ${themes.primary.colors.primary};

      background: ${themes.primary.colors.attachmentIcon};
      transform: skew(45deg);
    }
  }
`;

export const CalculatorPreviewCube = styled.div`
  height: 220px;

  @media ${themes.primary.media.maxMobile} {
    width: 82vw;
    height: 60px;
  }

  @media ${themes.primary.media.minPC} {
    height: 293px;
  }

  /* Firefox */
  @-moz-document url-prefix() {
    width: 57px;

    @media ${themes.primary.media.maxMobile} {
      width: 82vw;
    }

    @media ${themes.primary.media.minTabletLandScape} {
      width: 64px;
    }

    @media ${themes.primary.media.minLaptop} {
      width: 57px;
    }

    @media ${themes.primary.media.minPC} {
      width: 64px;
    }
  }
`;

interface ICalculatorButton {
  isChatOpen?: boolean;
  isHovered?: boolean;
  isCalculatorOpen?: boolean;
}

export const CalculatorButton = styled.div<ICalculatorButton>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  background-color: ${themes.primary.colors.blogBackground};
  font-family: ${themes.primary.font.family.namu};
  line-height: 99%;
  border: 1.8px solid ${themes.primary.colors.primary};
  border-right: none;
  border-radius: 1px;
  text-transform: uppercase;
  font-size: 22px;
  padding: 34px 15px;
  height: 100%;
  z-index: 2;

  position: relative;
  background-image: ${({ isHovered }) =>
    isHovered
      ? `none`
      : `linear-gradient(
    180deg,
    ${themes.primary.colors.mainGradientColor1},
    ${themes.primary.colors.mainGradientColor2},
    ${themes.primary.colors.mainGradientColor1})`};
  background-size: auto 400%;
  animation: ${glow} 12s linear infinite;

  &::after {
    content: "";
    width: 60px;
    height: 5px;
    border: 1.8px solid ${themes.primary.colors.primary};
    border-radius: 1.5px;
    position: absolute;
    bottom: -7.5px;
    left: -5px;
    background: ${themes.primary.colors.darkBlue};
    transform: skew(-45deg);
  }

  ${({ isChatOpen }) =>
    !isChatOpen &&
    css`
      &:hover + div,
      .active + div {
        left: -19em;
      }
    `}

  @media ${themes.primary.media.maxMobile} {
    padding: 0;
    writing-mode: horizontal-tb;
    height: 60px;
    border-width: 1.8px 0 1.8px 0;
    font-size: 2.11em;
    color: ${({ isChatOpen }) =>
      isChatOpen && themes.primary.colors.headerBorder};

    background: ${({ isChatOpen, isHovered }) =>
      isChatOpen
        ? themes.primary.colors.blogBackground
        : isHovered
        ? themes.primary.colors.blogBackground
        : `linear-gradient(
    270deg,
    ${themes.primary.colors.mainGradientColor1},
    ${themes.primary.colors.mainGradientColor2},
    ${themes.primary.colors.mainGradientColor1}
  )`};
    background-size: 400% auto;
    animation: ${horizontalGlowReverse} 12s linear infinite;

    ${({ isCalculatorOpen }) =>
      isCalculatorOpen
        ? css`
            &:hover + div,
            .active + div {
              left: auto;
              top: -188px;
            }
          `
        : css`
            &:hover + div,
            .active + div {
              left: auto;
              top: 0;
            }
          `}

    &::after {
      content: none;
    }
  }

  @media ${themes.primary.media.minPC} {
    font-size: 29px;
    padding: 40px 20px;

    &::after {
      width: 75px;
      bottom: -8.5px;
      left: -5px;

      @-moz-document url-prefix() {
        bottom: -8.5px;
      }
    }
  }

  @supports (-webkit-hyphens: none) {
    &::after {
      width: 75px;
      bottom: -7px;
      left: -4.5px;
    }
    @media (max-width: 1024px) {
      &::after {
        bottom: -6.5px;
        left: -4.5px;
      }
    }
    @media (min-width: 1500px) {
      &::after {
        bottom: -8px;
        left: -4.5px;
      }
    }
  }
`;

interface ICalculatorPreviewContentWrapper {
  isChatOpen?: boolean;
}

export const CalculatorPreviewContentWrapper = styled.div<ICalculatorPreviewContentWrapper>`
  font-size: ${themes.primary.font.size.oneAndHalf};
  width: 19.83em;
  height: 100%;
  padding: 1.625em 3.1875em 1.625em 1.3125em;
  line-height: 160%;
  font-family: ${themes.primary.font.family.namu};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${themes.primary.colors.blogBackground};
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s;
  border-top: 1.8px solid ${themes.primary.colors.primary};
  border-radius: 1px;

  &::after {
    content: "";
    width: 359.5px;
    height: 5px;
    border: 1.8px solid ${themes.primary.colors.primary};
    border-radius: 1.5px;
    background: ${themes.primary.colors.darkBlue};
    position: absolute;
    bottom: -6px;
    right: -2px;
    transform: skew(-45deg);

    @supports (-webkit-hyphens: none) {
      right: -2px;
    }
  }

  &::before {
    content: "";
    width: 5px;
    height: 216.5px;
    position: absolute;
    bottom: -2px;
    left: -7px;
    transition: all 0.2s;
    border: 1.8px solid ${themes.primary.colors.primary};
    border-top-right-radius: 3px;
    border-bottom-left-radius: 1px;
    background-image: ${() => `linear-gradient(
      180deg,
      ${themes.primary.colors.mainGradientColor1},
      ${themes.primary.colors.mainGradientColor2},
      ${themes.primary.colors.mainGradientColor1})`};
    transform: skewY(-45deg);
    transform-origin: top;
    background-size: auto 400%;
    animation: ${glow} 12s linear infinite;

    @supports (-webkit-hyphens: none) {
      height: 218.5px;
      left: -6.5px;

      @media (max-width: 1024px) {
        height: 218px;
      }
      @media ${themes.primary.media.minPC} {
        left: -7px;
        height: 292.5px;
      }
    }
  }

  ${({ isChatOpen }) =>
    !isChatOpen &&
    css`
      &.active,
      &:hover {
        left: -19em;
      }
    `}

  @media (max-width: 1200px) {
    &::before {
      content: "";
      bottom: -2px;
      border-top-right-radius: 2.5px;
    }
    &::after {
      width: 407px;
      right: -2px;

      @supports (-webkit-hyphens: none) {
        width: 408px;
      }
    }
  }

  @media (max-width: 991.5px) {
    &::after {
      width: 360px;
      left: -4px;
      border-bottom-left-radius: 2.5px;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100.2%;
    height: 192px;
    left: 0;
    top: 0;
    border-right: 1.8px solid ${themes.primary.colors.primary};
    border-top: none;
    font-size: 1.54em;
    line-height: 160%;
    padding-inline: 1.2em 2.1875em;
    row-gap: 10px;

    & span {
      br {
        display: none;
      }
    }

    &::before {
      content: none;
    }

    &::after {
      height: 5px;
      width: 100.4%;
      top: 0;
      left: -7.5px;
      border-top: 1.8px solid ${themes.primary.colors.primary};
      border-right: 1.8px solid ${themes.primary.colors.primary};
      transition: all 0.2s;
      background-image: ${() => `linear-gradient(
        180deg,
        ${themes.primary.colors.mainGradientColor1},
        ${themes.primary.colors.mainGradientColor2},
        ${themes.primary.colors.mainGradientColor1})`};
      background-size: auto 400%;
      animation: ${glow} 12s linear infinite;
      transform: skew(45deg);
    }

    &:hover,
    &.active {
      left: 0;
      top: -188px;
      &::after {
        top: -7px;
      }
    }

    & > div {
      display: flex;
      justify-content: flex-start;

      & > a {
        padding: 1.3em 2.2em !important;
      }
    }
  }

  @media ${themes.primary.media.minTablet} {
    left: 1px !important;

    &::after {
      left: -6.5px;
      bottom: -6.5px;
    }
  }

  @media ${themes.primary.media.minPC} {
    padding-right: 1em;
    &::before {
      height: 289.5px;
      bottom: -2.5px;

      @supports (-webkit-hyphens: none) {
        height: 292px;
        bottom: -2.5px;
      }
    }
    &::after {
      width: 100.5%;
      bottom: -7px;

      @supports (-webkit-hyphens: none) {
        width: 20em;
        right: 0;
      }
    }
  }

  @-moz-document url-prefix() {
    left: 4px;

    @media ${themes.primary.media.onlyTabletLandScape} {
      left: 10px;
    }

    @media ${themes.primary.media.minPC} {
      left: -7px;
    }
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  z-index: 36;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: linear-gradient(
    180deg,
    rgba(241, 239, 237, 0.8) 100%,
    rgba(241, 239, 237, 0) 114.26%
  );
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${themes.primary.media.maxMobile} {
    /* &.mobile {
      width: 356px;
      height: 637px;
    } */
  }

  @supports (-webkit-hyphens: none) {
    padding-top: 100px;
  }
`;

export const ForeignObjectWrapper = styled.div`
  width: 97%;
  height: 96%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & .loadingButton {
    width: 190px;
    height: 77px;
    padding-bottom: 0;
    padding-top: 0;
  }

  &.steps {
    align-items: flex-start;
    height: 97%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    & .loadingButton {
      width: 188px;
      height: 61px;
      padding: 0;
    }
  }

  @media ${themes.primary.media.maxLaptop} {
    & .loadingButton {
      width: 168px;
      height: 68px;
      padding: 0;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    & .loadingButton {
      width: 117px;
      height: 50px;
      padding: 0;
    }
  }
`;

export const CalculatorHeaderWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 34px;

  &.steps {
    top: 0;
    position: relative;
    margin-top: 34px;
  }
`;

export const CalculatorHeaderInner = styled.div`
  width: 100%;
  padding-inline: 2.72em;
  display: flex;
  justify-content: space-between;

  @media ${themes.primary.media.maxMobile} {
    padding-inline: 2.12em;

    &.steps {
      padding-inline: 2em;
    }
  }
`;

export const CloseButton = styled.div`
  position: relative;
  width: 23px;
  height: 23px;
  cursor: pointer;
  &:before,
  &:after {
    position: absolute;
    top: 4px;
    left: 11px;
    content: " ";
    height: 22px;
    width: 3.5px;
    background-color: ${themes.primary.colors.primary};
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  @media ${themes.primary.media.maxMobile} {
    width: 15px;
    height: 15px;
    &:before,
    &:after {
      height: 15px;
      width: 2px;
      top: 9px;
      left: 7px;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 581px;
  height: 213px;

  @media ${themes.primary.media.maxMobile} {
    width: 308px;
    height: 194px;
  }
`;

export const PagerBackgroundImageWrapper = styled.div`
  width: 669px;
  height: 391px;

  @media ${themes.primary.media.maxMobile} {
    width: 356px;
    height: 382px;

    &.mobileChoose {
      width: 356px;
      height: 335px;
    }
  }
`;

export const StepsBackgroundImage = styled.div`
  width: 669px;
  height: 647px;

  @media ${themes.primary.media.maxMobile} {
    width: 356px;
    height: 637px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImageWrapper = styled.div``;

export const LogoText = styled.span`
  font-family: ${themes.primary.font.family.namu};
  -webkit-text-stroke: 0.1px solid ${themes.primary.colors.primary};
  font-size: 12px;
  margin-left: 9px;
`;

export const StartButton = styled.button`
  position: absolute;
  right: 39px;
  bottom: 35px;
  cursor: pointer;
  padding: 1.105em 1.8em;
  border-radius: 0.52em;
  font-size: 1.5833em;
  text-transform: uppercase;
  border: 1.8px solid ${themes.primary.colors.primary};
  box-shadow: 7px 2px 0 ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.headerBorderHover};
  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.primary};
  z-index: 2;

  &.steps {
    position: relative;
    right: auto;
    bottom: auto;
  }

  & .loader {
    width: 48px;
    height: 48px;
    border: 5px dotted black;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 2s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &.invalid + div {
    opacity: 1;
    z-index: 3;
  }

  &.hide {
    display: none;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 1.175em 1.52em;
    right: 20px;
    bottom: 15px;
    font-size: 14px;
    line-height: 99%;
    box-shadow: 5.52438px 1.57839px 0 ${themes.primary.colors.primary};

    & .loader {
      width: 32px;
      height: 32px;
    }

    &.quit {
      padding: 1.27em 0.81em;
    }
    &.steps {
      margin-left: 0;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.3em;
    padding: 0.8em 1.9em;

    &.steps {
      font-size: 1.3em;
      padding: 0.8em 1.9em;
    }
  }
`;

export const SubmitContainer = styled.div``;

export const StepsMainButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column-reverse;
  position: relative;
  margin-left: 1.5em;

  & .calc-submit {
    font-family: ${themes.primary.font.family.namu};
    display: flex;
    background: black;
    color: white;
    width: 188px;
    height: 58px;
    font-size: 22px;
    align-items: center;
    justify-content: center;
    margin-top: 14px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-left: 1em;
  }

  @media ${themes.primary.media.maxMobile} {
    justify-content: flex-end;

    & .calc-submit {
      font-size: 16px;
      height: 50px;
      width: 154px;
    }
  }
`;

export const StepButtonWrapper = styled.div`
  width: 67.5%;
  margin-top: 2em;
  padding-left: 2.8333em;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: 1.7em;
  column-gap: 1.6em;

  &.last {
    margin-top: 1.2em;
    justify-content: flex-start;
  }

  @media ${themes.primary.media.minPC} {
    width: 78%;
    row-gap: 1.2em;
    column-gap: 1em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 90%;
    row-gap: 1.2em;
    column-gap: 0.8em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    column-gap: 1em;
    width: 100%;
    margin-top: 1em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    row-gap: 1.64em;
    column-gap: 1.45em;
    margin-top: 1.4em;
    padding-left: 1.8em;
    &.last {
      margin-top: 18px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  margin-right: 2.9em;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    margin-right: 2.5em;
    row-gap: 20px;

    &.last {
      margin-top: 0;
      row-gap: 0;
    }
  }
`;

export const StepButton = styled.button`
  border: 1.8px solid ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 132%;
  color: ${themes.primary.colors.calculatorButtonBorderBg};
  background-color: ${themes.primary.colors.blogBackground};
  box-shadow: 6.29934px 2.51974px 0 ${themes.primary.colors.primary};
  height: 45px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.67em;
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: all 0.3s;
  z-index: 2;

  &.checked {
    color: ${themes.primary.colors.primary};
  }

  &.active {
    width: 103px;
    &::before {
      content: "STEP ";
      white-space: pre;
    }
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  @media ${themes.primary.media.minPC} {
    font-size: 18px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.176em;
  }

  @media ${themes.primary.media.maxMobile} {
    height: 35px;
    width: 39px;
    font-size: 14px;
    box-shadow: 4.97142px 1.98857px 0 ${themes.primary.colors.primary};

    &.active {
      width: 81px;
    }
  }
`;

export const GridButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ContentWrapper = styled.div`
  margin-top: 8px;
  margin-left: 8px;
  height: 92%;
  width: 93.5%;
`;

export const PagerText = styled.div`
  padding: 20px 0 20px 18px;
  font-size: ${themes.primary.font.size.oneAndHalf};
  font-family: ${themes.primary.font.family.openSans};
  font-weight: ${themes.primary.font.weight.bold};
  line-height: 160%;

  & p {
    margin: 0;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 10px 0 10px 18px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    padding-top: 12px;
    font-size: 1.7em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 14px;
    padding-top: 16px;
    padding-left: 8px;

    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.minPC} {
    padding: 10px 0 10px 18px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-top: 0.8em;
    font-size: ${themes.primary.font.size.tertiary};
  }
`;

export const CalculatorPagerLeftButton = styled.g`
  cursor: pointer;

  &.disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

export const CalculatorPagerRightButton = styled.g`
  cursor: pointer;
  &.disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

export const LeftButtonArrow = styled.g`
  color: black;

  &.disabled {
    color: rgba(0, 0, 0, 0.2);
  }
`;

export const RightButtonArrow = styled.g`
  color: black;
  &.disabled {
    color: rgba(0, 0, 0, 0.2);
  }
`;

export const LoaderWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  image-rendering: pixelated;
  width: 50px;
  height: 52px;
  background: url(${LoaderImg.src});
  background-repeat: no-repeat;
  background-size: cover;
  mix-blend-mode: multiply;
`;

export const PressButtonWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    align-items: flex-start;
  }
`;

export const PressButtonText = styled.div`
  font-family: ${themes.primary.font.family.pressStart};
  font-size: 20px;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 40px;
    width: 56%;
    font-size: 16px;
    line-height: 183%;
  }
`;

export const PressButtonImageWrapper = styled.div`
  position: absolute;
  bottom: 0.833em;
  right: 5.5em;
  width: 48.62px;
  height: 38.81px;

  @media ${themes.primary.media.maxMobile} {
    width: 34.26px;
    height: 27.35px;
    right: 3.5em;
    bottom: 1.1em;
  }
`;

export const ChooseModalWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 1.1em;
  top: 130px;
  padding-inline: 32px;

  @media ${themes.primary.media.maxMobile} {
    row-gap: 14px;
    top: 88px;
    padding-inline: 2.12em;
  }
`;

export const ChooseTextWrapper = styled.div`
  height: 100%;

  @supports (-webkit-hyphens: none) {
    display: block;
    position: relative;
  }
`;

export const ChooseText = styled.div`
  text-transform: uppercase;
  cursor: pointer;
  padding-left: 0.72em;
  font-size: 20px;
  line-height: 160%;
  font-family: ${themes.primary.font.family.openSans};
  font-weight: ${themes.primary.font.weight.bold};
  transition: color 0.15s, background-color 0.3s;

  &:hover {
    background-color: ${themes.primary.colors.darkBlue};
    color: ${themes.primary.colors.secondary};
  }

  &:active {
    background-color: ${themes.primary.colors.calculatorDarkBlue};
    color: ${themes.primary.colors.secondary};
  }

  @media ${themes.primary.media.maxMobile} {
  }

  /* ios */
  @supports (-webkit-touch-callout: none) {
    transform: translateY(8px);
    width: 98%;
    margin-left: 7px;
    padding-block: 10px 11px;
    @media ${themes.primary.media.maxMobile} {
      transform: translateY(6px);
      height: 85.5%;
      width: 96.5%;
      padding-block: 17px 18px;
      margin-left: 0.3em;
      font-size: 1.346em;
    }
  }

  /* android */
  @supports not (-webkit-touch-callout: none) {
    height: 83.7%;
    width: 97.3%;
    margin-top: 0.4em;
    margin-left: 0.34em;

    display: flex;
    align-items: center;
    @media ${themes.primary.media.maxMobile} {
      height: 87.5%;
      width: 96.9%;
      margin-top: 6px;
      margin-left: 0.3em;
      font-size: 1.346em;
    }
  }

  /* Safari */
  @supports (-webkit-hyphens: none) {
    position: absolute;
    height: 56px;
    width: 97.9%;
    left: 1px;
    margin-top: 0.4em;
    margin-left: 0.34em;

    display: flex;
    align-items: center;
    @media ${themes.primary.media.maxMobile} {
      left: -0.5px;
      height: 57px;
      top: 1px;
      width: 94.5%;
      margin-top: 0;
      margin-left: 0.3em;
      font-size: 1.346em;
    }
  }
`;

export const BackButton = styled.div`
  position: absolute;
  right: 80px;
  top: -8px;
  cursor: pointer;
  font-size: 32.25px;
  line-height: 132%;
  font-family: ${themes.primary.font.family.namu};

  @media ${themes.primary.media.maxMobile} {
    right: 55px;
    top: 1px;
    font-size: 22px;
  }
`;

export const CalculatorFieldWrapper = styled.div`
  margin: 22px 32px 13px;
  border: 1.8px solid ${themes.primary.colors.primary};
  border-radius: 8px;
  position: relative;
  font-size: 1em;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.mainGradientColor1} 0%,
    ${themes.primary.colors.mainGradientColor2} 100%
  );

  &::before,
  &::after {
    right: 0;
    content: " ";
    position: absolute;
    width: 11px;
    height: 1.2px;
    background-color: ${themes.primary.colors.primary};
  }

  &::before {
    top: 2px;
    right: 4px;
    transform: rotate(-45deg);
  }

  &::after {
    top: 8px;
    right: -1.77px;
    transform: rotate(-45deg);
  }

  &.title {
    max-height: 120px;
  }

  &.last {
    font-size: 0.9em;
    line-height: 160%;
    height: 224px;
    max-height: 224px;
    font-family: ${themes.primary.font.family.namu};
    margin-top: 16px;

    & h4.result-title {
      margin: 0;
      font-size: 20px;
    }

    & span.bold {
      font-weight: ${themes.primary.font.weight.medium};
    }

    & span.result-msg {
      position: absolute;
      bottom: 10px;
    }
    & ul {
      margin-block: 4px 16px;
      padding-left: 0;
      list-style: none;

      & > li {
        font-size: 16px;
        font-weight: ${themes.primary.font.weight.normal};
        display: flex;
        align-items: flex-start;
        column-gap: 6px;

        & > p {
          margin: 0;
        }

        &::before {
          content: "";
          display: inline-block;
          margin-top: 6px;
          min-width: 12px;
          min-height: 12px;
          background: ${themes.primary.colors.primary};
          border: 0.745794px solid ${themes.primary.colors.primary};
        }
      }
    }
  }

  &.input {
    margin-top: 0;
    height: 254px;
  }

  &.email {
    margin-top: 10px;
    margin-bottom: 10px;
    min-height: 80px;
  }

  &.quit {
    width: 100%;
    margin-top: -30px;
    min-height: 167px;
    height: 167px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    &.title {
      max-height: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    margin-inline: 17px;
    border-radius: 5px;

    &.last {
      height: 272px;
      max-height: 316px;

      & h4.result-title {
        font-size: 18px;
        margin-bottom: 8px;
      }
      & span.result-msg {
        display: block;
        font-size: 16px;
        font-weight: ${themes.primary.font.weight.medium} !important;
        position: relative;
        margin: 0;
        padding-top: 8px;
      }

      & ul {
        padding-left: 0;
        & > li {
          font-size: 16px;
          margin-bottom: 8px;

          &::before {
            margin-top: 4px;
          }
        }
      }

      &::before {
        top: 2.2px;
        right: 5px;
      }

      &::after {
        top: 6px;
        right: -0.5px;
      }
    }

    &.email {
      min-height: 54px;
      height: 54px;
    }

    &.quit {
      margin-top: 10px;
      min-height: 156px;
      height: 156px;
    }

    &::before,
    &::after {
      height: 1.2px;
      width: 5px;
    }

    &::before {
      width: 6px;
      top: 0;
      right: 2px;
      transform: rotate(-45deg);
    }

    &::after {
      top: 5px;
      right: -1.3px;
      transform: rotate(-45deg);
    }

    &.input {
      margin-top: 0;
      max-height: 254px;
      height: 254px;
      &::before {
        width: 5px;
      }
    }
    &.email {
      margin-bottom: 0;
    }
    @supports (-webkit-hyphens: none) {
      & #input-email {
        & #user-email {
          line-height: 46px;
        }
      }
    }
  }

  /* Safari */
  @supports (-webkit-hyphens: none) {
    & #input-email {
      padding-top: 24px;
      padding-bottom: 25px;
    }

    @media ${themes.primary.media.maxMobile} {
      & #input-email {
        padding-bottom: 23px;
      }
    }
  }
`;

export const LeftBlackBorder = styled.div`
  position: absolute;
  left: 0;
  width: 5px;
  height: 100%;
  background: ${themes.primary.colors.primary};
  border-radius: 6px 0 0 6px;
  z-index: 2;

  @media ${themes.primary.media.maxMobile} {
    top: -0.5px;
    left: -0.5px;
    width: 3px;
    height: 104%;
    border-radius: 3px 0 0 3px;

    &.input {
      height: 101%;
    }

    &.last {
      height: 100%;
    }

    &.quit {
      height: 101%;
    }
  }
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const Disabled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;

  & p {
    display: inline;
    margin: 0;
  }

  & > div {
    font-size: 1.125em;
    max-width: 345px;

    & span {
      color: ${themes.primary.colors.darkBlue} !important;
    }
  }

  &.disabled {
    background-color: ${themes.primary.colors.blogBackground};
    z-index: 3;
    opacity: 0.8;
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  & .loader {
    width: 60px;
    height: 60px;
    border: 5px dotted black;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 2s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const CalculatorField = styled.div`
  width: 98.05%;
  min-height: 91.9%;
  height: 91.9%;
  border-style: solid;
  border-color: ${themes.primary.colors.primary};
  border-width: 1.8px 1.8px 0 0;
  border-radius: 0 8px 0 0;
  font-size: 1.666em;
  font-family: ${themes.primary.font.family.namu};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 4px 0 0.75em;
  line-height: 132%;
  margin: 6px 0 0 4px;
  background-color: ${themes.primary.colors.blogBackground};
  max-height: none;
  position: relative;

  & p {
    margin: 0;
  }

  & span[style] {
    font-size: 16px;
    line-height: 21px;
  }

  & .__se__t-upper {
    text-transform: uppercase;
  }

  & .__se__t-lower {
    text-transform: lowercase;
  }

  & .__se__t-first-letter-capitalize {
    display: block;

    &:first-letter {
      text-transform: uppercase;
    }
  }

  & .__se__t-heavy {
    font-weight: ${themes.primary.font.weight.heavy};
  }

  & .__se__t-extra-bold {
    font-weight: ${themes.primary.font.weight.extraBold};
  }

  & .__se__t-bold {
    font-weight: ${themes.primary.font.weight.bold};
    color: black;
  }

  & .__se__t-semi-bold {
    font-weight: ${themes.primary.font.weight.semiBold};
  }

  & .__se__t-medium {
    font-weight: ${themes.primary.font.weight.medium};
  }

  & .__se__t-normal {
    font-weight: ${themes.primary.font.weight.normal};
  }
  & .__se__t-light {
    font-weight: ${themes.primary.font.weight.light};
  }

  &.text {
    margin-top: 16px;
  }

  &.last {
    line-height: 160%;
    margin-top: 5px;
    padding-top: 0.5em;
    height: 97%;
    min-height: 96%;
  }

  &.quit {
    padding-top: 0.8em;
    line-height: 160%;
    min-height: 96%;
    height: 96%;
    font-size: ${themes.primary.font.size.oneAndHalf};
  }

  @media ${themes.primary.media.minPC} {
    font-size: 20px;

    &.last {
      font-size: 18px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    &.quit {
      font-size: 1.3em;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    &.last {
      font-size: 1.58em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.346em;
    width: 98.4%;
    margin: 3px 0 0 3px;

    &.quit {
      min-height: 98%;
      height: 98%;
      padding: 8px 22px 0 8px;

      & br {
        display: none;
      }
    }

    &.last {
      min-height: 97%;
      height: 98.5%;
      font-size: 1.5em;
      line-height: 160%;
    }

    & span[style] {
      font-size: 12px;
      line-height: 160%;
    }
  }
`;

export const ResultFormGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    61.63deg,
    ${themes.primary.colors.mainGradientColor1} 0%,
    ${themes.primary.colors.mainGradientColor2} 100%
  );
  opacity: 0.5;
`;

export const CalculatorInputFields = styled.div`
  width: 98.05%;
  height: 97.35%;
  border-style: solid;
  border-color: ${themes.primary.colors.primary};
  border-width: 1.8px 1.8px 0 0;
  border-radius: 0 8px 0 0;
  font-size: 1.333em;
  line-height: 160%;
  margin: 6px 0 0 4px;
  background-color: ${themes.primary.colors.blogBackground};
  font-family: ${themes.primary.font.family.namu};
  padding-inline: 14px 4px;
  position: relative;
  cursor: pointer;

  &.email {
    padding-block: 1.5em 1.5em;
  }

  &.disabled {
    overflow: hidden;
  }

  @media ${themes.primary.media.minPC} {
    font-size: 16px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.346em;
    height: 99.2%;
    width: 98.4%;
    margin: 2px 0 0 3px;
    padding: 0 4px 0 0.5em;

    &.email {
      height: 97%;
      padding-block: 0;
      padding-right: 0;
      display: flex;
      align-items: center;
    }

    &::before {
      height: 0.35em;
    }
  }
`;

export const SubStepWrapper = styled.div``;

export const HorizontalLine = styled.hr`
  width: 97%;
  margin-left: 0;
  margin-block: 1.375em 1.1875em;
  border-color: ${themes.primary.colors.calculatorHorizontalLine};
  border-width: 0 0 1px 0;
  border-style: solid;

  @media ${themes.primary.media.maxMobile} {
    margin-block: 1.143em 0.857em;
  }
`;

export const ResultImageWrapper = styled.div`
  width: 669px;
  height: 645px;

  @media ${themes.primary.media.maxMobile} {
    width: 356px;
    height: 635px;
  }
`;

export const LastStepBackButton = styled(StepButton)`
  color: ${themes.primary.colors.primary};
`;

export const EmailInputWrapper = styled.div`
  position: relative;
`;

export const FinishTextWrapper = styled.div`
  font-size: 1.6666em;
  line-height: 160%;
  font-family: ${themes.primary.font.family.openSans};
  font-weight: ${themes.primary.font.weight.bold};
  padding: 1.4em 1em;

  @media ${themes.primary.media.minPC} {
    font-size: 1.5em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.35em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.55em;
    padding-top: 1.3em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.666em;
    padding-top: 1.4em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.346em;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-block: 0;

    @supports (-webkit-touch-callout: none) {
      transform: translateY(3px);
    }

    @supports not (-webkit-touch-callout: none) {
      transform: translateY(-4px);
    }
    & > div span:nth-child(2) br {
      display: none;
    }
  }
`;

export const QuitButton = styled.button`
  position: absolute;
  right: 290px;
  bottom: 35px;
  cursor: pointer;
  padding: 1.105em 2.05em;
  border-radius: 0.52em;
  font-size: 1.5833em;
  text-transform: uppercase;
  border: 1.8px solid ${themes.primary.colors.primary};
  box-shadow: 7px 2px 0 ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.blogBackground};
  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.primary};

  @media ${themes.primary.media.minPC} {
    right: 310px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    right: 290px;
    font-size: 1.3em;
    padding: 0.8em 1.9em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    right: 310px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    right: 290px;
  }

  @media ${themes.primary.media.maxMobile} {
    box-shadow: 5.52438px 1.57839px 0 ${themes.primary.colors.primary};
    font-size: 1.346em;
    padding: 1.17em 2.09em;
    right: 165px;
    bottom: 15px;
  }
`;

export const CalculatorInputsFieldsWrapper = styled.div`
  padding: 0.53em 20px 0.53em 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  font-family: ${themes.primary.font.family.openSans};
  overflow: hidden;

  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 5px 20px 5px 0;
  }

  &.quit {
    padding-top: 5px;
    font-size: 20px;
    font-weight: ${themes.primary.font.weight.bold};
  }

  &.last {
    padding-block: 0;
    font-size: 18px;
    font-weight: ${themes.primary.font.weight.bold};
  }

  &.input {
    padding: 0;
  }

  & .__se__t-upper {
    text-transform: uppercase;
  }

  & .__se__t-lower {
    text-transform: lowercase;
  }

  & .__se__t-first-letter-capitalize {
    display: block;

    &:first-letter {
      text-transform: uppercase;
    }
  }

  & .__se__t-heavy {
    font-weight: ${themes.primary.font.weight.heavy};
  }

  & .__se__t-extra-bold {
    font-weight: ${themes.primary.font.weight.extraBold};
  }

  & .__se__t-bold {
    font-weight: ${themes.primary.font.weight.bold};
    color: black;
  }

  & .__se__t-semi-bold {
    font-weight: ${themes.primary.font.weight.semiBold};
  }

  & .__se__t-medium {
    font-weight: ${themes.primary.font.weight.medium};
  }

  & .__se__t-normal {
    font-weight: ${themes.primary.font.weight.normal};
  }
  & .__se__t-light {
    font-weight: ${themes.primary.font.weight.light};
  }

  @media ${themes.primary.media.maxMobile} {
    &.title {
      padding-right: 0;
    }

    &.last {
      font-size: 14px;
      padding: 0 0.6em 0.53em 0;
    }

    &.quit {
      font-size: 14px;
      line-height: 22px;
      padding: 0;
      height: auto;
    }
  }
`;

export const SubStepTitle = styled.h3`
  font-size: 1em;
  margin: 0 0 1em 0;
  line-height: 118.75%;

  & p {
    margin: 0;

    & .__se__t-upper {
      text-transform: uppercase;
    }

    & .__se__t-lower {
      text-transform: lowercase;
    }

    & .__se__t-first-letter-capitalize {
      display: block;

      &:first-letter {
        text-transform: uppercase;
      }
    }
  }
`;

export const InputsWrapper = styled.div`
  padding-top: 21px;
  max-height: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${themes.primary.colors.primary};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track-piece:end {
    background: transparent;
    margin-bottom: 10px;
  }

  &::-webkit-scrollbar-track-piece:start {
    background: transparent;
    margin-top: 10px;
  }

  scrollbar-color: ${themes.primary.colors.primary} transparent;
  scrollbar-width: thin;
`;
