import React from "react";
import { useFormikContext } from "formik";

import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import { SubtitleGrid, AdminPaddedBlock } from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import ButtonArrow from "../../../../utils/ButtonArrow";

import { IUxUiInterface } from "../../../../types/Admin/Response.types";

const DesignBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IUxUiInterface>();

  const handleClick = () => handleSubmit();
  return (
    <AdminPaddedBlock>
      <SubtitleGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          header="Subtitle"
          name={`designBlock.title`}
          inputValue={values.designBlock.title}
        />
      </SubtitleGrid>
      <SubtitleGrid>
        {values.designBlock.textSubBlock.map((el, idx) => (
          <SubHeaderWithInput
            key={idx}
            onChangeFunction={handleChange}
            header={`Text ${idx + 1}`}
            name={`designBlock.textSubBlock[${idx}]`}
            inputValue={el}
          />
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

export default DesignBlock;
