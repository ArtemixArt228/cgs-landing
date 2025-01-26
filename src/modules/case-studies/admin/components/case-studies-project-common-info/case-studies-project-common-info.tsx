import React from "react";
import { useFormikContext } from "formik";

import * as Styled from "../../../../../styles/AdminPortfolio";
import SaveBtn from "../../../../../components/Admin/Global/SaveBtn";
import SubHeaderWithInput from "../../../../../components/Admin/Global/SubHeaderWithInput";
import { IPortfolioPageData } from "../../../../../types/Admin/AdminPortfolio.types";
export const IndividualProjectPageInfo = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IPortfolioPageData>();

  return (
    <div>
      <SubHeaderWithInput
        placeholder="Text"
        header="TITLE OF ADDITIONAL PROJECTS"
        inputValue={values.individualProjectPage.additionalProjects}
        onChangeFunction={handleChange}
        name="individualProjectPage.additionalProjects"
      />
      <SubHeaderWithInput
        placeholder="Text"
        header="CTA"
        inputValue={values.individualProjectPage.cta}
        onChangeFunction={handleChange}
        name="individualProjectPage.cta"
      />

      <Styled.IndividualBottomGridContainer>
        <SubHeaderWithInput
          placeholder="Text"
          header="Button"
          inputValue={values.individualProjectPage.button}
          onChangeFunction={handleChange}
          name="individualProjectPage.button"
        />
        <SubHeaderWithInput
          placeholder="Text"
          header="Button link"
          inputValue={values.individualProjectPage.buttonLink}
          onChangeFunction={handleChange}
          name="individualProjectPage.buttonLink"
        />
      </Styled.IndividualBottomGridContainer>
      <SaveBtn handleClick={handleSubmit} />
    </div>
  );
};
