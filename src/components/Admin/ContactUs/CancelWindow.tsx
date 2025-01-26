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

const CancelWindow = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IContactUsPageData>();
  const handleClick = () => handleSubmit();
  return (
    <Styled.ContentWrapper>
      <div style={{ margin: "30px 0" }}>
        <TextEditor header="Cancel title" name="cancelWindow.title" />
      </div>
      <div style={{ margin: "30px 0" }}>
        <TextEditor
          header="Cancel description"
          name="cancelWindow.description"
        />
      </div>
      <SubHeaderWithInput
        width="48%"
        placeholder="ex. Continue"
        header="Button text"
        inputValue={values.cancelWindow?.buttonText}
        onChangeFunction={handleChange}
        name={`cancelWindow.buttonText`}
      />

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

export default CancelWindow;
