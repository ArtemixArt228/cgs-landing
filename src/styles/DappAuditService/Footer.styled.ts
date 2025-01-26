import styled from "styled-components";
import themes from "../../utils/themes";

export const ContentWrapper = styled.section`
  position: relative;
  padding-bottom: 9.45em;

  @media ${themes.primary.media.maxMobile} {
    padding: 0;
    & > div > a {
      padding: 1.3em 2.4em;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: -5%;
  right: 0.5em;
  width: 457px;
  height: 323px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 657px;
    height: 523px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    right: 2em;
    width: 307px;
    height: 217px;
    top: 43%;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    margin-left: auto;
    margin-right: 0;
    right: 0;
    margin-block: ${themes.primary.spacing.tertiary};
    width: 100%;
    height: 400px;
    top: auto;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 307px;
    height: 217px;
  }
`;
