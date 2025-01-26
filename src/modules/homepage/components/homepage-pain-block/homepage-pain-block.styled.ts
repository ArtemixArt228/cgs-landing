import styled from "styled-components";
import themes from "../../../../utils/themes";

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    margin: 0 -16px;
  }
  @media ${themes.primary.media.min768Mobile} {
    margin: 10px -40px 0;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    margin: 0 -40px;
  }
  @media ${themes.primary.media.min1440} {
    margin: 0 -52px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    margin: 0 -68px;
  }
`;
export const FailWrapper = styled.div`
  background-image: url("/PainBlock/painBlockBG.png");
  background-size: cover;
  width: 100%;
  margin-top: 0;

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

export const StatementsContainer = styled.div`
  position: relative;
  letter-spacing: -1px;
  margin-top: 0;
  font-family: ${themes.primary.font.family.namu};
  text-transform: uppercase;
  text-align: start;

  p {
    margin: 0;
    padding: 0;

    & > span:first-child {
      font-weight: ${themes.primary.font.weight.heavy};
      color: ${themes.primary.colors.darkBlue};

      @media screen and ${themes.primary.media.maxMobile} {
        font-size: 40px;
        line-height: 53.6px;
      }

      @media screen and ${themes.primary.media.min768Mobile} {
        font-size: 64px;
        line-height: 95px;
      }

      @media screen and ${themes.primary.media.minBreakpoint1100} {
        font-size: 64px;
        line-height: 76.8px;
      }
      @media ${themes.primary.media.minPCFullHD} {
        font-size: 82px;
        line-height: 98.4px;
      }
    }

    & > span:nth-child(2) {
      font-weight: ${themes.primary.font.weight.heavy};
      color: ${themes.primary.colors.jetBlack};

      @media screen and ${themes.primary.media.maxMobile} {
        font-size: 28px;
        line-height: 38px;
        letter-spacing: -0.01em;
      }

      @media screen and ${themes.primary.media.min768Mobile} {
        font-size: 40px;
        line-height: 56px;
      }
      @media ${themes.primary.media.minPCFullHD} {
        font-size: 60px;
        line-height: 80.4px;
      }
    }
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  font-size: 32px;
  font-weight: 900;
  line-height: 40px;
  letter-spacing: -0.1px;
  text-transform: uppercase;
  text-align: left;
  margin: 20px 0 0 0;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 7px;
    font-size: 22px;
    line-height: 32px;
    font-weight: 900;
  }
  @media ${themes.primary.media.min768Mobile} {
    margin-top: 16px;
    font-size: 32px;
    line-height: 40px;
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    margin-top: 20px;
    text-align: center;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 48px;
    margin-top: 24px;
  }
`;

export const FailCausesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px 64px;
  width: 100%;
  border-radius: 16px;
  border: 2px solid ${themes.primary.colors.vodka};
  padding: 24px 16px;
  margin-top: 4em;
  background: linear-gradient(
      91.14deg,
      rgba(88, 105, 221, 0.07) 4.96%,
      rgba(88, 105, 221, 0.021) 99.17%
    ),
    radial-gradient(
      17.33% 49.28% at 12.35% 23.12%,
      rgba(241, 239, 237, 0.5) 22.72%,
      rgba(241, 239, 237, 0) 100%
    ),
    radial-gradient(
      20.63% 58.66% at 87.12% 56.99%,
      rgba(88, 105, 221, 0.05) 22.72%,
      rgba(88, 105, 221, 0) 100%
    );

  @media screen and ${themes.primary.media.maxTabletPortrait} {
  }

  @media screen and ${themes.primary.media.maxMobile} {
    grid-template-columns: 1fr;
    margin-top: 32px;
    padding: 16px 12px 5px;
    gap: 16px;
  }

  @media screen and ${themes.primary.media.min768Mobile} {
    padding: 24px 16px;
    grid-template-columns: 1fr;
    margin-top: 3.25em;
    gap: 20px;
  }

  @media screen and ${themes.primary.media.minBreakpoint1100} {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 24px 16px;
    margin-top: 64px;
    gap: 20px 64px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 100px;
    gap: 20px 64px;
    padding: 35px 20px;
  }
`;

export const FailCausesItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    text-transform: lowercase;
    font-size: 20px;
    line-height: 26.8px;
    letter-spacing: -0.01px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 5.5px 0;
    img {
      width: 25px !important;
    }
  }
  @media ${themes.primary.media.min768Mobile} {
    padding: 7.5px 0;
    img {
      width: 35px !important;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    span {
      text-transform: lowercase;
      font-size: 24px;
    }
    img {
      width: 51px !important;
      height: 51px !important;
    }
  }
`;

export const MaterializeText = styled.span``;

export enum SolutionTitleDecorationContainerPositions {
  LEFT,
}

export type SolutionTitleDecorationContainerProps = {
  position?: keyof typeof SolutionTitleDecorationContainerPositions;
};

export const SolutionTitleDecorationContainer = styled.div<SolutionTitleDecorationContainerProps>`
  width: 25%;
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ position }) =>
    position === "LEFT" ? "row" : "row-reverse"};
`;

interface SolutionTitleDecorationImageWrapperProps {
  transparent?: number;
  rotate?: number;
  hideResolution?: keyof typeof themes.primary.media;
}

export const SolutionTitleDecorationImageWrapper = styled.div<SolutionTitleDecorationImageWrapperProps>`
  opacity: ${({ transparent }) => transparent};
  transform: ${({ rotate }) => `rotate(${rotate}deg)`};
  display: none;
  @media ${({ hideResolution }) =>
      hideResolution && themes.primary.media[hideResolution]} {
    display: block;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: flex-start;
  gap: 3.5em;
  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.jetBlack};

  @media ${themes.primary.media.maxMobile} {
    gap: 3.5em;
  }

  @media ${themes.primary.media.min768Mobile} {
    gap: 3.15em;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const GridItem = styled.div`
  max-width: 100%;

  @media ${themes.primary.media.min1440} {
    margin-top: 20px;
    max-width: 425px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 100%;
    margin-top: 30px;
  }
`;

export const Heading = styled.h1`
  font-size: 32px;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 42px;
  text-transform: uppercase;
  white-space: nowrap;
  margin-block: 2px 10px;

  @media ${themes.primary.media.minTablet} {
    font-size: 24px;
    margin-top: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 42px;
  }
`;
