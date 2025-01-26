import styled from "styled-components";
import themes from "../../utils/themes";

export const Subtitle = styled.h2`
  margin: 0;
  line-height: 140%;
  font-size: 2.5em;
  text-transform: uppercase;
  font-weight: inherit;

  &.perksTitle,
  &.needDomain {
    font-size: 40px;
    width: 11.9em;
  }
  &.mobileDev {
    font-size: 3.35em;
  }
  &.cloudSolutions,
  &.dappAudit,
  &.mobileAudit {
    width: 100%;
    font-size: 2.5em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    &.needDomain,
    &.dappAudit {
      font-size: 52px;
    }
    &.cloudSolutions {
      font-size: 2.325em;
    }
    &.mobileAudit {
      width: 100%;
      font-size: 2.32em;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 2.4em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 1.5rem;
    white-space: nowrap;

    &.footer {
      white-space: pre-wrap;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    &.needDomain {
      display: none;
    }
    line-height: 233%;
    white-space: normal;
    display: none;
    & .last-part > div {
      top: 20%;
    }
  }

  @media (max-width: 370px) {
    font-size: 1.35rem;
  }
`;

export const VisibleSubtitle = styled(Subtitle)`
  display: block;

  &.mobileDev {
    font-size: 3.33em;
  }

  @media ${themes.primary.media.maxMobile} {
    &.mobileDev {
      margin-top: 66px;
      font-size: 40px;
      line-height: 56px; /* 140% */
      margin-left: 0;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    &.mobileDev {
      margin-top: 20px;
      font-size: 24px;
    }
  }
`;
