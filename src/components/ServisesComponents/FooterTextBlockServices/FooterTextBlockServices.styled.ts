import styled from "styled-components";
import themes from "../../../utils/themes";

export const Title = styled.h3`
  font-size: 2.5em;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;
  max-width: 70%;

  &.biggerFontSize {
    font-size: 3.33em;
  }
  &.fullWidth {
    max-width: 100%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    &.webDev {
      font-size: 2em;
    }
    &.cloud {
      font-size: 2.325em;
    }
    &.itSupport,
    &.mobileAudit,
    &.fullWidth {
      font-size: 2.1429em;
    }
    &.biggerFontSize {
      font-size: 3.315em;
    }

    &.blockchain {
      font-size: 2.705em;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 40px;
    max-width: 100%;
    margin-top: 1em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 1.5em;
    line-height: 132%;
    margin-bottom: 10px;
    max-width: 100%;

    &.biggerFontSize {
      font-size: 24px;
    }
    &.fullWidth {
      max-width: 100%;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    gap: 1em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    gap: 16px;
    flex-direction: column;
  }
`;
