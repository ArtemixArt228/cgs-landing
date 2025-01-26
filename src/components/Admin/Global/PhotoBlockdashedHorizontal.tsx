import React from "react";
import useUploadModal from "../../../hooks/useUploadModal";
import * as Styled from "../../../styles/AdminPage";
import { IPhotoBlock } from "../../../types/Admin/Admin.types";
import AdminUploadModal from "../UploadModal";
import AdminEmptyImage from "./AdminEmptyImage";
import AdminImage from "./AdminImage";

const PhotoBlockDashedHorizontal = ({
  isError = false,
  photo,
  header = "Click to drop new image here",
  emptyHeader,
  deleteFunction,
  uploadFunction,
  className,
}: IPhotoBlock) => {
  const { modal, toggleModal } = useUploadModal();
  const deleteFunc = () => deleteFunction!();

  return photo !== null && photo !== undefined ? (
    <Styled.AdminPhotoBlock className={className} iserror={isError}>
      {modal ? (
        <AdminUploadModal back={toggleModal} func={uploadFunction} />
      ) : null}
      <Styled.AdminDashedPositionGrid className={className}>
        <Styled.AdminImageWrapper>
          <AdminImage image={photo} />
        </Styled.AdminImageWrapper>
        <span></span>
        <Styled.AdminPointer>
          <Styled.AdminUploadSubTitle onClick={toggleModal}>
            {header}
          </Styled.AdminUploadSubTitle>
          <Styled.AdminDeleteText onClick={deleteFunc}>
            delete image
          </Styled.AdminDeleteText>
        </Styled.AdminPointer>
      </Styled.AdminDashedPositionGrid>
    </Styled.AdminPhotoBlock>
  ) : (
    <AdminEmptyImage
      isError={isError}
      func={uploadFunction}
      header={emptyHeader}
      className={className}
    />
  );
};

export default PhotoBlockDashedHorizontal;
