import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  position: relative;
  margin-top: 8.8em;

  @media ${themes.primary.media.maxPCFullHD} {
    margin-top: 7em;
  }
  @media ${themes.primary.media.maxMobile} {
    margin-top: 3.3em;
    display: flex;
    flex-direction: column;
    margin-bottom: 90px;
    margin-bottom: clamp(
      12px,
      90px - calc((768px - 100vw) * ((90 - 12) / (768 - 375))),
      90px
    );
    width: 100%;
    position: static;
  }
  @media ${themes.primary.media.minTablet} {
    margin-top: 0.3em;
  }
`;

export const Title = styled.h1`
  font-size: 4.125em;
  line-height: 132%;
  display: inline-block;
  margin: 0;
  text-transform: uppercase;
  font-weight: ${themes.primary.font.weight.heavy};
  width: 12.3em;

  &.server {
    width: 100%;
  }

  &.dappAudit {
    font-size: 4.125em;
    letter-spacing: 0;
    line-height: 132%;
  }

  @media ${themes.primary.media.minTablet} {
    line-height: 120%;
  }

  @media ${themes.primary.media.maxMobile} {
    &.itSupport {
      line-height: 122%;
    }
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    max-width: 12em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 4.5825em;
    line-height: 120%;
    letter-spacing: 4.4px;

    &.itSupport {
      font-size: 3.925em;
      letter-spacing: 0;
      line-height: 129%;
    }

    &.mobileAudit {
      font-size: 3.93em;
    }

    &.mobileDev {
      font-size: 3.93em;
    }

    &.webDev {
      font-size: 3.44em;
      letter-spacing: 0;
      line-height: 133%;
    }
    &.uxUi,
    &.server {
      font-size: 3.925em;
    }

    &.webAudit {
      font-size: 3.45em;
    }

    &.dappAudit {
      font-size: 4.575em;
    }
  }

  @media ${themes.primary.media.maxPCFullHD} {
    letter-spacing: 3.3px;
    line-height: 120%;
    margin-top: 0.14em;

    &.webDev,
    &.mobileDev {
      letter-spacing: 0;
      margin-top: 0;
      line-height: 133%;
    }

    &.server {
      margin-top: 0;
    }
  }

  @media ${themes.primary.media.maxLaptop} {
    &.mobileAudit {
      margin-top: 0;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    letter-spacing: normal;
    font-size: 4.125em;
    line-height: 132%;
    width: 120%;
    margin-top: 0;

    &.webDev {
      line-height: 121%;
    }

    &.mobileAudit {
      width: 70%;
      span {
        display: inline;
      }
    }

    &.server,
    &.dappAudit {
      line-height: 125%;
    }
  }

  @media (max-width: 767px) {
    letter-spacing: normal;
    font-size: 4.125em;
    line-height: 132%;
    width: 100%;
    margin-top: 0;
    max-width: 10em;

    &.mobileAudit {
      width: 100%;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 2.5em;
    line-height: 48px;

    &.server {
      line-height: 120%;
    }

    &.dappAudit {
      font-size: 2.5em;
      line-height: 125%;
    }
  }
`;

export const Description = styled.div`
  font-size: 1.375em;
  line-height: 160%;
  margin: 0.9em 0 1.7em;
  max-width: 28em;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.46em;

    &.itSupport {
      margin: 0.8em 0 1.7em;
      font-size: 1.25em;
      line-height: 165%;
    }

    &.mobileAudit {
      font-size: 1.25em;
    }

    &.mobileDev {
      font-size: 1.22em;
    }

    &.webDev {
      margin: 0.8em 0 1.7em;
      font-size: 1.095em;
    }

    &.uxUi,
    &.server {
      font-size: 1.25em;
      margin: 0.9em 0 1.8em;
    }

    &.webAudit {
      font-size: 1.1em;
    }
  }

  @media ${themes.primary.media.maxPCFullHD} {
    margin-top: 0.5em;
    margin-top: 0.9em;
    font-size: 1.38em;
    max-width: 27em;
    line-height: 160%;
  }

  @media (min-width: 1250px) and (max-width: 1500px) {
    &.itSupport {
      margin-top: 1.18em;
      margin-bottom: 1.7em;
      width: 45%;
    }
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    max-width: 60%;
    line-height: 160%;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.25em;
    max-width: 99%;
    margin: 1em 0 2.7em;
    font-weight: 900;
    line-height: 160%;

    &.itSupport {
      margin: 0.8em 0 2.7em;
    }

    &.webDev,
    &.blockchain {
      margin: 1.7em 0 2.6em;
      font-size: 1.25em;
      max-width: 67.5%;
    }

    &.server {
      margin: 1.6em 0 2.25em;
    }

    &.cloud,
    &.uxUi {
      margin: 1.5em 0 2.6em;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 1em;
    max-width: 100%;
    margin: 1em 0 2em;

    &.webDev,
    &.blockchain,
    &.uxUi,
    &.server {
      margin: 1em 0 1.75em;
      font-size: 1em;
      max-width: 100%;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: -5em;
  right: -0.6em;
  width: 38vw;
  height: auto;
  aspect-ratio: 1.066/1;

  @media ${themes.primary.media.minPCFullHD} {
    top: -2.5em;
    right: 0em;
    width: 37.8vw;
  }

  @media ${themes.primary.media.maxPCFullHD} {
    top: -1.1em;
    right: -0.4em;
  }

  @media (max-width: 1370px) {
    top: 2em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    bottom: -5em;
  }

  @media (max-width: 1100px) {
    right: -3em;
    top: 3em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    right: -1em;
    top: 5em;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    width: 103.5%;
    height: 86.4vw;
    right: unset;
    top: unset;
    bottom: 0.3em;
    left: 50%;
    transform: translateX(-50%);
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    width: 103%;
    height: 89vw;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 25px;

  @media ${themes.primary.media.minPCFullHD} {
    gap: 0px;
    &.itSupport {
      gap: 10px;
    }

    &.mobileAudit {
      gap: 10px;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    gap: 25px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    flex-direction: column;
    gap: 15px;
  }
`;
