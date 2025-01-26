import { useFormikContext } from "formik";
import React from "react";

import { AdminHalfGrid, AdminPaddedBlock } from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import { IImage } from "../../../../types/Admin/Admin.types";
import { IServiceSupport } from "../../../../types/Admin/Response.types";

import { renderInputs } from "../../../../utils/renderInputs";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";

import ButtonArrow from "../../../../utils/ButtonArrow";

import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";

const AdminFooterBlockSupport = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IServiceSupport>();
  const deleteMainImage = useDeleteImageFunction(values.footerBlock);
  const uploadMainImage = useUploadImageFunction(values.footerBlock);

  const handleClick = () => handleSubmit();

  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        <div>
          {renderInputs({
            props: { name: "footerBlock" },
            state: values.footerBlock,
            onChangeFunction: handleChange,
          })}
        </div>
        <PhotoBlockDashed
          photo={values.footerBlock.image}
          deleteFunction={async () => (await deleteMainImage)()}
          uploadFunction={(image: IImage) => uploadMainImage(image)}
          style={{ maxWidth: "364px", maxHeight: "364px" }}
          deleteFlag={true}
        />
      </AdminHalfGrid>
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
    </AdminPaddedBlock>
  );
};

export default AdminFooterBlockSupport;
