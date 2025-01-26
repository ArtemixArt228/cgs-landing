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

import { IServiceSupport } from "../../../../types/Admin/Response.types";

import { renderInputs } from "../../../../utils/renderInputs";
import ButtonArrow from "../../../../utils/ButtonArrow";

const SubtitleBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IServiceSupport>();

  const handleClick = () => handleSubmit();
  return (
    <AdminPaddedBlock theme="dark">
      <AdminHalfGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          header="Subtitle"
          inputValue={values.howDoWeWorkBlock.subtitle}
          name={`howDoWeWorkBlock.subtitle`}
        />
      </AdminHalfGrid>
      <SubtitleGrid>
        {Object.entries(values.howDoWeWorkBlock)
          .splice(0, 4)
          .map((el, idx) => {
            return (
              idx !== 0 && (
                <div key={`howDoWeWorkBlock ${idx}`}>
                  {renderInputs({
                    props: { name: `howDoWeWorkBlock.${el[0]}` },
                    state: el[1],
                    onChangeFunction: handleChange,
                  })}
                </div>
              )
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

export default SubtitleBlock;
