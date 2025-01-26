import React from "react";
import { useFormikContext } from "formik";

import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";

import {
  AdminPaddedBlock,
  AdminHalfGrid,
  AdminContentBlock,
} from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import { IImage } from "../../../../types/Admin/Admin.types";
import { IUxUiInterface } from "../../../../types/Admin/Response.types";

import ButtonArrow from "../../../../utils/ButtonArrow";

import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";

const EssentialBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IUxUiInterface>();

  const deleteMainImage = useDeleteImageFunction(values.essentialBlock);
  const uploadMainImage = useUploadImageFunction(values.essentialBlock);

  const handleClick = () => handleSubmit();

  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        <PhotoBlockDashed
          photo={values.essentialBlock.image}
          deleteFlag={true}
          deleteFunction={async () => (await deleteMainImage)()}
          uploadFunction={(image: IImage) => uploadMainImage(image)}
          style={{ maxWidth: "364px", maxHeight: "364px" }}
          unchangeable
        />
        <AdminContentBlock>
          <AdminHalfGrid>
            <SubHeaderWithInput
              header="Title"
              inputValue={values.essentialBlock.title}
              onChangeFunction={handleChange}
              name="essentialBlock.title"
            />
          </AdminHalfGrid>
          <SubHeaderWithInput
            header="Text"
            inputValue={values.essentialBlock.text}
            onChangeFunction={handleChange}
            name="essentialBlock.text"
          />
        </AdminContentBlock>
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

export default EssentialBlock;
