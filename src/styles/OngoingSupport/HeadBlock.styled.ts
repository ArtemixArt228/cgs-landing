import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../Animations.styled";

export const Container = styled.section`
  position: relative;
`;

export const Content = styled.div`
  padding-top: 7.6em;

  @media ${themes.primary.media.onlyTabletLandScape} {
    max-width: 75%;
  }

  @media (max-width: 992px) {
    padding-top: 5em;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-top: 3em;

    & > a {
      font-size: 1em !important;
      padding: 1.195em 2.18em !important;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    padding-top: 0.3em;
  }
`;

export const ImageWrapper = styled.div``;

export const Image = styled.img`
  position: absolute;
  top: 1.4em;
  right: 1.4em;
  width: 41vw;

  @media ${themes.primary.media.minPCFullHD} {
    top: -1.6em;
    right: 2.4em;
  }

  @media ${themes.primary.media.minWidth2500} {
    top: -2.6em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 28.3em;
    top: 15em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 20em;
    top: 12em;
    right: 0em;
  }

  @media (min-width: 550px) and ${themes.primary.media.maxMobile} {
    position: relative;
    min-width: 100%;
    min-height: 58rem;
    top: -2em;
    left: -0.81em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    position: relative;
    width: 22.125em;
    height: 331px;
    top: -1.5em;
    left: -0.81em;
  }
`;
