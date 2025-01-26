import styled, { css, keyframes } from "styled-components";
import themes from "../../utils/themes";

const horizontalGlow = keyframes`
${css`
  to {
    background-position: 350% 0;
  }
`}`;

export const HighDemandContainer = styled.section<{ isPaused: boolean }>`
  font-family: ${themes.primary.font.family.namu};
  position: fixed;
  z-index: 20;
  border-bottom: 1px solid ${themes.primary.colors.authorGrey};
  border-top: 1px solid ${themes.primary.colors.authorGrey};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(
    to left,
    ${themes.primary.colors.homePageGradient1},
    ${themes.primary.colors.homePageGradient2},
    ${themes.primary.colors.homePageGradient1},
    ${themes.primary.colors.homePageGradient2},
    ${themes.primary.colors.homePageGradient1}
  );
  font-size: 16px;
  font-weight: 500;
  line-height: 99%;
  text-transform: uppercase;
  background-size: 350%;
  animation: ${(props) =>
    props.isPaused
      ? "none"
      : css`
          ${horizontalGlow} 10s linear infinite
        `};
  animation-direction: reverse;
  & p {
    margin: 0;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 14px;
    font-size: 20px;
    line-height: 19.8px;
  }

  @media screen and ${themes.primary.media.maxBreakpoint1100} {
    position: relative;
    z-index: 1;
    padding: 14px 20px;
    border-bottom: none;
    border-top: none;
    gap: 12px;
    font-size: 18px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    padding: 15px 20px;
    justify-content: flex-start;

    a {
      width: 80%;
    }
  }
  height: 40px;

  @media ${themes.primary.media.minPCFullHD} {
    height: 54px;
  }

  @media ${themes.primary.media.maxBreakpoint1100} {
    height: 100%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 22px;
  height: 22px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 29px;
    height: 29px;
  }

  @media ${themes.primary.media.maxBreakpoint1100} {
    width: 32px;
    height: 32px;
  }
`;

export const Wrapper = styled.div`
  height: 40px;
  font-family: ${themes.primary.font.family.namu};

  @media ${themes.primary.media.minPCFullHD} {
    height: 54px;
  }

  @media ${themes.primary.media.maxBreakpoint1100} {
    height: 100%;
  }
`;
