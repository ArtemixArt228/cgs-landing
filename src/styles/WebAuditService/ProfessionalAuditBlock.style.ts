import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  margin-top: 10em;
  margin-bottom: 10.2em;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocksTablet};
    margin-bottom: ${themes.primary.spacing.servicesMarginBetweenFooterTablet};
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 60px;
    margin-bottom: ${themes.primary.spacing.servicesMarginBetweenFooterMobile};
    &:before {
      content: "";
      display: block;
      height: 1px;
      width: 120vw;
      position: relative;
      right: 10%;
      background: ${themes.primary.colors.headerBorder};
      margin-bottom: 2.69em;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;
    align-items: center;
    gap: 3em;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 250px;
  flex-shrink: 0;
  margin-top: 2.1em;

  @media ${themes.primary.media.minPCFullHD} {
    width: 750px;
    height: 375px;
    margin: 0 auto;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 750px;
    height: 375px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100vw;
    height: 50vw;
    left: -30px;
    margin-top: 0;
  }
`;

export const HoveredImageContainer = styled.div`
  position: absolute;
  top: 54%;
  left: 28%;
  width: 44%;
  height: 20%;
  transform: rotate(6.5deg);
  overflow: hidden;
  z-index: 4;
`;

interface IProps {
  delay: number;
}

export const HoveredImage = styled.div<IProps>`
  @keyframes scrollTimer {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-120%);
    }
  }
  @keyframes fade-in-timer {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }

  transform: translateX(-20%);
  opacity: ${({ delay }) => (delay ? "0" : "100")};

  animation: ${({ delay }) =>
    delay
      ? "6s linear infinite 3s scrollTimer, 1s forwards 3s fade-in-timer;"
      : "6s linear infinite scrollTimer;"};
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;

  width: 150%;
  height: 100%;
  z-index: 3;
`;
