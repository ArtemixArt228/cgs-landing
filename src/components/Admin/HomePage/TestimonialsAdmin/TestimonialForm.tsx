import React from "react";
import { useFormikContext } from "formik";

import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import AdminStars from "./AdminStars";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";

import * as Styled from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import { ITestimonial } from "../../../../types/Components.types";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import { IImage } from "../../../../types/Admin/Admin.types";
import ButtonArrow from "../../../../utils/ButtonArrow";
import usePushTestimonial from "../../../../hooks/usePushTestimonial";
import themes from "../../../../utils/themes";

interface ITestimonialsFormProps {
  setIsNewFeedback: React.Dispatch<React.SetStateAction<boolean>>;
  isNewTestimonial: boolean;
  submit: () => void;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const TestimonialForm = ({
  isNewTestimonial,
  submit,
  setIsEditing,
  setIsNewFeedback,
}: ITestimonialsFormProps) => {
  const { values, handleChange, errors } = useFormikContext<ITestimonial>();

  const { submitFunc } = usePushTestimonial();

  const deleteImageFunction = useDeleteImageFunction(
    values.slideBanner,
    "testimonialImage",
    false,
    "slideBanner.image"
  );
  const uploadImageFunction = useUploadImageFunction(
    values.slideBanner,
    "testimonialImage",
    false,
    "slideBanner.image"
  );

  const uploadFunc = (image: IImage) => uploadImageFunction(image);
  const deleteFunc = async () => (await deleteImageFunction)();
  const starsChange = (newValue: number) => (values.stars = newValue);

  const submitForm = (e: React.SyntheticEvent) => {
    submitFunc(e, submit);
    setIsEditing(true);
    setIsNewFeedback(true);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 24, marginTop: 22 }}>
        <Styled.MainPhoto>
          <Styled.AdminSubTitle>Backup Image</Styled.AdminSubTitle>
          <PhotoBlockDashed
            photo={values.slideBanner.image}
            deleteFunction={deleteFunc}
            uploadFunction={uploadFunc}
            style={{
              maxWidth: "364px",
              maxHeight: "364px",
              border: `${
                !!errors.slideBanner && !values.slideBanner.image
                  ? "2px solid red"
                  : `2px dashed ${themes.primary.colors.darkGrey}`
              } `,
            }}
            deleteFlag={true}
          />
        </Styled.MainPhoto>
        <div style={{ flex: "1 1 100%" }}>
          <Styled.AdminStarsGrid>
            <Styled.AdminHeadingInput>
              <SubHeaderWithInput
                iserror={!!errors.slideTitle && !values.slideTitle}
                inputValue={values.slideTitle}
                onChangeFunction={handleChange}
                placeholder="Name"
                name="slideTitle"
                header="Testimonial name"
                maxLength={64}
              />
              <Styled.BottomText className="portfolio-admin-description">
                <Styled.TextCounter>
                  {values.slideTitle.length}/64
                </Styled.TextCounter>
              </Styled.BottomText>
            </Styled.AdminHeadingInput>
            <Styled.AdminStarsFlex>
              <AdminStars
                value={values.stars}
                handleChange={starsChange}
                size={38}
                edit={true}
              />
            </Styled.AdminStarsFlex>
          </Styled.AdminStarsGrid>
          <div>
            <Styled.AdminSubTitle>Pop-up info</Styled.AdminSubTitle>
            <SubHeaderWithInput
              iserror={!!errors.name && !values.name}
              inputValue={values.name}
              onChangeFunction={handleChange}
              placeholder="Name"
              name="name"
            />
            <SubHeaderWithInput
              iserror={!!errors.company && !values.company}
              inputValue={values.company}
              onChangeFunction={handleChange}
              placeholder="Company"
              name="company"
            />
            <SubHeaderWithInput
              iserror={!!errors.videoUrl}
              inputValue={values.videoUrl}
              onChangeFunction={handleChange}
              placeholder="Video URL"
              name="videoUrl"
            />
            <SubHeaderWithInput
              iserror={!!errors.link && !values.link}
              inputValue={values.link}
              onChangeFunction={handleChange}
              placeholder="Portfolio link"
              name="link"
            />
            <SubHeaderWithInput
              iserror={!!errors.linkedin && !values.linkedin}
              inputValue={values.linkedin}
              onChangeFunction={handleChange}
              placeholder="LinkedIn link"
              name="linkedin"
            />
            <SubHeaderWithInput
              iserror={!!errors.tiktok && !values.tiktok}
              inputValue={values.tiktok}
              onChangeFunction={handleChange}
              placeholder="TikTok link"
              name="tiktok"
            />
            <SubHeaderWithInput
              iserror={!!errors.text && !values.text}
              inputValue={values.text}
              onChangeFunction={handleChange}
              placeholder="Text"
              name="text"
              maxLength={364}
              minRows={4}
            />
            <Styled.BottomText className="portfolio-admin-description">
              <Styled.TextCounter>{values.text.length}/364</Styled.TextCounter>
            </Styled.BottomText>
          </div>
        </div>
      </div>

      <BlackButton
        type="submit"
        size={"1.5em"}
        onClick={submitForm}
        padding={"1.11em 3em"}
        style={{ margin: "2em 0" }}
      >
        {isNewTestimonial ? "Add new review" : "Save Review"}
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
    </div>
  );
};

export default TestimonialForm;
