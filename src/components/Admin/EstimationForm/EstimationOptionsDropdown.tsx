import React from "react";
import { Field, FieldProps } from "formik";

import AdminDropDown from "../Global/AdminDropDown";

const options = [
  { optionType: "RADIO_BUTTON", optionText: "Radio button" },
  { optionType: "CHECKBOX", optionText: "Checkbox" },
  { optionType: "TEXT", optionText: "< Text >" },
];

const EstimationOptionsDropdown = () => {
  return (
    <Field name="optionsType">
      {({ field }: FieldProps) => {
        return (
          <AdminDropDown
            size="primary"
            optionsMenu={options}
            value={field.value || "select an option"}
            setValue={field.onChange(field.name)}
          />
        );
      }}
    </Field>
  );
};
export default EstimationOptionsDropdown;
