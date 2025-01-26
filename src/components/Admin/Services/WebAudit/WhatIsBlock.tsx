import { useFormikContext } from "formik";
import React from "react";

import AdminBlockDropDown from "../../Global/AdminBlockDropDown";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import * as Styled from "../../../../styles/WebAuditService/AdminWebAudit.styled";

import { IImage } from "../../../../types/Admin/Admin.types";
import { IServiceWebAudit } from "../../../../types/Admin/Response.types";

import ButtonArrow from "../../../../utils/ButtonArrow";

import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";

const WhatIsBlock = () => {
  const { values, handleSubmit, handleChange } =
    useFormikContext<IServiceWebAudit>();
  const handleClick = () => handleSubmit();
  const deleteImageFunction = useDeleteImageFunction(values.whatIsBlock);
  const uploadImageFunction = useUploadImageFunction(values.whatIsBlock);
  const uploadFunc = (image: IImage) => uploadImageFunction(image);
  const deleteFunc = async () => (await deleteImageFunction)();

  return (
    <AdminBlockDropDown title="WHAT IS WEBSITE AUDIT?">
      <Styled.WhatIsBlockWrapper>
        <Styled.InputsWrapper>
          <SubHeaderWithInput
            inputValue={values.whatIsBlock.subtitle}
            onChangeFunction={handleChange}
            name="whatIsBlock.subtitle"
            placeholder="Title"
          />
          <SubHeaderWithInput
            inputValue={values.whatIsBlock.text}
            onChangeFunction={handleChange}
            header="Text"
            height="113px"
            name="whatIsBlock.text"
            placeholder="Text"
          />
        </Styled.InputsWrapper>
        <PhotoBlockDashed
          style={{ marginRight: 0, height: "249px", width: "235px" }}
          photo={values.whatIsBlock.image}
          deleteFlag={true}
          uploadFunction={uploadFunc}
          deleteFunction={deleteFunc}
        />
      </Styled.WhatIsBlockWrapper>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "10px", marginBottom: "2.78em" }}
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

export default WhatIsBlock;
