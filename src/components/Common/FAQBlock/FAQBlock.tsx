import React, { forwardRef } from "react";
import { useQuery } from "@tanstack/react-query";

import Question from "../../Faq/FAQuestion/FAQuestion";

import * as Styles from "../../Faq/FAQPage/FAQPage.styles";
import * as Styled from "./FAQBlock.styled";

import { adminFaqService } from "../../../services/adminFaqPage";

import { queryKeys } from "../../../consts/queryKeys";
import { IQuestion } from "../../../types/Admin/AdminFaq.types";

interface IFAQBlock {
  title?: string;
  questions?: IQuestion[];
  className?: string;
  questionClassName?: string;
  countOfQuestions?: number;
}

const FAQBlock = forwardRef<HTMLDivElement, IFAQBlock>(
  (
    {
      title = "FREQUENTLY ASKED QUESTIONS",
      questions,
      className = "",
      questionClassName = "",
      countOfQuestions = 4,
    },
    ref
  ) => {
    const { data } = useQuery([queryKeys.getFaqPage], () =>
      adminFaqService.getFaqPage()
    );

    const faqData = questions ?? data?.questions.slice(0, countOfQuestions);

    return (
      <Styled.FaqContainer className={className} ref={ref}>
        <Styled.FaqHeader className={className}>{title}</Styled.FaqHeader>
        <Styles.QuestionsWrapper className="homepage">
          {faqData?.map(({ question, text, image }, index) => (
            <Question
              className={questionClassName}
              title={question}
              content={text}
              image={image}
              key={index}
              isHomepage
            />
          ))}
        </Styles.QuestionsWrapper>
      </Styled.FaqContainer>
    );
  }
);
FAQBlock.displayName = "FAQBlock";
export default FAQBlock;
