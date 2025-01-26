import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  margin-top: 8.6em;
  padding-bottom: 9.5em;
  position: relative;

  @media ${themes.primary.media.minPCFullHD} {
    &.itSupport {
      margin-bottom: 4.4em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 5.56em;
    padding-bottom: 16.5em;
    ::before {
      content: "";
      position: absolute;
      top: -28px;
      left: -30px;
      width: 150%;
      height: 1px;
      background-color: #8f8e93;
      color: black;
    }

    & > a {
      font-size: 1em !important;
      padding: 1.195em 2.91em !important;
    }
  }

  @media (min-width: 551px) and (max-width: 768px) {
    &.itSupport {
      margin-bottom: 33.4em;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    &.itSupport {
      margin-top: 5.56em;
      padding-bottom: 17.2em;
      ::before {
        content: "";
        position: absolute;
        top: -28px;
        left: -30px;
        width: 150%;
        height: 1px;
        background-color: #8f8e93;
        color: black;
      }

      & > a {
        font-size: 1em !important;
        padding: 1.195em 2.91em !important;
      }
    }
  }
`;

export const Image = styled.img`
  position: absolute;
  right: -10px;
  bottom: 2.5em;
  width: 27em;
  z-index: -1;

  @media ${themes.primary.media.onlyTabletPortrait} {
    width: 20.3em;
    &.itSupport {
      bottom: 0.5em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    width: 18.94em;
    bottom: 2.75em;
    right: 1em;
  }

  @media (min-width: 551px) and (max-width: 768px) {
    &.itSupport {
      top: 22.6em;
      right: 0.5em;
      width: 38em;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    &.itSupport {
      width: 19em;
      bottom: 2.2em;
      right: 0em;
    }
  }
`;
