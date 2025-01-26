import React from "react";
import { useFormikContext } from "formik";

import SaveBtn from "../../../../../components/Admin/Global/SaveBtn";
import TextEditor from "../../../../../components/TextEditor/TextEditor";

import * as Styled from "./blog-title.styled";

import { IBlogPageData } from "../../../types";

export const BlogTitle = () => {
  const { handleSubmit } = useFormikContext<IBlogPageData>();

  const onSubmit = () => {
    handleSubmit();
  };

  return (
    <Styled.AdminBlocksContent>
      <Styled.AdminPageFirstBlockLayout>
        <TextEditor header="Title" name="title" />
      </Styled.AdminPageFirstBlockLayout>
      <SaveBtn handleClick={onSubmit} />
    </Styled.AdminBlocksContent>
  );
};
