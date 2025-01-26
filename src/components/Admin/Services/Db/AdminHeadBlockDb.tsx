import { useFormikContext } from "formik";
import React from "react";

import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import {
  AdminHeaderGrid,
  AdminPaddedBlock,
} from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import { IImage } from "../../../../types/Admin/Admin.types";
import { IServiceDb } from "../../../../types/Admin/Response.types";

import ButtonArrow from "../../../../utils/ButtonArrow";
import { renderInputs } from "../../../../utils/renderInputs";

import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";

const AdminHeadBlockDb = () => {
  const { values, handleChange, handleSubmit } = useFormikContext<IServiceDb>();

  const deleteMainImage = useDeleteImageFunction(values.headerBlock);
  const uploadMainImage = useUploadImageFunction(values.headerBlock);

  const { text, button } = values.headerBlock;

  const headerBlock = { text, button };
  const handleClick = () => handleSubmit();

  return (
    <AdminPaddedBlock>
      <AdminHeaderGrid>
        <div>
          <SubHeaderWithInput
            header="Title"
            onChangeFunction={handleChange}
            name="headerBlock.title"
            inputValue={values.headerBlock.title}
            width="257px"
          />
          {renderInputs({
            props: { name: "headerBlock" },
            state: headerBlock,
            onChangeFunction: handleChange,
          })}
        </div>
        <PhotoBlockDashed
          photo={values.headerBlock.image}
          deleteFunction={async () => (await deleteMainImage)()}
          uploadFunction={(image: IImage) => uploadMainImage(image)}
          style={{ maxWidth: "364px", maxHeight: "364px" }}
          deleteFlag={true}
          className="fullWidth"
        />
      </AdminHeaderGrid>
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

export default AdminHeadBlockDb;
