import React from "react";
import { useField, useFormikContext } from "formik";
import {
  EstimateOptionContainer,
  EstimationFieldLabel,
  EstimationFieldOptionRadio,
  EstimationInputFlex,
  EstimationInputRadio,
} from "../../styles/EstimationForm.styled";

import { EstimationField } from "../../types/EstimationForm.types";
import { getTextFromHtml } from "../../utils/getTextFromHtml";
import {
  createField,
  updateField,
} from "../../utils/estimationFromUpdateAndCreateField";

const RadioField = ({
  title,
  options,
  split,
  index,
  questionKey,
  currentPage,
  touched,
  required,
  optionsType,
  name,
  ...props
}: EstimationField) => {
  const formik = useFormikContext();
  const [, meta] = useField(`questionsArr[${index}]`);

  return (
    <>
      <EstimationFieldLabel
        className={"radioField"}
        split={split!}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <EstimateOptionContainer className={'radioField'} split={split!}>
        {options.map((option) => {
          return (
            <EstimationInputFlex key={option.optionKey}>
              <EstimationInputRadio
                id={`${option.optionKey}${questionKey}`}
                type="radio"
                onChange={(e) => {
                  props.setFormData((prevState) => {
                    const indexOfAnswer = prevState.clientAnswers.findIndex(
                      (answer) =>
                        answer.questionTitle === getTextFromHtml(title)
                    );
                    return {
                      ...prevState,
                      clientAnswers:
                        indexOfAnswer !== -1
                          ? updateField(prevState, indexOfAnswer, e)
                          : createField(
                              prevState,
                              indexOfAnswer,
                              e,
                              title,
                              questionKey,
                              currentPage,
                              required,
                              optionsType
                            ),
                    };
                  });

                  formik.setFieldValue(
                    `questionsArr[${index}].value`,
                    e.target.value
                  );
                }}
                checked={getTextFromHtml(option.text) === meta.value.value}
                value={getTextFromHtml(option.text)}
                name={`questionsArr.${index}.value`}
                {...props}
              />
              <EstimationFieldOptionRadio
                htmlFor={`${option.optionKey}${questionKey}`}
                error={!!meta.error && touched}
                dangerouslySetInnerHTML={{ __html: option.text }}
              />
            </EstimationInputFlex>
          );
        })}
      </EstimateOptionContainer>
    </>
  );
};

export default RadioField;
