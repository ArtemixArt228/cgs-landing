import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import themes from "../../utils/themes";

export const WrapperStyledH = styled.div`
  margin-top: calc(
    clamp(72px, 72px + (100vw - 1440px) * ((110 - 72) / (1920 - 1440)), 110px)
  );
  width: 100%;

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const StyledH = styled.div`
  font-family: "NAMU";
  font-weight: 900;
  font-size: calc(
    clamp(52px, 52px + (100vw - 1440px) * ((66 - 52) / (1920 - 1440)), 66px)
  );
  line-height: 47px;
  text-transform: uppercase;
  color: ${themes.primary.colors.black};
`;

export const Marquee = styled.div`
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: 20px;
  height: 60px;
`;

const scroll = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const MarqueeContent = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 100%;
  gap: calc(
    clamp(54px, 54px + (100vw - 1440px) * ((80 - 54) / (1920 - 1440)), 80px)
  );
  animation: ${scroll} 80s infinite linear;
  text-align: center;
  white-space: nowrap;
`;

export const MobleTextWrapper = styled.div`
  font-size: 24px;
`;

export const StyledButton = styled.button`
  background: ${themes.primary.colors.headerBorderHover};
  position: relative;
  text-transform: uppercase;
  box-shadow: 0px 0px 0px ${themes.primary.colors.black};
  padding: 0 36px;
  border: 1.8px solid ${themes.primary.colors.black};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  height: calc(
          clamp(67px, 67px + (100vw - 1440px) * ((89 + 67) / (1920 - 1440)), 89px)
  );
  align-items: center;
  font-family: "NAMU";
  font-weight: 900;
  font-size: calc(
          clamp(19px, 19px + (100vw - 1440px) * ((19 + 24) / (1920 - 1440)), 24px)
  );
  transition: box-shadow 1s ease-in-out;
  cursor: pointer;
  color: ${themes.primary.colors.black};
  margin-top: calc(
          clamp(-21px, -5px + (100vw - 1440px) * ((-21 + 5) / (1920 - 1440)), -5px)
  );

  box-shadow: 7px 2px 0px ${themes.primary.colors.black};

  &:active {
    box-shadow: 7px 2px 0px ${themes.primary.colors.black};
  }
  &:focus {
    box-shadow: 7px 2px 0px ${themes.primary.colors.black};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 19px;
    padding: 0 20px;
    height: 67px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 16px;
    height: 62px;
  }
`;

export const Container = styled.div`
  height: 100vh;
`;

export const ContainerDate = styled.div`
  position: relative;
  min-height: calc(100vh - 57px - 56px);
  overflow: hidden;
  @media (max-width: 1280px) {
    min-height: calc(100vh - 57px - 46px);
  }

  @media (max-width: 1097px) {
    padding-top: 131px;
    min-height: calc(100vh - 57px - 39px);
  }

  @media (max-width: 767px) {
    padding-top: 17px;
    min-height: calc(100vh - 93px - 101px);
  }
`;
