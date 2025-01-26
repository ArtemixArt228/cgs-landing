import { getIn, useFormikContext } from "formik";
import React from "react";

import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunctionRefactored";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunctionRefactored";
import { AdminPaddedBlock } from "../../../../styles/AdminPage";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import * as StyledAiServicePage from "../../../../styles/AiService/AdminPage";

import * as Styled from "../../../../styles/AdminPage";
import TextEditor from "../../../TextEditor/TextEditor";

import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";

import ButtonArrow from "../../../../utils/ButtonArrow";
import { IServiceAi } from "../../../../types/Admin/AdminServices.types";
import { IImage } from "../../../../types/Admin/Admin.types";

const BlockPricing = () => {
  const { values, handleChange, handleSubmit, errors } =
    useFormikContext<IServiceAi>();

  const handleClick = () => handleSubmit();

  const deleteImageFunction = useDeleteImageFunction(
    undefined,
    undefined,
    false
  );
  const uploadImageFunction = useUploadImageFunction(undefined, false);
  const deleteFunc = async () =>
    (await deleteImageFunction)(values.pricingBlock, "pricingBlock.image");

  const uploadFunc = (image: IImage) =>
    uploadImageFunction(image, "pricingBlock.image");

  return (
    <AdminPaddedBlock className="services">
      <StyledAiServicePage.ColumnWrapper>
        <StyledAiServicePage.FlexWrapper className="pricing">
          <StyledAiServicePage.ColumnWrapper style={{ width: "25%" }}>
            <Styled.AdminPortfolioImageContainer>
              <Styled.AdminPortfolioImageText>
                <h2>Photo</h2>
              </Styled.AdminPortfolioImageText>
              <PhotoBlockDashed
                isError={!!errors.pricingBlock?.image}
                photo={values.pricingBlock.image}
                deleteFunction={deleteFunc}
                uploadFunction={uploadFunc}
                style={{
                  maxWidth: "364px",
                  maxHeight: "364px",
                  marginTop: "10px",
                }}
                deleteFlag={true}
              />
            </Styled.AdminPortfolioImageContainer>
          </StyledAiServicePage.ColumnWrapper>

          <StyledAiServicePage.ColumnWrapper style={{ width: "70%" }}>
            <SubHeaderWithInput
              iserror={!!errors.pricingBlock?.title}
              inputValue={values.pricingBlock?.title}
              onChangeFunction={handleChange}
              header="Title"
              name="pricingBlock.title"
              placeholder="Title"
              width="800px"
            />
            <div>
              <TextEditor
                isError={!!errors.pricingBlock?.text}
                header="Text"
                name="pricingBlock.text"
                props={{
                  defaultValue: values.pricingBlock.text || "",
                  setDefaultStyle: "color: #535557;",
                }}
              />
            </div>
            <SubHeaderWithInput
              iserror={!!errors.pricingBlock?.buttonText}
              inputValue={values.pricingBlock?.buttonText}
              onChangeFunction={handleChange}
              header="Button Text"
              name="pricingBlock.buttonText"
              placeholder="Button Text"
              width="800px"
            />
          </StyledAiServicePage.ColumnWrapper>
        </StyledAiServicePage.FlexWrapper>
      </StyledAiServicePage.ColumnWrapper>
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

export default BlockPricing;
