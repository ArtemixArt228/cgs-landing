import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.article`
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding-inline: 4.25rem;
  overflow: hidden;
  font-family: ${themes.primary.font.family.namu};
  font-size: 1rem;
  font-weight: ${themes.primary.font.weight};

  @media (min-width: 2560px) {
    max-width: 2560px;
    margin: 0 auto;
  }

  @media (min-width: 2200px) {
    font-size: 1.4rem;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.2rem;
  }
  @media ${themes.primary.media.maxPCFullHD} {
    padding: 0 50px;
    &.footer {
      margin-top: 0.6em;
    }
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    padding: 0 40px;
    &.footer {
      margin-top: 0em;
    }
  }
  @media ${themes.primary.media.maxMobile} {
  }
  @media ${themes.primary.media.minTablet} {
    padding: 0 20px;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 1rem;
    margin-top: 0;
    &.footer {
      margin-top: -0.6em;
    }
  }
`;

export const Wrapper = styled.section`
  margin-top: 16em;
  margin-bottom: 250px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 17.8em;
    margin-bottom: 250px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocksTablet};
    margin-bottom: 0px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 0;
    margin-bottom: 21px;
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

export const WrapperWithLineProvideBlock = styled.div`
  @media ${themes.primary.media.maxTabletPortrait} {
    &:before {
      content: "";
      display: block;
      height: 1px;
      width: 120vw;
      position: relative;
      right: 20%;
      background: ${themes.primary.colors.headerBorder};
    }
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    &:before {
      right: 10%;
    }
  }
`;

export const Subtitle = styled.h3`
  font-size: 40px;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 3.25rem;
    line-height: 143.59%;
    &.aiWidth {
      max-width: 800px;
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
    font-size: 2.5em;
    br {
      display: none;
    }
    &.mobileDissapear {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: ${themes.primary.font.size.webAuditSubtitleMobile};
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: ${themes.primary.font.size.oneAndHalf};
  }
`;
