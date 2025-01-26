import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { cvAdminService } from "../services";

import { CvData } from "../../types";

import { queryKeys } from "../../../../consts/queryKeys";

import { AdminCvValidation } from "../validators";
import { ISwapData } from "../../../../types/Admin/Response.types";

export const useCvMutations = ({
  setIsSuccess,
  setIsNewCv,
  setIsDuplicatedCv,
  setCurrent,
}: {
  setIsSuccess?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsNewCv?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDuplicatedCv?: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrent?: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const queryClient = useQueryClient();

  const handleSuccess = async () => {
    await queryClient.invalidateQueries([queryKeys.getCvs]);
    setIsSuccess!(true);
    setCurrent!(-1);
    setIsNewCv!(true);
    setIsDuplicatedCv!(false);
  };

  const mutationConfig = {
    onSuccess: handleSuccess,
  };

  const { mutateAsync: postCv } = useMutation(
    async (cv: CvData) =>
      await toast.promise(cvAdminService.postCv(cv), {
        pending: "Pending creation",
        success: "CV created successfully",
        error: "Something went wrong 🤯",
      }),
    mutationConfig
  );

  const { mutateAsync: editCv } = useMutation(
    async (cv: CvData) =>
      await toast.promise(cvAdminService.updateById(cv), {
        pending: "Pending update",
        success: "CV updated successfully",
        error: "Something went wrong 🤯",
      }),
    mutationConfig
  );

  const { mutateAsync: deleteCvById } = useMutation(
    [queryKeys.deleteCvById],
    async (id: string) => {
      return await toast.promise(cvAdminService.deleteById(id), {
        pending: "Pending update",
        success: "CV deleted successfully 👌",
        error: "Some things went wrong 🤯",
      });
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries([queryKeys.getCvs]);
      },
    }
  );

  const { mutateAsync: swapCvs } = useMutation(
    [queryKeys.swapPortfolioReviews],
    async (swapData: ISwapData) => {
      return await toast.promise(cvAdminService.swapCvs(swapData), {
        pending: "Pending update",
        success: "CV ID swapped successfully",
        error: "Some things went wrong 🤯",
      });
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries([queryKeys.getCvs]);
      },
    }
  );

  const duplicateCv = async (cv: CvData) => {
    const duplicate = { ...cv };
    delete duplicate._id;

    await postCv(duplicate);
  };

  const validateForm = async (values: CvData) => {
    try {
      await AdminCvValidation.validate(values, { abortEarly: false });
      return {};
    } catch (error) {
      toast.error(`Please fill all form fields\n${error}`);
      return error;
    }
  };

  return { postCv, editCv, deleteCvById, swapCvs, duplicateCv, validateForm };
};
