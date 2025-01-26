import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    margin-top: 88px;
    margin-bottom: -2em;
    flex-direction: column;
    ::before {
      position: absolute;
      top: -28px;
      left: -30px;
      content: "";
      width: 150%;
      height: 1px;
      background-color: #8f8e93;
    }
  }
`;

export const TextContent = styled.div`
  & > a {
    margin-top: 2.9em;

    @media ${themes.primary.media.maxMobile} {
      font-size: 1em !important;
      margin-top: 2.19em;
      padding: 1.195em 1.31em !important;
    }
  }
`;

export const Image = styled.img`
  position: relative;
  right: 22px;
  width: 22em;
  height: auto;
  bottom: 2.7em;

  @media ${themes.primary.media.minPCFullHD} {
    right: 30px;
    width: 30em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 20em;
    right: 2em;
    bottom: 3em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    right: 0em;
  }

  @media ${themes.primary.media.maxMobile} {
    bottom: 2em;
    left: 2.81em;
    width: 90%;
    height: auto;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    bottom: 2em;
    left: 2.81em;
    width: 309px;
    height: 340px;
  }
`;
