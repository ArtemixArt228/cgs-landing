import styled from "styled-components";
import themes from "../../utils/themes";

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  font-size: 24px;
  &.services {
  }
  &.homepage {
    @media ${themes.primary.media.min768Mobile} {
      margin-top: -10px;
    }
  }

  &.homepage.success-cases {
    @media ${themes.primary.media.min768Mobile} {
      margin-top: 14px;
    }
    @media ${themes.primary.media.minBreakpoint1100} {
      margin-top: -47px;
    }
    @media ${themes.primary.media.minPCFullHD} {
      margin-top: -10px;
    }
  }
`;

export const HeaderRectsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  @media ${themes.primary.media.maxBreakpoint1100} {
    justify-content: center;
    &.services {
      justify-content: space-around;
    }
  }
`;

interface IHeaderText {
  hasBackgroundFrame?: boolean;
}

export const HeaderText = styled.div<IHeaderText>`
  background-image: ${({ hasBackgroundFrame }) =>
    hasBackgroundFrame ? 'url("success-header.svg")' : "none"};
  background-size: cover;
  height: 120px;
  width: 488px;
  min-width: 488px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 32px;
    height: 160px;
    width: 651px;
    min-width: 651px;
  }

  &.services {
    @media ${themes.primary.media.min768Mobile} {
      width: auto;
      height: 29px;
      font-size: 22px;
      line-height: 29.48px;
      min-width: 389px;
    }
    @media ${themes.primary.media.minBreakpoint1100} {
      min-width: 448px;
      height: 32px;
    }
    @media ${themes.primary.media.min1440} {
      font-size: 24px;
      line-height: 32.16px;
    }
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 32px;
      height: 43px;
      min-width: 594px;
    }
  }
`;

export const RectsWrapper = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: start;
  height: 24px;

  &.project-overview-rect {
    position: absolute;
    top: -25px;
  }

  &.impl-process-rect {
    position: absolute;
    top: -25px;
  }

  &.services {
    position: absolute;
    left: 0;
    top: -30px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 32px;
    &.services {
      position: absolute;
      left: 12px;
      top: -38px;
      scale: 1.3;
    }
  }
  @media ${themes.primary.media.min4K} {
    height: 32px;
    &.project-overview-rect {
      top: -30px;
    }
    &.impl-process-rect {
      position: absolute;
      left: 12px;
      top: -33px;
      scale: 1.3;
    }
  }
`;
