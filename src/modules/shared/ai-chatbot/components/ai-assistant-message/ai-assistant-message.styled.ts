import styled from "styled-components";
import themes from "../../../../../utils/themes";

interface IMessageWrapper {
  isReceivedMessage: boolean;
}

export const MessageWrapper = styled.div<IMessageWrapper>`
  display: flex;
  align-items: flex-start;
  justify-content: ${({ isReceivedMessage }) =>
    isReceivedMessage ? "start" : "end"};
  margin-bottom: 36px;
  gap: 6px;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${themes.primary.media.min768Mobile} {
    gap: 9px;
    margin-bottom: 48px;
  }

  @media ${themes.primary.media.min1440} {
    gap: 9px;
    margin-bottom: 24px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    gap: 9px;
    margin-bottom: 32px;
  }
`;

export const AvatarWrapper = styled.div`
  &.full-screen {
    height: 39px;
    width: 39px;
    border-radius: 100%;

    @media ${themes.primary.media.max767Mobile} {
      height: 39px;
      width: 47px;
    }

    @media ${themes.primary.media.minPCFullHD} {
      height: 52px;
      width: 52px;
    }
  }

  &.icon-based {
    height: 39px;
    width: 39px;
    border-radius: 100%;
  }
`;

export const AvatarImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 100%;
`;

export const MessageSender = styled.p`
  margin: 0;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};

  &.full-screen {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.02px;

    @media screen and ${themes.primary.media.minBreakpoint1100} {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.1px;
    }

    @media screen and ${themes.primary.media.minPCFullHD} {
      font-size: 20px;
      line-height: 32px;
      letter-spacing: 0.13px;
    }
  }

  &.icon-based {
    font-size: 12px;
    line-height: 16px;

    @media screen and ${themes.primary.media.minPCFullHD} {
      font-size: 16px;
      line-height: 132%;
    }
  }
`;

export const MessageBox = styled.div<IMessageWrapper>`
  &.full-screen {
    width: fit-content;
    max-width: 100%;
    padding: 8px;
    text-align: left;
    overflow-wrap: break-word;
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 14px;
    line-height: 20px;
    font-family: ${themes.primary.font.family.namu};
    color: ${themes.primary.colors.primary};

    border-radius: ${({ isReceivedMessage }) =>
      isReceivedMessage ? "0 6px 6px 6px" : "6px 0 6px 6px"};
    background-color: ${({ isReceivedMessage }) =>
      isReceivedMessage
        ? `${themes.primary.colors.chatMessageBgc}`
        : `${themes.primary.colors.chatSendedMessageBgc}`};
    letter-spacing: 0.002em;
    display: flex;
    flex-direction: column;
    align-items: ${({ isReceivedMessage }) =>
      isReceivedMessage ? "flex-start" : "flex-end"};
    gap: 5px;

    @media screen and ${themes.primary.media.min768Mobile} {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.1px;
      padding: 8px;
    }

    @media screen and ${themes.primary.media.min1440} {
      font-size: 18px;
      line-height: 28px;
    }

    @media screen and ${themes.primary.media.minPCFullHD} {
      font-size: 22px;
      line-height: 34px;
      letter-spacing: 0.13px;
      padding: 10px;
      border-radius: ${({ isReceivedMessage }) =>
        isReceivedMessage ? "0 8px 8px 8px" : "8px 0 8px 8px"};
    }

    a {
      color: ${themes.primary.colors.darkBlue};
      text-decoration: underline;
    }

    p {
      margin: 0;
    }
  }

  &.icon-based {
    width: fit-content;
    max-width: 100%;
    padding: 0.67em;

    overflow-wrap: break-word;
    line-height: 19px;
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 14px;
    font-family: ${themes.primary.font.family.namu};
    color: ${themes.primary.colors.primary};

    border-radius: ${({ isReceivedMessage }) =>
      isReceivedMessage ? "0 6px 6px 6px" : "6px 0 6px 6px"};
    background-color: ${({ isReceivedMessage }) =>
      isReceivedMessage
        ? `${themes.primary.colors.chatMessageBgc}`
        : `${themes.primary.colors.chatSendedMessageBgc}`};
    letter-spacing: 0.002em;
    display: flex;
    flex-direction: column;
    align-items: ${({ isReceivedMessage }) =>
      isReceivedMessage ? "flex-start" : "flex-end"};
    gap: 5px;

    @media screen and ${themes.primary.media.minPCFullHD} {
      font-size: 18px;
      line-height: 147%;
    }

    a {
      color: ${themes.primary.colors.darkBlue};
      text-decoration: underline;
    }

    p {
      margin: 0;
    }
  }
`;

export const InputWrapper = styled.div<{ hasError?: boolean }>`
  width: 100%;
  position: relative;
  background-color: ${themes.primary.colors.grey};
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${themes.primary.colors.greyAdminServices};

  &.message-input {
    max-height: 109px;
  }

  &:focus-within {
    border: ${(props) =>
      props.hasError
        ? `1px solid ${themes.primary.colors.adminRed}`
        : `1px solid ${themes.primary.colors.greyAdminServices}`};
  }

  @media screen and ${themes.primary.media.minPCFullHD} {
    border-radius: 16px;
  }

  @media screen and ${themes.primary.media.minPCFullHD} {
    border-radius: 22px;

    &.message-input {
      max-height: 144px;
    }
  }
`;

export const MessageTextAndSenderContainer = styled.div<IMessageWrapper>`
  align-items: ${({ isReceivedMessage }) =>
    isReceivedMessage ? "flex-start" : "flex-end"};

  &.full-screen {
    width: 87%;
    display: flex;
    flex-direction: column;
    gap: 7px;

    @media ${themes.primary.media.maxBreakpoint1100} {
      width: 100%;
    }

    @media ${themes.primary.media.min768Mobile} {
      gap: 7px;
      width: 71%;
    }

    @media ${themes.primary.media.min1440} {
      width: 39%;
    }

    @media ${themes.primary.media.minPCFullHD} {
      gap: 9px;
      width: 42%;
    }
  }

  &.icon-based {
    width: 75%;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;
