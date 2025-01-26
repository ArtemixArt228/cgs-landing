import styled from "styled-components";
import themes from "../../utils/themes";

export const ContentWrapper = styled.section`
  position: relative;
  margin-top: -1em;
  padding-bottom: 14.2%;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 4.6em;
    padding-bottom: 14.6%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: 4.4em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 4.4em;
    padding: 0;
    margin-bottom: 5.6em;
    & > div > a {
      padding: 1.3em 2.4em;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin: 0em;
    padding: 0;

    & > div > a {
      padding: 1.3em 2.4em;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  width: 35.5vw;
  height: auto;
  aspect-ratio: 1.85/1;
  top: 5%;
  right: 5.5%;

  @media ${themes.primary.media.minPCFullHD} {
    top: 3.3%;
    right: 5.5%;
  }

  @media ${themes.primary.media.maxPCFullHD} {
    width: 35.5vw;
    height: auto;
    aspect-ratio: 1.85/1;
    top: 5%;
    right: 5.5%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 98.5vw;
    height: auto;
    aspect-ratio: 1.85/1;
    position: relative;
    margin-left: 0em;
    margin-top: 4.2em;
    margin-bottom: 2em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin-left: 0.2em;
    margin-top: 0.4em;
  }
`;

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
    color: #000;
    font-family: NAMU;
    font-size: 52px;
    font-style: normal;
    font-weight: 900;
    line-height: 74.667px; /* 143.59% */
    text-transform: uppercase;
    &.fullWidth {
      font-size: 2.375em;
    }
    &.biggerFontSize {
      font-size: 3em;
    }

    &.uxUi {
      font-size: 2.325em;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 40px;
    max-width: 100%;
    margin-top: 1em;

    &.webDev {
      margin-top: 0.4em;
    }

    &.webAudit {
      margin-top: 0;
    }

    &.dappAudit {
      font-size: 40px;
      width: 80%;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    &.dappAudit {
      font-size: 24px;
      width: 50%;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 1.5em;
    line-height: 132%;
    margin-bottom: 10px;
    max-width: 100%;
    margin-top: 2.1em;

    &.biggerFontSize {
      font-size: 24px;
    }
    &.fullWidth {
      max-width: 100%;
    }

    &.dappAudit {
      font-size: 24px;
      width: 100%;
    }
  }
`;

export const Text = styled.p`
  padding: 0;
  font-size: 1.5em;
  line-height: 160%;
  margin: 0.833em 0 1.667em;
  max-width: 70%;

  &.biggerFontSize {
    font-size: ${themes.primary.font.size.secondary};
    max-width: 38.5em;
  }
  &.fullWidth {
    max-width: 100%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    &.mobileAudit {
      font-size: 1.43em;
    }

    &.itSupport {
      margin: 0.45em 0 1.6em;
      font-size: 1.425em;
      & > span {
        & > br {
          display: none;
        }
      }
    }

    &.fullWidth {
      font-size: 1.425em;
      margin: 0.75em 0 1.6em;
    }
    &.biggerFontSize {
      font-size: 2em;
    }
    &.blockchain {
      font-size: 1.665em;
    }
    &.webDev {
      margin: 0.7em 0 1.6em;
      font-size: 1.25em;
    }
    &.uxUi {
      font-size: 1.42em;
    }
    &.dappAudit {
      font-size: 1.66em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 24px;
    margin-block: 1.2em;

    &.webDev {
      margin: 0.8em 0 2.65em;
      font-size: 1.25em;
      max-width: 100%;
    }

    &.itSupport {
      font-size: 1.25em;
      max-width: 100%;
    }

    &.mobileAudit {
      margin-top: 0.7em;
      margin-bottom: 2.1em;
      max-width: 100%;
    }

    &.uxUi,
    &.server {
      margin: 0.8em 0 1.65em;
      font-size: 1.25em;
      max-width: 100%;
    }

    &.webAudit {
      margin: 0.8em 0 2.4em;
      font-size: 1.675em;
    }

    &.dappAudit {
      font-size: 20px;
      max-width: 100%;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 1.125em;
    margin: 10px 0 28px;
    max-width: 100%;

    &.biggerFontSize {
      font-size: 1.125rem;
    }
    &.fullWidth {
      max-width: 100%;
    }
    &.webDev {
      font-size: 1.1em;
    }

    &.mobileAudit {
      margin-top: 0.7em;
      margin-bottom: 1.5em;
      max-width: 100%;
    }

    &.uxUi,
    &.server {
      margin: 10px 0 28px;
      font-size: 18px;
    }

    &.itSupport {
      margin: 10px 0 27px;
      font-size: 18px;
    }

    &.dappAudit {
      font-size: 18px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.5em;
  @media ${themes.primary.media.minPCFullHD} {
    gap: 0.8em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    gap: 1.5em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    flex-direction: column;
    gap: 1em;
  }
`;
