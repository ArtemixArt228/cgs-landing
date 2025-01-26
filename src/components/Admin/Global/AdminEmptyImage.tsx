import React from "react";
import Image from "next/image";

import AdminUploadModal from "../UploadModal";

import * as Styled from "../../../styles/AdminPage";

import montain from "../../../../public/mountain.svg";

import useUploadModal from "../../../hooks/useUploadModal";

interface IEmptyProps {
  func?: (image: any) => void;
  header?: string;
  className?: string;
  style?: any;
  isError?: boolean;
  acceptFormat?: string;
}

const AdminEmptyImage = ({
  func,
  header = "Click to drop new image here",
  className,
  style,
  isError,
  acceptFormat = "image/*",
}: IEmptyProps) => {
  const { modal, toggleModal } = useUploadModal();

  return (
    <Styled.AdminPhotoBlock
      className={className}
      style={style}
      iserror={isError}
    >
      {modal ? (
        <AdminUploadModal
          func={func}
          back={toggleModal}
          acceptFormat={acceptFormat}
        />
      ) : null}
      <Styled.AdminDashedPositionGrid>
        <Styled.AdminPointer onClick={toggleModal}>
          <Image src={montain} alt="empty mountain image" />

          <Styled.AdminUploadSubTitle onClick={toggleModal}>
            {header}
          </Styled.AdminUploadSubTitle>
        </Styled.AdminPointer>
      </Styled.AdminDashedPositionGrid>
    </Styled.AdminPhotoBlock>
  );
};

export default AdminEmptyImage;
