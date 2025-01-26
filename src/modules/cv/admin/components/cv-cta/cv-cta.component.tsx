import React from "react";
import { useFormikContext } from "formik";

import SaveBtn from "../../../../../components/Admin/Global/SaveBtn";
import TextEditor from "../../../../../components/TextEditor/TextEditor";
import SubHeaderWithInput from "../../../../../components/Admin/Global/SubHeaderWithInput";

import * as Styled from "./cv-cta.styled";

import { ICvPageData } from "../../../types";

export const CvCtaBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<ICvPageData>();

  return (
    <Styled.ContentWrapper>
      <Styled.CVCtaTitle>
        <TextEditor header="Title" name="cta.title" />
      </Styled.CVCtaTitle>

      <Styled.CVButtonInfo>
        <Styled.CVButtonWrapper>
          <SubHeaderWithInput
            placeholder="Text"
            header="Button Text"
            inputValue={values.cta.buttonText}
            onChangeFunction={handleChange}
            name="cta.buttonText"
          />
        </Styled.CVButtonWrapper>

        <Styled.CVButtonWrapper>
          <SubHeaderWithInput
            placeholder="URL"
            header="Button Link"
            inputValue={values.cta.buttonLink}
            onChangeFunction={handleChange}
            name="cta.buttonLink"
          />
        </Styled.CVButtonWrapper>
      </Styled.CVButtonInfo>

      <SaveBtn handleClick={handleSubmit} />
    </Styled.ContentWrapper>
  );
};
