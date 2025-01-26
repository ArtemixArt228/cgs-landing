import React from "react";

import { IPhotoBlock } from "../../../types/Admin/Admin.types";
import AdminUploadModal from "../UploadModal";
import AdminEmptyImage from "./AdminEmptyImage";

import * as Styled from "../../../styles/AdminPage";
import useUploadModal from "../../../hooks/useUploadModal";

const VideoBlockDashed = ({
  photo,
  deleteFlag,
  header = "Drop new video here.",
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
          <p>File loaded.</p>
          <p>
            <a
              style={{ color: "blue" }}
              href={photo.url}
              target="blank"
              rel="noreferrer noopener"
            >
              Link to video on aws.
            </a>
          </p>
        </Styled.AdminImageWrapper>
      </Styled.AdminPhotoGrid>
      <Styled.AdminDashedPositionGrid>
        {deleteFlag ? (
          <Styled.AdminDeleteText onClick={deleteFunc}>
            one click delete video
          </Styled.AdminDeleteText>
        ) : null}
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

export default VideoBlockDashed;
