import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  margin-top: 8.8em;
  padding-bottom: 9.4em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 2em;
    padding-bottom: 26.2em;

    & > a {
      font-size: 1em;
      padding: 1.2em 1.51em;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    padding-bottom: 18.2em;
  }
`;

export const Image = styled.img`
  position: absolute;
  right: -2em;
  bottom: 7.35em;
  width: 25.5em;
  height: 17em;

  @media ${themes.primary.media.maxTabletLandScape} {
    bottom: 4em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 31em;
    height: auto;
    bottom: 1.56em;
    right: -0.9em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 18.44em;
    height: auto;
    bottom: 1.56em;
    right: -0.9em;
  }
`;
