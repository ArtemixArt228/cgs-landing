import React, { CSSProperties } from "react";
import dynamic from "next/dynamic";
import { Field, FieldInputProps, FieldProps } from "formik";
import { SunEditorReactProps } from "suneditor-react/dist/types/SunEditorReactProps";

import * as Styled from "../../styles/AdminPage";
import "suneditor/dist/css/suneditor.min.css";

import { BASIC_OPTIONS } from "../../consts/text-editor.const";

interface ITextEditorProps {
  header?: string;
  name?: string;
  props?: SunEditorReactProps;
  subtitleStyle?: CSSProperties;
  isError?: boolean;
}

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const TextEditor = ({
  name = "",
  header,
  props,
  subtitleStyle,
  isError = false,
}: ITextEditorProps) => {
  const handleChange = (content: string, field: FieldInputProps<any>) => {
    field.onChange(field.name)(content);
  };

  return (
    <div style={{ width: "100%" }}>
      <Styled.AdminSubTitle style={subtitleStyle}>
        {header}
      </Styled.AdminSubTitle>
      <Styled.TextEditorContainer isError={isError}>
        <Field name={name}>
          {({ field }: FieldProps) => (
            <SunEditor
              name={field.name}
              defaultValue={field.value}
              setContents={field.value}
              onChange={(content) => handleChange(content, field)}
              lang="en"
              setOptions={BASIC_OPTIONS}
              {...props}
            />
          )}
        </Field>
      </Styled.TextEditorContainer>
    </div>
  );
};

export default TextEditor;
