import { useFormikContext } from "formik";
import React from "react";

import { AdminPaddedBlock } from "../../../../styles/AdminPage";

import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import ButtonArrow from "../../../../utils/ButtonArrow";
import { IServiceAi } from "../../../../types/Admin/AdminServices.types";
import * as StyledAiServicePage from "../../../../styles/AiService/AdminPage";
import { useQuery } from "@tanstack/react-query";
import { adminFaqService } from "../../../../services/adminFaqPage";
import { queryKeys } from "../../../../consts/queryKeys";

const BlockFaq = () => {
  const { values, handleSubmit, setFieldValue } =
    useFormikContext<IServiceAi>();
  const { data } = useQuery([queryKeys.getFaqPage], () =>
    adminFaqService.getFaqPage()
  );
  const handleClick = () => handleSubmit();
  const handleMinus = () => {
    setFieldValue(
      "faqBlock.countOfQuestions",
      values.faqBlock?.countOfQuestions - 1
    );
  };

  const handleAdd = () => {
    setFieldValue(
      "faqBlock.countOfQuestions",
      values.faqBlock?.countOfQuestions + 1
    );
  };
  return (
    <AdminPaddedBlock className="services">
      <StyledAiServicePage.ColumnWrapper>
        <h2 style={{ margin: "0 0 10px 0" }}>Number of questions</h2>

        <StyledAiServicePage.FlexWrapper style={{ gap: "0" }}>
          <StyledAiServicePage.AddOrMinusButton
            type="button"
            onClick={handleMinus}
            disabled={values.faqBlock?.countOfQuestions <= 1}
          >
            -
          </StyledAiServicePage.AddOrMinusButton>
          <StyledAiServicePage.AddOrMinusButton
            type="button"
            className="input-value"
          >
            {values.faqBlock?.countOfQuestions}
          </StyledAiServicePage.AddOrMinusButton>
          <StyledAiServicePage.AddOrMinusButton
            type="button"
            onClick={handleAdd}
            disabled={
              data?.questions.length === values.faqBlock?.countOfQuestions
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

export default BlockFaq;
