import React from "react";
import useUploadModal from "../../../hooks/useUploadModal";
import * as Styled from "../../../styles/AdminPage";
import { IPhotoBlock } from "../../../types/Admin/Admin.types";
import AdminUploadModal from "../UploadModal";
import AdminEmptyImage from "./AdminEmptyImage";
import AdminImage from "./AdminImage";

const PhotoBlockDashed = ({
  photo,
  deleteFlag,
  header = "Drop new image here",
  deleteFunction,
  uploadFunction,
  className,
  imageStyle,
  style,
}: IPhotoBlock) => {
  const { modal, toggleModal } = useUploadModal();
  const deleteFunc = () => deleteFunction!();

  return photo !== null && photo !== undefined ? (
    <Styled.AdminPhotoBlock className={className} style={style}>
      {modal ? (
        <AdminUploadModal func={uploadFunction} back={toggleModal} />
      ) : null}
      <Styled.AdminPhotoGrid className="fullWidth">
        <Styled.AdminImageWrapper style={imageStyle}>
          <AdminImage image={photo} />
        </Styled.AdminImageWrapper>
      </Styled.AdminPhotoGrid>
      <Styled.AdminDashedPositionGrid>
        {deleteFlag ? (
          <Styled.AdminDeleteText onClick={deleteFunc} type="button">
            delete image
          </Styled.AdminDeleteText>
        ) : (
          <Styled.AdminPointer>
            <Styled.AdminSubTitle
              style={{
                fontSize: "1em",
              }}
              onClick={toggleModal}
              size="1.165em"
            >
              {header}
            </Styled.AdminSubTitle>
          </Styled.AdminPointer>
        )}
      </Styled.AdminDashedPositionGrid>
    </Styled.AdminPhotoBlock>
  ) : (
    <AdminEmptyImage
      className={className}
      func={uploadFunction}
      style={style}
      header={header}
    />
  );
};

export default PhotoBlockDashed;
