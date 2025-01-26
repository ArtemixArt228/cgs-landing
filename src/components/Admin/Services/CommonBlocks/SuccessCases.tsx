import { useFormikContext } from "formik";
import React from "react";

import { AdminPaddedBlock } from "../../../../styles/AdminPage";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import ButtonArrow from "../../../../utils/ButtonArrow";
import { IServiceAi } from "../../../../types/Admin/AdminServices.types";

import * as StyledAiServicePage from "../../../../styles/AiService/AdminPage";

import * as Styled from "../../../../styles/AdminPage";
import PhotoBlockDashedHorizontal from "../../Global/PhotoBlockdashedHorizontal";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunctionRefactored";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunctionRefactored";
import { IImage } from "../../../../types/Admin/Admin.types";

const BlockSuccessCases = () => {
  const { values, handleChange, handleSubmit } = useFormikContext<IServiceAi>();

  const handleClick = () => handleSubmit();
  const deleteImageFunction = useDeleteImageFunction(
    undefined,
    undefined,
    false
  );
  const uploadImageFunction = useUploadImageFunction(undefined, false);
  const deleteFunc = (state: IImage, nestedName: string) => async () =>
    (await deleteImageFunction)(state, nestedName);

  const uploadFunc = (nestedName: string) => (image: unknown) =>
    uploadImageFunction(image, nestedName);
  return (
    <AdminPaddedBlock className="services">
      <SubHeaderWithInput
        inputValue={values.successCasesBlock?.title}
        onChangeFunction={handleChange}
        header="Title"
        name="successCasesBlock.title"
        placeholder="Title"
        width="633px"
      />
      <StyledAiServicePage.ColumnWrapper>
        {values.successCasesBlock?.successCases.map((initialItem, index) => (
          <StyledAiServicePage.ColumnWrapper
            key={initialItem._id ?? index}
            className="success-cases"
          >
            <StyledAiServicePage.FlexWrapper>
              <SubHeaderWithInput
                inputValue={
                  values.successCasesBlock?.successCases[index].amount
                }
                onChangeFunction={handleChange}
                header={`#${index + 1} Amount`}
                name={`successCasesBlock.successCases[${index}].amount`}
                placeholder="Amount"
                width="360px"
              />
              <SubHeaderWithInput
                inputValue={
                  values.successCasesBlock?.successCases[index]
                    .amountDescription
                }
                onChangeFunction={handleChange}
                header={`Amount Description`}
                name={`successCasesBlock.successCases[${index}].amountDescription`}
                placeholder="Amount Description"
                width="360px"
              />
              <SubHeaderWithInput
                inputValue={
                  values.successCasesBlock?.successCases[index].additionalText
                }
                onChangeFunction={handleChange}
                header={`Additional text`}
                name={`successCasesBlock.successCases[${index}].additionalText`}
                placeholder="Additional text"
                width="360px"
              />
            </StyledAiServicePage.FlexWrapper>
            <StyledAiServicePage.FeatureimagesWrapper>
              <Styled.AdminPortfolioImageContainer>
                <Styled.AdminPortfolioImageText>
                  <h2>Logo</h2>
                </Styled.AdminPortfolioImageText>
                <PhotoBlockDashedHorizontal
                  emptyHeader="Click to drop new image here"
                  photo={
                    values.successCasesBlock?.successCases[index].logo.image
                      ?.url
                      ? values.successCasesBlock?.successCases[index].logo.image
                      : null
                  }
                  deleteFunction={deleteFunc(
                    values.successCasesBlock?.successCases[index].logo,
                    `successCasesBlock.successCases[${index}].logo.image`
                  )}
                  uploadFunction={uploadFunc(
                    `successCasesBlock.successCases[${index}].logo.image`
                  )}
                />
              </Styled.AdminPortfolioImageContainer>
              <Styled.AdminPortfolioImageContainer>
                <Styled.AdminPortfolioImageText>
                  <h2>Picture</h2>
                </Styled.AdminPortfolioImageText>
                <PhotoBlockDashedHorizontal
                  emptyHeader="Click to drop new image here"
                  photo={
                    values.successCasesBlock?.successCases[index].image?.url
                      ? values.successCasesBlock?.successCases[index].image
                      : null
                  }
                  deleteFunction={deleteFunc(
                    values.successCasesBlock?.successCases[index],
                    `successCasesBlock.successCases[${index}].image`
                  )}
                  uploadFunction={uploadFunc(
                    `successCasesBlock.successCases[${index}].image`
                  )}
                />
              </Styled.AdminPortfolioImageContainer>

              <SubHeaderWithInput
                inputValue={values.successCasesBlock?.successCases[index].link}
                onChangeFunction={handleChange}
                header={`Link`}
                name={`successCasesBlock.successCases[${index}].link`}
                placeholder="Link"
                width="360px"
              />
            </StyledAiServicePage.FeatureimagesWrapper>
          </StyledAiServicePage.ColumnWrapper>
        ))}
        <StyledAiServicePage.ColumnWrapper className="success-cases">
          <StyledAiServicePage.FlexWrapper>
            <SubHeaderWithInput
              inputValue={values.successCasesBlock?.footer?.amount}
              onChangeFunction={handleChange}
              header={`#${
                values.successCasesBlock?.successCases.length + 1
              } Amount`}
              name={`successCasesBlock.footer.amount`}
              placeholder="Amount"
              width="360px"
            />
            <SubHeaderWithInput
              inputValue={values.successCasesBlock?.footer?.amountDescription}
              onChangeFunction={handleChange}
              header={`Amount Description`}
              name={`successCasesBlock.footer.amountDescription`}
              placeholder="Amount Description"
              width="360px"
            />
            <SubHeaderWithInput
              inputValue={values.successCasesBlock?.footer?.additionalText}
              onChangeFunction={handleChange}
              header={`Additional text`}
              name={`successCasesBlock.footer.additionalText`}
              placeholder="Additional text"
              width="360px"
            />
          </StyledAiServicePage.FlexWrapper>
        </StyledAiServicePage.ColumnWrapper>
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

export default BlockSuccessCases;
