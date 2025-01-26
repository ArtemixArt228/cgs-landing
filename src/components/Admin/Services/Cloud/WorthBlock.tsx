import React from "react";
import { useFormikContext } from "formik";
import {
  AdminPaddedBlock,
  AdminHalfGrid,
  SubtitleGrid,
} from "../../../../styles/AdminPage";
import ButtonArrow from "../../../../utils/ButtonArrow";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import { ICloudService } from "../../../../types/Admin/Response.types";
import { renderInputs } from "../../../../utils/renderInputs";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const WorthBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<ICloudService>();
  const { subtitle, ...blocks } = values.worthBlock;

  const handleClick = () => handleSubmit();

  return (
    <AdminPaddedBlock theme="dark" style={{ paddingInline: 0 }}>
      <AdminHalfGrid>
        <SubHeaderWithInput
          onChangeFunction={handleChange}
          header="Subtitle"
          inputValue={subtitle}
          name={`worthBlock.subtitle`}
        />
      </AdminHalfGrid>
      <SubtitleGrid>
        {Object.entries(blocks)
          .splice(0, 3)
          .map((el, idx) => {
            return (
              <div key={idx}>
                {renderInputs({
                  props: { name: `worthBlock.${el[0]}` },
                  state: el[1],
                  onChangeFunction: handleChange,
                })}
              </div>
            );
          })}
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

export default WorthBlock;
