import styled from "styled-components";
import themes from "../../utils/themes";

export const ContentWrapper = styled.div`
  position: relative;
  margin-top: 1.5em;
  display: flex;
  justify-content: flex-end;

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column-reverse;
    margin-block: 1.75em 2.8125em;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: -0.5em;
  width: 33em;
  height: 20em;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 40%;
    height: 120%;
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: 42%;
    height: 135%;
  }

  @media (max-width: 1060px) {
    top: 4%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    position: relative;
    width: 100%;
    height: 400px;
    margin-top: 0.875em;
    margin-bottom: 4em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 0;
    height: 500px;
    width: 105%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 260px;
  }
`;

export const TextWrapper = styled.div`
  width: 57%;
  font-size: 24px;
  line-height: 160%;

  @media ${themes.primary.media.minPCFullHD} {
    padding-top: 0.6em;
    font-size: 32px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 100%;
    margin-bottom: 0.875em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 20px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 16px;
  }
`;

export const Text = styled.p`
  &:first-child {
    margin-block: 0 0.65em;
  }

  @media (max-width: 1390px) {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    &:first-child {
      margin-block: 0 0.875em;
    }
  }
`;
