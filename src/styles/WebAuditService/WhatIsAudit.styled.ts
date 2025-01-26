import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  margin-top: 11.65em;

  @media (min-width: 1560px) {
    margin-top: 3.5%;
  }

  @media (min-width: 1920px) {
    margin-top: 10.5em;
  }

  @media (min-width: 2560px) {
    margin-top: 0%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocksTablet};
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 11em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocksMobile};
  }
`;

export const Subtitle = styled.h3`
  font-size: 2.5rem;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0px 0 0.5em 0;

  @media ${themes.primary.media.min4K} {
    font-size: 3.25rem;
    margin: 0px 0 0.6665em 0;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.webAuditSubtitleTabletLandscape};
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: ${themes.primary.font.size.webAuditSubtitleTabletPortrait};
  }

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;

  @media ${themes.primary.media.minPCFullHD} {
    justify-content: initial;
    gap: 9.4em;
  }

  @media ${themes.primary.media.maxMobile} {
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column-reverse;
    gap: 20px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    gap: 0;
  }
`;

export const Image = styled.img`
  width: 43.58em;
  position: relative;
  height: 25.4em;

  @media ${themes.primary.media.minPCFullHD} {
    width: 43.5625em;
    height: 25.5em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 35em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 50%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    height: auto;
  }
`;

export const TextWrapper = styled.div`
  font-size: 2em;
  line-height: 160%;
  max-width: 26.1em;
  margin-right: 5.3em;

  @media ${themes.primary.media.min4K} {
    margin-right: 3em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.tertiary};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 20px;
    margin: 0 auto;
    margin-bottom: 40px;
    white-space: pre-line;
    max-width: 100%;
    br {
      display: none;
    }
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
