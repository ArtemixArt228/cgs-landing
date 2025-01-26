import React, { useState } from "react";
import * as Styled from "../../../styles/AdminPage";
import { useFormikContext } from "formik";
import { IFaqData } from "../../../types/Admin/AdminFaq.types";
import Question from "./Question";
import MetaTagsBlock from "../MetaTagsBlock";
import { AddButton, ButtonsContainer } from "./adminFaq.styled";

const FaqContentBlock = () => {
  const { values, handleChange, handleSubmit } = useFormikContext<IFaqData>();
  const [counter, setCounter] = useState<number>(0);

  const addQuestion = (index: number) => {
    values.questions.splice(index + 1, 0, {
      question: "",
      text: "",
      image: null,
      id: `${Math.random()}.${Math.random()}`,
    });
    setCounter(values.questions.length);
  };

  const deleteQuestion = (index: number) => {
    values.questions.splice(index, 1);

    setCounter(values.questions.length);
    handleSubmit();
  };

  return (
    <div>
      <Styled.AdminPaddedBlock>
        <Styled.AdminHeader>FAQ</Styled.AdminHeader>
        <Styled.Counter>{counter}</Styled.Counter>
        {values.questions.length > 0 ? (
          values.questions.map((question, index) => (
            <Question
              key={question.id}
              question={question}
              handleChange={handleChange}
              questionName={`questions[${index}].question`}
              questionText={`questions[${index}].text`}
              addQuestion={addQuestion}
              index={index}
              deleteQuestion={deleteQuestion}
            />
          ))
        ) : (
          <ButtonsContainer>
            <AddButton onClick={() => addQuestion(0)}>
              [ + add next question ]
            </AddButton>
          </ButtonsContainer>
        )}
      </Styled.AdminPaddedBlock>
      <MetaTagsBlock theme="dark" sitemap="faq" />
      <Styled.AdminPaddedBlock>
        <Styled.AdminBigButton type="submit" onClick={() => handleSubmit()}>
          Save changes
        </Styled.AdminBigButton>
      </Styled.AdminPaddedBlock>
    </div>
  );
};

export default FaqContentBlock;
