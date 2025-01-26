import React from "react";
import { useFormikContext } from "formik";

import TextEditor from "../../../TextEditor/TextEditor";
import AddReasonBlockIcon from "./AddReasonBlockIcon";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../../utils/ButtonArrow";
import { AdminWhyDoesItHappenFlexContainer } from "./styles";

import { REASONS_INIT } from "../../../../consts/Admin/HomePage";

import { IHomePageResponse } from "../../../../types/Admin/AdminHomePage.types";

const WhyDoesItHappenBlock = () => {
  const { handleSubmit, handleChange, values } =
    useFormikContext<IHomePageResponse>();

  const handleClick = () => handleSubmit();

  const reasons = values.WhyDoesItHappenBlock?.reasons ?? REASONS_INIT;

  return (
    <div style={{ width: "60%" }}>
      <TextEditor
        header="Title"
        name="WhyDoesItHappenBlock.title"
        props={{
          defaultValue: values?.WhyDoesItHappenBlock?.title || "",
        }}
      />
      <SubHeaderWithInput
        header="Subtitle"
        name="WhyDoesItHappenBlock.subtitle"
        inputValue={values?.WhyDoesItHappenBlock?.subtitle}
        onChangeFunction={handleChange}
      />
      {reasons.map((reason, i) => (
        <AdminWhyDoesItHappenFlexContainer key={i}>
          <SubHeaderWithInput
            header={`Subtitle #${i + 1}`}
            name={`WhyDoesItHappenBlock.reasons[${i}].title`}
            inputValue={reason.title}
            onChangeFunction={handleChange}
            inputStyle={{ width: "400px" }}
          />
          <AddReasonBlockIcon reason={reason} index={i} />
        </AdminWhyDoesItHappenFlexContainer>
      ))}

      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginBlock: "1.33em 2.5em" }}
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

export default WhyDoesItHappenBlock;
