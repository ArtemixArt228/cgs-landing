import styled, { keyframes } from "styled-components";
import themes from "../../utils/themes";

const searchAnimations = keyframes`
  0% {
    opacity: 1;
  }
   25% {
    opacity: 1;
  }
  25.5% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const Container = styled.section`
  margin-top: 11.2em;
  position: relative;
  display: flex;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 8em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    margin-bottom: 51.3em;
    align-items: center;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin-top: 5px;
    margin-bottom: -14em;
  }
`;

export const Content = styled.div`
  & > a {
    @media ${themes.primary.media.maxMobile} {
      font-size: 1em;
      padding: 1.2em 1.51em;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: -6em;
  right: 3.5%;
  width: 600px;
  height: 530px;

  @media (min-width: 2200px) {
    top: 7%;
  }

  @media (min-width: 1800px) {
    scale: 1.25;
  }

  @media (max-width: 2200px) {
    top: 0.5em;
  }

  @media ${themes.primary.media.maxLaptop} {
    top: -3em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    top: 54px;
    width: 500px;
    height: 450px;
    right: -8%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 28em;
    height: 21em;
    top: 10%;
    right: -13%;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 24em;
    position: absolute;
    right: 0%;

    width: 100%;
    height: 610px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin-top: 4em;
    margin-left: -1.2em;
    position: relative;
    right: 0%;

    width: 110%;
    height: 320px;
  }
`;

export const ImageMobile = styled.img`
  position: absolute;
  z-index: 1;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 90%;
    height: 100%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 100%;
    height: 100%;
  }
`;

interface IImageProps {
  imgIdx?: number;
}

export const ImageSearch = styled.img<IImageProps>`
  position: absolute;
  right: 21%;
  top: 22%;

  :nth-child(${({ imgIdx }) => (imgIdx !== undefined ? imgIdx + 2 : 2)}) {
    animation: ${searchAnimations} 2s linear infinite forwards;
    animation-delay: ${({ imgIdx }) =>
      imgIdx !== undefined ? imgIdx * 0.5 : 2}s;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 30%;
    height: 25%;
    top: 27%;
    margin-right: 8.5%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 30%;
    margin-right: 5%;
    margin-top: -1%;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: -1%;
    margin-right: 4%;
  }
`;
