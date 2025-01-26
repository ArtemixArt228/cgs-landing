import React from "react";
import Image from "next/image";

import * as Styled from "./author-photo.styled";

import useUploadModal from "../../../../../hooks/useUploadModal";
import AdminUploadModal from "../../../../../components/Admin/UploadModal";

import mountain from "/public/mountain.svg";

interface IPlaceholderProps {
  func?: (image: FormData) => void;
  header?: string;
  style?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
}

export const AuthorPhotoPlaceholder = ({
  func,
  header = "add photo of the author",
  style,
  wrapperStyle,
}: IPlaceholderProps) => {
  const { modal, toggleModal } = useUploadModal();

  return (
    <Styled.AdminPhotoGrid className="author" style={wrapperStyle}>
      <Styled.AdminPhotoBlock style={style} className="author">
        {modal ? <AdminUploadModal func={func} back={toggleModal} /> : null}
        <Image
          src={mountain}
          alt="empty mountain image"
          width={41}
          height={33}
        />
      </Styled.AdminPhotoBlock>
      <Styled.AuthorPhotoTextWrapper>
        <Styled.AdminPointer>
          <Styled.AdminSubTitle className="author" onClick={toggleModal}>
            {header}
          </Styled.AdminSubTitle>
        </Styled.AdminPointer>
        <Styled.AdminComment>Supports: JPG, PNG, SVG</Styled.AdminComment>
      </Styled.AuthorPhotoTextWrapper>
    </Styled.AdminPhotoGrid>
  );
};
