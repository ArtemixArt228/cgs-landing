import styled from "styled-components";
import themes from "../../utils/themes";

export const ContentWrapper = styled.div`
  position: relative;
  margin-top: ${themes.primary.font.size.secondary};
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 2em;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column-reverse;
    margin-block: 1.75em 2.8125em;
  }
  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 6.34em;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    margin-bottom: 2.2em;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 678px;
  height: 432px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 50%;
    height: 150%;
    top: 1.2em;
    left: 3.6em;
  }
  @media ${themes.primary.media.maxPCFullHD} {
    width: 50%;
    height: 150%;
    top: 1.8em;
    left: 3em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    top: -2em;
  }

  @media (max-width: 1060px) {
    top: 0em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    position: relative;
    width: 100%;
    height: 400px;
    margin-bottom: 4em;
    left: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 0em;
    width: 99%;
    height: 598px;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    margin-bottom: 0em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 292px;
    margin-left: -0.5em;
  }
`;

export const TextWrapper = styled.div`
  width: 55%;

  @media ${themes.primary.media.maxPCFullHD} {
    margin-top: 1.5em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 100%;
    margin-bottom: 0.875em;
    margin-top: 0;
  }
`;

export const Text = styled.div`
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;
  margin: 0;
  & > p {
    margin: 0;
  }
  &:first-child {
    margin-block: 0 0.65em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 2rem;
    line-height: 160%;
    &:first-child {
      margin-bottom: 1.1em;
    }
  }

  @media ${themes.primary.media.maxPCFullHD} {
    &:first-child {
      margin-bottom: 1em;
    }
  }
  @media (max-width: 1390px) {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.25em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.25em;
    &:first-child {
      margin-block: 0 1.5em;
    }
    &:nth-child(2) {
      margin-bottom: 1.2em;
    }
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 1em;
    &:first-child {
      margin-block: 0 0.875em;
    }
    &:nth-child(2) {
      margin-bottom: 0em;
    }
  }
`;

export const LowerContentWrapper = styled.div`
  display: flex;
  position: relative;

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;

    &:first-child br {
      display: none;
    }
  }
`;

export const WhyIsAuditImportantImageWrapper = styled.div`
  position: absolute;
  top: -74%;
  right: 3.125em;
  height: 400px;
  width: 1237px;

  /* @media ${themes.primary.media.minPC} {
    width: 100%;
    height: 470px;
    right: 4em;
    top: -9.3em;
  } */

  @media (min-width: 2200px) {
    right: 10vw;
    top: -6.8em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 86vw;
    height: auto;
    aspect-ratio: 3.03/1;
    right: 3.5em;
    top: -6.9em;
  }

  @media ${themes.primary.media.maxPCFullHD} {
    width: 86vw;
    aspect-ratio: 3.03/1;
    height: auto;
    right: 3.5em;
    top: -6em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 6em;
    position: relative;
    right: 0;
    top: 0;
    width: 130%;
    scale: 1.4;
    margin-left: 70px;

    width: 100%;
    height: auto;
    aspect-ratio: 1.1/1;
    left: 50%;
    transform: translateX(-50.5%);
    margin-top: -3.3em;
    scale: 1;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 130%;
    height: auto;
    aspect-ratio: 1.1/1;
    left: 50%;
    transform: translateX(-50.5%);
    margin-top: -3.3em;
    scale: 1;
  }

  @media (max-width: 625px) {
    width: 110%;
  }

  @media (max-width: 425px) {
    width: 130%;
    transform: translateX(-59%);
    margin-top: -1.7em;
  }
`;

export const WhyIsAuditImportantWrapper = styled.div`
  margin-top: 13.5em;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 16.3em;
  }

  @media ${themes.primary.media.maxPCFullHD} {
    margin-top: 15em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: 8em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 0;
    position: relative;
  }
`;
