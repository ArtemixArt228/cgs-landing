import React from "react";
import Image from "next/image";

import AdminImage from "../../Global/AdminImage";
import AdminUploadModal from "../../UploadModal";

import * as Styled from "../../../../styles/AdminPage";

import useUploadModal from "../../../../hooks/useUploadModal";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunctionRefactored";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunctionRefactored";

import { IImage } from "../../../../types/Admin/Admin.types";

import montain from "../../../../../public/mountain.svg";

interface IAddReasonBlockIconProps {
  reason: { title: string; image: { url: string } };
  index: number;
}

const AddReasonBlockIcon = ({ reason, index }: IAddReasonBlockIconProps) => {
  const { modal, toggleModal } = useUploadModal();

  const deleteImageFunction = useDeleteImageFunction(
    undefined,
    undefined,
    false
  );
  const uploadImageFunction = useUploadImageFunction(undefined, false);

  const deleteFunc =
    (imageValue: IImage, nestedImageName: string) => async () =>
      (await deleteImageFunction)(imageValue, nestedImageName);
  const uploadFunc = (nestedName: string) => (image: unknown) =>
    uploadImageFunction(image, nestedName);

  return reason !== undefined &&
    reason.image !== null &&
    reason.image !== undefined &&
    reason.image.url !== "" ? (
    <Styled.AuthorPhotoGrid className="author">
      <Styled.AdminPhotoBlock className="author">
        {modal ? (
          <AdminUploadModal
            func={uploadFunc(`WhyDoesItHappenBlock.reasons[${index}].image`)}
            back={toggleModal}
          />
        ) : null}
        <Styled.AdminPhotoGrid className="author" style={{ height: "70px" }}>
          <AdminImage image={reason.image} />
        </Styled.AdminPhotoGrid>
      </Styled.AdminPhotoBlock>
      <Styled.AdminDashedPositionGrid className="author">
        <Styled.AdminPointer>
          <Styled.AdminSubTitle onClick={toggleModal} size="1.165em">
            Image of Service
          </Styled.AdminSubTitle>
        </Styled.AdminPointer>
        <Styled.AdminDeleteText
          onClick={deleteFunc(
            reason,
            `WhyDoesItHappenBlock.reasons[${index}].image`
          )}
        >
          delete image
        </Styled.AdminDeleteText>
      </Styled.AdminDashedPositionGrid>
    </Styled.AuthorPhotoGrid>
  ) : (
    <Styled.AdminPointer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Styled.AdminPhotoBlock className={"author"}>
          {modal ? (
            <AdminUploadModal
              func={uploadFunc(`WhyDoesItHappenBlock.reasons[${index}].image`)}
              back={toggleModal}
            />
          ) : null}
          <Styled.AdminDashedPositionGrid>
            <Image
              width={41}
              height={33}
              src={montain}
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

export default AddReasonBlockIcon;
