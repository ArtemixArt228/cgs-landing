import { FieldArray, useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import { Plugin } from "suneditor/src/plugins/Plugin";

import TextEditor from "../../TextEditor/TextEditor";
import CalculatorInputItem from "./CalculatorInputItem";
import { inputSubmenu } from "./inputSubmenuPlugin";
import CalculatorQuestionItem from "./CalculatorQuestionItem";
import { letterCaseSubmenu } from "./letterCaseSubmenuPlugin";
import CalculatorOptionTypeSelect from "./CalculatorOptionTypeSelect";
import { letterWeightSubmenu } from "./letterWeightSubmenuPlugin";

import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import { ICalculatorStep } from "../../../types/Admin/Response.types";
import { emptyCalculatorOption } from "../../../utils/variables";

const CalculatorSubStepItem = () => {
  const { values } = useFormikContext<ICalculatorStep>();
  const [plugins, setPlugins] = useState<
    Array<Plugin> | Record<string, Plugin>
  >();

  const titleEditorOptions = plugins && {
    font: ["NAMU"],
    linkRelDefault: {
      default: undefined,
      check_new_window: "nofollow noopener",
    },
    addTagsWhitelist: "label|input",
    plugins: {
      letterCaseSubmenu,
      letterWeightSubmenu,
      inputSubmenu,
      ...plugins,
    },
    buttonList: [
      ["fontColor", "fontSize"],
      ["letterCase"],
      ["letterWeight"],
      ["input"],
      ["removeFormat"],
      ["codeView"],
    ],
    defaultStyle: "position:relative; z-index:2",
  };

  useEffect(() => {
    import("suneditor/src/plugins").then((plugs: any) => setPlugins(plugs));
  }, []);

  return (
    (plugins && (
      <Styled.SubStepContentContainer>
        <Styled.StepSubTitle>Sub-question</Styled.StepSubTitle>
        <Styled.SubStepSubtitle>
          If an answer is selected:
        </Styled.SubStepSubtitle>
        <Styled.InputsWrapper>
          {values.subSteps &&
            values.subSteps.length > 0 &&
            values.options.map((el, ind) => (
              <CalculatorInputItem
                type={values.type}
                ind={ind}
                item={el}
                key={ind}
              />
            ))}
        </Styled.InputsWrapper>
        <CalculatorOptionTypeSelect
          type={values.subSteps[0].type}
          nameBefore="subSteps[0]."
        />
        {values.subSteps.length > 0 && (
          <>
            <Styled.TransparentTextEditorWrapper>
              <TextEditor
                name={`subSteps[0].title`}
                props={{
                  setDefaultStyle: "position: relative; z-index: 5;",
                  width: "559px",
                  setOptions: titleEditorOptions,
                }}
              />
            </Styled.TransparentTextEditorWrapper>
            <Styled.TransparentTextEditorWrapper className="text">
              <FieldArray name="subSteps[0].options">
                {({ insert, remove }) =>
                  values.subSteps[0].options.map((option, idx) => (
                    <CalculatorQuestionItem
                      optionsLength={values.subSteps[0].options.length}
                      type={values.subSteps[0].type}
                      nameBefore="subSteps[0]."
                      key={idx}
                      onAdd={() => insert(idx + 1, emptyCalculatorOption)}
                      onDelete={() => remove(idx)}
                      idx={idx}
                      option={option}
                    />
                  ))
                }
              </FieldArray>
            </Styled.TransparentTextEditorWrapper>
          </>
        )}
      </Styled.SubStepContentContainer>
    )) ||
    null
  );
};

export default CalculatorSubStepItem;
