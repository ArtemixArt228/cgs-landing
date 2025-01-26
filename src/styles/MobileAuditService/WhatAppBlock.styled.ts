import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  margin-top: 24em;
  @media ${themes.primary.media.maxMobile} {
    margin-block: 4em 60px;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    margin-block: 3em 60px;
  }
  @media ${themes.primary.media.maxLaptop} {
    margin-top: 24.6em;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 3.3em;
  font-weight: inherit;
  line-height: 140%;
  text-transform: uppercase;
  max-width: 9.3em;

  @media ${themes.primary.media.maxMobile} {
    display: none;
    font-size: 1.5em;
    line-height: 132%;
  }
`;

export const Icon = styled.img`
  display: flex;
  margin-right: 0.3em;

  @media (min-width: 1920px) {
    min-width: 3.5em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    animation: none;
  }
`;

export const ContentLayout = styled.div`
  margin-top: 3.5em;
  width: 100%;
  display: flex;
  gap: 2em;

  @media ${themes.primary.media.maxServiceWeb} {
    justify-content: space-between;
  }

  @media ${themes.primary.media.minPCFullHD} {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.minPC} {
    justify-content: space-between;
  }

  @media (max-width: 1425px) {
    margin-top: 1em;
    width: 100%;
    flex-direction: column;
    row-gap: 1.25em;
  }

  @media ${themes.primary.media.maxMobile} {
    row-gap: 2.125em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    row-gap: 1.5em;
    margin-top: 0;
  }
`;

export const HaveContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px;
  flex: 1 1 33.33%;

  @media (min-width: 1920px) {
    gap: 55px;

    div:nth-child(3) {
      img {
        height: 58px;
        width: 49px;
      }
    }
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 1em 0 0;
    padding: 0;
    flex-direction: column;
    row-gap: 1.1em;

    & > div {
      p:nth-child(2) {
        margin-top: 0.5em;
      }
    }
    & > div:nth-child(1) {
      p:nth-child(2) {
        margin-top: 0em;
        padding-right: 9em;
      }
    }
    & > div:nth-child(2) {
      margin-top: 1.1em;
      p:nth-child(2) {
        margin-top: 0em;
        padding-right: 9em;
      }
    }
    & > div:nth-child(3) {
      margin-top: 1.8em;
      p:nth-child(2) {
        margin-top: 0em;
        padding-right: 10em;
      }
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin: 2.2em 0 0;
  }
`;

export const ItemApp = styled.div`
  max-width: 23.6em;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  padding: 20px 0 0 17px;

  h3 {
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 1.85em;
    line-height: 120%;
    margin: 13px 0 16px;
  }
  p {
    margin-top: 11px;
    font-size: 1.35em;
    line-height: 160%;
  }

  @media (min-width: 2200px) {
    max-width: 30em;
  }

  @media (min-width: 1920px) {
    padding: 26px 0 0 19px;
    h3 {
      margin: 20px 0 16px;
    }
  }

  @media (min-width: 1500px) {
    max-width: 21em;
  }

  @media ${themes.primary.media.maxMobile} {
    max-width: 100%;

    h3 {
      margin-top: 16px;
      font-size: 22px;
    }
    p {
      font-size: 16px;
      margin-bottom: 0px;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    max-width: 100%;
    padding: 0;
    h3 {
      margin-top: 16px;
      font-size: 22px;
    }
    p {
      font-size: 16px;
      margin-bottom: 0px;
    }
  }
`;
