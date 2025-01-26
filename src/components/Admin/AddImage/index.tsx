import React from "react";

import * as Styled from "../../../styles/AdminPage";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunctionRefactored";
import useUploadImageFunction from "../../../hooks/useUploadImageFunctionRefactored";

import { IImage } from "../../../types/Admin/Admin.types";
import PhotoBlockDashedHorizontal from "../Global/PhotoBlockdashedHorizontal";
interface IProps {
  imageValue: IImage;
  nestedImageName: string;
  title?: string;
  className?: string;
  isError?: boolean;
}
const AddImage = ({ imageValue, nestedImageName, title, isError }: IProps) => {
  const deleteImageFunction = useDeleteImageFunction(
    undefined,
    undefined,
    false
  );
  const uploadImageFunction = useUploadImageFunction(undefined, false);

  const handleDeleteImage = async () =>
    (await deleteImageFunction)(imageValue, `${nestedImageName}`);

  const handleUploadImage = (image: unknown) =>
    uploadImageFunction(image, `${nestedImageName}`);
  return (
    <Styled.AdminPortfolioImageContainer>
      {title && (
        <Styled.AdminPortfolioImageText>
          <h2>{title}</h2>
        </Styled.AdminPortfolioImageText>
      )}
      <PhotoBlockDashedHorizontal
        isError={isError}
        emptyHeader="Click to drop new image here"
        photo={imageValue.image}
        deleteFunction={handleDeleteImage}
        uploadFunction={handleUploadImage}
      />
    </Styled.AdminPortfolioImageContainer>
  );
};

export default AddImage;
