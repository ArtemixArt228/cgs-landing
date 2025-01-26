import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  position: relative;
`;

export const ContentWrapper = styled.div`
  padding-top: 10.75em;
  max-width: 50%;

  @media ${themes.primary.media.minPCFullHD} {
    padding-top: 11em;
    max-width: 54%;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-top: 2.75em;
    max-width: 100%;

    & > a {
      font-size: 1em !important;
      padding: 1.195em 2.05em !important;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    padding-top: 0.35em;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 5.61em;
  right: 3em;
  width: 36.5vw;

  @media ${themes.primary.media.minWidth2500} {
    width: 32.5vw;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 30em;
    right: -5em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 25em;
    right: -5em;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    width: 105.5%;
    height: auto;
    top: 4.25em;
    left: -1.25em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 22em;
    height: 365px;
    top: 2.65em;
    left: 0;
  }
`;
