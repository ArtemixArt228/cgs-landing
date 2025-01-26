import React, { useEffect, useRef } from "react";
import { ChatPersonObject, MessageListProps } from "react-chat-engine-advanced";

import * as Styled from "../../../styles/Chat/ChatMessagesComponent.styled";
import MessageWithAttachments from "../MessageWithAttachments";
import { parseFilesInChatMessage } from "../../../utils/parseFilesInChatMessage";

interface IAdminMessageListComponent {
  messageProps: MessageListProps;
  handleReadLastMessage: (
    chatId: number,
    people: ChatPersonObject[],
    chatLastMessageId?: number
  ) => void;
  chatProps?: { projectId: string; username: string; secret: string };
  avatarColor?: string;
}

const AdminMessageListComponent = ({
  messageProps,
  handleReadLastMessage,
  avatarColor,
}: IAdminMessageListComponent) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current?.scrollHeight;
    }
  }, [messageProps.messages]);

  useEffect(() => {
    messageProps.chat?.id &&
      handleReadLastMessage(
        messageProps.chat?.id,
        messageProps.chat?.people,
        messageProps.chat?.last_message.id
      );
  }, [
    handleReadLastMessage,
    messageProps.chat?.id,
    messageProps.chat?.last_message.id,
    messageProps.chat?.people,
  ]);
  const { username, style } = messageProps;

  const sortedMessages = [...messageProps.messages].sort((a, b) => {
    return a.id! - b.id!;
  });
  return (
    <Styled.MessageListContainer
      ref={containerRef}
      style={{
        ...style,
        height: "calc(100% - 175px)",
      }}
    >
      {sortedMessages &&
        sortedMessages.map((message, index, messagesArr) => {
          const previousMessage = index === 0 ? null : messagesArr[index - 1];
          const nextMessage =
            index === messagesArr.length - 1 ? null : messagesArr[index + 1];
          const isUserMessage = message.sender_username === username;
          const lengthMessages = messageProps.messages.length - 1;
          const files = parseFilesInChatMessage(message.custom_json);

          return (
            <div key={`msg_${index}`}>
              <MessageWithAttachments
                isAdminPanel={true}
                msgIdx={index}
                msgsCount={lengthMessages}
                message={message}
                nextMessage={nextMessage}
                attachments={files}
                isReceivedMessage={!isUserMessage}
                previousMessage={previousMessage}
                avatarColor={avatarColor}
              />
            </div>
          );
        })}
    </Styled.MessageListContainer>
  );
};

export default AdminMessageListComponent;
