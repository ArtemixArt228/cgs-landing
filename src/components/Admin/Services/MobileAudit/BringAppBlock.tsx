import { useFormikContext } from "formik";
import React from "react";

import AdminBlockDropDown from "../../Global/AdminBlockDropDown";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import * as Styled from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import { IImage } from "../../../../types/Admin/Admin.types";
import { IServiceMobileAudit } from "../../../../types/Admin/Response.types";

import ButtonArrow from "../../../../utils/ButtonArrow";

import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";

const BringAppBlock = () => {
  const { values, handleSubmit, handleChange } =
    useFormikContext<IServiceMobileAudit>();
  const handleClick = () => handleSubmit();
  const deleteImageFunction = useDeleteImageFunction(values.footerBlock);
  const uploadImageFunction = useUploadImageFunction(values.footerBlock);
  const uploadFunc = (image: IImage) => uploadImageFunction(image);
  const deleteFunc = async () => (await deleteImageFunction)();

  return (
    <AdminBlockDropDown title="FOOTER BLOCK">
      <Styled.HeaderGrid>
        <div>
          <Styled.AdminSubTitle>Banner</Styled.AdminSubTitle>
          <PhotoBlockDashed
            style={{ marginRight: 0, maxWidth: "235px", maxHeight: "249px" }}
            photo={values.footerBlock.image}
            deleteFlag={true}
            uploadFunction={uploadFunc}
            deleteFunction={deleteFunc}
          />
        </div>
        <Styled.MobileAuditHeaderInputsWrapper>
          <SubHeaderWithInput
            inputValue={values.footerBlock.title}
            onChangeFunction={handleChange}
            header="Title"
            width="376px"
            name="footerBlock.title"
            placeholder="Title"
            inputStyle={{ maxWidth: "376px" }}
          />
          <Styled.AdminInput
            value={values.footerBlock.text}
            onChange={handleChange}
            name="footerBlock.text"
            placeholder="Text"
            style={{ maxWidth: "376px" }}
          />
          <SubHeaderWithInput
            inputValue={values.footerBlock.button}
            onChangeFunction={handleChange}
            header="Button"
            name="footerBlock.button"
            placeholder="Button"
            inputStyle={{ maxWidth: "347px" }}
          />
        </Styled.MobileAuditHeaderInputsWrapper>
      </Styled.HeaderGrid>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "2.33em", marginBottom: "2.78em" }}
        onClick={handleClick}
      >
        Save Changes
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
    </AdminBlockDropDown>
  );
};

export default BringAppBlock;
