import React from "react";
import { useFormikContext } from "formik";

import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";

import * as Styled from "../../../../styles/WebAuditService/AdminWebAudit.styled";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import { IServiceWebAudit } from "../../../../types/Admin/Response.types";

import ButtonArrow from "../../../../utils/ButtonArrow";

const TypesBlock = () => {
  const { values, handleSubmit, handleChange } =
    useFormikContext<IServiceWebAudit>();
  const handleClick = () => handleSubmit();

  return (
    <AdminBlockDropDown title="TYPES OF AUDIT">
      <Styled.ThreeInARowGrid>
        {values.typesOfAuditBlock.map((type, idx) => (
          <div key={type._id}>
            <SubHeaderWithInput
              inputValue={type.title}
              onChangeFunction={handleChange}
              header={`Title ${idx + 1}`}
              name={`typesOfAuditBlock.${idx}.title`}
              placeholder={`title ${idx + 1}`}
            />
            <SubHeaderWithInput
              inputValue={type.text}
              onChangeFunction={handleChange}
              header="Text"
              name={`typesOfAuditBlock.${idx}.text`}
              placeholder="text"
            />
          </div>
        ))}
      </Styled.ThreeInARowGrid>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "30px", marginBottom: "2.78em" }}
        onClick={handleClick}
      >
        Save Changes
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
    </AdminBlockDropDown>
  );
};

export default TypesBlock;
