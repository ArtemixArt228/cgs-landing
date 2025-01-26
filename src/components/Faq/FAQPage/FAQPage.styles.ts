import styled from "styled-components";
import themes from "../../../utils/themes";

export const FaqContainer = styled.article`
  padding: 105px 22% 0 68px;
  background-color: ${themes.primary.colors.blogBackground};
  font-family: ${themes.primary.font.family.namu};
  position: relative;
  height: 100%;

  @media (max-width: 1440px) {
    padding-top: 77px;
    padding-left: 51px;
    & .privacy {
      padding-left: 41px;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 0;

    &.privacy {
      padding-bottom: 90px;
    }
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    &.privacy {
      padding-bottom: 90px;
    }
  }

  ul {
    margin: 0;
    padding: 0 0 0 15px;
    li::marker {
      color: ${themes.primary.colors.blogArticleText} !important;
    }
  }
  p {
    margin: 0;
  }
  a {
    color: ${themes.primary.colors.darkBlue};
    text-decoration: none;
    u {
      text-decoration: none;
    }
  }
`;

export const BottomDecorWrap = styled.figure`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  margin: 0;
`;

export const BottomDecor = styled.img`
  position: absolute;
  right: 0;
  width: 307.33px;
  height: 267.08px;
  bottom: 5px;

  @media ${themes.primary.media.maxPCFullHD} {
    width: 240.83px;
    height: 196.83px;
    bottom: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 299.92px;
    height: 221px;
    bottom: 0;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 144.17px;
    height: 117.83px;
    bottom: 0;
  }
`;

export const PageTitle = styled.header`
  text-transform: uppercase;
  font-size: 4.45vw;
  display: flex;
  margin-bottom: 54px;

  p::first-letter {
    color: ${themes.primary.colors.darkBlue};
  }

  @media (min-width: 1441px) and (max-width: 1920px) {
    font-size: calc(
      clamp(64px, 64px + (100vw - 1440px) * ((82 - 64) / (1920 - 1440)), 82px)
    );

    margin-bottom: 74px;
  }

  @media (max-width: 1440px) {
    margin-bottom: 54px;
  }

  @media ${themes.primary.media.maxMobile} {
    flex-wrap: wrap;
    display: flex;

    .first {
      width: 100%;
    }

    font-size: calc(
      clamp(34px, 66px + (100vw - 768px) * ((66 - 34) / (768 - 375)), 66px)
    );

    margin: 65px 0 40px 40px;
    letter-spacing: -1px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin: 13px 20px 41px 20px;
  }
`;

export const QuestionsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.homepage {
    margin-top: 3em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    &.homepage {
      margin-top: 2.5em;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    &.homepage {
      margin-top: 17px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    &.homepage {
      margin-top: 2.9em;
    }
  }
`;
