import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 3.4em 0 0 0;

  @media (max-width: 1100px) {
    flex-direction: column;
    padding-top: 3.25em;
    padding-bottom: 0;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    padding-top: 0.3em;
    padding-bottom: 0;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 45.5%;
  margin-top: 4.2em;

  & > a {
    font-size: 1.54em;
    padding: 1.195em 2.805em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 3.2em;
  }

  @media (max-width: 1100px) {
    width: 100%;
    margin-bottom: 3em;
    margin-top: 0;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin-bottom: 3em;
  }
`;

export const Telephone = styled.img`
  margin-bottom: 0.2rem;
  margin-right: 2.3rem;
  width: 36.7em;
  height: 38.1em;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 42%;
    height: auto;
  }

  @media (max-width: 1100px) {
    width: 80%;
    height: 43.75em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    height: 43.75em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 100%;
    height: 21.25em;
  }

  @media (min-width: 1700px) {
    width: 31.5em;
    height: 31em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-left: 2em;
    width: 28.5em;
    height: 28em;
  }

  @media (min-width: 1900px) {
    width: 31.5em;
    height: 31em;
  }
`;
