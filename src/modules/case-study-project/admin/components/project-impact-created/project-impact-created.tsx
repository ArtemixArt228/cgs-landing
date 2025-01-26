import React from "react";
import * as Styled from "../../../../../styles/AdminPage";
import { getIn, useFormikContext } from "formik";
import { IPortfolioReview } from "../../../../../types/Admin/AdminPortfolio.types";

import { useFieldValidation } from "../../../../../hooks/useFieldValidation";
import { AdminPortfolioValidation } from "../../../../../validations/AdminPortfolioValidator";
export const ImpactCreated = () => {
  const { values, touched, handleChange, errors } =
    useFormikContext<IPortfolioReview>();

  const handleBlur = useFieldValidation(
    AdminPortfolioValidation(
      !!values.aiSolutionsToAchieveGoal.includeBlock,
      !!values.designOverview?.includeBlock
    )
  );

  return (
    <Styled.FieldsWrapper>
      {values.impactCreated.items.map((_, idx) => (
        <Styled.ConceptWrapper key={idx}>
          <div>
            <h2>#{idx + 1} Amount</h2>
            <Styled.AdminTextArea
              value={values.impactCreated.items[idx].amount}
              placeholder={"Amount (ex.: 16M+)"}
              iserror={
                !!getIn(errors, `impactCreated.items[${idx}].amount`) &&
                touched.impactCreated?.items?.[idx]?.amount
              }
              onChange={handleChange}
              style={{ width: 200 }}
              name={`impactCreated.items[${idx}].amount`}
              onBlur={handleBlur}
            />
          </div>
          <div style={{ width: "100%" }}>
            <h2>Amount description</h2>
            <Styled.AdminTextArea
              value={values.impactCreated.items[idx].description}
              onChange={handleChange}
              placeholder={"Description (ex.: downloads)"}
              style={{ width: "100%" }}
              iserror={
                !!getIn(errors, `impactCreated.items[${idx}].description`) &&
                touched.impactCreated?.items?.[idx]?.description
              }
              name={`impactCreated.items[${idx}].description`}
              maxLength={35}
              onBlur={handleBlur}
            />
            <Styled.BottomText className="portfolio-admin-description">
              <Styled.TextCounter>
                {values.impactCreated.items[idx].description.length}
                /35
              </Styled.TextCounter>
            </Styled.BottomText>
          </div>
          <div style={{ width: "100%" }}>
            <h2>Aditional text</h2>
            <Styled.AdminTextArea
              value={values.impactCreated.items[idx].aditionalText}
              onChange={handleChange}
              iserror={
                !!getIn(errors, `impactCreated.items[${idx}].aditionalText`) &&
                touched.impactCreated?.items?.[idx]?.aditionalText
              }
              placeholder={"Text (ex.: in the first 3 quarters)"}
              name={`impactCreated.items[${idx}].aditionalText`}
              style={{ width: "100%" }}
              maxLength={150}
              onBlur={handleBlur}
            />
            <Styled.BottomText className="portfolio-admin-description">
              <Styled.TextCounter>
                {values.impactCreated.items[idx].aditionalText.length}
                /150
              </Styled.TextCounter>
            </Styled.BottomText>
          </div>
        </Styled.ConceptWrapper>
      ))}
    </Styled.FieldsWrapper>
  );
};
