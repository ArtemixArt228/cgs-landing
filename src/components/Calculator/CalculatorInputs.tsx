import React, { useCallback, useEffect } from "react";
import { useFormikContext } from "formik";
import parse from "html-react-parser";

import {
  OptionWrapper,
  TieUpInput,
  TieUpLabel,
  TieUpShadowWrapper,
} from "../../styles/Calculator/CalculatorAdmin.styled";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";

import {
  ICalculatorFieldProps,
  ICalculatorFormValuesProps,
} from "../../types/Admin/Response.types";
import { stripHtmlFromString } from "../../utils/stripHtmlFromString";

const CalculatorInputs = ({
  options,
  stepInd,
  subStep,
  disabled,
  data,
  tieUpData,
  type,
}: ICalculatorFieldProps) => {
  const { values, handleChange } =
    useFormikContext<ICalculatorFormValuesProps>();

  const checkForCondition = useCallback(() => {
    if (typeof values.questionsArr[stepInd].answer === "string") {
      return (
        subStep &&
        subStep[0].condition.includes(
          values.questionsArr[stepInd].answer as string
        )
      );
    }
    return (
      subStep &&
      subStep[0].condition.some((r) =>
        values.questionsArr[stepInd].answer.includes(r)
      )
    );
  }, [stepInd, subStep, values.questionsArr]);

  useEffect(() => {
    const disabledArr = data.map((el) => {
      const tieUpIsExist = el.tieUpSteps && el.tieUpSteps.length > 0;

      if (tieUpIsExist && typeof el.tieUpSteps[0].number === "number") {
        return typeof values.questionsArr[el.tieUpSteps[0].number].answer ===
          "string"
          ? !el.tieUpSteps[0].condition.includes(
              values.questionsArr[el.tieUpSteps[0].number].answer as string
            )
          : !el.tieUpSteps[0].condition.some((item) =>
              (
                values.questionsArr[el.tieUpSteps[0].number as number]
                  .answer as Array<string>
              ).includes(item)
            );
      }
    });

    disabledArr.map(
      (item, idx) => (values.questionsArr[idx].tieUpDisabled = item)
    );
  }, [data, values]);

  useEffect(() => {
    if (!(subStep && subStep.length > 0 && checkForCondition)) {
      values.questionsArr[stepInd].subStepAnswer = "";
    }
  }, [subStep, stepInd, values, checkForCondition]);

  const answer = () => {
    if (
      disabled &&
      tieUpData &&
      typeof tieUpData.number === "number" &&
      tieUpData.relatedAnswer.length > 0
    ) {
      return typeof tieUpData.relatedAnswer === "string" ? (
        <>
          {"You’ve chosen "}
          <span
            dangerouslySetInnerHTML={{
              __html: stripHtmlFromString(tieUpData.relatedAnswer),
            }}
          />
        </>
      ) : (
        <>
          {"You’ve chosen "}
          <span
            dangerouslySetInnerHTML={{
              __html: tieUpData.relatedAnswer
                .map((el) => stripHtmlFromString(el))
                .join(", "),
            }}
          />
        </>
      );
    } else {
      return "You haven't chosen any option";
    }
  };

  return (
    <Styled.CalculatorFieldWrapper className="input">
      <Styled.LeftBlackBorder className="input" />
      <Styled.CalculatorInputFields>
        <>
          {(disabled && tieUpData && typeof tieUpData.number === "number" && (
            <Styled.Disabled className={disabled ? "disabled" : undefined}>
              <div>
                {answer()} in <span>{tieUpData.number + 1}</span> question, so
                this one is disabled.
              </div>
            </Styled.Disabled>
          )) ||
            null}
          <Styled.CalculatorInputsFieldsWrapper className="input">
            <Styled.InputsWrapper>
              {options.map((input, idx) => (
                <OptionWrapper key={idx}>
                  <TieUpLabel
                    className={type}
                    htmlFor={`${type}${input.label}${idx}`}
                  >
                    <TieUpInput
                      type={type}
                      name={`questionsArr[${stepInd}].answer`}
                      id={`${type}${input.label}${idx}`}
                      value={input.label}
                      className={type}
                      onChange={handleChange}
                    />
                    {type === "radio" && <TieUpShadowWrapper />}
                    <span>{parse(input.label)}</span>
                  </TieUpLabel>
                </OptionWrapper>
              ))}
              {subStep && subStep.length > 0 && checkForCondition() && (
                <Styled.SubStepWrapper>
                  <Styled.HorizontalLine />
                  {subStep[0].title.replace("<p><br></p>", "") !== "" && (
                    <Styled.SubStepTitle
                      dangerouslySetInnerHTML={{ __html: subStep[0].title }}
                    />
                  )}
                  {subStep[0].options.map((subInput, idx) => (
                    <OptionWrapper key={idx}>
                      <TieUpLabel
                        htmlFor={`${subStep[0].type}${subInput.label}${idx}`}
                      >
                        {subStep[0].type === "radio" && <TieUpShadowWrapper />}
                        <TieUpInput
                          type={subStep[0].type}
                          id={`${subStep[0].type}${subInput.label}${idx}`}
                          name={`questionsArr[${stepInd}].subStepAnswer`}
                          value={subInput.label}
                          className={subStep[0].type}
                          onChange={handleChange}
                        />
                        <span>{parse(subInput.label)}</span>
                      </TieUpLabel>
                    </OptionWrapper>
                  ))}
                </Styled.SubStepWrapper>
              )}
            </Styled.InputsWrapper>
          </Styled.CalculatorInputsFieldsWrapper>
        </>
      </Styled.CalculatorInputFields>
    </Styled.CalculatorFieldWrapper>
  );
};

export default CalculatorInputs;
