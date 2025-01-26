import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { Plugin } from "suneditor/src/plugins/Plugin";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { adminCalculatorService } from "../../../services/adminCalculator";
import AdminBlockDropDown from "../Global/AdminBlockDropDown";
import SaveBtn from "../Global/SaveBtn";
import { letterCaseSubmenu } from "./letterCaseSubmenuPlugin";
import { inputSubmenu } from "./inputSubmenuPlugin";
import { letterWeightSubmenu } from "./letterWeightSubmenuPlugin";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import TextEditor from "../../TextEditor/TextEditor";

import { queryKeys } from "../../../consts/queryKeys";
import { ICalculator } from "../../../types/Admin/Response.types";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";

const CalculatorResultsForm = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICalculator>([
    queryKeys.getCalculatorData,
  ]);

  const { mutateAsync } = useMutation(
    [queryKeys.updateCalculatorData],
    async (data: ICalculator) => {
      return await toast.promise(
        adminCalculatorService.updateCalculatorData(data),
        {
          pending: "Pending update",
          success: "Calculator results data updated successfully 👌",
          error: "Some things went wrong 🤯",
        }
      );
    }
  );
  const [plugins, setPlugins] = useState<
    Array<Plugin> | Record<string, Plugin>
  >();

  const handleSubmit = async (values: ICalculator) => {
    document.body.style.cursor = "wait";
    await mutateAsync(values);
    queryClient.invalidateQueries([queryKeys.getCalculatorData]);
    document.body.style.cursor = "auto";
  };

  const editorOptions = plugins && {
    font: ["NAMU"],
    linkRelDefault: {
      default: undefined,
      check_new_window: "nofollow noopener",
    },
    addTagsWhitelist: "label|input",
    plugins: {
      letterCaseSubmenu,
      inputSubmenu,
      letterWeightSubmenu,
      ...plugins,
    },
    buttonList: [
      ["fontColor", "fontSize"],
      ["letterWeight"],
      ["letterCase"],
      ["input"],
      ["removeFormat"],
      ["codeView"],
    ],
  };

  useEffect(() => {
    import("suneditor/src/plugins").then((plugs: any) => setPlugins(plugs));
  }, []);

  return data && plugins ? (
    <Formik initialValues={data!} onSubmit={handleSubmit}>
      {({ values, handleChange, handleSubmit }) => (
        <AdminBlockDropDown title="RESULTS">
          <Styled.InputWrapper>
            <Styled.TransparentTextEditorWrapper>
              <TextEditor
                header="Text after results"
                name="resultMessage"
                props={{
                  width: "559px",
                  setOptions: editorOptions,
                }}
              />
            </Styled.TransparentTextEditorWrapper>
            <Styled.TransparentTextEditorWrapper className="text">
              <SubHeaderWithInput
                header="E-mail placeholder"
                name="email"
                inputValue={values.email}
                onChangeFunction={handleChange}
                inputStyle={{ width: "559px" }}
              />
            </Styled.TransparentTextEditorWrapper>
            <SaveBtn
              handleClick={handleSubmit}
              style={{ marginTop: "37px", marginBottom: "50px" }}
            />
          </Styled.InputWrapper>
        </AdminBlockDropDown>
      )}
    </Formik>
  ) : null;
};

export default CalculatorResultsForm;
