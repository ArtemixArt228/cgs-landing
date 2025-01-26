import React, { Dispatch, SetStateAction, useState } from "react";
import { Form, Formik } from "formik";

import { CvComposer } from "../cv-composer";

import { AdminCvValidation } from "../../validators";

import { useCvMutations } from "../../hooks";

import { CvData } from "../../../types";

import { NEW_CV } from "../../consts";

interface ICvManagementFormProps {
  isNewCv: boolean;
  setIsNewCv: Dispatch<SetStateAction<boolean>>;
  isDuplicatedCv: boolean;
  setIsDuplicatedCv: Dispatch<SetStateAction<boolean>>;
  cv: CvData[] | undefined | void;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
}

export const CvManagementForm = ({
  isNewCv,
  setIsNewCv,
  isDuplicatedCv,
  setIsDuplicatedCv,
  current,
  setCurrent,
  cv,
}: ICvManagementFormProps) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const { postCv, editCv, duplicateCv, validateForm } = useCvMutations({
    setIsSuccess,
    setIsNewCv,
    setIsDuplicatedCv,
    setCurrent,
  });

  const handleSubmit = async (values: CvData) => {
    if (isNewCv) {
      isDuplicatedCv ? await duplicateCv(values) : await postCv(values);
    } else {
      await editCv(values);
    }
  };

  const getInitialValues = () => {
    if (isNewCv && !isDuplicatedCv) {
      return JSON.parse(JSON.stringify(NEW_CV));
    }
    return typeof cv !== "undefined" && cv[current]
      ? cv[current]
      : JSON.parse(JSON.stringify(NEW_CV));
  };

  return (
    <Formik
      key={`Form${isNewCv}${current}`}
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={getInitialValues()}
      onSubmit={handleSubmit}
      validate={validateForm}
      validationSchema={AdminCvValidation}
    >
      <Form>
        <CvComposer isSuccess={isSuccess} setIsSuccess={setIsSuccess} />
      </Form>
    </Formik>
  );
};
