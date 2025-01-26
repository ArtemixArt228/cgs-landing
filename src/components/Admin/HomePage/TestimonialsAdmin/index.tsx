import React, { useState } from "react";
import { Formik, useFormikContext } from "formik";
import { useQueryClient } from "@tanstack/react-query";
import SortableList, { SortableItem } from "react-easy-sort";

import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import TestimonialForm from "./TestimonialForm";
import AdminTestimonial from "./AdminTestimonial";
import BlockDropdown from "../../BlockDropdown";

import * as Styled from "../../../../styles/AdminPage";

import useTestimonialLogic from "../../../../hooks/useTestimonialsLogic";

import { IHomePageResponse } from "../../../../types/Admin/AdminHomePage.types";

import { testimonialsInit } from "../../../../consts";
import { queryKeys } from "../../../../consts/queryKeys";

import { AdminTestimonialsValidation } from "../../../../validations/AdminTestimonialsValidation";

const TestimonialsAdmin = () => {
  const queryClient = useQueryClient();

  const { values, handleChange, handleSubmit } =
    useFormikContext<IHomePageResponse>();

  const [isNewTestimonial, setIsNewTestimonial] = useState(true);
  const [isEditing, setIsEditing] = useState(true);
  const [current, setCurrent] = useState("");
  const {
    testimonial,
    setTestimonial,
    editFunction,
    deleteFunction,
    submitFunction,
  } = useTestimonialLogic();

  const handleDragEnd = async (oldIndex: number, newIndex: number) => {
    const srcItem = values.TestimonialsBlock.testimonials[oldIndex]._id;
    const desItem = values.TestimonialsBlock.testimonials[newIndex]._id;

    const srcInd = values.TestimonialsBlock.testimonials.findIndex(
      (el) => el._id === srcItem
    );
    const desInd = values.TestimonialsBlock.testimonials.findIndex(
      (el) => el._id === desItem
    );

    const swapped = values.TestimonialsBlock.testimonials;

    swapped && swapped.splice(desInd, 0, swapped.splice(srcInd, 1)[0]);

    handleSubmit();

    queryClient.setQueryData([queryKeys.GetFullPage], {
      ...values,
      TestimonialsBlock: {
        title: values.TestimonialsBlock.title,
        testimonials: swapped,
      },
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: "50px" }}>
        <div style={{ width: 350 }}>
          <SubHeaderWithInput
            placeholder="Testimonials title"
            header="Subtitle"
            inputValue={values.TestimonialsBlock.title}
            name={"TestimonialsBlock.title"}
            onChangeFunction={handleChange}
          />
        </div>
        <Formik
          key={`testimonialsBlock${isNewTestimonial}`}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={isNewTestimonial ? submitFunction : editFunction}
          validationSchema={AdminTestimonialsValidation}
          initialValues={
            isNewTestimonial
              ? {
                  ...testimonialsInit,
                  slideBanner: {
                    image: null,
                  },
                }
              : {
                  ...values.TestimonialsBlock.testimonials[testimonial],
                  linkedin:
                    values.TestimonialsBlock.testimonials[testimonial]
                      .linkedin || "",
                  tiktok:
                    values.TestimonialsBlock.testimonials[testimonial].tiktok ||
                    "",
                }
          }
        >
          <>
            <TestimonialForm
              setIsNewFeedback={setIsNewTestimonial}
              setIsEditing={setIsEditing}
              submit={handleSubmit}
              isNewTestimonial={isNewTestimonial}
            />
          </>
        </Formik>
      </div>
      <BlockDropdown title="Editing Testimonials">
        <SortableList onSortEnd={handleDragEnd}>
          {values.TestimonialsBlock.testimonials.map((testimonialItem, idx) => (
            <SortableItem key={idx}>
              <Styled.DraggableWrapper className="adminCv">
                <AdminTestimonial
                  idx={idx}
                  setIsNewFeedback={setIsNewTestimonial}
                  testimonial={testimonialItem}
                  deleteFunc={() => deleteFunction(idx)}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  setTestimonial={setTestimonial}
                  setCurrent={setCurrent}
                  current={current}
                />
              </Styled.DraggableWrapper>
            </SortableItem>
          )) || <Styled.AdminSubTitle>No Testimonials</Styled.AdminSubTitle>}
        </SortableList>
      </BlockDropdown>
    </div>
  );
};

export default TestimonialsAdmin;
