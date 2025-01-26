import { useFormikContext } from "formik";
import React from "react";

import { AdminPaddedBlock } from "../../../../styles/AdminPage";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import * as StyledAiServicePage from "../../../../styles/AiService/AdminPage";
import { IAIChatbotPageData } from "../../../../types/services/ai-chatbot.types";
import TextEditor from "../../../TextEditor/TextEditor";

const AIChatbotHero = () => {
  const { values, errors, handleChange } =
    useFormikContext<IAIChatbotPageData>();
  return (
    <AdminPaddedBlock className="services">
      <StyledAiServicePage.FlexWrapper className="services-hero">
        <StyledAiServicePage.ColumnWrapper>
          <TextEditor
            isError={!!errors.aichatbotHeroBlock?.title}
            header="Title"
            name="aichatbotHeroBlock.title"
            props={{
              defaultValue: values.aichatbotHeroBlock.title || "",
            }}
          />
          <SubHeaderWithInput
            iserror={!!errors.aichatbotHeroBlock?.text}
            inputValue={values.aichatbotHeroBlock?.text}
            onChangeFunction={handleChange}
            header="Text"
            name="aichatbotHeroBlock.text"
            placeholder="Text"
            width="633px"
          />
        </StyledAiServicePage.ColumnWrapper>
      </StyledAiServicePage.FlexWrapper>
    </AdminPaddedBlock>
  );
};

export default AIChatbotHero;
