import styled, { keyframes } from "styled-components";
import themes from "../../../../utils/themes";

interface BackgroundImageProps {
  height?: string;
  padding?: string;
  zIndex?: number;
}

const HighlightingAnimation = keyframes`
    to {
        opacity: 1;
    }
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media ${themes.primary.media.minBreakpoint1100} {
    gap: 14px;
  }
`;
export const BackgroundContainer = styled.section`
  display: flex;
  flex-direction: column;
  @media ${themes.primary.media.maxMobile} {
    margin: 0 -16px;
  }
  @media ${themes.primary.media.min768Mobile} {
    margin: 0 -40px;
  }
  @media ${themes.primary.media.min1440} {
    margin: 0 -52px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    margin: 0 -68px;
  }
`;
export const BackgroundImage = styled.div<BackgroundImageProps>`
  display: flex;
  z-index: ${({ zIndex }) => zIndex};
  height: ${({ height }) => height};
  position: relative;
  justify-content: center;

  width: 100%;

  @media ${themes.primary.media.maxMobile} {
    padding: 0 16px;
  }

  @media ${themes.primary.media.min768Mobile} {
    padding: 0 40px;
  }

  @media ${themes.primary.media.min1440} {
    padding: 0 52px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    padding: 0 68px;
  }
`;

export const GridContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.jetBlack};
  gap: 3.15em;

  @media ${themes.primary.media.maxMobile} {
    justify-content: flex-start;
    gap: 40px;
  }

  @media screen and ${themes.primary.media.minBreakpoint1100} {
    flex-direction: row;
    & > div {
      flex: 0 1 calc(33% - 17px);
    }
    gap: 32px;
  }
`;

export const GridItem = styled.div`
  max-width: 425px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  @media ${themes.primary.media.minBreakpoint1100} {
    padding: 16px;
  }
  @media ${themes.primary.media.min1440} {
  }

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 100%;
  }
`;

export const Heading = styled.h1`
  font-size: 32px;
  font-weight: ${themes.primary.font.weight.heavy};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 16px;

  @media ${themes.primary.media.maxMobile} {
    font-size: 24px;
    line-height: 32.16px;
    margin-top: 0;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 32px;
    line-height: 42.88px;
    margin-top: 0;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    flex: 1;
  }
  @media ${themes.primary.media.min1440} {
    white-space: nowrap;
    flex: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 40px;
    line-height: 53.6px;
    margin-bottom: 23px;
  }
`;

export const Paragraph = styled.div`
  font-size: 20px;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 140%;

  p {
    margin: 0;
    padding: 0;

    & > span {
      opacity: 1;
      position: relative;
      margin: 0;
      padding: 4px 5px;

      & > span:first-child {
        position: relative;
        z-index: 2;
        white-space: nowrap;
      }

      & > span:nth-child(2) {
        color: transparent;
        border-radius: 6px;
        background: linear-gradient(360deg, #cacde9 0%, #e4e4ee 100%);
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        margin: 0;
        left: 0;
        box-shadow: 0 0 8px 0 #233ce126;
        top: 0;
        animation: 1.5s ${HighlightingAnimation} 1.5s 1 normal forwards;
      }
    }
  }

  @media screen and ${themes.primary.media.maxMobile} {
    font-size: 16px;
    line-height: 25.6px;
  }

  @media screen and ${themes.primary.media.min768Mobile} {
    font-size: 20px;
    line-height: 140%;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
    line-height: 37.33px;
  }
`;
