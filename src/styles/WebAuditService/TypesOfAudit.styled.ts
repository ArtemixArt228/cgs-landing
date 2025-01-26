import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  margin-top: 11.65em;
  position: relative;
  z-index: 16;
  overflow-block: visible;

  @media ${themes.primary.media.min4K} {
    margin-top: 11.25em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocksTablet};
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 2em;
    margin-bottom: 8.65em;
  }
`;

export const Subtitle = styled.h3`
  font-size: ${themes.primary.font.size.webAuditSubtitle};
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;

  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.webAuditSubtitlePC};
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

export const TypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3em;
  row-gap: 85px;
  margin-top: 3.5em;

  @media ${themes.primary.media.min4K} {
    row-gap: 115px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 2.7em;
    grid-template-columns: 1fr;
    row-gap: 24px;
  }

  @media ${themes.primary.media.maxMobile} {
    row-gap: 40px;
    margin-top: -0.75em;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    row-gap: 24px;
  }
`;
