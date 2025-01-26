import React from "react";
import { useFormikContext } from "formik";

import AdminBlockDropDown from "../Global/AdminBlockDropDown";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import TextEditor from "../../TextEditor/TextEditor";

import { TextEditorWrapper } from "../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";
import { IPrivacyPage } from "../../../types/Admin/Response.types";
import ButtonArrow from "../../../utils/ButtonArrow";

const QuestionBlock = () => {
  const { values, handleSubmit, handleChange } =
    useFormikContext<IPrivacyPage>();

  const handleNextClick = (idx: number) => {
    values.content.splice(idx, 0, {
      subtitle: "Example Subtitle",
      text: "",
    });

    handleSubmit();
  };

  const handleClick = () => handleSubmit();

  return (
    <div>
      {values.content.map((item, idx) => (
        <AdminBlockDropDown
          title={`${idx + 1}. ${item.subtitle}`}
          style={{ width: "90%" }}
          key={idx}
          nextBtn
          onNextClick={() => handleNextClick(idx + 1)}
        >
          <SubHeaderWithInput
            inputValue={item.subtitle}
            onChangeFunction={handleChange}
            name={`content[${idx}].subtitle`}
            header="Subtitle"
            width="721px"
          />
          <TextEditorWrapper start={idx}>
            <ol
              className="numeric"
              start={idx + 1}
              style={{ height: "1px", opacity: "0", margin: "0", padding: "0" }}
            >
              <li />
            </ol>
            <TextEditor header="Text" name={`content[${idx}].text`} />
          </TextEditorWrapper>
        </AdminBlockDropDown>
      ))}
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
    </div>
  );
};

export default QuestionBlock;
