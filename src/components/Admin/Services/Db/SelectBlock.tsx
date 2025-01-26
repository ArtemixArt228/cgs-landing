import { useFormikContext } from "formik";
import React from "react";

import PhotoBlockDashed from "../../Global/PhotoBlockDashed";

import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import { AdminHalfGrid, AdminPaddedBlock } from "../../../../styles/AdminPage";

import { IImage } from "../../../../types/Admin/Admin.types";
import { IServiceDb } from "../../../../types/Admin/Response.types";

import ButtonArrow from "../../../../utils/ButtonArrow";
import { renderInputs } from "../../../../utils/renderInputs";

import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";

const SelectBlock = () => {
  const { values, handleChange, handleSubmit } = useFormikContext<IServiceDb>();
  const deleteMainImage = useDeleteImageFunction(values.selectBlock);
  const uploadMainImage = useUploadImageFunction(values.selectBlock);

  const handleClick = () => handleSubmit();

  return (
    <AdminPaddedBlock className="withoutMargin">
      <AdminHalfGrid>
        <div>
          {renderInputs({
            props: { name: "selectBlock" },
            state: values.selectBlock,
            onChangeFunction: handleChange,
          })}
        </div>
        <PhotoBlockDashed
          photo={values.selectBlock.image}
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

export default SelectBlock;
