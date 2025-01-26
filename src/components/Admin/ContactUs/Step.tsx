import React from "react";
import { useFormikContext } from "formik";

import * as Styled from "../../../styles/AdminPage";
import { IContactUsPageData } from "../../../types/Admin/AdminContactUs.types";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../utils/ButtonArrow";
import TextEditor from "../../TextEditor/TextEditor";
interface IProps {
  stepBlockName:
    | "provideContactDetailsStep"
    | "bookCallStep"
    | "callDetailsStep";
}
const Step = ({ stepBlockName }: IProps) => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IContactUsPageData>();
  const handleClick = () => handleSubmit();
  return (
    <Styled.ContentWrapper>
      <SubHeaderWithInput
        placeholder="ex. Provide contact details"
        header="Title of step"
        inputValue={values[stepBlockName]?.stepTitle}
        onChangeFunction={handleChange}
        name={`${stepBlockName}.stepTitle`}
      />
      <SubHeaderWithInput
        placeholder="ex. Complete the form with your details and project brief so we can reach out to assist you"
        header="Description of step"
        inputValue={values[stepBlockName]?.stepDescription}
        onChangeFunction={handleChange}
        name={`${stepBlockName}.stepDescription`}
      />
      <div style={{ margin: "60px 0 20px" }}>
        <TextEditor header="Title" name={`${stepBlockName}.generalFormTitle`} />
      </div>
      {stepBlockName !== "callDetailsStep" && (
        <div style={{ margin: "90px 0 20px" }}>
          <TextEditor header="Text" name={`${stepBlockName}.text`} />
        </div>
      )}
      {stepBlockName == "provideContactDetailsStep" && (
        <div style={{ margin: "90px 0 20px" }}>
          <TextEditor
            header="Mobile text"
            name={`${stepBlockName}.mobileText`}
          />
        </div>
      )}
      {stepBlockName !== "bookCallStep" && (
        <SubHeaderWithInput
          width="48%"
          placeholder="ex. Continue"
          header="Button text"
          inputValue={values[stepBlockName]?.buttonText}
          onChangeFunction={handleChange}
          name={`${stepBlockName}.buttonText`}
        />
      )}

      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ margin: "3em 0" }}
        onClick={handleClick}
      >
        Save Changes
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
    </Styled.ContentWrapper>
  );
};

export default Step;
