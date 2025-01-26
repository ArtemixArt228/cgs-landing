import { useFormikContext } from "formik";
import React from "react";

import AdminBlockDropDown from "../../Global/AdminBlockDropDown";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import * as Styled from "../../../../styles/DappAuditService/AdminDappAudit.styled";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";

import { IImage } from "../../../../types/Admin/Admin.types";
import { IServiceDappAudit } from "../../../../types/Admin/Response.types";

import ButtonArrow from "../../../../utils/ButtonArrow";

const FigureOutTermsBlock = () => {
  const { values, handleSubmit, handleChange } =
    useFormikContext<IServiceDappAudit>();
  const handleClick = () => handleSubmit();
  const deleteImageFunction = useDeleteImageFunction(values.figureOutBlock);
  const uploadImageFunction = useUploadImageFunction(values.figureOutBlock);
  const uploadFunc = (image: IImage) => uploadImageFunction(image);
  const deleteFunc = async () => (await deleteImageFunction)();

  return (
    <AdminBlockDropDown title="FIGURE OUT TERMS:">
      <Styled.FigureOutTermsBlockWrapper>
        <Styled.InputsWrapper>
          <SubHeaderWithInput
            inputValue={values.figureOutBlock.subtitle}
            onChangeFunction={handleChange}
            name="figureOutBlock.subtitle"
            placeholder="Title"
          />
          {values.figureOutBlock.textBlock.map((item, idx) => (
            <SubHeaderWithInput
              key={idx}
              inputValue={item}
              onChangeFunction={handleChange}
              header="Text"
              height="113px"
              name={`figureOutBlock.textBlock[${idx}]`}
              placeholder="Text"
            />
          ))}
        </Styled.InputsWrapper>
        <PhotoBlockDashed
          style={{ marginRight: 0, height: "249px", width: "235px" }}
          photo={values.figureOutBlock.image}
          deleteFlag={true}
          uploadFunction={uploadFunc}
          deleteFunction={deleteFunc}
        />
      </Styled.FigureOutTermsBlockWrapper>
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

export default FigureOutTermsBlock;
