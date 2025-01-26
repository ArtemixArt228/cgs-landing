import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  margin-top: -1.5em;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 5.5em;
  }

  @media (max-width: 1055px) {
    margin-top: 4em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 25px;
  }
`;

export const Subtitle = styled.h3`
  font-size: ${themes.primary.font.size.webAuditSubtitle};
  line-height: 140%;
  text-transform: uppercase;
  margin: 0 0 0.775em 0;

  @media ${themes.primary.media.minPC} {
    font-size: 3.25em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.webAuditSubtitleTabletLandscape};
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: ${themes.primary.font.size.webAuditSubtitleTabletPortrait};
  }

  @media ${themes.primary.media.maxMobile} {
    width: 80%;
    font-size: 40px;
    margin-bottom: 40px;
    br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 24px;
    width: 100%;
    margin-bottom: 14px;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 2.5em;
  position: relative;
  display: flex;
  gap: 55px;

  @media ${themes.primary.media.minPCFullHD} {
    gap: 80px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 0;
  }
`;
