import { Field, FieldProps } from "formik";
import React from "react";
import { SunEditorReactProps } from "suneditor-react/dist/types/SunEditorReactProps";
import * as Styled from "../../../styles/EstimationForm.styled";
import "suneditor/dist/css/suneditor.min.css";
import EstimationFormInputField from "./EstimationFormInputField";
interface ITextEditorPropsOptions {
  text: string;
}

interface ITextEditorProps {
  optionValue?: string;
  questionOptions?: ITextEditorPropsOptions[];
  header?: string;
  name?: string | null;
  props?: SunEditorReactProps;
}

const EstimationFormInput = ({
  name = "",
  header,
  props,
}: ITextEditorProps) => {
  return (
    <>
      <Styled.EstimationFormInputHeader>
        {header}
      </Styled.EstimationFormInputHeader>
      <Field name={name}>
        {({ field }: FieldProps) => (
          <EstimationFormInputField field={field} props={props} />
        )}
      </Field>
    </>
  );
};

export default EstimationFormInput;
