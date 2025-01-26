import { useFormikContext } from "formik";
import React from "react";

import AdminBlockDropDown from "../../Global/AdminBlockDropDown";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import { AdminInput, AdminSubTitle } from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import {
  AdminInputsRowWrapper,
  AdminWebAuditFooterWrapper,
  AdminWebAuditInputsWrapper,
  AdminWebAuditPhotoWrapper,
} from "../../../../styles/WebAuditService/AdminWebAudit.styled";

import { IImage } from "../../../../types/Admin/Admin.types";
import { IServiceWebAudit } from "../../../../types/Admin/Response.types";

import ButtonArrow from "../../../../utils/ButtonArrow";

import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";

const BringYourAppBlock = () => {
  const { values, handleSubmit, handleChange } =
    useFormikContext<IServiceWebAudit>();
  const handleClick = () => handleSubmit();
  const deleteImageFunction = useDeleteImageFunction(values.footerBlock);
  const uploadImageFunction = useUploadImageFunction(values.footerBlock);
  const uploadFunc = (image: IImage) => uploadImageFunction(image);
  const deleteFunc = async () => (await deleteImageFunction)();

  return (
    <AdminBlockDropDown title="FOOTER BLOCK">
      <AdminWebAuditFooterWrapper>
        <AdminWebAuditPhotoWrapper>
          <AdminSubTitle>Banner</AdminSubTitle>
          <PhotoBlockDashed
            style={{ height: "249px" }}
            photo={values.footerBlock.image}
            uploadFunction={uploadFunc}
            deleteFunction={deleteFunc}
            deleteFlag={true}
            unchangeable
          />
        </AdminWebAuditPhotoWrapper>
        <AdminWebAuditInputsWrapper>
          <SubHeaderWithInput
            inputValue={values.footerBlock.title}
            onChangeFunction={handleChange}
            header="Title"
            name="footerBlock.title"
            placeholder="Title"
            inputStyle={{ maxWidth: "413px" }}
          />
          <AdminInput
            value={values.footerBlock.text}
            onChange={handleChange}
            name="footerBlock.text"
            placeholder="Text"
            style={{ maxWidth: "521px", height: "75px" }}
          />
          <AdminInputsRowWrapper>
            <SubHeaderWithInput
              inputValue={values.footerBlock.button}
              onChangeFunction={handleChange}
              header="Button"
              name="footerBlock.button"
              placeholder="Button"
            />
          </AdminInputsRowWrapper>
        </AdminWebAuditInputsWrapper>
      </AdminWebAuditFooterWrapper>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "25px", marginBottom: "2.78em" }}
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

export default BringYourAppBlock;
