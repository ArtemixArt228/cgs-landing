import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;

  @media ${themes.primary.media.maxTabletLandScape} {
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  padding-top: 11.5em;

  @media ${themes.primary.media.minPCFullHD} {
    padding-top: 11em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    max-width: 100%;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-top: 3.25em;
    margin-bottom: 0;

    & > a {
      font-size: 1em !important;
      padding: 1.195em 3.205em !important;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    padding-top: 0;
  }
`;

export const Image = styled.img`
  margin: 0.5em -2.84em 0 0;
  max-width: 40em;
  height: 40.3em;

  @media (min-width: 1700px) {
    max-width: 32.6em;
    height: 32.75em;
    margin-left: -7em;
  }

  @media (min-width: 1900px) {
    max-width: 38.6em;
    height: 38.75em;
  }

  @media (max-width: 1400px) {
    width: 25em;
    height: 25em;
    margin-top: 5em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 40em;
    height: 40em;
    margin-left: 6em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 1em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    height: 100%;
    margin: 9.25em 0 8.5em 6.9em;
    scale: 1.225;
  }

  @media (max-width: 730px) {
    width: 70%;
    height: 70%;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    scale: 1;
    width: 23.9em;
    height: 400px;
    margin: 0.4em 0 0 0.85em;
  }
`;
