import { getIn, useFormikContext } from "formik";
import React from "react";

import { AdminPaddedBlock } from "../../../../styles/AdminPage";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";

import { IImage } from "../../../../types/Admin/Admin.types";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import ButtonArrow from "../../../../utils/ButtonArrow";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunctionRefactored";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunctionRefactored";
import { IServiceAi } from "../../../../types/Admin/AdminServices.types";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import * as StyledAiServicePage from "../../../../styles/AiService/AdminPage";
import * as Styled from "../../../../styles/AdminPage";
import TextEditor from "../../../TextEditor/TextEditor";

const BlockHeroSection = () => {
  const { values, handleChange, handleSubmit, errors } =
    useFormikContext<IServiceAi>();
  const deleteImageFunction = useDeleteImageFunction(
    undefined,
    undefined,
    false
  );
  const uploadImageFunction = useUploadImageFunction(undefined, false);
  const deleteFunc = async () =>
    (await deleteImageFunction)(values.headerBlock, "headerBlock.image");

  const uploadFunc = (image: IImage) =>
    uploadImageFunction(image, "headerBlock.image");
  const handleClick = () => handleSubmit();

  return (
    <AdminPaddedBlock className="services">
      <StyledAiServicePage.FlexWrapper className="services-hero">
        <StyledAiServicePage.ColumnWrapper>
          <div>
            <div>
              <TextEditor
                header="Title"
                name="headerBlock.title"
                props={{
                  defaultValue: values.headerBlock.title || "",
                }}
              />
            </div>
            <Styled.BottomText className="services">
              <Styled.TextCounter>
                {values.headerBlock.title.length}/36
              </Styled.TextCounter>
            </Styled.BottomText>
          </div>
          <SubHeaderWithInput
            inputValue={values.headerBlock.button}
            onChangeFunction={handleChange}
            header="Button"
            name="headerBlock.button"
            placeholder="Button title"
          />
        </StyledAiServicePage.ColumnWrapper>
        <div>
          <TextEditor
            header="Text"
            name="headerBlock.text"
            props={{
              defaultValue: values.headerBlock.text || "",
            }}
          />
        </div>
        <Styled.AdminPortfolioImageContainer>
          <Styled.AdminPortfolioImageText>
            <h2>Main page photo</h2>
          </Styled.AdminPortfolioImageText>
          {getIn(errors, "headerBlock.image.url") && <Styled.ImageErrorBox />}
          <PhotoBlockDashed
            photo={values.headerBlock.image}
            deleteFunction={deleteFunc}
            uploadFunction={uploadFunc}
            style={{ maxWidth: "364px", maxHeight: "364px", marginTop: "10px" }}
            deleteFlag={true}
          />
        </Styled.AdminPortfolioImageContainer>
      </StyledAiServicePage.FlexWrapper>
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
    </AdminPaddedBlock>
  );
};

export default BlockHeroSection;
