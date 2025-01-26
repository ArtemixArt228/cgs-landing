import styled, { keyframes } from "styled-components";
import themes from "../../../../../../utils/themes";

export const CalendlyWidget = styled.div`
  margin-top: 24px;
  width: 100%;
  height: 409px;
  iframe {
    border-radius: 10px;
  }

  &.talk-to-expert-page {
    width: 100%;
    height: 419px;
    @media ${themes.primary.media.maxBreakpoint1100} {
      height: 409px;
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const RotatingDiv = styled.div`
  width: 48px;
  height: 48px;
  animation: ${rotate} 2s linear infinite;

  &.formLoader {
    position: absolute;
    top: 50%;

    @media ${themes.primary.media.maxMobile} {
      top: 80%;
      left: 44.5%;
    }
  }
  &.formLoader.talk-to-expert-page {
    position: absolute;
    top: 50%;

    @media ${themes.primary.media.maxMobile} {
      top: 50%;
      left: 44%;
    }
    @media ${themes.primary.media.onlyTablet} {
      top: 60%;
      left: 47%;
    }
  }
`;
