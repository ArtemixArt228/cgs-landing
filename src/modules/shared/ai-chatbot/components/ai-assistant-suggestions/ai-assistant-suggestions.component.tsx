import React from "react";
import * as Styled from "./ai-assistant-suggestions.styled";

interface IAiAssistantSuggestionsProps {
  onSuggestionSelect: (newMessage: string) => void;
  mode: "icon-based" | "full-screen";
  items?: string[];
}

export const AiAssistantSuggestions = ({
  onSuggestionSelect,
  mode,
  items = [],
}: IAiAssistantSuggestionsProps) => {
  return (
    <Styled.SuggestionsSectionWrapper className={mode}>
      <Styled.Description className={mode}>
        Might be interesting for you:
      </Styled.Description>
      <Styled.SuggestionsContainer>
        {items.map((item, index) => (
          <Styled.SuggestionItem
            className={mode}
            key={index}
            onClick={() => onSuggestionSelect(item)}
          >
            {item}
          </Styled.SuggestionItem>
        ))}
      </Styled.SuggestionsContainer>
    </Styled.SuggestionsSectionWrapper>
  );
};
