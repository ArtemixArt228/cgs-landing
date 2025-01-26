import React, { useRef, useState } from "react";

import { AdminPortfolioValidation } from "../../../validations/AdminPortfolioValidator";
import { IPortfolioReview } from "../../../types/Admin/AdminPortfolio.types";
import { parseValidationErrors } from "../../../utils/validation-errors-parse";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { queryKeys } from "../../../consts/queryKeys";
import { adminPortfolioService } from "../../../services/adminPortfolioPage";
import { FormikProps } from "formik";
const regex = /"([a-zA-Z0-9[\].]+)"/;
export const useProjectActions = (
  setIsNewStatus: (value: boolean) => void,
  scrollFunc: () => void
) => {
  const queryClient = useQueryClient();
  const isSubmitting = useRef(false);
  const formikRef = useRef<FormikProps<IPortfolioReview>>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const successHandler = () => {
    queryClient.invalidateQueries([queryKeys.getPortfolio]);
    setIsNewStatus(true);

    if (formikRef.current) {
      formikRef.current.resetForm();
      setIsSuccess(true);
      setIsBtnDisabled(false);
      setIsNewStatus(true);
      scrollFunc();
    }
  };

  const errorHandler = (e: { message: string }) => {
    const message = JSON.parse(e.message)["message"] as string;
    const field = message.match(regex);

    if (field && formikRef.current) {
      formikRef.current.setFieldError(field[1], message);
    }

    setIsBtnDisabled(false);
  };

  const { mutateAsync: editReview, isLoading: isEditLoading } = useMutation(
    [queryKeys.updatePortfolioReview],
    async (review: IPortfolioReview) => {
      setIsBtnDisabled(true);

      return await toast.promise(adminPortfolioService.updateReview(review), {
        pending: "Pending update",
        success: "Data updated successfully 👌",
        error: "Some things went wrong 🤯",
      });
    },
    {
      onSuccess: successHandler,
      onError: errorHandler,
    }
  );

  const { mutateAsync: addReview, isLoading: isAddLoading } = useMutation(
    [queryKeys.addPortfolioReview],
    async (review: IPortfolioReview) => {
      setIsBtnDisabled(true);

      return await toast.promise(adminPortfolioService.addReview(review), {
        pending: "Pending update",
        success: "Data updated successfully 👌",
        error: "Some things went wrong 🤯",
      });
    },
    {
      onSuccess: successHandler,
      onError: errorHandler,
    }
  );

  const onSubmit = (values: IPortfolioReview, isNewStatus: boolean) => {
    if (isAddLoading || isEditLoading || isBtnDisabled) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { sort, ...valueForSubmit } = values;
    isNewStatus ? addReview(valueForSubmit) : editReview(valueForSubmit);
  };

  const validateForm = async (values: IPortfolioReview) => {
    try {
      await AdminPortfolioValidation(
        !!values.aiSolutionsToAchieveGoal.includeBlock,
        !!values.designOverview?.includeBlock
      ).validate(values, {
        abortEarly: false,
      });
      return {};
    } catch (validationError) {
      const errors = parseValidationErrors(validationError, isSubmitting);
      return errors;
    }
  };
  const handleSaveClick = async (
    handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void
  ) => {
    isSubmitting.current = true;
    handleSubmit();
  };
  return {
    isSubmitting,
    formikRef,
    isSuccess,
    setIsSuccess,
    isBtnDisabled,
    validateForm,
    onSubmit,
    handleSaveClick,
  };
};
