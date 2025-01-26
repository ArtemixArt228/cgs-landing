import React, { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { ChatPersonObject, MessageListProps } from "react-chat-engine-advanced";
import GreetingMessageComponent from "./GreetingMessageComponent";

import * as Styled from "../../styles/Chat/ChatMessagesComponent.styled";
import MessageWithAttachments from "./MessageWithAttachments";
import { parseFilesInChatMessage } from "../../utils/parseFilesInChatMessage";
import arrow from "public/Services/chatbot-chat/arrow.svg";

interface IMessageListComponent {
  userEmail: string;
  userName: string;
  openChatTime: string;
  sentEmailTime: string;
  sentNameTime: string;
  isGreetingMeesageShow: boolean;
  messageProps: MessageListProps;
  setNewMessageAmount: React.Dispatch<React.SetStateAction<number>>;
  handleReadLastMessage: (
    chatId: number,
    people: ChatPersonObject[],
    chatLastMessageId?: number
  ) => void;
  isShowError: boolean;
}

const MessageListComponent = ({
  userEmail,
  userName,
  openChatTime,
  sentEmailTime,
  sentNameTime,
  messageProps,
  isGreetingMeesageShow,
  isShowError,
  handleReadLastMessage,
}: IMessageListComponent) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollButtonRef = useRef<HTMLButtonElement | null>(null);
  const isScrollButtonVisible = useRef(false);
  const messages = [...messageProps.messages].sort((a, b) => {
    return a.id! - b.id!;
  });
  const adminSenderName =
    messageProps.chat?.people.find(
      (i) => i.person.username !== messageProps.chat?.admin.username
    )?.person.first_name ?? undefined;
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current?.scrollHeight;
    }
  }, [messages]);
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

  const handleScrollButtonShow = useCallback(() => {
    if (containerRef.current && scrollButtonRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 12;

      if (isAtBottom && isScrollButtonVisible.current) {
        scrollButtonRef.current.style.display = "none";
        isScrollButtonVisible.current = false;
      } else if (!isAtBottom && !isScrollButtonVisible.current) {
        scrollButtonRef.current.style.display = "flex";
        isScrollButtonVisible.current = true;
      }
    }
  }, []);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    isScrollButtonVisible.current = true;
    handleScrollButtonShow();
  }, [handleScrollButtonShow, userName, username]);

  return (
    <Styled.MessageListContainer
      ref={containerRef}
      onScroll={handleScrollButtonShow}
      style={{
        ...style,
        position: "static",
        background: "#f1efed",
        height: "calc(100% - 72px)",
        overscrollBehavior: "contain",
      }}
    >
      <Styled.ChatScrollButton
        isShowError={isShowError}
        ref={scrollButtonRef}
        onClick={scrollToBottom}
        title="Scroll chat to bottom"
        aria-label="Scroll chat to bottom"
      >
        <Image src={arrow} alt="second block" width={8} height={10} />
        Down
      </Styled.ChatScrollButton>
      <GreetingMessageComponent
        userEmail={userEmail}
        userName={userName}
        openChatTime={openChatTime}
        sentEmailTime={sentEmailTime}
        sentNameTime={sentNameTime}
        isGreetingMeesageShow={isGreetingMeesageShow}
        senderUserName={adminSenderName}
      />
      {messages &&
        messages.map((message, index, messagesArr) => {
          const previousMessage = index === 0 ? null : messagesArr[index - 1];
          const nextMessage =
            index === messagesArr.length - 1 ? null : messagesArr[index + 1];
          const isUserMessage = message.sender_username === username;
          const lengthMessages = messages.length - 1;
          const files = parseFilesInChatMessage(message.custom_json);

          return (
            <div key={`msg_${index}`}>
              <MessageWithAttachments
                isAdminPanel={false}
                msgIdx={index}
                msgsCount={lengthMessages}
                message={message}
                nextMessage={nextMessage}
                attachments={files}
                isReceivedMessage={!isUserMessage}
                previousMessage={previousMessage}
              />
            </div>
          );
        })}
    </Styled.MessageListContainer>
  );
};

export default MessageListComponent;
