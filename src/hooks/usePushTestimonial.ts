import React from "react";
import { useFormikContext } from "formik";

import { testimonialsInit } from "../consts";

import { ITestimonial } from "../types/Components.types";

const usePushFeedback = () => {
  const { setValues, validateForm, submitForm } =
    useFormikContext<ITestimonial>();

  const submitFunc = async (e: React.SyntheticEvent, submit: () => void) => {
    e.preventDefault();
    const err = await validateForm();

    Object.keys(err).length === 0 &&
      submitForm()
        .then(() => submit())
        .then(() =>
          setValues(
            JSON.parse(
              JSON.stringify({
                ...testimonialsInit,
                slideBanner: {
                  image: null,
                },
              })
            )
          )
        );
  };

  return { submitFunc };
};

export default usePushFeedback;
