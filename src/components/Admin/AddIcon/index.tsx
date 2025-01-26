import React from "react";
import Image from "next/image";
import montain from "public/mountain.svg";

import AdminUploadModal from "../UploadModal";

import * as Styled from "../../../styles/AdminPage";

import useUploadModal from "../../../hooks/useUploadModal";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunctionRefactored";
import useUploadImageFunction from "../../../hooks/useUploadImageFunctionRefactored";

import { IImage } from "../../../types/Admin/Admin.types";
import AdminImage from "../Global/AdminImage";
interface IProps {
  imageValue: IImage;
  nestedImageName: string;
  iconTitle?: string;
  className?: string;
  isError?: boolean;
}
const AddIcon = ({
  imageValue,
  nestedImageName,
  iconTitle,
  className = "author",
  isError = false,
}: IProps) => {
  const deleteImageFunction = useDeleteImageFunction(
    undefined,
    undefined,
    false
  );
  const uploadImageFunction = useUploadImageFunction(undefined, false);
  const handleDeleteImage = async () =>
    (await deleteImageFunction)(imageValue, nestedImageName);

  const handleUploadImage = (image: IImage) =>
    uploadImageFunction(image, nestedImageName);

  const { modal, toggleModal } = useUploadModal();

  return (
    <Styled.AuthorPhotoGrid className={className}>
      {modal ? (
        <AdminUploadModal back={toggleModal} func={handleUploadImage} />
      ) : null}

      {imageValue.image?.url ? (
        <Styled.AdminPhotoBlock className={className} iserror={isError}>
          <Styled.AdminPhotoGrid className={className}>
            <AdminImage image={imageValue.image} />
          </Styled.AdminPhotoGrid>
        </Styled.AdminPhotoBlock>
      ) : (
        <Styled.AdminPointer onClick={toggleModal}>
          <Styled.AdminPhotoBlock className={className} iserror={isError}>
            <Styled.AdminDashedPositionGrid className={className}>
              <Image
                width={41}
                height={33}
                src={montain}
                alt="Empty mountain image"
              />
            </Styled.AdminDashedPositionGrid>
          </Styled.AdminPhotoBlock>
        </Styled.AdminPointer>
      )}
      {imageValue.image?.url ? (
        <Styled.AdminDashedPositionGrid className={className}>
          <Styled.AdminSubTitle size="1.165em">
            {iconTitle}
          </Styled.AdminSubTitle>
          <Styled.AdminDeleteText onClick={handleDeleteImage}>
            delete image
          </Styled.AdminDeleteText>
        </Styled.AdminDashedPositionGrid>
      ) : (
        <Styled.AuthorPhotoTextWrapper className={className}>
          <Styled.AdminSubTitle className={className}>
            Add icon
          </Styled.AdminSubTitle>
        </Styled.AuthorPhotoTextWrapper>
      )}
      <Styled.BlackPlusButton onClick={toggleModal} className={className}>
        +
      </Styled.BlackPlusButton>
    </Styled.AuthorPhotoGrid>
  );
};

export default AddIcon;
