import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  EstimateOptionContainer,
  EstimationFieldLabel,
  EstimationFieldOptionCheckbox,
  EstimationInputCheckbox,
  EstimationInputFlex,
} from "../../styles/EstimationForm.styled";
import { useField, useFormikContext } from "formik";
import { EstimationField } from "../../types/EstimationForm.types";
import { getTextFromHtml } from "../../utils/getTextFromHtml";

const CheckboxField = ({
  title,
  options,
  split,
  index,
  questionKey,
  currentPage,
  formData,
  touched,
  required,
  optionsType,
  name,
  ...props
}: EstimationField) => {
  const formik = useFormikContext();
  const [, meta] = useField(`questionsArr[${index}]`);

  const isMounted = useRef(false);

  const [dataArray, setDataArray] = useState<string[]>(
    formData?.clientAnswers
      .find((item) => item.questionTitle === getTextFromHtml(title))
      ?.selectedOptions.map((option) => option.text) || []
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setDataArray([...dataArray, e.target.value]);
    } else if (!e.target.checked) {
      const freshArray = dataArray.filter((val) => val !== e.target.value);
      setDataArray([...freshArray]);
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      formik.setFieldValue(`questionsArr[${index}].value`, dataArray);
      props.setFormData((prevState) => {
        const indexOfAnswer = prevState.clientAnswers.findIndex(
          (answer) => answer.questionTitle === getTextFromHtml(title)
        );
        return {
          ...prevState,
          clientAnswers:
            indexOfAnswer !== -1
              ? prevState.clientAnswers.map((clientAnswer, index) => {
                  return index === indexOfAnswer
                    ? {
                        ...clientAnswer,
                        selectedOptions: dataArray.map((option) => ({
                          text: option,
                        })),
                      }
                    : clientAnswer;
                })
              : [
                  ...prevState.clientAnswers,
                  {
                    questionTitle: getTextFromHtml(title),
                    questionKey,
                    pageIndex: currentPage as number,
                    required: required,
                    optionsType: optionsType,
                    selectedOptions: dataArray.map((option) => ({
                      text: option,
                    })),
                  },
                ],
        };
      });
    } else {
      isMounted.current = true;
    }
  }, [dataArray]);

  return (
    <>
      <EstimationFieldLabel
        error={!!meta.error && touched}
        split={split!}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <EstimateOptionContainer split={split!}>
        {options.map((option) => {
          return (
            <EstimationInputFlex key={option.optionKey}>
              <EstimationInputCheckbox
                type="checkbox"
                id={`${option.optionKey}${questionKey}`}
                onChange={(e) => handleChange(e)}
                checked={
                  meta.value?.value &&
                  (meta.value?.value as string[])?.includes(
                    getTextFromHtml(option.text)
                  )
                }
                value={getTextFromHtml(option.text)}
                name={`questionsArr.${index}.value`}
                {...props}
              />
              <EstimationFieldOptionCheckbox
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

export default CheckboxField;
