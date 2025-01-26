import React, { FC } from "react";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import { IImage } from "../../../types/Admin/Admin.types";
import { IQuestion } from "../../../types/Company.types";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";

interface IFaqPhoto {
  image: { url: string };
  question: IQuestion;
  deleteFlag: boolean;
}

const FaqPhoto: FC<IFaqPhoto> = ({ image, question, deleteFlag }) => {
  const deleteImage = useDeleteImageFunction(question, "");
  const uploadImage = useUploadImageFunction(question, "");

  return (
    <PhotoBlockDashed
      deleteFlag={deleteFlag}
      photo={image}
      deleteFunction={async () => (await deleteImage)()}
      uploadFunction={(image: IImage) => uploadImage(image)}
    />
  );
};

export default FaqPhoto;
