import React from "react";
import { useFormikContext } from "formik";

import LeftSideBlock from "./LeftSide";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import TextEditor from "../../../TextEditor/TextEditor";
import ButtonArrow from "../../../../utils/ButtonArrow";

import * as Styled from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import { IImage } from "../../../../types/Admin/Admin.types";
import { IHomePageResponse } from "../../../../types/Admin/AdminHomePage.types";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunctionRefactored";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunctionRefactored";


const HeroSectionBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IHomePageResponse>();

  const handleClick = () => handleSubmit();

  const deleteImageFunction = useDeleteImageFunction(
    undefined,
    undefined,
    false
  );
  const uploadImageFunction = useUploadImageFunction(undefined, false);

  const deleteFunc = async () =>
    (await deleteImageFunction)(
      values.HeroSectionBlock,
      "HeroSectionBlock.image"
    );

  const uploadFunc = (image: unknown) =>
    uploadImageFunction(image, "HeroSectionBlock.image");

  return (
    <Styled.ContentWrapper>
      <Styled.AdminFlexRow>
        <div>
          <Styled.AdminHomepageHeader>
            <LeftSideBlock
              state={values.HeroSectionBlock}
              onChangeFunction={handleChange}
            />
            <Styled.MainPhoto>
              <Styled.AdminSubTitle>Main page photo</Styled.AdminSubTitle>
              <PhotoBlockDashed
                photo={values?.HeroSectionBlock?.image}
                deleteFlag={true}
                uploadFunction={uploadFunc}
                deleteFunction={deleteFunc}
              />
            </Styled.MainPhoto>
          </Styled.AdminHomepageHeader>

          <Styled.AdminCalendlyPopup>
            <Styled.AdminCalendlyPopupTitle>
              <SubHeaderWithInput
                header="Calendly pop-up Title"
                name="CalendlyPopupBlock.title"
                inputValue={values.CalendlyPopupBlock.title}
                onChangeFunction={handleChange}
              />
            </Styled.AdminCalendlyPopupTitle>
            <Styled.AdminCalendlyPopupDescription>
              <TextEditor
                header="Calendly pop-up description"
                name="CalendlyPopupBlock.description"
                props={{
                  defaultValue: values.CalendlyPopupBlock.description || "",
                }}
              />
            </Styled.AdminCalendlyPopupDescription>
            <Styled.AdminCalendlyPopupButton>
              <SubHeaderWithInput
                header="Calendly pop-up button"
                name="CalendlyPopupBlock.buttonText"
                inputValue={values.CalendlyPopupBlock.buttonText}
                onChangeFunction={handleChange}
              />
            </Styled.AdminCalendlyPopupButton>
          </Styled.AdminCalendlyPopup>
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
      </Styled.AdminFlexRow>
    </Styled.ContentWrapper>
  );
};

export default HeroSectionBlock;
