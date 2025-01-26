import { FieldInputProps } from "formik";
import React from "react";
import SunEditor from "suneditor-react";
import { SunEditorReactProps } from "suneditor-react/dist/types/SunEditorReactProps";
import SetOptions from "suneditor-react/dist/types/SetOptions";

interface IEstimationFormInputFieldProps {
  props?: SunEditorReactProps;
  field: FieldInputProps<any>;
}

const EstimationFormInputField = ({
  field,
  props,
}: IEstimationFormInputFieldProps) => {
  let localContent = field.value;

  const sunEditorChangesHandler = (content: string) => {
    localContent = content;
  };

  const inputBlurHandler = () => {
    field.onChange(field.name)(localContent);
  };

  const options: SetOptions = {
    font: ["NAMU"],
    linkRelDefault: {
      default: undefined,
      check_new_window: "nofollow noopener",
    },
    buttonList: [
      [
        "formatBlock",
        "font",
        "fontSize",
        "fontColor",
        "align",
        "paragraphStyle",
        "blockquote",
      ],
      ["bold", "underline", "italic", "strike", "subscript", "superscript"],
      ["removeFormat"],
      ["outdent", "indent"],
      ["list"],
      ["link", "image", "video"],
      ["codeView"],
    ],
  };

  return (
    <SunEditor
      autoFocus={false}
      name={field.name}
      defaultValue={localContent}
      onChange={sunEditorChangesHandler}
      onBlur={inputBlurHandler}
      lang="en"
      setOptions={options}
      {...props}
    />
  );
};

export default EstimationFormInputField;
