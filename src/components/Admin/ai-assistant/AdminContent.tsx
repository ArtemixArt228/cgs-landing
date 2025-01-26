import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ServiceAiContentBlock from ".";
import { CustomToast } from "../CustomToast";

import * as Styled from "../../../styles/AdminPage";
import { queryKeys } from "../../../consts/queryKeys";

import { IAiAssistantData } from "../../../types/services/ai-chatbot.types";
import { AdminAIAssistantValidation } from "../../../validations/AdminAIChatbotValidation";
import { ValidationError } from "yup";
import { assistantService } from "../../../services/ai-assistant";
import { initializeMissingProps } from "../../../utils/initializeMissingProps";

const AdminAiAssistantContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getAssistantConfigData],
    () => assistantService.getAssistantConfigData()
  );

  const { mutateAsync: updateData } = useMutation(
    [queryKeys.updateServiceAiChatbotPage],
    async (data: IAiAssistantData) => {
      return await toast.promise(
        assistantService.updateAssistantConfigData(data),
        {
          pending: "Pending update",
          success: "AI Chatbot updated successfully 👌",
          error: "Some things went wrong 🤯",
        }
      );
    }
  );

  const submitForm = async (values: IAiAssistantData) => {
    document.body.style.cursor = "wait";
    await updateData(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  const validateForm = async (values: IAiAssistantData) => {
    try {
      await AdminAIAssistantValidation.validate(values, {
        abortEarly: false,
      });
      return {};
    } catch (validationError) {
      toast.error(`Error occurred \n ${validationError}`);
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
  const getInitialValues = initializeMissingProps(data!, {
    chatFirstMessageText: "",
    chatAssistantName: "",
    instructions: "",
    knowledgeBaseUrl: "",
    messageSuggestions: ["How does it work?"],
  });
  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={AdminAIAssistantValidation}
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

export default AdminAiAssistantContent;
