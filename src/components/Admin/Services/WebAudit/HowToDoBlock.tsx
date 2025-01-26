import { useFormikContext } from "formik";
import React from "react";

import AdminBlockDropDown from "../../Global/AdminBlockDropDown";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import { AdminInput } from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import { ThreeInARowGrid } from "../../../../styles/WebAuditService/AdminWebAudit.styled";

import { IServiceWebAudit } from "../../../../types/Admin/Response.types";

import ButtonArrow from "../../../../utils/ButtonArrow";

const HowToDoBlock = () => {
  const { values, handleSubmit, handleChange } =
    useFormikContext<IServiceWebAudit>();
  const handleClick = () => handleSubmit();

  return (
    <AdminBlockDropDown title="HOW TO DO A WEBSITE AUDIT?">
      <AdminInput
        value={values.howToDoAudit.subtitle}
        onChange={handleChange}
        name="howToDoAudit.subtitle"
        style={{ maxWidth: "350px" }}
      />
      <ThreeInARowGrid style={{ columnGap: "18px" }}>
        {values.howToDoAudit.points.map((point, idx) => (
          <SubHeaderWithInput
            key={idx}
            inputValue={point}
            onChangeFunction={handleChange}
            header={`Subtitle ${idx + 1}`}
            name={`howToDoAudit.points.${idx}`}
            placeholder={`subtitle ${idx + 1}`}
          />
        ))}
      </ThreeInARowGrid>
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

export default HowToDoBlock;
