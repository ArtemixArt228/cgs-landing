import React from "react";
import { useFormikContext } from "formik";

import PhotoBlockDashed from "../../Global/PhotoBlockDashed";

import { AdminHalfGrid, AdminPaddedBlock } from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import ButtonArrow from "../../../../utils/ButtonArrow";

import { IImage } from "../../../../types/Admin/Admin.types";
import { ICloudService } from "../../../../types/Admin/Response.types";
import { renderInputs } from "../../../../utils/renderInputs";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";

const AdminHeadBlockCloud = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<ICloudService>();

  const deleteMainImage = useDeleteImageFunction(values.headerBlock);
  const uploadMainImage = useUploadImageFunction(values.headerBlock);

  const handleClick = () => handleSubmit();

  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        {renderInputs({
          props: { name: "headerBlock" },
          state: values.headerBlock,
          onChangeFunction: handleChange,
        })}
        <PhotoBlockDashed
          photo={values.headerBlock.image}
          deleteFunction={async () => (await deleteMainImage)()}
          uploadFunction={(image: IImage) => uploadMainImage(image)}
          style={{ maxWidth: "364px", maxHeight: "364px" }}
          deleteFlag={true}
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

export default AdminHeadBlockCloud;
