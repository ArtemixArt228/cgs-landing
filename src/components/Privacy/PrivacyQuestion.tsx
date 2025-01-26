import React, { useState } from "react";
import parse from "html-react-parser";
import * as Styled from "../../styles/PrivacyPolicy/PrivacyPolicy.styled";

interface IPrivacyQuestionProps {
  question: { subtitle: string; text: string };
}

const PrivacyQuestion = ({ question }: IPrivacyQuestionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => setIsOpen((old) => !old);

  return (
    <Styled.QuesitonItem>
      <Styled.QuestionHeader
        onClick={handleClick}
        className={isOpen ? "open" : undefined}
      >
        <Styled.QuestionListItem>{question.subtitle}</Styled.QuestionListItem>
        <Styled.QuestionButton>{isOpen ? "-" : "+"}</Styled.QuestionButton>
      </Styled.QuestionHeader>
      <Styled.QuestionHiddenWrapper className={isOpen ? "open" : undefined}>
        {parse(question.text)}
      </Styled.QuestionHiddenWrapper>
    </Styled.QuesitonItem>
  );
};

export default PrivacyQuestion;
