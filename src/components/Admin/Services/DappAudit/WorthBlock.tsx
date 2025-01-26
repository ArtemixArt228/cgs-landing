import { useFormikContext } from "formik";
import React from "react";

import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import {
  AdminHalfGrid,
  AdminPaddedBlock,
  SubtitleGrid,
} from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import { IServiceDappAudit } from "../../../../types/Admin/Response.types";

import { renderInputs } from "../../../../utils/renderInputs";
import ButtonArrow from "../../../../utils/ButtonArrow";

const WorthBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IServiceDappAudit>();

  const handleClick = () => handleSubmit();

  return (
    <AdminPaddedBlock theme="dark" style={{ padding: 0 }}>
      <AdminHalfGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          header="Subtitle"
          inputValue={values.worthBlock.subtitle}
          name={`worthBlock.subtitle`}
        />
      </AdminHalfGrid>
      <SubtitleGrid>
        {Object.entries(values.worthBlock.textBlock).map((el, idx) => (
          <div key={`worthBlock ${idx}`}>
            {renderInputs({
              props: { name: `worthBlock.textBlock.${el[0]}` },
              state: el[1],
              onChangeFunction: handleChange,
            })}
          </div>
        ))}
      </SubtitleGrid>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "2.33em", marginBottom: "2.78em" }}
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

export default WorthBlock;
