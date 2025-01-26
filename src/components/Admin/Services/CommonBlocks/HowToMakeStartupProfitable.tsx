import { useFormikContext } from "formik";
import React from "react";

import { AdminPaddedBlock } from "../../../../styles/AdminPage";

import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import ButtonArrow from "../../../../utils/ButtonArrow";
import { IServiceAi } from "../../../../types/Admin/AdminServices.types";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import * as StyledAiServicePage from "../../../../styles/AiService/AdminPage";
import * as Styled from "../../../../styles/AdminPage";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunctionRefactored";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunctionRefactored";
import { IImage } from "../../../../types/Admin/Admin.types";

const BlockHowToMakeStartupProfitable = () => {
  const { values, errors, handleChange, handleSubmit } =
    useFormikContext<IServiceAi>();
  const handleClick = () => handleSubmit();
  const deleteImageFunction = useDeleteImageFunction(
    undefined,
    undefined,
    false
  );
  const uploadImageFunction = useUploadImageFunction(undefined, false);
  const deleteFunc = async () =>
    (await deleteImageFunction)(
      values.howToMakeStartupProfitable,
      "howToMakeStartupProfitable.image"
    );

  const uploadFunc = (image: IImage) =>
    uploadImageFunction(image, "howToMakeStartupProfitable.image");
  return (
    <AdminPaddedBlock className="services">
      <StyledAiServicePage.FlexWrapper className="services-hero">
        <StyledAiServicePage.ColumnWrapper>
          <SubHeaderWithInput
            iserror={!!errors.howToMakeStartupProfitable?.title}
            inputValue={values.howToMakeStartupProfitable?.title}
            onChangeFunction={handleChange}
            header="Title"
            name="howToMakeStartupProfitable.title"
            placeholder="Title"
            width="633px"
          />
          <SubHeaderWithInput
            iserror={!!errors.howToMakeStartupProfitable?.text}
            inputValue={values.howToMakeStartupProfitable?.text}
            onChangeFunction={handleChange}
            header="Video text"
            name="howToMakeStartupProfitable.text"
            placeholder="Video text"
            width="633px"
          />
          <SubHeaderWithInput
            iserror={!!errors.howToMakeStartupProfitable?.videoLink}
            inputValue={values.howToMakeStartupProfitable?.videoLink}
            onChangeFunction={handleChange}
            header="Video link"
            name="howToMakeStartupProfitable.videoLink"
            placeholder="Video link"
            width="633px"
          />
          <SubHeaderWithInput
            iserror={!!errors.howToMakeStartupProfitable?.button}
            inputValue={values.howToMakeStartupProfitable?.button}
            onChangeFunction={handleChange}
            header="Button"
            name="howToMakeStartupProfitable.button"
            placeholder="Button title"
          />
        </StyledAiServicePage.ColumnWrapper>
        <Styled.AdminPortfolioImageContainer>
          <Styled.AdminPortfolioImageText>
            <h2>Video preview photo</h2>
          </Styled.AdminPortfolioImageText>
          <PhotoBlockDashed
            isError={!!errors.howToMakeStartupProfitable?.image}
            photo={values.howToMakeStartupProfitable?.image}
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

export default BlockHowToMakeStartupProfitable;
