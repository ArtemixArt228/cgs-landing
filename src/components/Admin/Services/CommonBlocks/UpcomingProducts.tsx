import { useFormikContext } from "formik";
import React from "react";

import { AdminHalfGrid, AdminPaddedBlock } from "../../../../styles/AdminPage";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import * as StyledAiServicePage from "../../../../styles/AiService/AdminPage";
import * as Styled from "../../../../styles/AdminPage";

import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import ButtonArrow from "../../../../utils/ButtonArrow";
import { IServiceAi } from "../../../../types/Admin/AdminServices.types";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunctionRefactored";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunctionRefactored";
import { IImage } from "../../../../types/Admin/Admin.types";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import { AIServiceUpcomingProductItemInit } from "../../../../consts/services";

const BlockUpcomingProducts = () => {
  const { values, handleChange, handleSubmit, setFieldValue } =
    useFormikContext<IServiceAi>();
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
  const handleClick = () => handleSubmit();

  const handleAddItem = (): void => {
    setFieldValue("upcomingProducts.products", [
      ...values.upcomingProducts?.products,
      { ...AIServiceUpcomingProductItemInit },
    ]);
  };
  const handleDeleteItem = (deleteIndex: number): void => {
    const filtered = values.upcomingProducts?.products.filter(
      (_, index) => index !== deleteIndex
    );
    setFieldValue("upcomingProducts.products", [...filtered]);
  };
  return (
    <AdminPaddedBlock className="services">
      <SubHeaderWithInput
        header={"Title"}
        inputValue={values.upcomingProducts?.title}
        onChangeFunction={handleChange}
        name={`upcomingProducts.title`}
        placeholder="Enter the block title"
      />
      <StyledAiServicePage.ColumnWrapper>
        {values.upcomingProducts?.products.map((_, ind) => (
          <StyledAiServicePage.ColumnWrapper
            className="success-cases"
            key={ind}
          >
            <AdminHalfGrid>
              <div>
                <SubHeaderWithInput
                  header={`#${ind + 1} Text`}
                  inputValue={values.upcomingProducts?.products[ind].text}
                  onChangeFunction={handleChange}
                  name={`upcomingProducts.products[${ind}].text`}
                  placeholder="Text"
                />
                <SubHeaderWithInput
                  header="Video link"
                  inputValue={values.upcomingProducts?.products[ind].videoLink}
                  onChangeFunction={handleChange}
                  name={`upcomingProducts.products[${ind}].videoLink`}
                  placeholder="Video link"
                />
              </div>
              <div>
                <Styled.AdminPortfolioImageContainer>
                  <Styled.AdminPortfolioImageText>
                    <h2>Video preview</h2>
                  </Styled.AdminPortfolioImageText>
                  <PhotoBlockDashed
                    photo={values.upcomingProducts?.products[ind].image}
                    deleteFunction={deleteFunc(
                      values.upcomingProducts.products[ind],
                      `upcomingProducts.products[${ind}].image`
                    )}
                    uploadFunction={uploadFunc(
                      `upcomingProducts.products[${ind}].image`
                    )}
                    style={{ maxWidth: "364px", maxHeight: "364px" }}
                    deleteFlag={true}
                  />
                </Styled.AdminPortfolioImageContainer>
                {values.upcomingProducts?.products.length > 1 && (
                  <StyledAiServicePage.DeleteBtn
                    onClick={() => handleDeleteItem(ind)}
                  >
                    delete
                  </StyledAiServicePage.DeleteBtn>
                )}
              </div>
            </AdminHalfGrid>
          </StyledAiServicePage.ColumnWrapper>
        ))}

        <StyledAiServicePage.AddBtn onClick={handleAddItem}>
          + Add new
        </StyledAiServicePage.AddBtn>
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

export default BlockUpcomingProducts;
