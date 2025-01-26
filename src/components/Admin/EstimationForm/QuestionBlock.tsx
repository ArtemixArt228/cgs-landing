import React, { memo, useEffect, useState } from "react";
import { Plugin } from "suneditor/src/plugins/Plugin";
import { FieldArray, Formik } from "formik";

import AdminBlackButton from "../Global/AdminBlackButton";
import AddOptionInput from "./AddOptionInput";
import EstimationDropdown from "./EstimationOptionsDropdown";
import AdditinalAttributesBlock from "./AdditinalAttributesBlock";
import SplitColumns from "./SplitColumns";
import OptionElement from "./OptionElement";
import IsRequired from "./IsRequired";
import { letterCaseSubmenu } from "../Calculator/letterCaseSubmenuPlugin";
import { letterWeightSubmenu } from "../Calculator/letterWeightSubmenuPlugin";
import TextEditor from "../../TextEditor/TextEditor";

import * as Styled from "../../../styles/EstimationForm.styled";
import * as StyledCalc from "../../../styles/Calculator/CalculatorAdmin.styled";
import * as AdminPageStyled from "../../../styles/AdminPage";
import {
  IEstimationFormQuestion,
  IQuestionBlockProps,
} from "../../../types/Admin/AdminEstimationForm.types";
import { EstimationDeleteQuestion } from "../../../styles/EstimationForm.styled";

const QuestionBlock = ({
  question,
  name,
  index,
  onRemoveHandler,
  saveQuestion,
  pages,
  currentPage,
}: IQuestionBlockProps) => {
  const [plugins, setPlugins] = useState<
    Array<Plugin> | Record<string, Plugin>
  >();

  useEffect(() => {
    import("suneditor/src/plugins").then((plugs: any) => setPlugins(plugs));
  }, []);

  const titleEditorOptions = {
    font: ["NAMU"],
    linkRelDefault: {
      default: undefined,
      check_new_window: "nofollow noopener",
    },
    addTagsWhitelist: "label|input",
    plugins: { letterCaseSubmenu, letterWeightSubmenu, ...plugins },
    buttonList: [
      ["fontColor", "fontSize"],
      ["letterCase"],
      ["letterWeight"],
      ["removeFormat"],
      ["codeView"],
    ],
  };

  const onDeleteQuestion = () => {
    onRemoveHandler(index ? index : 0);
  };

  const onSubmitHandler = (values: IEstimationFormQuestion) => {
    saveQuestion(values, index ? index : 0);
  };

  return (
    <>
      <Styled.QuestionBlockHeader>
        Question {index + 1}
      </Styled.QuestionBlockHeader>
      <Formik
        initialValues={{
          ...question,
          title: name,
          conditionsForAppearance: question.conditionsForAppearance,
          isConditionsForAppearance: !!question.conditionsForAppearance,
        }}
        onSubmit={onSubmitHandler}
        validateOnChange={false}
        validationSchema={false}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Styled.QuestionBlock>
              <StyledCalc.TransparentTextEditorWrapper>
                <TextEditor
                  name={`title`}
                  props={{
                    height: "57px",
                    width: "874px",
                    setDefaultStyle: "position:relative; z-index:50",
                    setOptions: titleEditorOptions,
                  }}
                />
              </StyledCalc.TransparentTextEditorWrapper>
              {props.errors.title && props.touched.title ? (
                <div>{props.errors.title}</div>
              ) : null}

              <Styled.EstimationFormDropDownWrapper>
                <EstimationDropdown />
                <SplitColumns
                  currentQuestion={
                    question.questionKey ? question.questionKey : String(index)
                  }
                  currentPage={String(currentPage) + question.questionKey}
                />
                <IsRequired
                  currentQuestion={
                    question.questionKey ? question.questionKey : String(index)
                  }
                  currentPage={String(currentPage) + question.questionKey}
                />
              </Styled.EstimationFormDropDownWrapper>

              <FieldArray name="options">
                {({ push, remove }) => {
                  return (
                    <>
                      {props.values.options &&
                      props.values.optionsType !== "TEXT"
                        ? props.values.options.map(
                            (option, i, optionsArray) => (
                              <OptionElement
                                key={option?.optionKey}
                                option={option}
                                i={i}
                                remove={remove}
                                optionsLength={optionsArray.length}
                                optionsType={props.values.optionsType}
                              />
                            )
                          )
                        : null}
                      {props.values.optionsType !== "TEXT" && (
                        <AddOptionInput
                          type={props.values.optionsType}
                          onClickHandler={() => {
                            push({ text: "" });
                          }}
                        />
                      )}
                      {props.values.optionsType === "TEXT" && (
                        <OptionElement
                          key={
                            props?.values?.options?.[0]?.optionKey ||
                            "option_key"
                          }
                          option={props?.values?.options?.[0] || { text: "" }}
                          i={0}
                          optionsLength={1}
                          optionsType={"TEXT"}
                        />
                      )}
                    </>
                  );
                }}
              </FieldArray>

              <AdminPageStyled.StyledLine />

              <AdditinalAttributesBlock
                isConditionsForAppearance={
                  props.values.isConditionsForAppearance
                }
                isHiddenText={props.values.isHiddenText}
                optionsLength={props.values.options.length}
                pages={pages}
                conditionsForAppearance={props.values.conditionsForAppearance}
                currentPage={currentPage}
                currentQuestion={index}
                updateValues={props.setFieldValue}
              />
              <AdminPageStyled.Box justify="space-between" align="center">
                <AdminBlackButton
                  type="submit"
                  text="Save question"
                  size="estimationForm"
                />
                <EstimationDeleteQuestion onClick={onDeleteQuestion}>
                  Delete question
                </EstimationDeleteQuestion>
              </AdminPageStyled.Box>
            </Styled.QuestionBlock>
          </form>
        )}
      </Formik>
    </>
  );
};

export default memo(QuestionBlock);
