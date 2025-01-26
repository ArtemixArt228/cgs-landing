/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo } from "react";
import { Form, Formik, useFormikContext } from "formik";
import "react-toastify/dist/ReactToastify.css";

import { newPortfolioInitialValues } from "../../../../../consts";
import {
  IAddAndEditProps,
  IConceptToCompletionItem,
  IPortfolioPageData,
} from "../../../../../types/Admin/AdminPortfolio.types";
import { AddReview } from "../project-composer/project-composer";
import SaveBtn from "../../../../../components/Admin/Global/SaveBtn";
import { useProjectActions } from "../../../hooks";

export const AddAndEdit = ({
  current,
  isNewStatus,
  reviews,
  setIsNewStatus,
  scrollFunc,
}: IAddAndEditProps) => {
  const { values: portfolioPageValues } =
    useFormikContext<IPortfolioPageData>();

  const {
    formikRef,
    isSuccess,
    setIsSuccess,
    validateForm,
    onSubmit,
    handleSaveClick,
  } = useProjectActions(setIsNewStatus, scrollFunc);
  const getInitialValues = useMemo(() => {
    const initialData = isNewStatus
      ? JSON.parse(JSON.stringify(newPortfolioInitialValues))
      : typeof reviews !== "undefined" && {
          ...newPortfolioInitialValues,
          ...reviews[current],
        };

    const initialIcons = initialData.conceptToCompletion.item.map(
      (item: IConceptToCompletionItem) => ({
        ...item,
        icon: {
          image: {
            url: item?.icon?.image?.url || "",
          },
        },
      })
    );

    initialData.conceptToCompletion.item = initialIcons;

    return initialData;
  }, [current, isNewStatus, reviews]);

  return (
    <Formik
      key={`Form${isNewStatus}${
        typeof current === "number" ? current : "null"
      }`}
      validateOnChange
      validateOnBlur={false}
      initialValues={getInitialValues}
      onSubmit={(values) => onSubmit(values, isNewStatus)}
      validate={validateForm}
      innerRef={formikRef}
    >
      {({ handleSubmit }) => (
        <Form>
          <AddReview
            isSuccess={isSuccess}
            setIsSuccess={setIsSuccess}
            categories={portfolioPageValues.categories.map((elem) => elem.name)}
            industries={portfolioPageValues.industries}
          />
          <SaveBtn handleClick={() => handleSaveClick(handleSubmit)} />
        </Form>
      )}
    </Formik>
  );
};
