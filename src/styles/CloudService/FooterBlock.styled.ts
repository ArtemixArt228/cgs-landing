import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  margin-top: 8.75em;
  padding-bottom: 6.94em;
  position: relative;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 7.75em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 6.8125em;
    padding-bottom: 0;

    & > a {
      font-size: 1em !important;
      padding: 1.195em 2.789em !important;
    }
    ::before {
      content: "";
      position: absolute;
      top: -1.75em;
      left: -30px;
      width: 130%;
      height: 1px;
      background-color: #8f8e93;
    }
  }
`;

export const Content = styled.div``;

export const Image = styled.img`
  position: absolute;
  right: 1.625em;
  bottom: 1em;
  width: 25.75em;
  height: 25em;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 15.75em;
    height: 15em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    position: relative;
    width: 25.75em;
    height: 25em;
    margin-top: 2em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 42.125em;
    height: auto;
    top: 5em;
    left: 5em;
    margin-bottom: 55px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 19em;
    height: 22em;
    top: 3.5em;
    left: 1.5em;
    margin-bottom: 0;
  }
`;
