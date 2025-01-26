import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  margin-top: 12.65em;
  position: relative;
  display: flex;
  gap: 42px;
  align-items: center;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocksTablet};
  }

  @media ${themes.primary.media.min4K} {
    margin-top: 12.25em;
  }

  @media ${themes.primary.media.maxMobile} {
    align-items: flex-start;
    margin-top: 40px;
    margin-bottom: 120px;
    flex-direction: column;
    gap: 10px;

    &:before {
      content: "";
      display: block;
      height: 1px;
      width: 120vw;
      position: relative;
      right: 10%;
      background: ${themes.primary.colors.headerBorder};
      margin-bottom: 1.7em;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin-top: 40px;
    margin-bottom: 89px;
  }
`;

export const Subtitle = styled.h3`
  font-size: ${themes.primary.font.size.webAuditSubtitle};
  line-height: 140%;
  text-transform: uppercase;
  margin: 0 0 0.5em 0;
  & > section {
    width: 100%;
    & > span {
      display: block;
      width: 100%;
    }
  }

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
    font-size: 40px;
    margin-bottom: 28.6px;
    padding-bottom: 0;
    br {
      display: none;
    }
    max-width: 73%;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 24px;
    margin-bottom: 14px;
    max-width: 90%;
  }
`;

export const Text = styled.p`
  font-size: 1.5em;
  line-height: 160%;
  font-weight: ${themes.primary.font.weight.heavy};
  margin: 14px 0 18px;

  @media ${themes.primary.media.maxMobile} {
    font-size: 24px;
    margin: 0 0 27.5px;
    br {
      display: none;
    }
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 18px;
    margin-bottom: 18px;
  }
`;

export const TextContainer = styled.div`
  max-width: 41em;
  @media ${themes.primary.media.maxMobile} {
    max-width: 100%;
  }
`;

export const ProblemsContainer = styled.div`
  max-width: 69em;
  padding: 4.5em 0.7em 6em 3.2em;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.gradientColor1RateCard} 0%,
    ${themes.primary.colors.gradientColor2RateCard} 100%
  );
  display: flex;
  flex-wrap: wrap;
  row-gap: 2.9em;
  column-gap: 2.5em;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    padding: 47px 20px;
    margin-inline: -20px;
    width: 113%;
    row-gap: 3.1em;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 20px;
    row-gap: 18px;
  }
`;

export const ProblemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  span {
    font-size: 1.5em;
    font-weight: ${themes.primary.font.weight.heavy};
  }

  @media ${themes.primary.media.maxMobile} {
    gap: 40px;

    span {
      font-size: 20px;
    }
    svg {
      width: 12px;
      height: 45px;
    }
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    gap: 14px;

    span {
      font-size: 16px;
    }
    svg {
      width: 6px;
      height: 22px;
    }
  }
`;
