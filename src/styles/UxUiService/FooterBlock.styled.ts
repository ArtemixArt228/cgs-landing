import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  display: grid;
  margin-top: 8.75em;
  position: relative;
  padding-bottom: 9.25em;

  @media ${themes.primary.media.min4K} {
    margin-top: 8.1em;
    padding-bottom: 14em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-bottom: 10em;
    flex-direction: column;
  }

  @media ${themes.primary.media.max767Mobile} {
    margin-top: 5.5em;
    padding-bottom: 0;
    ::before {
      content: "";
      position: absolute;
      top: -28px;
      left: -30px;
      width: 150%;
      height: 1px;
      background-color: #8f8e93;
      color: black;
    }
  }
`;

export const ContentWrapper = styled.div`
  max-width: 66%;

  @media ${themes.primary.media.maxMobile} {
    max-width: 100%;

    & > a {
      font-size: 1em !important;
      padding: 1.194em 2.91em !important;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    width: 295.79px;
    height: 329.44px;
    right: -3em;
    top: 20px;
    justify-self: flex-end;
  }
  @media ${themes.primary.media.min768Mobile} {
    width: 606px;
    height: 675px;
    top: 40px;
    right: -6em;
    position: relative;
    justify-self: flex-end;
  }
  @media ${themes.primary.media.onlyLaptopL} {
    position: absolute;
    top: 0;
    right: 0;
    width: 398.15px;
    height: 443.44px;
  }
  @media ${themes.primary.media.min4K} {
    position: absolute;
    width: calc(
      clamp(
        530.87px,
        530.87px + (100vw - 1920px) * ((640 - 530.87) / (2560 - 1920)),
        640px
      )
    );
    height: calc(
      clamp(
        591.25px,
        591.25px + (100vw - 1920px) * ((690 - 591.25) / (2560 - 1920)),
        690px
      )
    );
    right: 0;
    top: 0;
  }
`;
