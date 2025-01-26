import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.div`
  font-size: 1rem;
  font-weight: ${themes.primary.font.weight};

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.2rem;
  }
  @media (min-width: 2200px) {
    font-size: 1.4rem;
  }
`;

export const Wrapper = styled.section`
  margin-top: 12.6em;
  margin-bottom: 130px;

  @media (min-width: 1800px) {
    margin-top: 14.2em;
    margin-bottom: 9em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocksTablet};
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 0;
    margin-bottom: 51px;
  }
`;

export const WrapperWithLine = styled.div`
  @media ${themes.primary.media.maxMobile} {
    &:before {
      content: "";
      display: block;
      height: 1px;
      width: 120vw;
      position: relative;
      right: 10%;
      background: ${themes.primary.colors.headerBorder};
      margin-bottom: 1.75em;
    }
  }
`;

export const Subtitle = styled.h3`
  font-size: 40px;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;

  &.dappAudit {
    font-size: 2.5em;
  }

  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.webAuditSubtitlePC};

    &.dappAudit {
      font-size: 2.7em;
    }
  }
  @media (max-width: 1500px) {
    &.aiWidth {
      max-width: 527px;
    }
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.webAuditSubtitleTabletLandscape};
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: ${themes.primary.font.size.webAuditSubtitleTabletPortrait};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.webAuditSubtitleMobile};
    &.dappAudit {
      font-size: ${themes.primary.font.size.webAuditSubtitleMobile};
    }
    br {
      display: none;
    }
    &.mobileDissapear {
      display: none;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: ${themes.primary.font.size.oneAndHalf};
  }
`;
