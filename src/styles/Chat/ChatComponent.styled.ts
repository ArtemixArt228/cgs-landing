import styled from "styled-components";
import themes from "../../utils/themes";

interface IChatContainer {
  isChatOpen: boolean;
  isFooterVisible: boolean;
  windowHeight: number | null;
}

export const DragContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffffffcc;
  border-radius: 16px;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid ${themes.primary.colors.primary};
  @media ${themes.primary.media.min4K} {
    border: 1.5px solid ${themes.primary.colors.primary};
  }
`;

export const DrageTitle = styled.span`
  font-family: ${themes.primary.font.family.namu};
  font-size: 24px;
  line-height: 30px;
`;

export const DragDescription = styled.span`
  font-family: ${themes.primary.font.family.namu};
  font-size: 18px;
  line-height: 26px;
`;

export const DragImageWrapper = styled.div`
  position: relative;
  width: 62px;
  height: 62px;
`;

export const ChatContainer = styled.div<IChatContainer>`
  z-index: 37;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: ${({ isChatOpen }) => (isChatOpen ? 1 : 0)};
  transform-origin: 100% 100%;
  transform: scale(${({ isChatOpen }) => (isChatOpen ? 1 : 0.01)});
  transition: all 0.3s;

  @media screen and ${themes.primary.media.maxMobile} {
    position: fixed;
    z-index: 9999;
    width: 100vw;
    height: 100dvh;
    top: 0;
    left: 0;
  }

  @media screen and ${themes.primary.media.min768Mobile} and ${themes.primary
      .media.maxBreakpoint1100} {
    z-index: 37;
    margin-bottom: 24px;
    position: fixed;
    bottom: ${({ isFooterVisible }) => (isFooterVisible ? "170px" : "12px")};
    right: 40px;
    top: unset;
    left: unset;
    height: 80vh;
    width: 490px;
    max-height: ${({ isFooterVisible }) =>
      isFooterVisible ? "min(480px, 59%)" : "min(580px, 83%)"};
    pointer-events: all;
  }

  @media screen and (min-width: 1101px) {
    position: fixed;
    bottom: ${({ isFooterVisible }) => (isFooterVisible ? "68px" : "12px")};
    margin-bottom: 30px;
    right: 40px;
    height: 80vh;
    width: 490px;
    max-height: min(580px, 83%);
    border-radius: 16px;
    pointer-events: all;
  }

  @media ${themes.primary.media.minPCFullHD} {
    bottom: ${({ isFooterVisible }) => (isFooterVisible ? "95px" : "12px")};
    margin-top: 40px;
    width: 740px;
    max-height: 771px;
  }
`;

export const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 74px;
  padding: 16px 28px 16px 16px;
  background-color: ${themes.primary.colors.chatContainerBgc};

  @media ${themes.primary.media.min768Mobile} {
    display: none;
  }
`;
export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ChatHeader = styled.div`
  padding: 14px 15px;
  line-height: 150%;
  background: linear-gradient(
      360deg,
      rgba(88, 105, 221, 0.25) 0%,
      rgba(195, 201, 243, 0.25) 100%
    ),
    linear-gradient(97.17deg, #e1e1ed 4.53%, #d0d5f5 93.36%),
    linear-gradient(0deg, #8d99e8, #8d99e8),
    linear-gradient(0deg, #efedec, #efedec);

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and ${themes.primary.media.maxMobile} {
    border-top: 1px solid ${themes.primary.colors.primary};
    border-right: 0;
    border-left: 0;
    border-bottom: 1px solid ${themes.primary.colors.primary};
    border-radius: 0;
    height: 58px;
    margin-bottom: 1px;
  }

  @media screen and ${themes.primary.media.min768Mobile} {
    border-bottom: 1px solid ${themes.primary.colors.primary};
    border-radius: 15px 15px 0 0;
    height: unset;
  }

  @media screen and ${themes.primary.media.min4K} {
    border-bottom: 2px solid ${themes.primary.colors.primary};
    padding: 20px;
    border-radius: 22px 22px 0 0;
  }

  p {
    margin: 0;
  }
`;

export const OperatorStatus = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: 12px;
  line-height: 150%;
  opacity: 0.5;
`;

export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  width: 100%;
  height: calc(100% - 40px);
  overflow: hidden;
  background-color: ${themes.primary.colors.chatContainerBgc};

  @media ${themes.primary.media.maxMobile} {
    border: 0;
    border-radius: 0;
  }

  @media ${themes.primary.media.min768Mobile} {
    border-radius: 0 0 15px 15px;
  }
  @media ${themes.primary.media.min4K} {
    border-radius: 0 0 21.18px 21.18px;
  }

  .ce-ice-breaker-wrapper {
    display: none;
  }
`;

interface IChatMessagesContainer {
  isMessagesDisplayed?: boolean;
}

export const ChatMessagesContainer = styled.div<IChatMessagesContainer>`
  padding-right: 0;
  height: 100%;
  flex-grow: 1;
  &.register-forms {
    padding-left: 15px;
  }
`;
