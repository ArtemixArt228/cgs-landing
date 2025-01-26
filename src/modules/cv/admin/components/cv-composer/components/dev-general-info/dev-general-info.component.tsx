import React from "react";
import { useFormikContext } from "formik";

import SubHeaderWithInput from "../../../../../../../components/Admin/Global/SubHeaderWithInput";
import AdminBlockDropDown from "../../../../../../../components/Admin/Global/AdminBlockDropDown";
import TextEditor from "../../../../../../../components/TextEditor/TextEditor";

import * as Styled from "./dev-general-info.styled";

import { CvData } from "../../../../../types";

import { AdminCvValidation } from "../../../../validators";

export const DevGeneralInfo = ({ isSuccess }: { isSuccess: boolean }) => {
  const { values, handleChange, errors } = useFormikContext<CvData>();

  const getTextLengthWithoutTags = (htmlText: string) => {
    const textWithoutTags = htmlText.replace(/(<([^>]+)>)/gi, "");
    const textWithoutSpecialChars = textWithoutTags.replace(/[\^|]/g, "");
    return textWithoutSpecialChars.length;
  };

  return (
    <AdminBlockDropDown isSuccess={isSuccess} title="2 BLOCK (GENERAL)">
      <Styled.FieldsWrapper>
        <SubHeaderWithInput
          iserror={!!errors.info?.title && !values.info.title}
          inputValue={values.info?.title}
          onChangeFunction={handleChange}
          header="Title"
          name="info.title"
          schema={AdminCvValidation}
        />
        {values?.info?.content?.map((item, idx) => (
          <>
            <Styled.InfoGrid key={idx}>
              <SubHeaderWithInput
                iserror={!!errors?.info?.content?.[idx] && !item.subtitle}
                inputValue={item.subtitle}
                onChangeFunction={handleChange}
                header={`Subtitle ${idx + 1}`}
                name={`info.content[${idx}].subtitle`}
                schema={AdminCvValidation}
              />
            </Styled.InfoGrid>
            {idx <= 1 ? (
              <div>
                <TextEditor header="Text" name={`info.content[${idx}].text`} />
                <Styled.BottomText>
                  {getTextLengthWithoutTags(item.text) > 62 &&
                    !errors?.info?.content?.[idx] && (
                      <Styled.ErrorMsg>
                        Text must be between 1 and 62 characters
                      </Styled.ErrorMsg>
                    )}
                  <Styled.TextCounter>
                    {getTextLengthWithoutTags(item.text)}/62
                  </Styled.TextCounter>
                </Styled.BottomText>
                {errors?.info?.content?.[idx] && (
                  <Styled.ErrorMsg>
                    Text must be between 1 and 62 characters
                  </Styled.ErrorMsg>
                )}
              </div>
            ) : (
              <div>
                <SubHeaderWithInput
                  iserror={!!errors?.info?.content?.[idx] && !item.text}
                  inputValue={item.text}
                  onChangeFunction={handleChange}
                  header="Text"
                  name={`info.content[${idx}].text`}
                  maxLength={62}
                  placeholder={
                    idx === 2
                      ? "Level (ex.: Advanced)"
                      : idx === 3
                      ? "Years (ex.: 6+ years)"
                      : ""
                  }
                  schema={AdminCvValidation}
                />
                <Styled.BottomText>
                  <Styled.TextCounter>{item.text.length}/62</Styled.TextCounter>
                </Styled.BottomText>
              </div>
            )}
          </>
        ))}
      </Styled.FieldsWrapper>
    </AdminBlockDropDown>
  );
};
