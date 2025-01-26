import { useFormikContext } from "formik";
import React from "react";

import AdminBlockDropDown from "../../Global/AdminBlockDropDown";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import * as Styled from "../../../../styles/AdminPage";
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

  return (
    <AdminBlockDropDown title="Why it's worth it?">
      <Styled.AdminInput
        width="421px"
        height="56px"
        value={values.whenDoYouNeed.subtitle}
        name="whenDoYouNeed.subtitle"
        onChange={handleChange}
      />
      <Styled.AdminMobileAuditWhatAppWrapper>
        {Object.entries(values.whenDoYouNeed.textBlock).map((text, idx) => (
          <div key={idx}>
            <SubHeaderWithInput
              inputValue={text[1].subtitle}
              onChangeFunction={handleChange}
              header={`Subtitle ${idx + 1}`}
              name={`whenDoYouNeed.textBlock.${text[0]}.subtitle`}
              placeholder="Title"
            />
            <SubHeaderWithInput
              inputValue={text[1].text}
              onChangeFunction={handleChange}
              header={`Text ${idx + 1}`}
              minRows={3}
              name={`whenDoYouNeed.textBlock.${text[0]}.text`}
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

export default WhenDoYouNeedBlock;
