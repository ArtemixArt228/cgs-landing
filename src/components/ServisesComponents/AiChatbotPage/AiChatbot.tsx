import React, { FC } from "react";
import parse from "html-react-parser";

import { AiAssistant } from "../../../modules/shared/ai-chatbot/components";

import * as Styled from "./AiChatbotPage.styled";

import { IAIChatbotHeroBlock } from "../../../types/services/ai-chatbot.types";

interface IProps {
  isDesktop: boolean;
  isTablet: boolean;
  isDesktopLarge: boolean;
  data: IAIChatbotHeroBlock;
}

const AiChatbot: FC<IProps> = ({ data }) => {
  const { title, text } = data;

  return (
    <Styled.AiChatbotHeroWrapper>
      <Styled.AiChatbotPageHeader>{parse(title)}</Styled.AiChatbotPageHeader>
      <Styled.AiChatbotPageText className="ai-chatbot-text">
        {text}
      </Styled.AiChatbotPageText>
      <Styled.ChatPreview>
        <AiAssistant mode="full-screen" />
      </Styled.ChatPreview>
    </Styled.AiChatbotHeroWrapper>
  );
};

export default AiChatbot;
