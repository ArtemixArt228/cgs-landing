import React from "react";
import { useFormikContext } from "formik";
import dynamic from "next/dynamic";

import ButtonArrow from "../../../../utils/ButtonArrow";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";

import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import * as Styled from "../../../../styles/AdminPage";
import { IAbout } from "../../../../types/Admin/Response.types";
import { IImage } from "../../../../types/Admin/Admin.types";

const TextEditor = dynamic(() => import("../../../TextEditor/TextEditor"), {
  ssr: false,
});

const FooterBlock = () => {
  const { values, handleChange, handleSubmit } = useFormikContext<IAbout>();

  const { title, button, buttonLink, image } = values.footerBlock ?? {
    title: "",
    image: { url: "" },
    button: "",
    buttonLink: "",
  };
  const deleteImageFunction = useDeleteImageFunction(values.footerBlock);
  const uploadImageFunction = useUploadImageFunction(values.footerBlock);
  const uploadFunc = (image: IImage) => uploadImageFunction(image);
  const deleteFunc = async () => (await deleteImageFunction)();

  const handleClick = () => handleSubmit();

  return (
    <Styled.ContentWrapper>
      <TextEditor
        header="CTA motto"
        name="footerBlock.title"
        props={{
          defaultValue: values?.footerBlock?.title || "",
        }}
        subtitleStyle={{ textAlign: "left" }}
      />
      <div
        style={{
          width: "85%",
          display: "flex",
          gap: "50px",
          marginTop: "30px",
        }}
      >
        <div style={{ flexGrow: "1" }}>
          <SubHeaderWithInput
            width="90%"
            placeholder="Button name"
            header="Button name"
            inputValue={button}
            onChangeFunction={handleChange}
            name="footerBlock.button"
            titleStyle={{ textAlign: "left" }}
          />
          <SubHeaderWithInput
            width="90%"
            placeholder="Button link"
            header="Button link"
            inputValue={buttonLink}
            onChangeFunction={handleChange}
            name="footerBlock.buttonLink"
            titleStyle={{ textAlign: "left" }}
          />
        </div>
        <Styled.MainPhoto>
          <Styled.AdminSubTitle>CTA images</Styled.AdminSubTitle>
          <PhotoBlockDashed
            photo={values.footerBlock.image}
            deleteFlag={true}
            uploadFunction={uploadFunc}
            deleteFunction={deleteFunc}
          />
        </Styled.MainPhoto>
      </div>
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
    </Styled.ContentWrapper>
  );
};

export default FooterBlock;
