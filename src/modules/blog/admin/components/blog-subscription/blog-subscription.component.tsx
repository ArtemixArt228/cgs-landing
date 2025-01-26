import React from "react";
import { useFormikContext } from "formik";

import AdminBlockDropDown from "../../../../../components/Admin/Global/AdminBlockDropDown";
import SubHeaderWithInput from "../../../../../components/Admin/Global/SubHeaderWithInput";
import SaveBtn from "../../../../../components/Admin/Global/SaveBtn";

import * as Styled from "../../styles/blog-admin.styled";

import { IBlogPageData } from "../../../types";

export const BlogSubscription = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IBlogPageData>();

  return (
    <Styled.AdminBlocksContent>
      <AdminBlockDropDown title="Subscribe Block">
        <Styled.PodcastWrapper>
          <div style={{ width: "50%" }}>
            <SubHeaderWithInput
              inputValue={values.subscribeBlock?.title}
              name="subscribeBlock.title"
              onChangeFunction={handleChange}
              header="Title"
              placeholder="title({Subscribe})"
            />
            <SubHeaderWithInput
              inputValue={values.subscribeBlock?.subtitle}
              name="subscribeBlock.subtitle"
              onChangeFunction={handleChange}
              header="Subtitle"
              placeholder="subtitle"
            />
            <SubHeaderWithInput
              inputValue={values.subscribeBlock?.fieldLabel}
              name="subscribeBlock.fieldLabel"
              onChangeFunction={handleChange}
              header="Field name/question"
              placeholder="field name/question (What’s your email?)"
            />
            <SubHeaderWithInput
              inputValue={values.subscribeBlock?.buttonText}
              name="subscribeBlock.buttonText"
              onChangeFunction={handleChange}
              header="Button text"
              placeholder="button text"
            />
            <SubHeaderWithInput
              inputValue={values.subscribeBlock?.additionalText}
              name="subscribeBlock.additionalText"
              onChangeFunction={handleChange}
              header="Additional text"
              placeholder="additional text"
            />
            <SubHeaderWithInput
              inputValue={values.subscribeBlock?.thankYouMessage}
              name="subscribeBlock.thankYouMessage"
              onChangeFunction={handleChange}
              header="Thank you message"
              placeholder="text"
            />
          </div>

          <SaveBtn handleClick={handleSubmit} />
        </Styled.PodcastWrapper>
      </AdminBlockDropDown>
    </Styled.AdminBlocksContent>
  );
};
