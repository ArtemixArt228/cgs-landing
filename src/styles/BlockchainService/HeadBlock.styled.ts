import styled, { keyframes } from "styled-components";
import themes from "../../utils/themes";

const noiseAnimations = keyframes`
  0% {
    opacity: 1;
  }
   50% {
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const criptoImageAnimations = keyframes`
  0% {
    opacity: 1;
  }
  5% {
    opacity: 1;
  }
  5.5% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  10.5% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const Container = styled.section`
  margin-top: 8.75em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin-top: 0.4em;
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

export const Image = styled.div`
  position: absolute;
  top: -7.79em;
  right: -5.3em;
  width: 42em;

  @media ${themes.primary.media.minPCFullHD} {
    top: -8.5em;
    right: -0.75em;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    left: 25px;
    top: 1em;
    width: 22.3em;
    height: 19.125em;
    margin-bottom: 5em;
  }
`;

export const ImageTV = styled.img`
  position: absolute;
  z-index: 3;

  @media ${themes.primary.media.minPCFullHD} {
    width: 107%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 60%;
    top: 11em;
    right: 1em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 70%;
    top: 2em;
    right: 1%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 205%;
    top: 0;
    right: -207.5px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 100%;
    top: -20px;
    right: 2.5px;
  }
`;

interface IImageProps {
  imgIdx?: number;
}

export const ImageCrypto = styled.img<IImageProps>`
  position: absolute;
  top: 240px;
  left: 115px;

  :nth-child(2) {
    animation: ${noiseAnimations} 250ms linear infinite forwards;
  }
  :nth-child(3) {
    animation: ${noiseAnimations} 250ms linear 125ms infinite forwards;
  }
  :nth-child(${({ imgIdx }) => (imgIdx !== undefined ? imgIdx + 4 : 4)}) {
    animation: ${criptoImageAnimations} 16s linear infinite forwards;
    animation-delay: ${({ imgIdx }) =>
      imgIdx !== undefined ? imgIdx * 2 + 1 : 4}s;
  }

  &.noise {
    z-index: 1;
    object-fit: cover;
  }
  &.tv-image {
    z-index: 2;
    opacity: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    top: 340px;
    left: 160px;
    width: 18.5em;
  }

  @media (min-width: 2200px) {
    top: 390px;
    left: 180px;
    width: 18.5em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 11em;
    height: 8em;
    left: 20em;
    top: 20.5em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 12em;
    height: 10em;
    top: 13em;
    left: 17.7em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 17em;
    height: 15em;
    top: 17em;
    left: -1em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 9em;
    height: 7em;
    top: 7.5em;
    left: 4em;
  }
`;
