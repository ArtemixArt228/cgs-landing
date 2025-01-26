import React from "react";

import AdminUploadModal from "../UploadModal";
import AdminEmptyImage from "./AdminEmptyImage";
import AdminImage from "./AdminImage";
import PhotoBlockStub from "./PhotoBlockStub";

import * as Styled from "../../../styles/AdminPage";

import useUploadModal from "../../../hooks/useUploadModal";

import { IPhotoBlock } from "../../../types/Admin/Admin.types";

const PhotoBlockDashed = ({
  isError = false,
  photo,
  deleteFlag,
  header = "Click to drop new image here",
  deleteText = "delete image",
  deleteFunction,
  uploadFunction,
  className,
  imageStyle,
  style,
  unchangeable,
  acceptFormat = "image/*",
}: IPhotoBlock) => {
  const { modal, toggleModal } = useUploadModal();
  const deleteFunc = () => deleteFunction!();

  return unchangeable ? (
    <PhotoBlockStub />
  ) : photo !== null && photo !== undefined ? (
    <Styled.AdminPhotoBlock className={className} style={style}>
      {modal ? (
        <AdminUploadModal
          func={uploadFunction}
          back={toggleModal}
          acceptFormat={acceptFormat}
        />
      ) : null}
      <Styled.AdminPhotoGrid className="fullWidth">
        <Styled.AdminImageWrapper style={imageStyle}>
          <AdminImage image={photo} />
        </Styled.AdminImageWrapper>
      </Styled.AdminPhotoGrid>
      <Styled.AdminDashedPositionGrid>
        <Styled.AdminPointer>
          <Styled.AdminSubTitle onClick={toggleModal} size="1.165em">
            {header}
          </Styled.AdminSubTitle>
        </Styled.AdminPointer>
        {deleteFlag ? (
          <Styled.AdminDeleteText onClick={deleteFunc}>
            {deleteText}
          </Styled.AdminDeleteText>
        ) : null}
      </Styled.AdminDashedPositionGrid>
    </Styled.AdminPhotoBlock>
  ) : (
    <AdminEmptyImage
      isError={isError}
      className={className}
      func={uploadFunction}
      acceptFormat={acceptFormat}
      style={style}
      header={header}
    />
  );
};

export default PhotoBlockDashed;
