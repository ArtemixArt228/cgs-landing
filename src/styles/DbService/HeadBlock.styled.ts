import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 7.5em 0 0;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    padding-top: 0.625em;
    flex-direction: column;

    & > a {
      font-size: 1em !important;
      padding: 1.195em 2.91em !important;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    padding-top: 0.3em;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 44.5%;
  width: 61%;

  @media (max-width: 1350px) {
    width: 50%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    margin-top: 2em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 100%;
    margin-top: 0;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 7.25em;
  right: -4em;
  max-width: 55em;
  width: 45.2vw;

  @media (max-width: 1350px) {
    width: 32em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 30em;
    right: -5em;
    top: 20em;
  }
  @media ${themes.primary.media.maxMobile} {
    position: relative;
    width: 104%;
    top: 5em;
    right: 0;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 21.875em;
    height: 15.94em;
    top: 3.3em;
    left: -1px;
  }
`;
