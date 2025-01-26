import styled from "styled-components";
import themes from "../../utils/themes";
import { messageShow } from "../Animations.styled";

export const MessageListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  overscroll-behavior: contain;
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

  @media ${themes.primary.media.maxMobile} {
    padding: 24px 3px 16px 15px;

    @supports (-webkit-hyphens: none) {
      padding-right: calc(0.7rem + 11px);

      :hover {
        padding-right: calc(0.7rem + 11px);
      }
    }
  }
  @media ${themes.primary.media.min768Mobile} {
    padding: 16px 5px 16px 15px;
  }
`;

interface IRecievedMessagesWrapper {
  notLast?: boolean;
  isReceivedMessage: boolean;
}

interface IMessagesWrapper {
  notFirst?: boolean;
  isReceivedMessage: boolean;
}

interface IMessagesBox {
  isReceivedMessage: boolean;
}

interface IChatScrollButton {
  isShowError: boolean;
}

export const RecievedOrSendMessagesWrapper = styled.div<IRecievedMessagesWrapper>`
  display: flex;
  align-items: flex-start;
  gap: 0.5em;
  justify-content: ${({ isReceivedMessage }) =>
    isReceivedMessage ? "start" : "end"};

  margin-bottom: ${({ notLast }) => (notLast ? "-12px" : "0")};
  p {
    margin: 0;
  }
`;

export const FilesMessages = styled.div<IMessagesBox>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 12px;
  max-width: 100%;
  width: 100%;
  justify-content: ${({ isReceivedMessage }) =>
    isReceivedMessage ? "flex-start" : "flex-end"};
  align-items: ${({ isReceivedMessage }) =>
    isReceivedMessage ? "flex-start" : "flex-end"};
`;

export const AvatarWrapper = styled.div`
  height: 39px;
  width: 39px;
  border-radius: 100%;
  @media ${themes.primary.media.min4K} {
    height: 52px;
    width: 52px;
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

export const MessagesWrapper = styled.div<IMessagesWrapper>`
  padding-left: calc(
    ${({ notFirst, isReceivedMessage }) =>
      notFirst && isReceivedMessage ? "39px + 0.5em" : "0"}
  );
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: ${({ isReceivedMessage }) =>
    isReceivedMessage ? "flex-start" : "flex-end"};
  @media ${themes.primary.media.min4K} {
    padding-left: calc(
      ${({ notFirst, isReceivedMessage }) =>
        notFirst && isReceivedMessage ? "52px + 0.5em" : "0"}
    );
  }
`;

export const MessagesContainer = styled.div<IMessagesWrapper>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: ${({ isReceivedMessage }) =>
    isReceivedMessage ? "flex-start" : "flex-end"};
`;

export const MessageSender = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 12px;
  line-height: 16px;
  :nth-of-type(1) {
    margin-bottom: 4px;
  }
  @media ${themes.primary.media.min4K} {
    font-size: 16px;
    line-height: 132%;
  }
`;

export const MessageBox = styled.div<IMessagesBox>`
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
  @media ${themes.primary.media.maxMobile} {
    max-width: 100%;
  }
  @media ${themes.primary.media.min768Mobile} {
    max-width: 72%;
  }
  @media ${themes.primary.media.min4K} {
    font-size: 18px;
    line-height: 147%;
  }

  &.msgAnimate {
    transform: scale(0);
    max-height: 0;

    overflow: hidden;
    animation: ${messageShow} 0.15s ease-out 0s forwards;
  }

  a {
    color: ${themes.primary.colors.darkBlue};
    text-decoration: underline;
  }
`;

export const MessageTime = styled.span`
  display: block;
  width: fit-content;
  letter-spacing: 0.3px;
  font-size: 12px;
  line-height: 16px;
  font-weight: ${themes.primary.font.weight.heavy};
  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.headerBorder};
  @media ${themes.primary.media.min4K} {
    font-size: 16px;
    line-height: 132%;
  }
`;

export const UserMessageAttachment = styled.div`
  &.image-container {
    max-width: 100%; /* Ensures the image container doesn't overflow */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: ${themes.primary.colors.chatSendedMessageBgc};
    transition: opacity 0.3ms ease;
    width: auto;
    overflow: hidden;
  }

  & img {
    padding: 2px 4px;
    max-width: 100%;
    width: auto;
    height: auto;
    max-height: 350px;
    object-fit: contain;
    border-radius: 10px;
  }
  &:hover {
    opacity: 0.5;
  }
`;

export const AdminMessageAttachment = styled(UserMessageAttachment)`
  background-color: ${themes.primary.colors.chatMessageBgc};
`;

export const UserMessageAttachmentFile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-left: auto;

  border-radius: 6px 0 6px 6px;
  background-color: ${themes.primary.colors.chatSendedMessageBgc};
  padding: 0.67em;

  line-height: 19px;
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 14px;
  font-family: ${themes.primary.font.family.namu};
`;

export const AdminMessageAttachmentFile = styled(UserMessageAttachmentFile)`
  background-color: ${themes.primary.colors.chatMessageBgc};
`;

export const UserMessageFileExt = styled.div`
  background: ${themes.primary.colors.darkBlue};
  color: ${themes.primary.colors.secondary};
  height: 45px;
  width: 45px;
  border-radius: 5px;
  display: grid;
  place-items: center;
`;

export const UserMessageFileName = styled.div`
  width: fit-content;
  max-width: 70%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ChatScrollButton = styled.button<IChatScrollButton>`
  font-family: ${themes.primary.font.family.namu};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: ${themes.primary.colors.vodka};
  border: 1.5px solid ${themes.primary.colors.primary};
  color: ${themes.primary.colors.primary};
  right: 16px;
  bottom: ${({ isShowError }) => (isShowError ? "100px" : "88px")};
  width: 77px;
  height: 32px;
  border-radius: 16px;
  letter-spacing: 0.3px;
  z-index: 1;
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  line-height: 16px;
`;
