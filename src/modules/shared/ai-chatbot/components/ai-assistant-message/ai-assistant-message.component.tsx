import React, { forwardRef } from "react";
import Markdown from "markdown-to-jsx";

import { StyledSpinner } from "../../../../../components/Loader";

import * as Styled from "./ai-assistant-message.styled";

import { IMessage } from "../../types";

interface IAiAssistantMessageProps {
  message?: IMessage;
  isReceivedMessage: boolean;
  isLoading?: boolean;
  chatAssistantName?: string;
  mode: "icon-based" | "full-screen";
}

export const AiAssistantMessage = forwardRef(
  (
    {
      message,
      isReceivedMessage,
      isLoading = false,
      chatAssistantName = "CGS-team Assistant",
      mode,
    }: IAiAssistantMessageProps,
    ref: React.ForwardedRef<HTMLDivElement | null>
  ) => {
    return (
      <Styled.MessageWrapper isReceivedMessage={isReceivedMessage} ref={ref}>
        {isReceivedMessage && (
          <Styled.AvatarWrapper
            className={mode}
            style={{
              backgroundColor: "none",
              padding: "0",
            }}
          >
            <Styled.AvatarImg src="/chatOperatorAvatar.svg" />
          </Styled.AvatarWrapper>
        )}
        <Styled.MessageTextAndSenderContainer
          isReceivedMessage={isReceivedMessage}
          className={mode}
        >
          {isReceivedMessage && (
            <Styled.MessageSender className={mode}>
              {chatAssistantName}
            </Styled.MessageSender>
          )}
          {!isLoading && message?.message ? (
            <Styled.MessageBox
              className={mode}
              isReceivedMessage={isReceivedMessage}
            >
              <Markdown>{message.message}</Markdown>
            </Styled.MessageBox>
          ) : (
            <StyledSpinner className="ai-chatbot-message" />
          )}
        </Styled.MessageTextAndSenderContainer>
      </Styled.MessageWrapper>
    );
  }
);

AiAssistantMessage.displayName = "AiAssistantMessage";
