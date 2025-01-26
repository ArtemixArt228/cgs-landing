import { useFormikContext } from "formik";
import React from "react";

import ButtonArrow from "../../../../utils/ButtonArrow";
import AdminBlockDropDown from "../../Global/AdminBlockDropDown";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import * as Styled from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import { IServiceMobileAudit } from "../../../../types/Admin/Response.types";

const WhatAppBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IServiceMobileAudit>();
  const handleClick = () => handleSubmit();

  return (
    <AdminBlockDropDown title="WHAT APP DO YOU HAVE?">
      <Styled.AdminInput
        value={values.whatAppBlock.subtitle}
        name="whatAppBlock.subtitle"
        onChange={handleChange}
        width="350px"
      />
      <Styled.AdminMobileAuditWhatAppWrapper>
        {Object.entries(values.whatAppBlock.textBlock).map((text, idx) => (
          <div key={idx}>
            <SubHeaderWithInput
              inputValue={text[1].subtitle}
              onChangeFunction={handleChange}
              header={`Subtitle ${idx + 1}`}
              name={`whatAppBlock.textBlock.${text[0]}.subtitle`}
              placeholder="Title"
            />
            <SubHeaderWithInput
              inputValue={text[1].text}
              onChangeFunction={handleChange}
              header={`Text ${idx + 1}`}
              minRows={3}
              name={`whatAppBlock.textBlock.${text[0]}.text`}
              placeholder="Title"
            />
          </div>
        ))}
      </Styled.AdminMobileAuditWhatAppWrapper>
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

export default WhatAppBlock;
