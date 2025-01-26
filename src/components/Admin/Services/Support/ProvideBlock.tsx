import { useFormikContext } from "formik";
import React from "react";

import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import {
  AdminHalfGrid,
  AdminInput,
  AdminPaddedBlock,
  AdminSubTitle,
  SubtitleGrid,
} from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import { IServiceSupport } from "../../../../types/Admin/Response.types";

import ButtonArrow from "../../../../utils/ButtonArrow";

const ProvideBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IServiceSupport>();

  const handleClick = () => handleSubmit();
  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          header="Subtitle"
          inputValue={values.providesBlock.subtitle}
          name={`providesBlock.subtitle`}
        />
      </AdminHalfGrid>
      <SubtitleGrid>
        {values.providesBlock.textSubBlock.map((el, idx) => {
          return (
            <div key={`providesBlock textSubBlock ${idx}`}>
              <AdminSubTitle>Subtitle {idx + 1}</AdminSubTitle>
              <AdminInput
                value={el.subtitle}
                name={`providesBlock.textSubBlock[${idx}].subtitle`}
                onChange={handleChange}
                className="smallYOffset"
              />
              <AdminInput
                value={el.text}
                name={`providesBlock.textSubBlock[${idx}].text`}
                onChange={handleChange}
              />
            </div>
          );
        })}
      </SubtitleGrid>
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
    </AdminPaddedBlock>
  );
};

export default ProvideBlock;
