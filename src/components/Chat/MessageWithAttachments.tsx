import React from "react";
import { MessageObject } from "react-chat-engine-advanced";

import * as Styled from "../../styles/Chat/ChatMessagesComponent.styled";

import setMessageTimeAccordingToCurrentDate from "../../utils/setMessageTimeAccordingToCurrentDate";
import { makeAllChatLinksClickable } from "../../utils/getLinksFromMessage";

import { ICustomFile } from "../../types/SupportChat.types";
import AttachmentsMessageComponent from "./AttachmentsMessageComponent";

interface IMessageWithAttachmentsProps {
  msgIdx: number;
  msgsCount: number;
  message: MessageObject;
  previousMessage?: MessageObject | null;
  nextMessage?: MessageObject | null;
  attachments?: ICustomFile[];
  isReceivedMessage: boolean;
  isAdminPanel: boolean;
  avatarColor?: string;
}

const MessageWithAttachments = ({
  msgIdx,
  msgsCount,
  message,
  previousMessage,
  nextMessage,
  attachments = [],
  isReceivedMessage,
  isAdminPanel,
  avatarColor,
}: IMessageWithAttachmentsProps) => {
  const currentMessageFormattedTime = setMessageTimeAccordingToCurrentDate(
    message.created
  );
  const nextMessageFormattedTime = nextMessage
    ? setMessageTimeAccordingToCurrentDate(nextMessage?.created)
    : "";
  const isFirstMessageWIthAvatar =
    isReceivedMessage &&
    (!previousMessage ||
      previousMessage.sender?.username !== message.sender_username);
  const isLastMessage =
    !nextMessage ||
    nextMessage.sender?.username !== message.sender?.username ||
    currentMessageFormattedTime !== nextMessageFormattedTime;
  return (
    <Styled.RecievedOrSendMessagesWrapper
      isReceivedMessage={isReceivedMessage}
      notLast={!isLastMessage}
    >
      {isFirstMessageWIthAvatar && (
        <Styled.AvatarWrapper
          style={{
            backgroundColor: isAdminPanel ? avatarColor : "none",
            padding: isAdminPanel ? "5px" : "0",
          }}
        >
          <Styled.AvatarImg
            src={!isAdminPanel ? "/chatOperatorAvatar.svg" : "/Chat/user.svg"}
          />
        </Styled.AvatarWrapper>
      )}
      <Styled.MessagesWrapper
        notFirst={!isFirstMessageWIthAvatar}
        isReceivedMessage={isReceivedMessage}
      >
        {isFirstMessageWIthAvatar && (
          <Styled.MessageSender>
            {message.sender?.first_name}
          </Styled.MessageSender>
        )}
        <Styled.MessagesContainer isReceivedMessage={isReceivedMessage}>
          {!!attachments.length && (
            <AttachmentsMessageComponent
              message={message}
              attachments={attachments}
              isReceivedMessage={isReceivedMessage}
            />
          )}
          {!!message.text?.length && (
            <Styled.MessageBox
              isReceivedMessage={isReceivedMessage}
              className={msgIdx === msgsCount ? "msgAnimate" : ""}
            >
              {message.text && (
                <div
                  style={{
                    wordWrap: "break-word",
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                    whiteSpace: "normal",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: makeAllChatLinksClickable(message.text),
                  }}
                />
              )}
            </Styled.MessageBox>
          )}
        </Styled.MessagesContainer>
        {isLastMessage && (
          <Styled.MessageTime>{currentMessageFormattedTime}</Styled.MessageTime>
        )}
      </Styled.MessagesWrapper>
    </Styled.RecievedOrSendMessagesWrapper>
  );
};

export default MessageWithAttachments;
