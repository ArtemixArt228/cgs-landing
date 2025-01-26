import React from "react";
import Image from "next/image";

import * as Styled from "../../../../styles/AdminPage";
import * as Styles from "../../../../styles/HomePage/Testimonials.styled";

import { ITestimonial } from "../../../../types/Components.types";

import edit from "/public/editIcon.svg";
import close from "/public/bigClose.svg";
import star from "/public/HomePageDecoration/feedbackStar.svg";
import Link from "next/link";
import ButtonArrow from "../../../../utils/ButtonArrow";
import { PlayBtn } from "../../../../modules/shared/icons/components/play-video-button";

interface IFeedbackProps {
  testimonial: ITestimonial;
  deleteFunc: (e?: React.ChangeEvent<unknown>) => void;
  setIsNewFeedback: React.Dispatch<React.SetStateAction<boolean>>;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setTestimonial: React.Dispatch<React.SetStateAction<number>>;
  setCurrent: (val: string) => void;
  current: string;
  idx: number;
}

const AdminTestimonial = ({
  testimonial,
  deleteFunc,
  setIsNewFeedback,
  isEditing,
  setIsEditing,
  setTestimonial,
  setCurrent,
  current,
  idx,
}: IFeedbackProps) => {
  const handleEditTestimonial = () => {
    setIsEditing((prev) => !prev);
    setCurrent(testimonial._id!);
    setIsNewFeedback((prev) => !prev);
    setTestimonial(idx);
  };
  return (
    <Styled.AdminFeedbackFrame
      className={`testimonialsFrame ${
        isEditing ? "" : !isEditing && current === testimonial._id ? "" : "fade"
      }`}
    >
      <div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
          padding: "16px 20px",
        }}
      >
        <Styles.TestimonialsSlideContainerAdminPage className={"adminSlide"}>
          {testimonial.slideBanner?.image !== undefined &&
            testimonial.slideBanner?.image !== null && (
              <Image
                layout={"fill"}
                src={testimonial.slideBanner.image.url}
                alt={"clients"}
              />
            )}
          <Styles.TestimonialsSlideHeadline className={"adminSlide"}>
            {testimonial.slideTitle}
          </Styles.TestimonialsSlideHeadline>
          <Styles.TestimonialsSlidePlayBtnContainer>
            <a
              href={testimonial.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlayBtn />
            </a>
          </Styles.TestimonialsSlidePlayBtnContainer>
          <Styles.TestimonialsSlideStarAdmin>
            {[...Array(Math.round(testimonial.stars))].map((_, i) => (
              <Image key={i} src={star} alt={"star"} />
            ))}
          </Styles.TestimonialsSlideStarAdmin>
        </Styles.TestimonialsSlideContainerAdminPage>
        <Styled.AdminTestimonialContainerModal>
          <Styles.TestimonialsHeaderName className={"adminSlide"}>
            {testimonial.name}
          </Styles.TestimonialsHeaderName>
          <Styles.TestimonialsHeaderPosition
            className={"desktop grey adminSlide"}
          >
            <Link href={"/"}>{testimonial.company}</Link>
          </Styles.TestimonialsHeaderPosition>
        </Styled.AdminTestimonialContainerModal>
        <Styled.AdminTestimonialContainerLink>
          <Styled.AdminTestimonialArrowLink>
            <a href={testimonial.link} target="_blank" rel="noreferrer">
              link
            </a>
            <Styled.AdminTestimonialArrowContainer>
              <ButtonArrow />
            </Styled.AdminTestimonialArrowContainer>
          </Styled.AdminTestimonialArrowLink>
        </Styled.AdminTestimonialContainerLink>
      </div>
      <Styled.AdminEditDeleteContainer>
        <Styled.AdminEditIcon onClick={handleEditTestimonial}>
          <Image
            src={isEditing || current !== testimonial._id ? edit : close}
            alt={"new feedback"}
          />
        </Styled.AdminEditIcon>
        <Styled.AdminDeleteTextTestimon onClick={deleteFunc}>
          delete review
        </Styled.AdminDeleteTextTestimon>
      </Styled.AdminEditDeleteContainer>
    </Styled.AdminFeedbackFrame>
  );
};

export default AdminTestimonial;
