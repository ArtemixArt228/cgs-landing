import React from "react";
import { useFormikContext } from "formik";

import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import {
  AdminPaddedBlock,
  SubtitleGrid,
  AdminHalfGrid,
} from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import ButtonArrow from "../../../../utils/ButtonArrow";
import { renderInputs } from "../../../../utils/renderInputs";

import { IUxUiInterface } from "../../../../types/Admin/Response.types";

const WhatDoWeDoBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IUxUiInterface>();

  const data = values.whatDoWeDoBlock.textSubBlock.map(
    ({ subtitle, text }) => ({ subtitle, text })
  );

  const handleClick = () => handleSubmit();

  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          header="Subtitle"
          inputValue={values.whatDoWeDoBlock.title}
          name={`whatDoWeDoBlock.title`}
        />
      </AdminHalfGrid>
      <SubtitleGrid>
        {Object.entries(data).map((el, idx) => (
          <div key={idx}>
            {renderInputs({
              props: { name: `whatDoWeDoBlock.textSubBlock[${el[0]}]` },
              state: el[1],
              onChangeFunction: handleChange,
            })}
          </div>
        ))}
      </SubtitleGrid>
      <div>
        <BlackButton
          size={"1.5em"}
          padding={"1.11em 3em"}
          style={{ marginTop: "1.33em" }}
          onClick={handleClick}
        >
          Save Changes
          <ArrowContainer>
            <ButtonArrow />
          </ArrowContainer>
        </BlackButton>
      </div>
    </AdminPaddedBlock>
  );
};

export default WhatDoWeDoBlock;
