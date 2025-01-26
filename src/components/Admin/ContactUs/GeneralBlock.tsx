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

const GeneralBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IContactUsPageData>();
  const handleClick = () => handleSubmit();
  return (
    <Styled.ContentWrapper>
      <SubHeaderWithInput
        width="48%"
        placeholder="Link"
        header="Calendly event link"
        inputValue={values.calendlyLink}
        onChangeFunction={handleChange}
        name="calendlyLink"
      />
      <div style={{ margin: "30px 0" }}>
        <TextEditor header="General steps title" name="generalStepsTitle" />
      </div>

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

export default GeneralBlock;
