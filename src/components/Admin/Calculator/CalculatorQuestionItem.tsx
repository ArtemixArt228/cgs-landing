import React, { useEffect, useState } from "react";
import { useFormikContext } from "formik";
import { Plugin } from "suneditor/src/plugins/Plugin";

import TextEditor from "../../TextEditor/TextEditor";
import CalculatorTypeSelect from "./CalculatorTypeSelect";
import CalculatorMultiplyRolesSelect from "./CalculatorMultiplyRolesSelect";
import { letterCaseSubmenu } from "./letterCaseSubmenuPlugin";
import { letterWeightSubmenu } from "./letterWeightSubmenuPlugin";

import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import {
  ICalculatorStep,
  IStepOptions,
} from "../../../types/Admin/Response.types";

interface ICalculatorQuestionItemProps {
  optionsLength: number;
  idx: number;
  onAdd: () => void;
  onDelete: () => void;
  nameBefore?: string;
  option: IStepOptions;
  type: string;
}

const CalculatorQuestionItem = ({
  optionsLength,
  idx,
  option,
  onAdd,
  onDelete,
  nameBefore,
  type,
}: ICalculatorQuestionItemProps) => {
  const { handleChange } = useFormikContext<ICalculatorStep>();
  const [plugins, setPlugins] = useState<
    Array<Plugin> | Record<string, Plugin>
  >();

  useEffect(() => {
    import("suneditor/src/plugins").then((plugs: any) => setPlugins(plugs));
  }, []);

  const textEditorOptions = plugins && {
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

  const questionNameBefore = nameBefore || "";

  const zIndex = optionsLength - idx;

  return (
    (plugins && (
      <Styled.CalculatorQuestionWrapper>
        <Styled.TextEditorTextContainer className={type}>
          <TextEditor
            name={`${questionNameBefore}options[${idx}].label`}
            props={{
              height: "auto",
              width: "480px",
              setDefaultStyle: `position:relative; z-index:${zIndex}`,
              setContents: option.label,
              setOptions: textEditorOptions,
            }}
          />
        </Styled.TextEditorTextContainer>
        <Styled.OptionInputsWrapper>
          <Styled.OptionDeleteButton onClick={onDelete}>
            delete
          </Styled.OptionDeleteButton>
          <Styled.OptionInputsRowWrapper>
            <Styled.OptionInput
              className="hours"
              name={`${questionNameBefore}options[${idx}].${
                option.isRate ? "hourRate" : "hours"
              }`}
              placeholder={option.isRate ? "hour rate" : "hours"}
              values={option.isRate ? option.hourRate : option.hours}
              onChange={handleChange}
              type="number"
              min={0}
            />
            <CalculatorMultiplyRolesSelect
              name={`${questionNameBefore}options[${idx}].roles`}
              defaultHeader="Specialist"
              value={option.roles}
            />
            <Styled.OptionInput
              className="coef"
              name={`${questionNameBefore}options[${idx}].endRole.coef`}
              placeholder="coeffiecient roles"
              onChange={handleChange}
              type="number"
              values={option.endRole?.coef}
              min={0}
            />
            <CalculatorTypeSelect
              name={`${questionNameBefore}options[${idx}].endRole.role`}
              zIndex={zIndex}
              header={option.endRole?.role}
            />
            <Styled.OptionInput
              className="coef"
              name={`${questionNameBefore}options[${idx}].endCoef`}
              placeholder="coefficient final"
              onChange={handleChange}
              type="number"
              values={option.endCoef}
              min={0}
            />
            <Styled.CalculatorAddButton onClick={onAdd}>
              + add next
            </Styled.CalculatorAddButton>
          </Styled.OptionInputsRowWrapper>
        </Styled.OptionInputsWrapper>
      </Styled.CalculatorQuestionWrapper>
    )) ||
    null
  );
};

export default CalculatorQuestionItem;
