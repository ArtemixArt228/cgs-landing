import React from "react";
import { useFormikContext } from "formik";

import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import ButtonArrow from "../../../../utils/ButtonArrow";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import TextEditor from "../../../TextEditor/TextEditor";

import * as Styled from "../../../../styles/HighDemandBlock.styled";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import { IHomePageResponse } from "../../../../types/Admin/AdminHomePage.types";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunctionRefactored";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunctionRefactored";

const HighDemandBlock = () => {
  const { handleSubmit, handleChange, values } =
    useFormikContext<IHomePageResponse>();

  const deleteImageFunction = useDeleteImageFunction(
    undefined,
    undefined,
    false
  );
  const uploadImageFunction = useUploadImageFunction(undefined, false);

  const deleteFunc = async () =>
    (await deleteImageFunction)(
      values.HighDemandBlock,
      "HighDemandBlock.image"
    );

  const uploadFunc = (image: unknown) =>
    uploadImageFunction(image, "HighDemandBlock.image");

  const handleClick = () => handleSubmit();
  return (
    <div style={{ marginBottom: 22 }}>
      <Styled.AdminPageHighTechnologyContainer>
        <Styled.AdminPageHighTechnologyInputWrapper>
          <TextEditor
            header="Promo Homepage text"
            name="HighDemandBlock.text"
            props={{
              defaultValue: values.HighDemandBlock.text || "",
            }}
          />
          <SubHeaderWithInput
            header="Promo Contact text"
            name="HighDemandBlock.textContact"
            inputValue={values.HighDemandBlock.textContact}
            onChangeFunction={handleChange}
          />
          <SubHeaderWithInput
            header="Promo Link"
            name="HighDemandBlock.link"
            inputValue={values.HighDemandBlock.link}
            onChangeFunction={handleChange}
          />
        </Styled.AdminPageHighTechnologyInputWrapper>
        <div>
          <PhotoBlockDashed
            style={{
              width: "196px",
              maxHeight: "160px",
            }}
            header="Drop new icon here"
            deleteText="delete icon"
            imageStyle={{ height: "87px" }}
            className="tech"
            deleteFunction={deleteFunc}
            uploadFunction={uploadFunc}
            photo={values.HighDemandBlock.image}
            deleteFlag={true}
          />
        </div>
      </Styled.AdminPageHighTechnologyContainer>
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
  );
};

export default HighDemandBlock;
