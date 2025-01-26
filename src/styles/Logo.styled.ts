import styled from "styled-components";
import themes from "../utils/themes";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 132px;
  height: 42px;

  @media (max-width: 1799px) {
    width: 126px;
    height: 32px;
  }

  @media (max-width: 1200px) {
    width: 102px;
    height: 26px;
  }

  @media (max-width: 992px) {
    width: 126px;
    height: 32px;
  }

  &.footer {
    width: 180px;
    height: 50px;

    @media (max-width: 1799px) {
      width: 136px;
      height: 44px;
    }

    @media (max-width: 1280px) {
      width: 102px;
      height: 26px;
    }

    @media (max-width: 1110px) {
      width: 90px;
      height: 23px;
    }
  }

  &.header {
    width: 132px;
    height: 42px;

    @media ${themes.primary.media.min768Mobile} and ${themes.primary.media.maxBreakpoint1100}{
      width: 184px;
      height: 40px;
    }

    @media ${themes.primary.media.minPCFullHD} {
      width: 200px;
      height: 56px;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
