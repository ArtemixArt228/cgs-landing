import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ServiceAiContentBlock from ".";
import { CustomToast } from "../../CustomToast";

import * as Styled from "../../../../styles/AdminPage";
import { queryKeys } from "../../../../consts/queryKeys";

import { adminAiChatbotService } from "../../../../services/services/AdminServiceAiChatbot";
import { initializeMissingProps } from "../../../../utils/initializeMissingProps";
import { IAIChatbotPageData } from "../../../../types/services/ai-chatbot.types";
import { AiChatbotServicePageDefaultValues } from "../../../../consts/services/ai-chatbot-page.const";
import { AdminAIChatbotValidation } from "../../../../validations/AdminAIChatbotValidation";
import { ValidationError } from "yup";

const AdminServiceContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceAiChatbotPage],
    () => adminAiChatbotService.getAiChatbotServicePage()
  );

  const { mutateAsync: updatePage } = useMutation(
    [queryKeys.updateServiceAiChatbotPage],
    async (data: IAIChatbotPageData) => {
      return await toast.promise(
        adminAiChatbotService.updateAiChatbotServicePage(data),
        {
          pending: "Pending update",
          success: "AI Chatbot updated successfully 👌",
          error: "Some things went wrong 🤯",
        }
      );
    }
  );

  const submitForm = async (values: IAIChatbotPageData) => {
    document.body.style.cursor = "wait";
    await updatePage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  const getInitialValues = initializeMissingProps(
    data!,
    AiChatbotServicePageDefaultValues
  );

  const validateForm = async (values: IAIChatbotPageData) => {
    try {
      await AdminAIChatbotValidation.validate(values, {
        abortEarly: false,
      });
      return {};
    } catch (validationError) {
      toast.error(`Error occured \n ${validationError}`);
      if (validationError instanceof ValidationError) {
        toast.error(
          <>
            Please fill all form fields <br />
            {validationError.errors.slice(0, 5).map((item, ind) => (
              <div key={ind}>
                {ind + 1}. {item}
                <br />
              </div>
            ))}
          </>
        );
      }
      return validationError;
    }
  };
  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={AdminAIChatbotValidation}
      validate={validateForm}
      initialValues={getInitialValues}
      onSubmit={submitForm}
    >
      <>
        <ServiceAiContentBlock />
        <CustomToast hasFixedHeader position="bottom-right" />
      </>
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceContent;
