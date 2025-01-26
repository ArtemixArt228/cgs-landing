import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  margin-top: 8.8em;
  position: relative;
  padding-bottom: 9.5em;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 6em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 98px;
    padding-bottom: 0;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin-top: 64px;
  }
`;

export const ContentWrapper = styled.div`
  @media ${themes.primary.media.maxMobile} {
    ::before {
      content: "";
      background: ${themes.primary.colors.headerBorder};
      position: absolute;
      top: -28px;
      left: -30px;
      width: 150%;
      height: 1px;
      color: black;
    }
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    padding-bottom: 22em;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: -4.5em;
  right: 6em;
  width: 430px;
  height: 395px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 40%;
    height: 80%;
    right: 0;
  }

  @media (max-width: 1300px) {
    right: 2em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    right: 0;
    width: 35%;
    top: 20%;
    height: 65%;
  }

  @media (min-width: 551px) and ${themes.primary.media.maxMobile} {
    top: 0;
    width: 100%;
    margin-bottom: 1.5em;
    height: 43.7em;
    position: relative;
    margin-left: auto;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 70%;
    right: 0;
    top: 36%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 95%;
    right: 0;
    top: 43%;
  }
`;
