import { useFormikContext } from "formik";
import React from "react";

import AdminBlockDropDown from "../../Global/AdminBlockDropDown";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import {
  AdminInput,
  AdminMobileAuditHowDoWeAuditGrid,
  ListInput,
} from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import { IServiceMobileAudit } from "../../../../types/Admin/Response.types";

import ButtonArrow from "../../../../utils/ButtonArrow";

const WhenDoYouNeedBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IServiceMobileAudit>();

  const handleClick = () => handleSubmit();

  const renderInput = (state: string[]) => {
    return state.map((point, idx) => (
      <ListInput key={idx}>
        <AdminInput
          value={point}
          name={`howDoWeAudit.points[${idx}]`}
          onChange={handleChange}
        />
      </ListInput>
    ));
  };

  return (
    <AdminBlockDropDown title="HOW DO WE AUDIT APPS?">
      <AdminInput
        width="453px"
        height="56px"
        value={values.howDoWeAudit.subtitle}
        name="howDoWeAudit.subtitle"
        onChange={handleChange}
      />
      <SubHeaderWithInput
        header="Description"
        width="453px"
        height="56px"
        inputValue={values.howDoWeAudit.description}
        name="howDoWeAudit.description"
        onChangeFunction={handleChange}
      />
      <AdminMobileAuditHowDoWeAuditGrid>
        {renderInput(values.howDoWeAudit.points)}
      </AdminMobileAuditHowDoWeAuditGrid>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "1em", marginBottom: "2.78em" }}
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

export default WhenDoYouNeedBlock;
