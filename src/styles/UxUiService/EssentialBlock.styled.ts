import styled from "styled-components";
import themes from "../../utils/themes";
import { essentialImageShake } from "../Animations.styled";

export const Container = styled.section`
  margin: 9.25em 0 0;
  display: flex;
  position: relative;

  @media ${themes.primary.media.minPCFullHD} {
    margin: 7.7em 0 0;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-inline: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 5.5em 0 0;
    flex-direction: column-reverse;
    position: relative;
    ::after {
      content: "";
      height: 1px;
      position: absolute;
      background-color: ${themes.primary.colors.headerBorder};
      width: 130%;
      bottom: -5.625em;
      left: -10%;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  width: 30.5vw;
  height: 20vw;
  left: 2.5em;
  transform: scale(1.15);

  @media ${themes.primary.media.minPCFullHD} {
    width: 29.95vw;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    left: -2em;
    top: 2em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    transform: scale(1.5);
    top: 12em;
    left: 2em;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    transform: scale(1.12);
    width: 100%;
    height: auto;
    top: 15px;
    left: 2.5em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    transform: scale(1.15);
    width: 100%;
    height: 216px;
    top: 0;
    left: 1.5em;
  }
`;

export const EssentialImageBehanceGroup = styled.g`
  position: relative;

  animation: ${essentialImageShake} 4s infinite;
  transform-origin: 75% 65%;

  &:hover {
    transform: rotate(-10deg);
    animation: none;
    & + g {
      opacity: 1;
    }
  }
`;

export const EssentialPopoverGroup = styled.g`
  opacity: 0;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    transform: translateX(-40px);
  }
`;

export const ContentWrapper = styled.div`
  padding-top: 1.125em;
  padding-right: 0.8em;
  margin-left: calc(30.5vw + 5em);
  max-width: 60%;

  @media ${themes.primary.media.maxPCFullHD} {
    max-width: 51.8%;
  }

  @media ${themes.primary.media.maxServiceWeb} {
    max-width: 60%;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-left: 0;
    padding: 0;
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: ${themes.primary.font.size.reviewTitle};
  font-weight: inherit;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;
  max-width: 100%;

  br {
    display: none;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 2.3em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 1.5em;

    br {
      display: block;
    }
  }
`;

export const Text = styled.div`
  font-size: 1.375em;
  line-height: 160%;
  margin: 0.91em 0 0;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.3em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.25em;
    margin: 1em 0 2.3em;
    max-width: 100%;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 1em;
    margin: 1em 0 2.3em;
  }
`;
