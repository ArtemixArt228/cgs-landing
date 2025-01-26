import styled, { keyframes } from "styled-components";
import themes from "../../../utils/themes";

export const arrowOne = keyframes`
    0% {
        transform: translate(-36px, 36px);
    }
    100% {
        transform: translate(0px, 0px);;
    }
`;

export const arrowTwo = keyframes`
    0% {
        transform: translate(0px, 0px);
    }
    100% {
        transform: translate(36px, -36px);
    }
`;

export const HeroSectionContainer = styled.section`
  font-family: ${themes.primary.font.family.namu};
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 1.5em;
  flex-direction: column;
  align-items: flex-start;

  @media ${themes.primary.media.maxMobile} {
    gap: 40px;
  }

  @media ${themes.primary.media.min768Mobile} {
    gap: 52px;
  }

  @media ${themes.primary.media.minLaptop} {
    gap: 16px;
    flex-direction: row;
  }
  @media ${themes.primary.media.min1440} {
    gap: 4.4em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    justify-content: space-between;
    margin: 0;
    gap: 4em;
  }
`;

export const HeroSectionContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 64px;
  width: 100%;
  @media ${themes.primary.media.maxTabletPortrait} {
    max-width: 100%;
  }

  @media ${themes.primary.media.maxMobile} {
    max-width: 100%;
    gap: 32px;
  }
  @media ${themes.primary.media.min768Mobile} {
    gap: 40px;
  }
  @media ${themes.primary.media.minLaptop} {
    max-width: 50%;
    gap: 48px;
  }
  @media ${themes.primary.media.min1440} {
    max-width: 54em;
    gap: 64px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 85.33px;
  }
`;

export const TitleAndDescription = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 64px;
  @media ${themes.primary.media.maxMobile} {
    gap: 16px;
  }
  @media ${themes.primary.media.min768Mobile} {
    gap: 20px;
  }
  @media ${themes.primary.media.onlyLaptopL} {
    gap: 20px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 26.67px;
  }
`;

export const Text = styled.div`
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 162.5%;

  p {
    margin: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
  }

  @media ${themes.primary.media.min768Mobile} {
    font-size: 18px;
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 20px;
  }

  @media ${themes.primary.media.min1440} {
    font-size: 20px;
    margin-right: 0;
    max-width: 900px;
  }

  @media screen and ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
    line-height: 160%;
  }
`;

export const HeroSectionBtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const HeroSectionImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  border: 1px solid ${themes.primary.colors.vodka};
  position: relative;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  background-color: ${themes.primary.colors.servicesBackground};
  padding: 12px;
  width: 100%;
  @media ${themes.primary.media.maxMobile} {
    height: calc(
      clamp(205px, 205px + (100vw - 375px) * ((425 - 205) / (768 - 375)), 425px)
    );
    padding: 8px 5px;
  }
  @media ${themes.primary.media.min768Mobile} and ${themes.primary.media
      .max1199} {
    padding: 10px 7px;
    width: 100%;
    height: 401px;
    height: calc(
      clamp(
        401px,
        401px + (100vw - 768px) * ((629 - 401) / (1200 - 768)),
        629px
      )
    );
  }
  @media ${themes.primary.media.minLaptop} {
    padding: 6px 5px;
    width: 100%;
    height: calc(
      clamp(
        313px,
        313px + (100vw - 1200px) * ((380 - 313) / (1440 - 1200)),
        380px
      )
    );
  }
  @media ${themes.primary.media.min1440} {
    padding: 5px 4px;
    max-width: 610px;
    height: 349px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    padding: 4px;
    max-width: 812px;
    height: 461px;
  }
`;

export const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  & iframe {
    border: 0;
    border-radius: 10px;
  }
  aspect-ratio: 1900 / 900;

  @media ${themes.primary.media.maxTabletLandScape} {
    aspect-ratio: 16 / 9;
  }
`;
