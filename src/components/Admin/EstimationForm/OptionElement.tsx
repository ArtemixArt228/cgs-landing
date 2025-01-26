import { ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { Plugin } from "suneditor/src/plugins/Plugin";

import TextEditor from "../../TextEditor/TextEditor";
import { letterCaseSubmenu } from "../Calculator/letterCaseSubmenuPlugin";
import { letterWeightSubmenu } from "../Calculator/letterWeightSubmenuPlugin";

import {
  CheckBoxType,
  IQuestionOptionElementProps,
} from "../../../types/Admin/AdminEstimationForm.types";
import { AdminDeleteText, Box, TextWrapper } from "../../../styles/AdminPage";
import * as StyledCalc from "../../../styles/Calculator/CalculatorAdmin.styled";

const OptionElement = ({
  option,
  i,
  remove,
  optionsLength,
  optionsType,
}: IQuestionOptionElementProps) => {
  const [plugins, setPlugins] = useState<
    Array<Plugin> | Record<string, Plugin>
  >();

  const textEditorOptions = {
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

  const removeItemHandle = () => {
    if (optionsLength) {
      remove && remove(i);
    }
  };

  const getClassName = (optionsType: CheckBoxType) => {
    switch (optionsType) {
      case "RADIO_BUTTON":
        return "radio_btn";
      case "CHECKBOX":
        return "checkbox_btn";
      default:
        return "";
    }
  };

  useEffect(() => {
    import("suneditor/src/plugins").then((plugs: any) => setPlugins(plugs));
  }, []);

  return (
    <Box>
      <TextWrapper
        contentType={optionsType}
        className={getClassName(optionsType)}
      >
        <StyledCalc.TransparentTextEditorWrapper>
          <TextEditor
            name={`options.${i}.text`}
            props={{
              height: "37px",
              width: "507px",
              defaultValue: option.text,
              setDefaultStyle: `position:relative; z-index:${
                optionsLength - 1 === i && optionsLength > 2
                  ? 3
                  : optionsLength - i + 3
              }`,
              setOptions: textEditorOptions,
            }}
          />
        </StyledCalc.TransparentTextEditorWrapper>
      </TextWrapper>
      <ErrorMessage name={`options.${i}.text`} />
      {remove && (
        <AdminDeleteText type="button" onClick={removeItemHandle}>
          delete
        </AdminDeleteText>
      )}
    </Box>
  );
};

export default OptionElement;
