import styled from "styled-components";
import themes from "../../utils/themes";
import chatOpenButtonIcon from "../../../public/chatOpenButtonIcon.svg";
import chatCloseButtonIcon from "../../../public/chatCloseButtonIcon.svg";
import messageBubbleCloseIcon from "../../../public/messageBubbleCloseIcon.svg";
import { glow, horizontalGlow } from "../Animations.styled";
import { arrowOne, arrowTwo } from "../HomePage/General.styled";

export const HomepageChatButton = styled.button`
  width: 80px;
  height: 80px;
  position: fixed;
  border: 2px solid ${themes.primary.colors.primary};
  font-weight: ${themes.primary.font.weight.heavy};
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.primary};
  border-radius: 10px;
  cursor: pointer;
  display: grid;
  place-items: center;
  z-index: 15;
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
  bottom: 20px;
  right: 20px;
  @media ${themes.primary.media.min768Mobile} {
    bottom: 50px;
    right: 40px;
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

interface IChatButton {
  isOpen?: boolean;
  isChatWorking?: boolean;
}

export const ChatButton = styled.div<IChatButton>`
  cursor: pointer;
  position: relative;
  display: block;
  width: 100%;
  height: 56px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 1.8333em;
  padding: 0.8em 0.72em;
  color: transparent;

  border: 1.8px solid ${themes.primary.colors.primary};
  border-right: none;
  border-bottom: none;
  border-left: none;
  border-radius: 1px;
  background: ${({ isOpen, isChatWorking }) =>
    isChatWorking
      ? isOpen
        ? themes.primary.colors.blogBackground
        : `linear-gradient(180deg, ${themes.primary.colors.mainGradientColor1}, ${themes.primary.colors.mainGradientColor2}, ${themes.primary.colors.mainGradientColor1})`
      : themes.primary.colors.borderRateCard};

  transform-origin: top;
  background-size: auto 400%;
  animation: ${glow} 12s linear infinite;

  @media ${themes.primary.media.maxMobile} {
    width: 18vw;
    height: 60px;
    border: 1.8px solid ${themes.primary.colors.primary};
    border-right: 0;
    z-index: 10;
    background: ${({ isOpen, isChatWorking }) =>
      isChatWorking
        ? isOpen
          ? themes.primary.colors.blogBackground
          : `linear-gradient(
    90deg,
    ${themes.primary.colors.mainGradientColor1},
    ${themes.primary.colors.mainGradientColor2},
    ${themes.primary.colors.mainGradientColor1}
  )`
        : themes.primary.colors.borderRateCard};
    background-size: 200% auto;
    animation: ${horizontalGlow} 5s linear infinite;
  }

  @media ${themes.primary.media.minPC} {
    height: 70px;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    border: 1.8px solid ${themes.primary.colors.primary};
    border-radius: 1.5px;
    background: ${({ isChatWorking }) =>
      isChatWorking
        ? themes.primary.colors.mainGradientColor2
        : themes.primary.colors.darkGrey};
    transform-origin: top;
  }

  &::before {
    top: 2px;
    left: -7px;
    width: 5px;
    height: 52px;
    transform: skewY(-45deg);
    background-image: ${({ isChatWorking }) =>
      isChatWorking
        ? `linear-gradient(
      180deg,
      ${themes.primary.colors.mainGradientColor1},
      ${themes.primary.colors.mainGradientColor2},
      ${themes.primary.colors.mainGradientColor1})`
        : themes.primary.colors.darkGrey};
    transform-origin: top;
    background-size: auto 400%;
    animation: ${glow} 12s linear infinite;

    @media ${themes.primary.media.maxMobile} {
      display: none;
    }
    @media ${themes.primary.media.minPC} {
      height: 66.5px;
    }

    @supports (-webkit-hyphens: none) {
      height: 54.5px;

      @media (max-width: 1024px) {
        height: 54px;
      }
      @media (min-width: 1500px) {
        height: 69px;
      }
    }
  }

  &::after {
    border-right: none;
    right: -8px;
    bottom: -7px;
    width: 111.5%;
    height: 5px;
    background: ${({ isChatWorking }) =>
      isChatWorking
        ? themes.primary.colors.attachmentIcon
        : themes.primary.colors.darkGrey};
    transform: skew(-45deg);

    @media ${themes.primary.media.maxMobile} {
      display: none;
    }
    @media (max-width: 991.5px) {
      width: 109.5%;
      bottom: -7px;
      right: -7px;
    }
    @media ${themes.primary.media.minPC} {
      width: 76px;
      bottom: -6.5px;
    }

    @supports (-webkit-hyphens: none) {
      right: -7px;
      bottom: -7px;
      width: 112%;

      @media (max-width: 1024px) {
        bottom: -7px;
        width: 60.5px;
        right: -7.5px;
      }
      @media (min-width: 1500px) {
        bottom: -7px;
        width: 109%;
      }
    }
  }
`;

interface IChatButtonIcon {
  isOpen?: boolean;
}

export const ChatButtonIcon = styled.div<IChatButtonIcon>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: transparent;
  background-image: ${({ isOpen }) =>
    isOpen
      ? `url(${chatCloseButtonIcon.src})`
      : `url(${chatOpenButtonIcon.src})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${({ isOpen }) => (isOpen ? "21px" : `35px 32px`)};
`;

export const NewMessageCounter = styled.div`
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  writing-mode: horizontal-tb;
  font-size: 12px;
  line-height: 150%;
  color: ${themes.primary.colors.primary};

  border-radius: 50%;
  border: 1px solid ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.portfolioHover};
`;

export const MessageBable = styled.div<{ isChatWorking: boolean }>`
  position: absolute;
  bottom: -1rem;
  right: 6rem;
  width: ${({ isChatWorking }) => (isChatWorking ? "215px" : `315px`)};
  padding: 0.75rem 0.625rem;

  font-family: "NAMU";
  font-size: 0.875rem;
  line-height: 1.4;

  border-radius: 0.5rem;
  border: 1px solid ${themes.primary.colors.primary};
  box-shadow: 0.3rem 0.3rem 0 0 ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.blogBackground};

  p {
    position: relative;
    margin: 0;
    z-index: 3;
  }

  @media ${themes.primary.media.maxMobile} {
    bottom: 5.25rem;
    right: 0.6rem;
  }

  :after,
  :before {
    content: "";
    position: absolute;
    display: block;
    top: 35%;

    background-color: ${themes.primary.colors.blogBackground};
    transform: translateY(-50%);
  }

  :after {
    right: -0.4rem;
    width: 1rem;
    height: 1rem;
    border: 1px solid ${themes.primary.colors.primary};
    box-shadow: 0.35rem 0 0 0 ${themes.primary.colors.primary};
    transform: translateY(-50%) rotate(25deg) skewX(-35deg);

    @media ${themes.primary.media.maxMobile} {
      right: 1rem;
      top: 98%;
      box-shadow: 0.05rem 0.23rem 0 0 ${themes.primary.colors.primary};
      transform: translateY(-50%) rotate(-63deg) skewX(-35deg);
    }
  }

  :before {
    right: 0;
    width: 1.25rem;
    height: 2rem;
    z-index: 1;

    @media ${themes.primary.media.maxMobile} {
      right: 0.7rem;
      top: 74%;
      width: 1.45rem;
    }
  }
`;

export const MessageBubbleCloseIcon = styled.div`
  cursor: pointer;
  position: absolute;
  top: -0.675rem;
  left: -0.675rem;
  width: 1.35rem;
  height: 1.35rem;

  border: 1px solid ${themes.primary.colors.primary};
  border-radius: 50%;
  background-color: ${themes.primary.colors.blogBackground};
  background-image: url(${messageBubbleCloseIcon.src});
  background-position: center;
  background-repeat: no-repeat;
`;
