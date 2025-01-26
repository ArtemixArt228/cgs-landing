import styled from "@emotion/styled";
import themes from "../../utils/themes";
import { keyframes } from "@emotion/react";

export const WrapperStyledHRate = styled.div`
  margin-top: calc(
    clamp(77px, 77px + (100vw - 1440px) * ((108 - 77) / (1920 - 1440)), 108px)
  );
  width: 100%;
  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const StyledHRate = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-weight: 900;
  font-size: ${themes.primary.font.size.ourWorkText};
  line-height: 47px;
  text-transform: uppercase;
  color: ${themes.primary.colors.black};
  @media ${themes.primary.media.min4K} {
    font-size: 66px;
  }
`;

export const MarqueeRate = styled.div`
  gap: 20px;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: 20px;
  height: 56px;
`;
const scroll = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const MarqueeContentRate = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 100%;
  gap: 20px;
  animation: ${scroll} 80s infinite linear;
  text-align: center;
  white-space: nowrap;
`;

export const MobileTextWrapper = styled.div`
  font-size: 24px;
`;

export const Container = styled.div`
  height: 100vh;
`;

export const ContainerRateCardDate = styled.div`
  position: relative;
  min-height: calc(100vh - 57px - 56px);
  overflow: hidden;
  @media (max-width: 1280px) {
    min-height: calc(100vh - 57px - 46px);
  }

  @media (max-width: 1097px) {
    min-height: calc(100vh - 57px - 39px);
  }

  @media (max-width: 767px) {
    min-height: calc(100vh - 93px - 101px);
  }
`;

export const MobileRateTextWrapper = styled.div`
  font-size: 24px;
`;
