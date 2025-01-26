import React from "react";
import { useFormikContext } from "formik";

import SaveBtn from "../../../../../components/Admin/Global/SaveBtn";

import * as Styled from "../../../../../styles/AdminPage";
import { IPortfolioPageData } from "../../../../../types/Admin/AdminPortfolio.types";
import TextEditor from "../../../../../components/TextEditor/TextEditor";

export const TitleBlock = () => {
  const { handleSubmit } = useFormikContext<IPortfolioPageData>();

  const onSubmit = () => {
    handleSubmit();
  };

  return (
    <div style={{ marginBottom: "50px" }}>
      <Styled.AdminPageFirstBlockLayout>
        <div style={{ marginBottom: "30px" }}>
          <TextEditor header="Title" name="SubtitleBlock.title" />
        </div>
      </Styled.AdminPageFirstBlockLayout>
      <SaveBtn handleClick={onSubmit} />
    </div>
  );
};
