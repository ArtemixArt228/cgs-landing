import React from "react";
import Image from "next/image";
import { useFormik } from "formik";
import { TextareaAutosize } from "@mui/material";

import { ButtonArrow } from "../btn-arrow.component";

import * as Styled from "./ai-assistant-input.styled";

import { AIChatMessageSchema } from "../../validators";

import arrow from "public/Services/chatbot-chat/arrow.svg";

interface IAiAssistantInputProps {
  onSendMessage: (newMessage: string) => void;
  isTablet: boolean;
  isDesktop: boolean;
  isDesktopLarge: boolean;
  isChatCreated: boolean;
  showScrollButton: boolean;
  handleScroll: () => void;
}

export const AiAssistantInput = ({
  onSendMessage,
  isDesktop,
  isDesktopLarge,
  isChatCreated,
  handleScroll,
  showScrollButton,
}: IAiAssistantInputProps) => {
  const formik = useFormik({
    initialValues: {
      text: "",
      honeypot: "",
    },
    validationSchema: AIChatMessageSchema,
    onSubmit: async (values, actions) => {
      if (!values.honeypot) {
        onSendMessage(values.text);
        actions.resetForm();
      }
    },
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      formik.handleSubmit();
    }
  };

  return (
    <Styled.MessageFormWrapper>
      {showScrollButton && (
        <Styled.ChatScrollButton
          onClick={handleScroll}
          title="Scroll chat to bottom"
          aria-label="Scroll chat to bottom"
        >
          <Image src={arrow} alt="second block" width={8} height={10} />
          Down
        </Styled.ChatScrollButton>
      )}
      <Styled.InputAndErrorWrapper>
        <Styled.MessageForm onSubmit={formik.handleSubmit} autoComplete="off">
          <Styled.InputWrapper className="message-input">
            <TextareaAutosize
              maxRows={3}
              style={{
                width: "100%",
                border: "none",
                backgroundColor: "transparent",
                borderRadius: 0,
                overflow: "auto",
                fontSize: isDesktopLarge ? 20 : isDesktop ? 16 : 14,
                lineHeight: isDesktopLarge
                  ? "32px"
                  : isDesktop
                  ? "24px"
                  : "20px",
              }}
              name="text"
              aria-label="Type your question"
              placeholder="Type your question"
              value={formik.values.text}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onKeyDown={handleKeyDown}
            />

            <Styled.SubmitIconButton
              type="submit"
              title="Send message"
              disabled={!formik.values.text || !isChatCreated}
            >
              <div>Send</div>
              <ButtonArrow currentColor />
            </Styled.SubmitIconButton>
          </Styled.InputWrapper>
          {/* Honeypot hidden field */}
          <input
            type="text"
            name="honeypot"
            style={{ display: "none" }}
            onChange={formik.handleChange}
          />
        </Styled.MessageForm>
      </Styled.InputAndErrorWrapper>
    </Styled.MessageFormWrapper>
  );
};
