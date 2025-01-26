import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  margin-top: 144px;
  position: relative;

  &.mobileDev {
    margin-top: 10.7em;
  }
  &.withoutShowcase {
    margin-bottom: 12.9em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    background-image: none;
    padding-bottom: 5.5em;
  }

  @media (max-width: 1200px) {
    padding-bottom: 9.5em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 3px;
    margin-top: 8em;
    padding-bottom: 9.5em;

    &.mobileDev {
      margin-top: 100px;
      margin-bottom: 30.25em;
    }

    &.withoutShowcase {
      margin-bottom: 1.82em;
    }
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    &.mobileDev {
      margin-bottom: 2.25em;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding-bottom: 3.5em;

    &.mobileDev {
      margin-top: 50px;
      margin-bottom: 0;
      padding-bottom: 30px;
    }
  }
`;

export const WhatDoWeUse = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  position: relative;

  @media ${themes.primary.media.minPCFullHD} {
    gap: 13.5em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-bottom: 10px;
    flex-direction: column-reverse;
    align-items: center;
    gap: 10px;
  }
`;

export const WhatDoWeUseContainer = styled.div`
  margin-right: 1.1em;
  width: 50%;

  & h2 {
    margin-left: 0.1em;
  }

  @media ${themes.primary.media.minPC} {
    margin-top: 13em;
  }

  @media (max-width: 1340px) {
    width: 54%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin: 0;
    width: 100%;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 2.9em;
  }
`;

export const SubText = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 0;
  line-height: 160%;
  font-size: ${themes.primary.font.size.secondary};

  & svg {
    width: 45px;
    height: 20px;
  }

  & p {
    margin-bottom: 0;
    margin-top: 0.6em;

    &:first-child {
      margin-top: 0;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.oneAndNine};
    margin-top: 1.1em;
  }

  @media (max-width: 1340px) {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 21px;
    & svg {
      transform: translateY(4px);
      width: 51px;
      height: 18px;
    }

    & p {
      margin-top: 15px;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 1rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 689px;
  width: 640px;

  @media ${themes.primary.media.maxTabletLandScape} {
    display: block;
    height: 250px;

    &.whatDoWeUse {
      height: 500px;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    &.whatDoWeUse {
      width: 100%;
    }
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 465px;
    width: 100%;

    &.whatDoWeUse {
      height: 465px;
      width: 100%;
    }
  }
`;

export const Image = styled.img`
  position: absolute;
  width: 855px;
  height: 689px;
  z-index: -1;

  @media ${themes.primary.media.minPCFullHD} {
    height: 130%;
    width: 175%;
  }

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const ImagePhone = styled.img`
  display: none;

  @media ${themes.primary.media.maxMobile} {
    display: block;
    position: absolute;
    width: 106%;
    height: 190%;
    top: -15%;
  }

  @media (max-width: 570px) {
    width: 106.5%;
    height: 100.5%;
    top: -5%;
  }
`;
