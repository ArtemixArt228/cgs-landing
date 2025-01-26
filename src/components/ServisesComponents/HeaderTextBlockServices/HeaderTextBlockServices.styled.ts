import styled from "styled-components";
import themes from "../../../utils/themes";

export const Title = styled.h1`
  font-size: 4.125em;
  line-height: 132%;
  display: inline-block;
  margin: 0;
  text-transform: uppercase;
  font-weight: ${themes.primary.font.weight.heavy};
  width: 12.3em;

  &.cloud {
    width: fit-content;
  }
  &.mobileAudit,
  &.uxUi,
  &.webAudit {
    letter-spacing: 3.3px;
  }
  &.server,
  &.ai {
    @media ${themes.primary.media.minTablet} {
      line-height: 120%;
    }
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    max-width: 10em;
  }

  @media ${themes.primary.media.minMobile} {
    &.blockchain {
      height: 2.7em;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 3.435em;

    &.cloud {
      font-size: 3.925em;
    }

    &.itSupport,
    &.server,
    &.uxUi,
    &.mobileAudit {
      font-size: 3.535em;
    }
    &.blockchain,
    &.ai,
    &.dappAudit {
      font-size: 4.5825em;
    }
    &.extraTopMargin {
      height: 4em;
    }

    &.mobileAudit {
      font-size: 3.929em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 4.125em;
    line-height: 132%;
    width: 100%;

    &.webDev {
      font-size: 4.125em;
      line-height: 120%;
    }
    &.mobileDev,
    &.cloud {
      font-size: 4.125em;
      line-height: 132%;
    }

    &.blockchain {
      line-height: 128%;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 2.5em;
    line-height: 48px;

    &.webDev,
    &.mobileDev {
      font-size: 2.5em;
      line-height: 48px;
    }

    &.cloud {
      font-size: 40px;
      line-height: 120%;
    }
  }
`;

export const Description = styled.div`
  font-size: 1.375em;
  line-height: 160%;
  margin: 0.9em 0 1.7em;
  max-width: 28em;

  &.cloud,
  &.dappAudit {
    margin: 0.8em 0px 1.75em;
    max-width: 27.27em;
  }

  &.webAudit {
    margin: 0.9em 0 1.09em;

    @media ${themes.primary.media.min4K} {
      margin: 0.857em 0 1.82em;
    }
  }

  &.blockchain,
  &.uxUi {
    margin: 0.6em 0 1.7em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.095em;

    &.cloud {
      font-size: 1.25em;
    }

    &.itSupport,
    &.server,
    &.uxUi,
    &.mobileAudit {
      font-size: 1.2em;
    }
    &.blockchain,
    &.ai,
    &.dappAudit {
      font-size: 1.46em;
    }
    &.extraTopMargin {
      margin-top: -3.5em;
    }
    &.mobileAudit {
      font-size: 1.25em;
    }
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    max-width: 60%;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.25em;
    max-width: 99%;
    margin: 1em 0 1.75em;
    font-weight: 900;
    &.ai {
      margin: 1em 0 2.7em;
    }
    &.blockchain,
    &.webDev {
      font-size: 1.25em;
      font-weight: 900;
      margin: 1.75em 0 2.75em;
      max-width: 71.5%;
    }

    &.mobileDev {
      font-size: 1.25em;
      margin: 1em 0 2.7em;
    }

    &.cloud {
      font-size: 1.25em;
      max-width: 100%;
      margin: 1.5em 0 2.7em;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 1em;
    &.ai {
      max-width: 100%;
      margin: 1em 0 2em;
    }

    &.blockchain,
    &.webDev {
      font-size: 1em;
      margin: 1em 0 1.75em;
    }

    &.mobileDev {
      font-size: 1em;
      margin: 1.2em 0 1.8em;
    }

    &.cloud {
      font-size: 1em;
      margin: 1.1em 0 1.8em;
    }
  }

  @media (max-width: 475px) {
    max-width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    gap: 25px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    flex-direction: column;
    gap: 15px;
  }
`;
