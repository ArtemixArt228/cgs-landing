import styled from "styled-components";
import themes from "../../../../../utils/themes";

export const PictureContainer = styled.a`
  position: relative;
  width: 335px;
  height: 383px;
  :hover {
    cursor: pointer;
    .color {
      opacity: 1;
    }
    .gray {
      opacity: 0;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 447px;
    height: 511px;
  }
`;

export const GrayscalePictureWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  transition: opacity 0.3s;
  width: 335px;
  height: 383px;

  @media (min-width: 550px) {
    width: 90vw;
    height: 724px;
  }

  @media (min-width: 769px) {
    width: 335px;
    height: 383px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 447px;
    height: 511px;
  }
`;

export const ColorPictureWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s;
  width: 335px;
  height: 383px;

  @media (min-width: 550px) {
    width: 90vw;
    height: 724px;
  }

  @media (min-width: 769px) {
    width: 335px;
    height: 383px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 447px;
    height: 511px;
  }
`;
