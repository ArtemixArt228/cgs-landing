import React, { useEffect } from "react";
import { useFormikContext } from "formik";
import { AdminPaddedBlock } from "../../../../styles/AdminPage";
import * as StyledAiServicePage from "../../../../styles/AiService/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../../utils/ButtonArrow";
import { IHomePageResponse } from "../../../../types/Admin/AdminHomePage.types";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../../consts/queryKeys";
import { adminFaqService } from "../../../../services/adminFaqPage";

const FAQBlock = () => {
  const { values, handleSubmit, setFieldValue } =
    useFormikContext<IHomePageResponse>();

  const { data } = useQuery([queryKeys.getFaqPage], () =>
    adminFaqService.getFaqPage()
  );

  const handleClick = () => handleSubmit();

  const handleMinus = () => {
    setFieldValue(
      "FaqBlock.countOfQuestions",
      values.FaqBlock?.countOfQuestions - 1
    );
  };

  const handleAdd = () => {
    setFieldValue(
      "FaqBlock.countOfQuestions",
      values.FaqBlock?.countOfQuestions + 1
    );
  };

  useEffect(() => {
    setFieldValue(
      "FaqBlock.countOfQuestions",
      values.FaqBlock?.countOfQuestions ?? 0
    );
  }, [setFieldValue, values.FaqBlock?.countOfQuestions]);
  return (
    <AdminPaddedBlock className="services">
      <StyledAiServicePage.ColumnWrapper>
        <h2 style={{ margin: "0 0 10px 0" }}>Number of questions</h2>

        <StyledAiServicePage.FlexWrapper style={{ gap: "0" }}>
          <StyledAiServicePage.AddOrMinusButton
            type="button"
            onClick={handleMinus}
            disabled={values.FaqBlock?.countOfQuestions <= 1}
          >
            -
          </StyledAiServicePage.AddOrMinusButton>
          <StyledAiServicePage.AddOrMinusButton
            type="button"
            className="input-value"
          >
            {values.FaqBlock?.countOfQuestions}
          </StyledAiServicePage.AddOrMinusButton>
          <StyledAiServicePage.AddOrMinusButton
            type="button"
            onClick={handleAdd}
            disabled={
              data?.questions.length === values.FaqBlock.countOfQuestions
            }
          >
            +
          </StyledAiServicePage.AddOrMinusButton>
        </StyledAiServicePage.FlexWrapper>
      </StyledAiServicePage.ColumnWrapper>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "1.33em" }}
        onClick={handleClick}
      >
        Save Changes
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
    </AdminPaddedBlock>
  );
};

export default FAQBlock;
