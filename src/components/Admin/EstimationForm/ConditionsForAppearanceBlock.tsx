import { FieldArray } from "formik";
import React, { useState, memo, useEffect } from "react";
import { Box } from "../../../styles/AdminPage";
import {
  TieUpInput,
  TieUpLabel,
} from "../../../styles/Calculator/CalculatorAdmin.styled";
import {
  EstimationConditionsForAppearanceHeader,
  StyledConditionsForAppearanceBlock,
} from "../../../styles/EstimationForm.styled";
import {
  IAcceptedOptions,
  IConditionsForAppearance,
  IEstimationFormPages,
  IEstimationFormQuestionOptions,
  IMenuOption,
} from "../../../types/Admin/AdminEstimationForm.types";
import {
  pagesValidation,
  questionValidation,
} from "../../../utils/conditionforAppearance";
import EstimationDropdown from "./EstimationDropdown";

interface IConditionsForAppearanceBlockProps {
  pages: IEstimationFormPages;
  conditionsForAppearance: IConditionsForAppearance | null;
  currentPage: number;
  currentQuestion: number;
  updateValues: (
    field: string,
    value:
      | IConditionsForAppearance
      | null
      | string
      | IEstimationFormQuestionOptions[],
    shouldValidate?: boolean
  ) => void;
}

const ConditionsForAppearanceBlock = ({
  pages,
  conditionsForAppearance,
  currentPage,
  currentQuestion,
  updateValues,
}: IConditionsForAppearanceBlockProps) => {
  const menuPageOptions: IMenuOption[] = pagesValidation(
    currentQuestion,
    pages,
    currentPage
  );

  const [pageValue, setPageValue] = useState<IMenuOption>(
    conditionsForAppearance?.pageId
      ? menuPageOptions[conditionsForAppearance.pageIndex]
      : menuPageOptions[currentPage]
      ? menuPageOptions[currentPage]
      : menuPageOptions[currentPage - 1]
  );

  const menuQuestionOptions: IMenuOption[] | null = questionValidation(
    currentPage,
    pageValue,
    currentQuestion,
    pages
  );

  const [questionValue, setQuestionValue] = useState<IMenuOption | null>(
    conditionsForAppearance?.questionKey && menuQuestionOptions
      ? menuQuestionOptions[conditionsForAppearance.questionIndex]
      : !menuQuestionOptions
      ? null
      : menuQuestionOptions[0]
  );

  const [defaultAcceptedOptions, setDefaultAcceptedOptions] = useState<
    IAcceptedOptions[] | null
  >(conditionsForAppearance?.acceptedOptions || null);

  useEffect(() => {
    if (conditionsForAppearance?.acceptedOptions) {
      setDefaultAcceptedOptions(conditionsForAppearance?.acceptedOptions);
    } else {
      setDefaultAcceptedOptions(null);
    }
  }, []);

  useEffect(() => {
    if (pageValue && questionValue) {
      if (pageValue.index !== conditionsForAppearance?.pageIndex) {
        updateValues("conditionsForAppearance.pageId", pageValue.id);
        updateValues(
          "conditionsForAppearance.acceptedOptions",
          pages.pages[pageValue.index].questions[questionValue.index].options
        );
      }

      if (questionValue.index !== conditionsForAppearance?.questionIndex) {
        updateValues("conditionsForAppearance.questionKey", questionValue.id);
        updateValues(
          "conditionsForAppearance.acceptedOptions",
          pages.pages[pageValue.index].questions[questionValue.index].options
        );
      }

      if (
        questionValue.index === conditionsForAppearance?.questionIndex &&
        pageValue.index === conditionsForAppearance?.pageIndex
      ) {
        updateValues("conditionsForAppearance.pageId", pageValue.id);
        updateValues("conditionsForAppearance.questionKey", questionValue.id);
        updateValues(
          "conditionsForAppearance.acceptedOptions",
          defaultAcceptedOptions
        );
      }
    }
  }, [
    pageValue?.id,
    questionValue?.id,
    conditionsForAppearance?.pageIndex,
    conditionsForAppearance?.questionIndex,
    pageValue,
    pages.pages,
    questionValue,
    updateValues,
  ]);

  return (
    <>
      {pageValue && questionValue && (
        <StyledConditionsForAppearanceBlock>
          <Box>
            <EstimationDropdown
              size="primary"
              menu={menuPageOptions}
              value={pageValue || "select a page"}
              setValue={setPageValue}
            />
            <EstimationDropdown
              size="primary"
              menu={menuQuestionOptions as IMenuOption[]}
              value={questionValue || "select a question"}
              setValue={setQuestionValue}
            />
          </Box>
          <EstimationConditionsForAppearanceHeader>
            If an answer is selected:
          </EstimationConditionsForAppearanceHeader>

          <FieldArray name="conditionsForAppearance.acceptedOptions">
            {() => {
              return (
                <>
                  {conditionsForAppearance &&
                    !!conditionsForAppearance.acceptedOptions?.length &&
                    conditionsForAppearance.acceptedOptions.map(
                      (acceptedOption, i) => {
                        return (
                          <Box
                            key={"CFA" + acceptedOption.optionKey}
                            margin="0 0 10px 0"
                            align="center"
                          >
                            <TieUpInput
                              type="checkbox"
                              className={"admin-radio"}
                              name={`conditionsForAppearance.acceptedOptions.${i}.isSelected`}
                              id={`${acceptedOption.optionKey}${currentQuestion}${currentPage}`}
                            />
                            <TieUpLabel
                              dangerouslySetInnerHTML={{
                                __html: acceptedOption.text,
                              }}
                              htmlFor={`${acceptedOption.optionKey}${currentQuestion}${currentPage}`}
                              style={{ marginLeft: "8px" }}
                            />
                          </Box>
                        );
                      }
                    )}
                </>
              );
            }}
          </FieldArray>
        </StyledConditionsForAppearanceBlock>
      )}
    </>
  );
};

export default memo(ConditionsForAppearanceBlock);
