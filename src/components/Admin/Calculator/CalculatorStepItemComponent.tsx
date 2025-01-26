import React, { useEffect, useState } from "react";
import { FieldArray, useFormikContext } from "formik";
import { Plugin } from "suneditor/src/plugins/Plugin";

import AdminBlockDropDown from "../Global/AdminBlockDropDown";
import SaveBtn from "../Global/SaveBtn";
import CalculatoSubStepItem from "./CalculatoSubStepItem";
import TextEditor from "../../TextEditor/TextEditor";
import { letterCaseSubmenu } from "./letterCaseSubmenuPlugin";
import { letterWeightSubmenu } from "./letterWeightSubmenuPlugin";
import CalculatorOptionTypeSelect from "./CalculatorOptionTypeSelect";
import CalculatorQuestionItem from "./CalculatorQuestionItem";
import CalculatoTieUpItem from "./CalculatorTieUpItem";

import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import {
  ICalculatorStep,
  ICalculatorSubStep,
  ICalculatorTieUpStep,
} from "../../../types/Admin/Response.types";
import { AdminSubTitle } from "../../../styles/AdminPage";
import { emptyCalculatorOption } from "../../../utils/variables";

interface ICalculatorStepItemComponentProps {
  isBlockchain: boolean;
  index: number;
  submitKey: boolean;
  data: ICalculatorStep[];
}

const CalculatorStepItemComponent = ({
  data,
  index,
  submitKey,
}: ICalculatorStepItemComponentProps) => {
  const [plugins, setPlugins] = useState<
    Array<Plugin> | Record<string, Plugin>
  >();
  const { values, setFieldValue, handleSubmit } =
    useFormikContext<ICalculatorStep>();

  useEffect(() => {
    import("suneditor/src/plugins").then((plugs: any) => setPlugins(plugs));
  }, []);

  const titleEditorOptions = plugins && {
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

  const handleAddSubStep = () => {
    setFieldValue("subSteps", [
      {
        title: "",
        condition: [],
        type: "radio",
        options: [{ ...emptyCalculatorOption }],
      },
    ]);
  };

  const handleMinusSubStep = () => {
    setFieldValue("subSteps", [] as ICalculatorSubStep[]);
  };

  const handleAddTieUpStep = () => {
    setFieldValue("tieUpSteps", [
      {
        number: null,
        condition: [],
      },
    ]);
  };

  const handleMinusTieUp = () => {
    setFieldValue("tieUpSteps", [] as ICalculatorTieUpStep[]);
  };

  const handleSubmitButtonClick = () => {
    handleSubmit();
  };

  const subStepBtnIsDisabled = values.subSteps.length !== 0;

  const subStepAddButtonClassName = subStepBtnIsDisabled
    ? "disabled"
    : undefined;

  const tieUpStepBtnIsDisabled = values.tieUpSteps.length !== 0;

  const tieUpStepAddButtonClassName = tieUpStepBtnIsDisabled
    ? "tieup disabled"
    : "tieup";

  return (
    (plugins && (
      <AdminBlockDropDown title={`STEP ${index + 1}`}>
        <Styled.TransparentTextEditorWrapper>
          <TextEditor
            name={`title`}
            props={{
              height: "57px",
              width: "480px",
              setDefaultStyle: "position:relative; z-index:4",
              setOptions: titleEditorOptions,
            }}
          />
        </Styled.TransparentTextEditorWrapper>
        <AdminSubTitle style={{ marginTop: "24px" }}>Question</AdminSubTitle>
        <CalculatorOptionTypeSelect type={values.type} />
        <Styled.CalculatorQuestionInputsWrapper>
          <FieldArray name="options">
            {({ insert, remove }) =>
              values.options.map((option, idx) => (
                <CalculatorQuestionItem
                  optionsLength={values.options.length}
                  type={values.type}
                  onAdd={() => insert(idx + 1, emptyCalculatorOption)}
                  onDelete={() => remove(idx)}
                  key={idx}
                  option={option}
                  idx={idx}
                />
              ))
            }
          </FieldArray>
        </Styled.CalculatorQuestionInputsWrapper>
        <Styled.ButtonWrapper>
          {index !== 0 && (
            <Styled.ButtonsRowContainer>
              <Styled.AddButton
                type="button"
                onClick={handleAddTieUpStep}
                className={tieUpStepAddButtonClassName}
              >
                +
              </Styled.AddButton>
              <Styled.MinusButton type="button" onClick={handleMinusTieUp}>
                -
              </Styled.MinusButton>
              <Styled.ButtonsText>Tie up question</Styled.ButtonsText>
            </Styled.ButtonsRowContainer>
          )}
          <Styled.ButtonsRowContainer>
            <Styled.AddButton
              disabled={subStepBtnIsDisabled}
              className={subStepAddButtonClassName}
              type="button"
              onClick={handleAddSubStep}
            >
              +
            </Styled.AddButton>
            <Styled.MinusButton type="button" onClick={handleMinusSubStep}>
              -
            </Styled.MinusButton>
            <Styled.ButtonsText>Sub-question</Styled.ButtonsText>
          </Styled.ButtonsRowContainer>
        </Styled.ButtonWrapper>
        {values.tieUpSteps.length > 0 && (
          <CalculatoTieUpItem
            current={index}
            data={data}
            key={`step item ${submitKey}`}
          />
        )}
        {values.subSteps.length > 0 && (
          <CalculatoSubStepItem key={`sub step item ${submitKey}`} />
        )}
        <SaveBtn
          handleClick={handleSubmitButtonClick}
          style={{ marginBlock: "37px 50px" }}
        />
      </AdminBlockDropDown>
    )) ||
    null
  );
};

export default CalculatorStepItemComponent;
