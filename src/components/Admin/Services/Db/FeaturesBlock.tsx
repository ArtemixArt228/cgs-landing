import { useFormikContext } from "formik";
import React from "react";

import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import * as Styled from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import { AdminHalfGrid, AdminPaddedBlock } from "../../../../styles/AdminPage";

import ButtonArrow from "../../../../utils/ButtonArrow";

import { IServiceDb } from "../../../../types/Admin/Response.types";

const FeaturesBlock = () => {
  const { values, handleChange, handleSubmit } = useFormikContext<IServiceDb>();

  const handleClick = () => handleSubmit();

  return (
    <AdminPaddedBlock theme="dark">
      <SubHeaderWithInput
        header="Title"
        inputValue={values.featuresBlock.subtitle}
        onChangeFunction={handleChange}
        name="featuresBlock.subtitle"
        width="48%"
      />
      <AdminHalfGrid>
        <div>
          <SubHeaderWithInput
            header="Text 1"
            inputValue={values.featuresBlock.databases.subtitle}
            onChangeFunction={handleChange}
            name="featuresBlock.databases.subtitle"
            width="335px"
          />
          {Object.entries(values.featuresBlock.databases).map((el, idx) => {
            return (
              idx !== 0 && (
                <div key={`featuresBlock.databases ${idx}`}>
                  <Styled.AdminInput
                    name={`featuresBlock.databases.text${idx}`}
                    value={el[1]}
                    onChange={handleChange}
                  />
                </div>
              )
            );
          })}
        </div>
        <div>
          <SubHeaderWithInput
            header="Text 2"
            inputValue={values.featuresBlock.servers.subtitle}
            onChangeFunction={handleChange}
            name="featuresBlock.servers.subtitle"
            width="335px"
          />
          {Object.entries(values.featuresBlock.servers).map((el, idx) => {
            return (
              idx !== 0 && (
                <div key={`featuresBlock.servers ${idx}`}>
                  <Styled.AdminInput
                    name={`featuresBlock.servers.text${idx}`}
                    value={el[1]}
                    onChange={handleChange}
                  />
                </div>
              )
            );
          })}
        </div>
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

export default FeaturesBlock;
