import styled from "styled-components";
import themes from "../../utils/themes";

export const HoverModalWrapper = styled.div`
  position: absolute;
  opacity: 0;
  background: ${themes.primary.colors.blogBackground};
  border: 2px solid ${themes.primary.colors.primary};
  transition: 0.3s opacity;
  z-index: 2;
  max-width: 397px;
  height: 324px;

  &.upper {
    top: -25%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    max-width: none;
    height: 320px;
  }

  @media ${themes.primary.media.minPC} {
    max-width: 400px;
    height: 380px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 600px;
  }
  &:hover {
    opacity: 1;
  }
`;

export const HoverModalHeader = styled.div`
  position: relative;
  height: 35px;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.mainGradientColor1} 0%,
    ${themes.primary.colors.mainGradientColor2} 100%
  );
  border-bottom: 2px solid ${themes.primary.colors.primary};
`;

export const Button = styled.div`
  width: 35px;
  height: 35px;
  border-left: 2px solid ${themes.primary.colors.primary};
  border-bottom: 2px solid ${themes.primary.colors.primary};
  background: ${themes.primary.colors.blogBackground};
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    width: 18px;
    height: 18px;
    &.min {
      border-bottom: 3.0828px solid ${themes.primary.colors.primary};
    }

    &.max {
      border-width: 3.0828px 1.5414px 0.7707px 1.5414px;
      border-style: solid;
      border-color: ${themes.primary.colors.primary};
    }

    &.close {
      position: relative;
      &::before,
      &::after {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        content: " ";
        height: 25px;
        width: 3px;
        background-color: ${themes.primary.colors.primary};
      }

      &::before {
        transform: rotate(45deg);
      }
      &::after {
        transform: rotate(-45deg);
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  right: 0;
`;

export const ModalContent = styled.div`
  padding: 17px 17px 39px 28px;
`;

export const ModalText = styled.div`
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;

  & br {
    display: none;
  }

  &.title {
    color: ${themes.primary.colors.darkBlue};
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.careersFormLaptop};
  }

  @media (max-width: 1100px) {
    font-size: ${themes.primary.font.size.articleViews};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.oneAndHalf};
  }
`;
