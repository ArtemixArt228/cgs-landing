import React from "react";
import { useFormikContext } from "formik";

import PhotoBlockDashed from "../../Global/PhotoBlockDashed";

import { AdminPaddedBlock, AdminHalfGrid } from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import { renderInputs } from "../../../../utils/renderInputs";
import ButtonArrow from "../../../../utils/ButtonArrow";

import { IUxUiInterface } from "../../../../types/Admin/Response.types";
import { IImage } from "../../../../types/Admin/Admin.types";

import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";

const AdminFooterBlockUxUi = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IUxUiInterface>();

  const deleteMainImage = useDeleteImageFunction(values.footerBlock);
  const uploadMainImage = useUploadImageFunction(values.footerBlock);

  const handleClick = () => handleSubmit();

  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        {renderInputs({
          props: { name: "footerBlock" },
          state: values.footerBlock,
          onChangeFunction: handleChange,
        })}
        <PhotoBlockDashed
          photo={values.footerBlock.image}
          deleteFlag={true}
          deleteFunction={async () => (await deleteMainImage)()}
          uploadFunction={(image: IImage) => uploadMainImage(image)}
          style={{ maxWidth: "364px", maxHeight: "364px" }}
        />
      </AdminHalfGrid>
      <div>
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
      </div>
    </AdminPaddedBlock>
  );
};

export default AdminFooterBlockUxUi;
