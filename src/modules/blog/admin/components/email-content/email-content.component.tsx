import React from "react";
import { useFormikContext } from "formik";

import AdminBlockDropDown from "../../../../../components/Admin/Global/AdminBlockDropDown";
import SubHeaderWithInput from "../../../../../components/Admin/Global/SubHeaderWithInput";
import SaveBtn from "../../../../../components/Admin/Global/SaveBtn";

import * as Styled from "../../styles/blog-admin.styled";

import { IBlogPageData } from "../../../types";

export const EmailContent = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IBlogPageData>();

  return (
    <Styled.AdminBlocksContent>
      <AdminBlockDropDown title="Email letter content">
        <Styled.PodcastWrapper>
          <div
            style={{
              padding: "10px",
              width: "100%",
            }}
          >
            <SubHeaderWithInput
              inputValue={values.emailContent?.subject}
              name="emailContent.subject"
              onChangeFunction={handleChange}
              header="Subject of letter"
              placeholder="Subject"
              minLength={3}
            />
            <SubHeaderWithInput
              inputValue={values.emailContent?.previewText}
              name="emailContent.previewText"
              onChangeFunction={handleChange}
              header="Letter's preview text"
              placeholder="Preview"
              minLength={3}
            />
            <SubHeaderWithInput
              inputValue={values.emailContent?.generalTitle}
              name="emailContent.generalTitle"
              onChangeFunction={handleChange}
              header="Email general title"
              placeholder="title"
              minLength={3}
            />
            <SubHeaderWithInput
              inputValue={values.emailContent?.buttonText}
              name="emailContent.buttonText"
              onChangeFunction={handleChange}
              header="Button text"
              placeholder="button text"
              minLength={3}
            />
            <SubHeaderWithInput
              inputValue={values.emailContent?.baseLinkUrl}
              name="emailContent.baseLinkUrl"
              onChangeFunction={handleChange}
              header="Button link base url"
              placeholder="https://cgsteam.io"
              minLength={3}
            />
            <SubHeaderWithInput
              inputValue={values.emailContent?.copyrightText}
              name="emailContent.copyrightText"
              onChangeFunction={handleChange}
              header="Bottom copyright text"
              placeholder="Bottom copyright text"
              minLength={3}
            />
          </div>

          <SaveBtn handleClick={handleSubmit} />
        </Styled.PodcastWrapper>
      </AdminBlockDropDown>
    </Styled.AdminBlocksContent>
  );
};
