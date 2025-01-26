import React, { useRef, useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";

import { AiAssistantInput } from "../ai-assistant-input";
import { AiAssistantMessage } from "../ai-assistant-message";
import { StyledSpinner } from "../../../../../components/Loader";

import * as Styled from "./ai-assistant.styled";

import { useAssistantChat } from "../../hooks";

import close from "/public/blackCross.svg";
import { queryKeys } from "../../../../../consts/queryKeys";

import { assistantService } from "../../../../../services/ai-assistant";
import { AiAssistantSuggestions } from "../ai-assistant-suggestions";

interface IAiAssistantProps {
  handleClose?: () => void;
  mode: "icon-based" | "full-screen";
}

export const AiAssistant = ({ handleClose, mode }: IAiAssistantProps) => {
  const { data } = useQuery([queryKeys.getAssistantData], () =>
    assistantService.getAssistantData()
  );

  const [showScrollButton, setShowScrollButton] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const streamingMessageRef = useRef<HTMLDivElement | null>(null);

  const isTablet = useMediaQuery("(min-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const isDesktopLarge = useMediaQuery("(min-width: 1800px)");

  const { messages, streamedMessage, chatId, isLoading, isError, sendMessage } =
    useAssistantChat(data?.chatFirstMessageText);

  const handleScrollButtonShow = useCallback(() => {
    if (chatContainerRef.current) {
      const currentHeight =
        isLoading && streamingMessageRef.current
          ? chatContainerRef.current.scrollHeight -
            chatContainerRef.current.scrollTop -
            streamingMessageRef.current.clientHeight
          : chatContainerRef.current.scrollHeight -
            chatContainerRef.current.scrollTop;
      const isAtBottom =
        currentHeight <= chatContainerRef.current.clientHeight + 12;
      setShowScrollButton(!isAtBottom && !!chatId);
    }
  }, [chatId, isLoading]);

  const scrollToBottom = useCallback(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
      setShowScrollButton(false);
    }
  }, []);

  useEffect(() => {
    if (messages.length || streamedMessage) {
      scrollToBottom();
    }
  }, [messages, streamedMessage, scrollToBottom]);

  useEffect(() => {
    const container = chatContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScrollButtonShow);
      return () => {
        container.removeEventListener("scroll", handleScrollButtonShow);
      };
    }
  }, [handleScrollButtonShow]);

  return (
    <Styled.ChatContainer className={mode}>
      {mode === "icon-based" && (
        <Styled.ChatHeader>
          <Styled.HeaderInfo>
            <Styled.ChatTitle>Chat with CGS-team bot</Styled.ChatTitle>
          </Styled.HeaderInfo>
          <Styled.ChatCloseButton onClick={handleClose}>
            <Image src={close} alt="Close" />
          </Styled.ChatCloseButton>
        </Styled.ChatHeader>
      )}
      <Styled.ChatBody className={mode}>
        <Styled.ChatMessagesAndSuggestionsContainer className={mode}>
          <Styled.ChatMessagesContainer ref={chatContainerRef} className={mode}>
            {isError || !chatId ? (
              <StyledSpinner className="ai-chatbot-chat" />
            ) : (
              <>
                {messages.map((message) => (
                  <AiAssistantMessage
                    key={message.id}
                    message={message}
                    isReceivedMessage={!message.isUserMessage}
                    chatAssistantName={data?.chatAssistantName}
                    mode={mode}
                  />
                ))}
                {isLoading && (
                  <AiAssistantMessage
                    ref={streamingMessageRef}
                    key="streaming"
                    message={{
                      id: "streaming",
                      message: streamedMessage,
                      isUserMessage: false,
                      sentAt: Date.now(),
                    }}
                    isReceivedMessage={true}
                    chatAssistantName={data?.chatAssistantName}
                    mode={mode}
                  />
                )}
              </>
            )}
          </Styled.ChatMessagesContainer>
          {messages.length < 2 && (
            <AiAssistantSuggestions
              mode={mode}
              onSuggestionSelect={sendMessage}
              items={data?.messageSuggestions}
            />
          )}
        </Styled.ChatMessagesAndSuggestionsContainer>

        <AiAssistantInput
          showScrollButton={showScrollButton}
          handleScroll={scrollToBottom}
          onSendMessage={sendMessage}
          isDesktop={isDesktop}
          isTablet={isTablet}
          isDesktopLarge={isDesktopLarge}
          isChatCreated={!!chatId}
        />
      </Styled.ChatBody>
    </Styled.ChatContainer>
  );
};
