import styled, { keyframes } from "styled-components";
import themes from "../../../../../utils/themes";

const fadeInOut = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

interface AnimatedArrowProps {
  delay: number;
}

export const AnimatedArrow = styled.div<AnimatedArrowProps>`
  animation: ${fadeInOut} 3s infinite;
  animation-delay: ${(props) => props.delay}s;

  @media screen and ${themes.primary.media.maxMobile} {
    &:nth-child(2),
    &:nth-child(8),
    &:nth-child(7),
    &:nth-child(3) {
      display: none;
    }

    img {
      object-fit: contain;
      width: 16px !important;
      height: 16px !important;
    }
  }
  @media screen and ${themes.primary.media.min768Mobile} {
    &:nth-child(2){
      display: none;
    }
    &:nth-child(8),
    &:nth-child(7),
    &:nth-child(3) {
      display: block;
    }

    img {
      object-fit: contain;
      width: 15px !important;
      height: 21px !important;
    }
  }
  @media screen and ${themes.primary.media.minBreakpoint1100} {
    &:nth-child(2){
      display: block;
    }

    img {
      object-fit: contain;
      width: 15px !important;
      height: 21px !important;
    }
  }
  @media screen and ${themes.primary.media.minPCFullHD} {
    img {
      object-fit: contain;
      width: 20px !important;
      height: 28px !important;
    }
  }
`;

interface ButtonContainerAnimatedArrowProps {
  isMobile: boolean;
}

export const ButtonContainer = styled.div<ButtonContainerAnimatedArrowProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media ${themes.primary.media.maxMobile} {
    gap: 8px;
  }
  @media ${themes.primary.media.min768Mobile} {
    gap: 22px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    gap: 46px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    gap: 66px;
  }
`;

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
