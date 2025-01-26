import { useFormikContext } from "formik";
import React from "react";
import { AdminPaddedBlock } from "../../../../styles/AdminPage";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import ButtonArrow from "../../../../utils/ButtonArrow";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunctionRefactored";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunctionRefactored";
import * as Styled from "../../../../styles/AdminPage";
import PhotoBlockDashedHorizontal from "../../Global/PhotoBlockdashedHorizontal";
import { IServiceAi } from "../../../../types/Admin/AdminServices.types";
import * as StyledAiServicePage from "../../../../styles/AiService/AdminPage";

type ImageType = "imageWeb" | "imageTablet" | "imageMobile" | "imageModal";
const BlockFeatures = () => {
  const imageArray: { title: string; value: ImageType }[] = [
    { title: "Picture web", value: "imageWeb" },
    { title: "Picture tablet", value: "imageTablet" },
    { title: "Picture mobile", value: "imageMobile" },
    { title: "Picture modal", value: "imageModal" },
  ];
  const { values, handleChange, handleSubmit } = useFormikContext<IServiceAi>();

  const deleteImageFunction = useDeleteImageFunction(
    undefined,
    undefined,
    false
  );
  const uploadImageFunction = useUploadImageFunction(undefined, false);
  const deleteFunc = (i: number, imageType: ImageType) => async () =>
    (await deleteImageFunction)(
      values.featuresBlock?.features[i][imageType],
      `featuresBlock.features[${i}].${imageType}.image`
    );

  const uploadFunc = (i: number, imageType: ImageType) => (image: unknown) =>
    uploadImageFunction(
      image,
      `featuresBlock.features[${i}].${imageType}.image`
    );

  const handleClick = () => handleSubmit();
  return (
    <AdminPaddedBlock className="services">
      {values.featuresBlock?.features.map((initialItem, index) => (
        <StyledAiServicePage.FeatureWrapper key={index}>
          <SubHeaderWithInput
            header={`#${index + 1} Title`}
            onChangeFunction={handleChange}
            name={`featuresBlock.features[${index}].title`}
            inputValue={values.featuresBlock.features[index].title}
          />
          <SubHeaderWithInput
            header="Subtitle"
            onChangeFunction={handleChange}
            name={`featuresBlock.features[${index}].subtitle`}
            inputValue={values.featuresBlock.features[index].subtitle}
          />
          <StyledAiServicePage.FeatureimagesWrapper>
            {imageArray.map((image) => (
              <Styled.AdminPortfolioImageContainer key={image.value}>
                <Styled.AdminPortfolioImageText>
                  <h2>{image.title}</h2>
                </Styled.AdminPortfolioImageText>
                <PhotoBlockDashedHorizontal
                  emptyHeader="Click to drop new image here"
                  photo={
                    values.featuresBlock?.features[index][image.value]?.image
                      ?.url
                      ? values.featuresBlock.features[index][image.value]?.image
                      : null
                  }
                  deleteFunction={deleteFunc(index, image.value)}
                  uploadFunction={uploadFunc(index, image.value)}
                />
              </Styled.AdminPortfolioImageContainer>
            ))}
          </StyledAiServicePage.FeatureimagesWrapper>
          <SubHeaderWithInput
            header="Text fot modal"
            onChangeFunction={handleChange}
            name={`featuresBlock.features[${index}].descriptionModal`}
            inputValue={values.featuresBlock.features[index].descriptionModal!}
            minRows={10}
          />
        </StyledAiServicePage.FeatureWrapper>
      ))}

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

export default BlockFeatures;
