import styled, { keyframes } from "styled-components";
import themes from "../utils/themes";

export const arrowOne = keyframes`
    0% {
        transform: translate(-36px, 36px);
    }
    100% {
        transform: translate(0px, 0px);;
    }
`;

export const arrowTwo = keyframes`
    0% {
        transform: translate(0px, 0px);
    }
    100% {
        transform: translate(36px, -36px);
    }
`;
export const Layout = styled.article`
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding-inline: 4.25em;
  overflow: hidden;
  font-family: ${themes.primary.font.family.namu};

  @media (min-width: 2560px) {
    max-width: 2560px;
    margin: 0 auto;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 0 40px;
  }

  @media ${themes.primary.media.minTablet} {
    padding: 0 20px;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    padding: 0 40px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    &.supportTeam {
      margin-top: -75px;
    }
  }
`;

export const PageContentLayout = styled.article`
  width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  font-family: ${themes.primary.font.family.namu};
  display: flex;
  flex-direction: column;

  @media ${themes.primary.media.maxMobile} {
    padding: 0 16px 60px;
    gap: 60px;
  }

  @media ${themes.primary.media.min768Mobile} {
    padding: 0 40px 80px;
    margin: 0;
    gap: 80px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    padding: 0 52px 60px;
    margin: 0;
    gap: 120px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    padding: 0 68px 80px;
    max-width: 1920px;
    margin: 0 auto;
    gap: 160px;
  }
  &.ai-chatbot,
  &.homepage {
    @media ${themes.primary.media.maxMobile} {
      padding: 32px 16px 60px;
    }
    @media ${themes.primary.media.min768Mobile} {
      padding: 40px 40px 80px;
    }
    @media ${themes.primary.media.minBreakpoint1100} {
      padding: 60px 52px 60px;
    }
    @media ${themes.primary.media.minPCFullHD} {
      padding: 80px 68px 80px;
    }
  }
  &.portfolio {
    @media ${themes.primary.media.maxMobile} {
      padding: 12px 16px 95px;
    }
    @media ${themes.primary.media.min768Mobile} {
      padding: 0 40px 80px;
    }
    @media ${themes.primary.media.min1440} {
      padding: 0 52px 60px;
      gap: 100px;
    }
    @media ${themes.primary.media.minPCFullHD} {
      padding: 0 68px 80px;
      gap: 120px;
    }
  }
  &.portfolio.general {
    @media ${themes.primary.media.maxMobile} {
      padding: 32px 16px 60px;
      gap: 30px;
    }

    @media ${themes.primary.media.min768Mobile} {
      padding: 40px 40px 36px;
      gap: 30px;
    }
    @media ${themes.primary.media.minBreakpoint1100} {
      gap: 32px;
      padding: 60px 52px 100px;
    }
    @media ${themes.primary.media.minPCFullHD} {
      gap: 42.67px;
      padding: 80px 68px 134px;
    }
  }
`;
export const PageArticle = styled.article`
  position: relative;
  margin-bottom: 3em;
`;

export const CallButton = styled.div`
  width: 80px;
  height: 80px;
  position: fixed;
  border: 2px solid ${themes.primary.colors.primary};
  font-weight: ${themes.primary.font.weight.heavy};
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.primary};
  transition: all 0.3s;
  border-radius: 10px;
  cursor: pointer;
  z-index: 9999;
  display: grid;
  place-items: center;

  &.CallButton {
    z-index: 1;
    transition: opacity 0.5s ease-in-out;
    opacity: 0;
    bottom: 20px;
    right: 20px;
    @media ${themes.primary.media.min768Mobile} {
      bottom: 50px;
    }
    @media ${themes.primary.media.min1440} {
      bottom: 60px;
    }
    @media ${themes.primary.media.min4K} {
      bottom: 75px;
      width: 100px;
      height: 100px;
      img {
        width: 50px;
        height: 55px;
      }
    }
    @media ${themes.primary.media.minPCTwoThousand} {
      bottom: 75px;
    }
  }

  &.CallButtonVisible {
    opacity: 1;
  }

  &.ChatButtonHidden {
    opacity: 0;
    visibility: hidden;
  }

  &.ChatButtonVisible {
    opacity: 1;
  }

  &:hover {
    & path:nth-child(1) {
      animation: ${arrowOne} 1s 1 forwards ease-in-out;
    }
    & path:nth-child(2) {
      animation: ${arrowTwo} 1s 1 forwards ease-in-out;
    }
  }
`;
