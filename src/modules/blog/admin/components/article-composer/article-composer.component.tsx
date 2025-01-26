import React from "react";
import { useFormikContext } from "formik";

import { AuthorPhoto } from "../author-photo";
import { AddTag, BlogTags } from "../blog-tags";
import PhotoBlockDashed from "../../../../../components/Admin/Global/PhotoBlockDashed";
import SubHeaderWithInput from "../../../../../components/Admin/Global/SubHeaderWithInput";
import InputWithType from "../../../../../components/Inputs/InputWithType";
import TextEditor from "../../../../../components/TextEditor/TextEditor";

import * as Styled from "../../styles/blog-admin.styled";
import * as StyledAdminPage from "../../../../../styles/AdminPage";

import useDeleteImageFunction from "../../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../../hooks/useUploadImageFunction";

import { IImage } from "../../../../../types/Admin/Admin.types";
import { IArticle, IArticleAddAndEdit } from "../../types";

import { useEditorConfig, useEditorPlugins } from "../../hooks";
import { getTextFromHtml } from "../../../../../utils/getTextFromHtml";

export const ArticleComposer = ({ possibleTags }: IArticleAddAndEdit) => {
  const { values, touched, handleChange, errors } =
    useFormikContext<IArticle>();
  const today = new Date().toISOString().split("T")[0];

  const plugins = useEditorPlugins();
  const editorConfig = useEditorConfig(plugins);

  const deleteArticleImageFunction = useDeleteImageFunction(
    values,
    "",
    false,
    "image"
  );
  const uploadArticleImageFunction = useUploadImageFunction(
    values,
    "",
    false,
    "image"
  );
  const deleteArticleImage = async () => (await deleteArticleImageFunction)();
  const uploadArticleImage = (image: IImage) =>
    uploadArticleImageFunction(image);

  const deleteEmailImageFunction = useDeleteImageFunction(
    values.emailImage,
    "",
    false,
    "emailImage.image"
  );
  const uploadEmailImageFunction = useUploadImageFunction(
    values.emailImage,
    "",
    false,
    "emailImage.image"
  );
  const deleteEmailImage = async () => (await deleteEmailImageFunction)();
  const uploadEmailImage = (image: IImage) => uploadEmailImageFunction(image);

  const deleteAuthorImageFunction = useDeleteImageFunction(
    values.author,
    "",
    false,
    "author.image"
  );
  const uploadAuthorImageFunction = useUploadImageFunction(
    values.author,
    "",
    false,
    "author.image"
  );
  const deleteAuthourImage = async () => (await deleteAuthorImageFunction)();
  const uploadAuthorImage = (image: IImage) => uploadAuthorImageFunction(image);

  return (
    <>
      <Styled.AdminBlogGrid>
        <Styled.ImagesContainer>
          <div>
            <Styled.AdminSubTitle>Banner</Styled.AdminSubTitle>
            <PhotoBlockDashed
              photo={values.image?.url ? values.image : null}
              deleteFlag={true}
              uploadFunction={uploadArticleImage}
              deleteFunction={deleteArticleImage}
              header="Click to drop new image here"
              isError={!!errors.image && touched.image}
            />
          </div>
          <div>
            <Styled.AdminSubTitle>
              Same photo in .png format for email
            </Styled.AdminSubTitle>
            <PhotoBlockDashed
              photo={
                values.emailImage?.image?.url ? values.emailImage?.image : null
              }
              acceptFormat={"image/png"}
              deleteFlag={true}
              uploadFunction={uploadEmailImage}
              deleteFunction={deleteEmailImage}
              header="Click to drop new .png image here"
              isError={!!errors.emailImage && touched.emailImage?.image}
            />
          </div>
        </Styled.ImagesContainer>
        <Styled.ArticleInputsWrapper style={{ marginLeft: "40px" }}>
          <SubHeaderWithInput
            iserror={!!errors.author?.name && touched.author?.name}
            errorMessage={errors.author?.name}
            isadminblog={true}
            inputValue={values.author.name}
            onChangeFunction={handleChange}
            name="author.name"
            header="Author's name"
            placeholder="Author's name"
          />
          <SubHeaderWithInput
            iserror={!!errors.url && touched.url}
            errorMessage={errors.url}
            isadminblog={true}
            inputValue={values.url}
            onChangeFunction={handleChange}
            name="url"
            header="Url"
            placeholder="Url"
          />
          <Styled.ExtraMargin>
            <InputWithType
              iserror={!!errors.date && touched.date}
              errorMessage={errors.date}
              type="date"
              value={values.date}
              onChange={handleChange}
              name="date"
              header="Date"
              max={today}
            />
          </Styled.ExtraMargin>
          <InputWithType
            iserror={!!errors.updatedOn && touched.updatedOn}
            errorMessage={errors.updatedOn}
            type="date"
            value={values.updatedOn}
            onChange={handleChange}
            max={today}
            name="updatedOn"
            header="Updated On"
            defaultValue={today}
          />
          <AuthorPhoto
            isError={!!errors.author?.image && touched.author?.image}
            photo={values.author.image?.url ? values.author.image : null}
            deleteFlag
            deleteFunction={deleteAuthourImage}
            uploadFunction={uploadAuthorImage}
            style={{ marginBottom: "16px" }}
          />
        </Styled.ArticleInputsWrapper>
        <Styled.ArticleInputsWrapper style={{ marginLeft: "24px" }}>
          <SubHeaderWithInput
            iserror={
              !!errors.author?.specialization && touched.author?.specialization
            }
            errorMessage={errors.author?.specialization}
            isadminblog={true}
            inputValue={values.author.specialization}
            onChangeFunction={handleChange}
            name="author.specialization"
            header="Specialization (writer, other...)"
            placeholder="writer, other..."
          />
          <Styled.ExtraMargin>
            <InputWithType
              iserror={!!errors.minutesToRead && touched.minutesToRead}
              errorMessage={errors.minutesToRead}
              value={values.minutesToRead.toString()}
              onChange={handleChange}
              name="minutesToRead"
              header="Time to read"
              type="number"
              min={1}
            />
          </Styled.ExtraMargin>
          <Styled.TagContainer>
            <Styled.AdminSubTitle>Tags</Styled.AdminSubTitle>
            <AddTag possibleTags={possibleTags} />
          </Styled.TagContainer>
          <BlogTags
            possibleTags={possibleTags}
            isError={!!errors.tags && touched.tags}
          />
        </Styled.ArticleInputsWrapper>
      </Styled.AdminBlogGrid>
      <SubHeaderWithInput
        iserror={!!errors.title && touched.title}
        errorMessage={errors.title}
        isadminblog={true}
        inputValue={values.title}
        onChangeFunction={handleChange}
        name="title"
        header="Title"
        placeholder="title"
      />
      <SubHeaderWithInput
        iserror={!!errors.description && touched.description}
        errorMessage={errors.description}
        isadminblog={true}
        inputValue={getTextFromHtml(values.description)}
        onChangeFunction={handleChange}
        name="description"
        header="Description"
        placeholder="description"
      />
      <StyledAdminPage.BottomText className="portfolio-admin-description">
        <StyledAdminPage.TextCounter>
          {getTextFromHtml(values.description).length}/160
        </StyledAdminPage.TextCounter>
      </StyledAdminPage.BottomText>
      {editorConfig && (
        <Styled.ExtraMargin>
          <TextEditor
            header="Text"
            name="content"
            props={editorConfig}
            isError={!!errors.content && touched.content}
          />
        </Styled.ExtraMargin>
      )}
    </>
  );
};
