import React from "react";
import * as StyledAdminPage from "../../../styles/AdminPage";
import { AdminSaveButton } from "../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../utils/ButtonArrow";
import { ArrowContainer } from "../../Careers/Careers.styled";
import { useFormikContext } from "formik";
import { IAiAssistantData } from "../../../types/services/ai-chatbot.types";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import ChatSuggestions from "./ChatSuggestions";
import AdminBlockDropDown from "../Global/AdminBlockDropDown";

const AiAssistantContentBlock = () => {
  const { handleSubmit, handleChange, values, errors } =
    useFormikContext<IAiAssistantData>();
  const handleFormSubmit = () => {
    handleSubmit();
  };
  return (
    <div>
      <StyledAdminPage.AdminPaddedBlock>
        <StyledAdminPage.AdminTitleAndSaveButtonWrapper>
          <StyledAdminPage.AdminHeader className="services">
            AI Assistant Configuration
          </StyledAdminPage.AdminHeader>

          <AdminSaveButton type="submit" onClick={handleFormSubmit}>
            Save/Re-trigger assistant
            <ArrowContainer>
              <ButtonArrow />
            </ArrowContainer>
          </AdminSaveButton>
        </StyledAdminPage.AdminTitleAndSaveButtonWrapper>
        <SubHeaderWithInput
          iserror={!!errors?.chatAssistantName}
          inputValue={values?.chatAssistantName}
          onChangeFunction={handleChange}
          header="Chat assistant name"
          name="chatAssistantName"
          placeholder="Name"
        />
        <SubHeaderWithInput
          iserror={!!errors?.chatFirstMessageText}
          inputValue={values?.chatFirstMessageText}
          onChangeFunction={handleChange}
          header="Chat first message text"
          name="chatFirstMessageText"
          placeholder="Message"
        />
        <AdminBlockDropDown title="Question suggestions">
          <ChatSuggestions />
        </AdminBlockDropDown>
        <AdminBlockDropDown title="Instrunctions & knowledge base">
          <SubHeaderWithInput
            iserror={!!errors?.knowledgeBaseUrl}
            inputValue={values?.knowledgeBaseUrl}
            onChangeFunction={handleChange}
            header="URL to docs.google.com document with knowledge base"
            name="knowledgeBaseUrl"
            placeholder="Url"
          />
          <SubHeaderWithInput
            iserror={!!errors?.instructions}
            inputValue={values?.instructions}
            onChangeFunction={handleChange}
            header="Instructions"
            name="instructions"
            placeholder="Text"
            maxLength={5000}
          />
          <div style={{ marginLeft: "auto" }}>
            {values?.instructions.length}/5000
          </div>
        </AdminBlockDropDown>
      </StyledAdminPage.AdminPaddedBlock>
    </div>
  );
};

export default AiAssistantContentBlock;
