import React, { ChangeEvent, useMemo } from "react";
import { useFormikContext } from "formik";
import { IPortfolioReview } from "../../../../../types/Admin/AdminPortfolio.types";
import * as Styled from "../../../../../styles/AdminPage";
import * as StyledPortfolio from "../../../../../styles/AdminPortfolio";
import * as yup from "yup";
import SubHeaderWithInput from "../../../../../components/Admin/Global/SubHeaderWithInput";
import { DropdownTechnology } from "../../../../case-studies/admin/components";

export const Block2ProjectOverview = () => {
  const { values, touched, handleChange, errors, setFieldValue } =
    useFormikContext<IPortfolioReview>();

  const isOneChecked = useMemo(() => {
    const err = errors as yup.ValidationError;
    if (err.inner) {
      return err.inner.some((e) => e.type === "at-least-one");
    }

    return false;
  }, [errors]);

  return (
    <Styled.FieldsWrapper>
      <SubHeaderWithInput
        header="Project overview description"
        iserror={
          !!errors.projectOverview?.description &&
          touched.projectOverview?.description
        }
        placeholder="Add description"
        inputValue={values.projectOverview.description}
        onChangeFunction={handleChange}
        name="projectOverview.description"
        maxLength={600}
        minRows={4}
      />
      <Styled.BottomText className="portfolio-admin-description">
        <Styled.TextCounter>
          {values.projectOverview.description.length}/600
        </Styled.TextCounter>
      </Styled.BottomText>
      <SubHeaderWithInput
        header="Show case title"
        iserror={
          !!errors.projectOverview?.showCaseTitle &&
          touched.projectOverview?.showCaseTitle
        }
        placeholder="Add show case title"
        inputValue={values.projectOverview.showCaseTitle}
        onChangeFunction={handleChange}
        name="projectOverview.showCaseTitle"
        maxLength={200}
        minRows={1}
      />
      <Styled.BottomText className="portfolio-admin-description">
        <Styled.TextCounter>
          {values.projectOverview.showCaseTitle?.length}/200
        </Styled.TextCounter>
      </Styled.BottomText>
      <StyledPortfolio.FlexInputContainer>
        <SubHeaderWithInput
          header="Project budget"
          iserror={
            !!errors.projectOverview?.budget && touched.projectOverview?.budget
          }
          placeholder="1M$"
          inputValue={values.projectOverview.budget}
          onChangeFunction={handleChange}
          name="projectOverview.budget"
        />
        <SubHeaderWithInput
          header="Release Date"
          iserror={
            !!errors.projectOverview?.releaseDate &&
            touched.projectOverview?.releaseDate
          }
          placeholder="2020"
          inputValue={values.projectOverview.releaseDate.toString()}
          onChangeFunction={handleChange}
          name="projectOverview.releaseDate"
        />
      </StyledPortfolio.FlexInputContainer>
      <StyledPortfolio.FlexInputContainer>
        <SubHeaderWithInput
          header="Project timeframe"
          iserror={
            !!errors.projectOverview?.timeframe &&
            touched.projectOverview?.timeframe
          }
          placeholder="0"
          inputValue={values.projectOverview.timeframe.toString()}
          onChangeFunction={handleChange}
          name="projectOverview.timeframe"
          width="20%"
          id="timeframe"
          withLabel={"Months"}
        />
        <SubHeaderWithInput
          header="Team size"
          iserror={
            !!errors.projectOverview?.teamSize &&
            touched.projectOverview?.teamSize
          }
          placeholder="0"
          inputValue={values.projectOverview.teamSize.toString()}
          onChangeFunction={handleChange}
          name="projectOverview.teamSize"
          width="20%"
          id="members"
          withLabel={"Members"}
        />
      </StyledPortfolio.FlexInputContainer>
      <Styled.AdminNDALinks>
        <p>Platform</p>

        <Styled.FlexContainer>
          {Object.keys(values.projectOverview.platform).map((platform) => {
            const typedPlatform =
              platform as keyof typeof values.projectOverview.platform;
            return (
              <Styled.FlexContainer key={platform}>
                <Styled.AdminCheckboxField
                  iserror={
                    (!!errors.projectOverview?.platform?.[typedPlatform] ||
                      isOneChecked) &&
                    touched.projectOverview?.platform?.[typedPlatform]
                  }
                  checked={values.projectOverview.platform[typedPlatform]}
                  type="checkbox"
                  id={platform}
                  name={`projectOverview.platform[${typedPlatform}]`}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const { checked } = e.target;
                    setFieldValue(
                      `projectOverview.platform[${typedPlatform}]`,
                      checked
                    );
                  }}
                />
                <label htmlFor={platform}>{platform.toUpperCase()}</label>
              </Styled.FlexContainer>
            );
          })}
        </Styled.FlexContainer>
      </Styled.AdminNDALinks>
      <Styled.AdminPageFourthBlockLayout>
        <Styled.AdminSubTitle textAlign="left">
          Technologies
        </Styled.AdminSubTitle>
        <DropdownTechnology iserror={!!errors.projectOverview?.technologies} />
      </Styled.AdminPageFourthBlockLayout>
    </Styled.FieldsWrapper>
  );
};
