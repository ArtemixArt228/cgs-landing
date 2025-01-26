import React from "react";
import { useFormikContext } from "formik";

import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";

import { AdminInput } from "../../../../styles/AdminPage";
import { ThreeInARowGrid } from "../../../../styles/WebAuditService/AdminWebAudit.styled";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import { IServiceWebAudit } from "../../../../types/Admin/Response.types";

import ButtonArrow from "../../../../utils/ButtonArrow";

const ProblemsAuditSolve = () => {
  const { values, handleSubmit, handleChange } =
    useFormikContext<IServiceWebAudit>();
  const handleClick = () => handleSubmit();

  return (
    <AdminBlockDropDown title="Which problems does an audit solve?">
      <AdminInput
        value={values.problemsAuditSolve.subtitle}
        onChange={handleChange}
        name="problemsAuditSolve.subtitle"
        style={{ maxWidth: "450px" }}
      />
      <div>
        <AdminInput
          value={values.problemsAuditSolve.text}
          onChange={handleChange}
          name="problemsAuditSolve.text"
          style={{ maxWidth: "450px" }}
        />
      </div>
      <ThreeInARowGrid style={{ columnGap: "18px" }}>
        {values.problemsAuditSolve.problems.map((point, idx) => (
          <SubHeaderWithInput
            key={idx}
            inputValue={point}
            onChangeFunction={handleChange}
            header={`Problem ${idx + 1}`}
            name={`problemsAuditSolve.problems[${idx}]`}
            placeholder={`problem ${idx + 1}`}
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

export default ProblemsAuditSolve;
