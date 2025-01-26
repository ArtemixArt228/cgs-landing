import React from "react";
import { useFormikContext } from "formik";

import TextEditor from "../../TextEditor/TextEditor";

import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";
import { AdminHeader, TextEditorWrapper } from "../../../styles/AdminPage";
import { IPrivacyPage } from "../../../types/Admin/Response.types";
import ButtonArrow from "../../../utils/ButtonArrow";

const IntroBlock = () => {
  const { handleSubmit } = useFormikContext<IPrivacyPage>();
  const handleClick = () => handleSubmit();

  return (
    <>
      <AdminHeader>Privacy Policy</AdminHeader>
      <TextEditorWrapper>
        <TextEditor header="Introduction" name="intro" />
      </TextEditorWrapper>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "2.33em", marginBottom: "2.78em" }}
        onClick={handleClick}
      >
        Save Changes
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
    </>
  );
};

export default IntroBlock;
