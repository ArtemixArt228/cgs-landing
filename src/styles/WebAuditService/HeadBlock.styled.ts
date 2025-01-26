import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  margin-top: 3.25em;
  position: relative;

  @media ${themes.primary.media.min4K} {
    margin-top: 2.7em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 2.65em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin-top: 0.25em;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and ${themes.primary.media.maxMobile} {
    justify-content: flex-start;
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  padding-top: 6.625em;
  width: 50.6%;

  @media ${themes.primary.media.minPCFullHD} {
    padding-top: 6.825em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    padding-top: 4em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    padding-top: 0;
    margin-bottom: 4.37em;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-bottom: 50px;
  }
`;

export const Image = styled.img`
  width: 61em;
  position: relative;
  height: 35.7em;

  @media (min-width: 1560px) {
    height: 36.5em;
  }

  @media ${themes.primary.media.maxLaptop} {
    width: 50%;
  }

  @media (max-width: 1200px) {
    height: 38.9em;
  }

  @media (max-width: 992px) {
    right: 2.5em;
    top: 7.5em;
    height: 25em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 121%;
    right: 13.5%;
    height: 46em;
    top: 3.4em;
  }

  @media (max-width: 475px) {
    top: 1.5em;
    height: 355px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 55.6em;
    height: 30.3em;
  }

  @media (min-width: 2400px) {
    width: 40.6em;
    height: 34.3em;
  }
`;
