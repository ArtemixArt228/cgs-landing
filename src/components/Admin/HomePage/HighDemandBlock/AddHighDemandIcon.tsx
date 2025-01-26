import React from "react";
import Image from "next/image";
import { useFormikContext } from "formik";

import AdminUploadModal from "../../UploadModal";
import AdminImage from "../../Global/AdminImage";

import * as Styled from "../../../../styles/AdminPage";

import useUploadModal from "../../../../hooks/useUploadModal";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";

import { IImage } from "../../../../types/Admin/Admin.types";
import { IHomePageResponse } from "../../../../types/Admin/AdminHomePage.types";

import mountain from "../../../../../public/mountain.svg";

const AddProjectTechIcon = () => {
  const { values } = useFormikContext<IHomePageResponse>();

  const deleteImageFunction = useDeleteImageFunction(
    values.HighDemandBlock,
    "",
    false,
    "HighDemandBlock.image"
  );
  const uploadImageFunction = useUploadImageFunction(
    values.HighDemandBlock,
    "",
    false,
    "HighDemandBlock.image"
  );

  const deleteFunc = async () => (await deleteImageFunction)();
  const uploadFunc = (image: IImage) => uploadImageFunction(image);

  const { modal, toggleModal } = useUploadModal();

  return values.HighDemandBlock !== undefined &&
    values.HighDemandBlock.image !== null &&
    values.HighDemandBlock.image !== undefined &&
    values.HighDemandBlock.image.url !== "" ? (
    <Styled.AuthorPhotoGrid className="author">
      <Styled.AdminPhotoBlock className="author">
        {modal ? (
          <AdminUploadModal func={uploadFunc} back={toggleModal} />
        ) : null}
        <Styled.AdminPhotoGrid className="author" style={{ height: "70px" }}>
          <AdminImage image={values.HighDemandBlock.image} />
        </Styled.AdminPhotoGrid>
      </Styled.AdminPhotoBlock>
      <Styled.AdminDashedPositionGrid className="author">
        <Styled.AdminPointer>
          <Styled.AdminSubTitle onClick={toggleModal} size="1.165em">
            Image of Service
          </Styled.AdminSubTitle>
        </Styled.AdminPointer>
        <Styled.AdminDeleteText onClick={deleteFunc}>
          delete image
        </Styled.AdminDeleteText>
      </Styled.AdminDashedPositionGrid>
    </Styled.AuthorPhotoGrid>
  ) : (
    <Styled.AdminPointer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Styled.AdminPhotoBlock className={"author"}>
          {modal ? (
            <AdminUploadModal func={uploadFunc} back={toggleModal} />
          ) : null}
          <Styled.AdminDashedPositionGrid>
            <Image
              width={41}
              height={33}
              src={mountain}
              alt="empty mountain image"
            />
          </Styled.AdminDashedPositionGrid>
        </Styled.AdminPhotoBlock>
        <Styled.AuthorPhotoTextWrapper>
          <Styled.AdminPointer>
            <Styled.AdminSubTitle className="author" onClick={toggleModal}>
              Add icon
            </Styled.AdminSubTitle>
          </Styled.AdminPointer>
        </Styled.AuthorPhotoTextWrapper>
      </div>
    </Styled.AdminPointer>
  );
};

export default AddProjectTechIcon;
