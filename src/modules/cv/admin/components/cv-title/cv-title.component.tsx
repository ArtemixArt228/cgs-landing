import React from "react";
import { useFormikContext } from "formik";

import SubHeaderWithInput from "../../../../../components/Admin/Global/SubHeaderWithInput";
import SaveBtn from "../../../../../components/Admin/Global/SaveBtn";

import * as Styled from "./cv-title.styled";

import { ICvPageData } from "../../../types";

export const CvTitle = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<ICvPageData>();

  return (
    <>
      <Styled.AdminHeader>DEV'S CV</Styled.AdminHeader>
      <div style={{ width: 347 }}>
        <SubHeaderWithInput
          header="Title"
          name="title"
          inputValue={values.title}
          onChangeFunction={handleChange}
        />
      </div>
      <SaveBtn handleClick={handleSubmit} />
    </>
  );
};
