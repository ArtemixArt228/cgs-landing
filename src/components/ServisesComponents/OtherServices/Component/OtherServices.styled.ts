import styled from "styled-components";
import themes from "../../../../utils/themes";

export const Container = styled.div`
  box-sizing: border-box;
  margin-top: 11.66em;
  margin-bottom: 11.6em;
  padding: 0 4.25em;
  height: 492px;
  width: 102vw;
  margin-left: -4.25em;
  background-color: rgba(143, 142, 147, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (${themes.primary.media.minPCFullHD}) {
    height: 656px;

    &.uxUi {
      margin-top: 12em;
      margin-bottom: 0;
    }
  }

  @media (${themes.primary.media.maxServiceWeb}) {
    flex-direction: column-reverse;
    margin-top: 80px;
    margin-bottom: 60px;
    height: 738px;
    padding-top: 40px;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    &.itSupport {
      margin-left: -3em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 40px 1.925em;
    margin-left: -41px;
    height: 1056px;
    &.itSupport {
      margin-left: -40px;
    }
  }

  @media (max-width: 625px) {
    &.itSupport {
      margin-left: -20px;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin-left: -1.925em;
    padding: 40px 1.925em;
    height: 738px;

    &.uxUi {
      margin-top: 9.25em;
    }
  }
`;

export const Carousel = styled.div`
  width: 51%;
  height: 100%;
  display: flex;
  gap: 18px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 54%;
  }

  @media ${themes.primary.media.maxServiceWeb} {
    display: block;
    width: 100%;
  }

  @media ${themes.primary.media.maxMobile} {
    &.itSupport {
      margin-top: 2em;
    }
  }
`;

export const Description = styled.div`
  width: 49%;
  height: 100%;
  padding: 43px 0 38px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${themes.primary.media.minPCFullHD} {
    padding: 65px 0 38px 50px;
  }

  @media ${themes.primary.media.maxServiceWeb} {
    width: 100%;
    height: auto;
    padding: 0px 0px 20px;
    justify-content: start;
    gap: 14px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;
  text-align: left;
  font-size: 6.16em;
  line-height: 120%;
  text-transform: uppercase;
  white-space: pre-line;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 5.8em;
  }

  @media ${themes.primary.media.maxServiceWeb} {
    font-size: 40px;
    line-height: 120%;
  }

  @media ${themes.primary.media.maxMobile} {
    &.itSupport {
      padding-right: 11em;
      padding-left: 0.47em;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    &.itSupport {
      padding-inline: 0;
    }
  }
`;

export const Text = styled.p`
  margin: 0 0 0 204px;
  padding: 0;
  font-size: 1.5em;
  line-height: 160%;

  @media ${themes.primary.media.minPCFullHD} {
    margin: 0 0 13px 272px;
  }

  @media ${themes.primary.media.maxServiceWeb} {
    font-size: 18px;
    margin: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    &.itSupport {
      padding-right: 2em;
      padding-left: 1em;
      padding-top: 0.5em;
      span {
        font-size: 20px;
      }
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    &.itSupport {
      padding: 0;
      font-size: 18px !important;
    }
  }
`;
