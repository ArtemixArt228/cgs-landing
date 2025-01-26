import styled from "styled-components";
import solutionBg from "../../../public/WebService/solutionBg.svg";
import themes from "../../utils/themes";

export const Container = styled.section`
  position: relative;
  margin-top: 8.5em;
  padding-bottom: 12%;
  background-image: url(${solutionBg.src});
  background-size: 100% 102%;
  background-repeat: no-repeat;
  margin-bottom: 7.5em;

  @media ${themes.primary.media.maxServiceWeb} {
    margin-top: 6.4em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 6.4em;
    padding-bottom: 16%;
    margin-bottom: 5.25em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.67em;
    margin-top: 4.5em;
    padding-bottom: 0;
    margin-bottom: 2em;
    background: none;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin-top: 91px;
    margin-bottom: 92px;

    ::after {
      content: "";
      height: 1px;
      position: absolute;
      background-color: ${themes.primary.colors.headerBorder};
      width: 130%;
      bottom: -1%;
      left: -10%;
    }

    &.withoutShowcase {
      margin-bottom: 4.25em;
    }
  }
`;

export const BgImageFirst = styled.img`
  display: none;
  aspect-ratio: 1.95/1;

  @media ${themes.primary.media.maxMobile} {
    display: block;
    width: 30em;
    margin-left: -4em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 14em;
    margin-left: -1.5em;
  }
`;

export const BgImageSecond = styled.img`
  display: none;
  aspect-ratio: 1/1.01;
  height: auto;

  @media ${themes.primary.media.maxMobile} {
    display: block;
    margin-top: 3.4em;
    width: 27.25em;
  }

  @media (max-width: 750px) {
    width: 100%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 13.25em;
    margin-top: 2.4em;
  }
`;

export const LeftSideText = styled.div`
  font-size: 2.5em;
  line-height: 140%;
  width: 40%;
  padding-top: 0.34em;
  height: 4.6em;

  @media (max-width: 1400px) {
    padding-top: 2em;
    height: auto;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 2em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.5em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-top: 0.85em;
    font-size: 2.035em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    font-size: 1.5em;
    padding: 0;
    margin-bottom: 1.6em;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 100%;
    font-size: 24px;
    padding: 0;
    margin-bottom: 1.6em;
  }
`;

export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 12.875em;
  line-height: 160%;

  width: 100%;
  font-size: 1.5em;

  @media ${themes.primary.media.maxServiceWeb} {
    margin-top: 7em;
    font-size: 1.7em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.2em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1em;
  }

  @media ${themes.primary.media.minPC} {
    font-size: 1.5em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 9.4em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 1.1em 0 0;
    font-size: 1em;
  }
`;

export const RightSideText = styled.div`
  margin-right: 1em;
  width: 50%;
  & p {
    margin: 0.85em 0 0;
    line-height: 160%;
  }

  svg {
    transform: translate(5px, 5px);
  }

  @media ${themes.primary.media.minPC} {
    width: 53.5%;
    margin: 1.85em 0 0 0;

    & p {
      font-size: 0.85em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 20px;
    width: 100%;
    margin: 0;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 16px;
    line-height: 21.12px;

    p {
      margin: 14px 0 0;
    }

    svg {
      width: 35px;
      height: 17px;
    }
  }
`;
