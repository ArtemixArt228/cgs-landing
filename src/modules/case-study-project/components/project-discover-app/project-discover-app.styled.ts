import styled from "styled-components";
import themes from "../../../../utils/themes";
import { FeaturesDescription } from "../../../case-studies/styles";

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
`;

export const DiscoverAppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  @media ${themes.primary.media.minBreakpoint1100} {
    flex-direction: row;
    justify-content: space-between;
    gap: 32px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 40px;
  }
`;

export const DisplayAppText = styled(FeaturesDescription)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media ${themes.primary.media.maxMobile} {
    gap: 16px;
  }
  @media ${themes.primary.media.min768Mobile} {
    gap: 8px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    width: 70%;
  }
  @media ${themes.primary.media.min1440} {
    width: calc(
      clamp(
        498px,
        498px + (100vw - 1440px) * ((670 - 498) / (1920 - 1440)),
        670px
      )
    );
  }
  @media ${themes.primary.media.minPCFullHD} {
    min-width: 670px;
  }
`;

export const GifContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  border: 1px solid ${themes.primary.colors.borderRateCard};
  width: 100%;
  overflow: hidden;
  background: linear-gradient(
      90deg,
      ${themes.primary.colors.portfolioGradient1}66 0%,
      ${themes.primary.colors.portfolioGradient2}66 100%
    ),
    linear-gradient(
      270.25deg,
      ${themes.primary.colors.grey}59 8.74%,
      ${themes.primary.colors.gradientGrey} 48.23%,
      ${themes.primary.colors.grey}59 96.82%
    );
  aspect-ratio: 16/9;
  padding: 12px;
  position: relative;
  @media ${themes.primary.media.maxMobile} {
    height: calc(
      clamp(200px, 200px + (100vw - 375px) * ((425 - 200) / (768 - 375)), 425px)
    );
    padding: 5px 6px;
  }
  @media ${themes.primary.media.min768Mobile} {
    padding: 6px 5px;
    width: 688px;
    height: 400px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    padding: 12px 13px;
    width: calc(
      clamp(
        806px,
        806px + (100vw - 1440px) * ((1074 - 806) / (1920 - 1440)),
        1074px
      )
    );
    height: calc(
      clamp(
        470px,
        470px + (100vw - 1440px) * ((626 - 470) / (1920 - 1440)),
        626px
      )
    );
  }
  @media ${themes.primary.media.minPCFullHD} {
    padding: 16px 19px;
    height: 626px;
    width: 1074px;
  }
`;
