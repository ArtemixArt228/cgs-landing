import React from "react";
import { useFormikContext } from "formik";

import TextEditor from "../../../TextEditor/TextEditor";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import ButtonArrow from "../../../../utils/ButtonArrow";

import { AdminPaddedBlock, AdminHalfGrid } from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import { ICloudService } from "../../../../types/Admin/Response.types";

const ProvidesBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<ICloudService>();
  const { subtitle, ...blocks } = values.providesBlock;

  const handleClick = () => handleSubmit();

  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          header="Subtitle"
          inputValue={subtitle}
          name={`providesBlock.subtitle`}
        />
      </AdminHalfGrid>
      <AdminHalfGrid>
        {Object.entries(blocks).map((el, idx) => (
          <div key={`providesBlock.${idx}`}>
            <SubHeaderWithInput
              header={`Subtitle ${idx + 1}`}
              name={`providesBlock.${el[0]}.subtitle`}
              onChangeFunction={handleChange}
              inputValue={el[1].subtitle}
            />
            <TextEditor header="Text" name={`providesBlock.${el[0]}.text`} />
          </div>
        ))}
      </AdminHalfGrid>
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

export default ProvidesBlock;
