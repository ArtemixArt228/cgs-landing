import React from "react";
import { useFormikContext } from "formik";

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

import { IBlockchainService } from "../../../../types/Admin/Response.types";

import ButtonArrow from "../../../../utils/ButtonArrow";

const WayBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IBlockchainService>();

  const handleClick = () => handleSubmit();

  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          inputValue={values.wayBlock.subtitle}
          header="Subtitle"
          name="wayBlock.subtitle"
        />
      </AdminHalfGrid>
      <SubtitleGrid>
        {[...values.wayBlock.textSubBlock].map((el, idx) => (
          <div key={idx}>
            <SubHeaderWithInput
              onChangeFunction={handleChange}
              inputValue={el}
              header={`Text ${idx + 1}`}
              name={`wayBlock.textSubBlock[${idx}]`}
            />
          </div>
        ))}
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

export default WayBlock;
