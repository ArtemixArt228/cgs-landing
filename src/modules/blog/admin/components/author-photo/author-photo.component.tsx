import React from "react";

import AdminImage from "../../../../../components/Admin/Global/AdminImage";
import { AuthorPhotoPlaceholder } from "./author-photo-placeholder.component";

import * as Styled from "./author-photo.styled";

import useUploadModal from "../../../../../hooks/useUploadModal";
import AdminUploadModal from "../../../../../components/Admin/UploadModal";

import { IPhotoBlock } from "../../../../../types/Admin/Admin.types";

export const AuthorPhoto = ({
  photo,
  deleteFlag,
  header = "Drop new image here",
  deleteFunction,
  uploadFunction,
  style,
}: IPhotoBlock) => {
  const { modal, toggleModal } = useUploadModal();
  const deleteFunc = () => deleteFunction!();

  return photo !== null && photo !== undefined ? (
    <Styled.AuthorPhotoGrid className="author">
      <Styled.AdminPhotoBlock className="author" style={style}>
        {modal ? (
          <AdminUploadModal func={uploadFunction} back={toggleModal} />
        ) : null}
        <Styled.AdminPhotoGrid className="author" style={{ height: "70px" }}>
          <AdminImage image={photo} />
        </Styled.AdminPhotoGrid>
      </Styled.AdminPhotoBlock>
      <Styled.AdminDashedPositionGrid className="author">
        <Styled.AdminPointer>
          <Styled.AdminSubTitle onClick={toggleModal} size="1.165em">
            {header}
          </Styled.AdminSubTitle>
        </Styled.AdminPointer>
        {deleteFlag ? (
          <Styled.AdminDeleteText onClick={deleteFunc}>
            delete image
          </Styled.AdminDeleteText>
        ) : null}
      </Styled.AdminDashedPositionGrid>
    </Styled.AuthorPhotoGrid>
  ) : (
    <AuthorPhotoPlaceholder
      header="add photo of the author"
      func={uploadFunction}
      style={{ width: "77px", height: "77px" }}
      wrapperStyle={style}
    />
  );
};
