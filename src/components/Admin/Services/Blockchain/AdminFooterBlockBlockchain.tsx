import React from "react";
import { useFormikContext } from "formik";

import PhotoBlockDashed from "../../Global/PhotoBlockDashed";

import { AdminHalfGrid } from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import { IBlockchainService } from "../../../../types/Admin/Response.types";
import { IImage } from "../../../../types/Admin/Admin.types";

import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";

import ButtonArrow from "../../../../utils/ButtonArrow";
import { renderInputs } from "../../../../utils/renderInputs";

const AdminFooterBlockBlockchain = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IBlockchainService>();
  const deleteMainImage = useDeleteImageFunction(values.footerBlock);
  const uploadMainImage = useUploadImageFunction(values.footerBlock);
  const { image, ...blocks } = values.footerBlock;

  const handleClick = () => handleSubmit();

  return (
    <AdminHalfGrid>
      {renderInputs({
        props: { name: "footerBlock" },
        state: blocks,
        onChangeFunction: handleChange,
      })}
      <PhotoBlockDashed
        photo={image}
        deleteFunction={async () => (await deleteMainImage)()}
        uploadFunction={(image: IImage) => uploadMainImage(image)}
        style={{ maxWidth: "364px", maxHeight: "364px" }}
        deleteFlag={true}
      />
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "1.33em" }}
        onClick={handleClick}
      >
        Save Changes
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
    </AdminHalfGrid>
  );
};

export default AdminFooterBlockBlockchain;
