import styled from "styled-components";
import themes from "../../../../../utils/themes";

export const ChatContainer = styled.div`
  height: 100%;
  &.full-screen {
    position: relative;
    width: 100%;
    max-height: 501px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 1;
    background-color: ${themes.primary.colors.chatContainerBgc};
    transition: all 0.3s;
    border: 1px solid ${themes.primary.colors.primary};
    border-radius: 16px;
    pointer-events: all;

    ::before {
      content: "";
      left: 18px;
      bottom: 0;
      z-index: -1;
      height: 97%;
      width: 100%;
      border: 1px solid ${themes.primary.colors.primary};
      border-radius: 15px;
      position: absolute;
      background-color: ${themes.primary.colors.chatContainerBgc};

      @media ${themes.primary.media.max767Mobile} {
        left: 9px;
      }

      @media screen and ${themes.primary.media.minPCFullHD} {
        border: 2px solid ${themes.primary.colors.primary};
        border-radius: 0 24px 22px;
        left: 21px;
      }
    }

    ::after {
      content: "";
      left: 18px;
      bottom: -23px;
      z-index: -1;
      height: 83%;
      width: 100%;
      border: 1px solid ${themes.primary.colors.primary};
      border-radius: 0 0 18px 15px;
      position: absolute;
      background-color: ${themes.primary.colors.primary};

      @media ${themes.primary.media.max767Mobile} {
        left: 9px;
        bottom: -11px;
      }

      @media screen and ${themes.primary.media.minPCFullHD} {
        border: 2px solid ${themes.primary.colors.primary};
        border-radius: 0 0 32px 22px;
        left: 21px;
      }
    }

    @media ${themes.primary.media.min768Mobile} {
      max-height: 474px;
    }

    @media ${themes.primary.media.min1440} {
      max-height: 462px;
    }

    @media screen and ${themes.primary.media.minPCFullHD} {
      max-height: 616px;
      border-radius: 22px;
    }
  }

  &.icon-based {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    opacity: 1;
    background-color: ${themes.primary.colors.chatContainerBgc};
    transition: all 0.3s;
    border: 1px solid ${themes.primary.colors.primary};
    border-radius: 16px;
    pointer-events: all;

    @media screen and (${themes.primary.media.min768Mobile} 
 and ${themes.primary.media.maxBreakpoint1100}) {
      ::before {
        content: "";
        left: 10px;
        bottom: -10px;
        z-index: -1;
        height: 97%;
        width: 100%;
        border: 1px solid ${themes.primary.colors.primary};
        border-radius: 15px;
        position: absolute;
        background-color: ${themes.primary.colors.chatContainerBgc};

        @media screen and ${themes.primary.media.minPCFullHD} {
          border: 2px solid ${themes.primary.colors.primary};
          border-radius: 22px;
        }
      }

      ::after {
        content: "";
        left: 10px;
        bottom: -12px;
        z-index: -1;
        height: 70%;
        width: 100%;
        border: 1px solid ${themes.primary.colors.primary};
        border-radius: 0 0 15px 15px;
        position: absolute;
        background-color: ${themes.primary.colors.primary};

        @media screen and ${themes.primary.media.minPCFullHD} {
          border: 2px solid ${themes.primary.colors.primary};
          border-radius: 0 0 22px 22px;
        }
      }
    }

    @media screen and (min-width: 1101px) {
      ::before {
        content: "";
        left: 10px;
        bottom: -10px;
        z-index: -1;
        height: 97%;
        width: 100%;
        border: 1px solid ${themes.primary.colors.primary};
        border-radius: 15px;
        position: absolute;
        background-color: ${themes.primary.colors.chatContainerBgc};

        @media screen and ${themes.primary.media.minPCFullHD} {
          border: 2px solid ${themes.primary.colors.primary};
          border-radius: 22px;
        }
      }

      ::after {
        content: "";
        left: 10px;
        bottom: -12px;
        z-index: -1;
        height: 70%;
        width: 100%;
        border: 1px solid ${themes.primary.colors.primary};
        border-radius: 0 0 15px 15px;
        position: absolute;
        background-color: ${themes.primary.colors.primary};

        @media screen and ${themes.primary.media.minPCFullHD} {
          border: 2px solid ${themes.primary.colors.primary};
          border-radius: 0 0 22px 22px;
        }
      }
    }

    @media screen and ${themes.primary.media.max767Mobile} {
      border-radius: 0;
      border: 0;
    }
  }
`;

export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;

  @media screen and ${themes.primary.media.min768Mobile} {
    border-radius: 16px;
  }
  @media screen and ${themes.primary.media.minPCFullHD} {
    border-radius: 22px;
  }
  &.icon-based {
    flex-grow: 1;
  }
`;

export const ChatMessagesAndSuggestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  flex-grow: 1;
  &.full-screen {
    height: 374px;

    @media ${themes.primary.media.minPCFullHD} {
      height: 495px;
    }
  }

  &.icon-based {
    height: auto;
    @media ${themes.primary.media.maxMobile} {
      max-height: calc(100vh - 222px);
    }

    @media ${themes.primary.media.min768Mobile} {
      height: 431px !important;
    }
  }
`;

export const ChatMessagesContainer = styled.div`
  overflow: auto;
  flex-grow: 1;

  &.full-screen {
    text-align: center;
    padding: 32px 0 16px 16px;
    margin-right: 16px;

    @media ${themes.primary.media.minPCFullHD} {
      padding: 42px 6px 16px 20px;
    }
  }

  &.icon-based {
    display: flex;
    flex-direction: column;
    padding: 24px 4px 16px 16px;

    @media ${themes.primary.media.minPCFullHD} {
      padding: 16px 6px 16px 16px;
    }
  }

  ::-webkit-scrollbar {
    width: 0.7rem;
    background: transparent;
  }

  ::-webkit-scrollbar-track {
    background-color: ${themes.primary.colors.chatContainerBgc};
  }

  :hover {
    ::-webkit-scrollbar {
      width: 0.7rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${themes.primary.colors.chatMessageBgc};
      border-radius: 10px;
      border: 3px solid ${themes.primary.colors.chatContainerBgc};
    }
  }
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

  @media screen and ${themes.primary.media.minPCFullHD} {
    border-bottom: 2px solid ${themes.primary.colors.primary};
    padding: 20px;
    border-radius: 22px 22px 0 0;
  }

  p {
    margin: 0;
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ChatTitle = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-weight: 900;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.1px;

  @media screen and ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
    line-height: 143%;
    letter-spacing: 0.13px;
  }
`;

export const ChatCloseButton = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 8px;

  img {
    width: 12px !important;
    height: 12px !important;
  }
  @media ${themes.primary.media.maxMobile} {
    display: none;
  }

  @media ${themes.primary.media.min768Mobile} {
    display: flex;
  }

  @media ${themes.primary.media.minPCFullHD} {
    img {
      width: 16px !important;
      height: 16px !important;
    }
  }
`;
