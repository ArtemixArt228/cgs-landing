import { FieldArray } from "formik";
import React, { ChangeEvent } from "react";
import { renderInputs } from "./renderInputs";

interface IInputs {
  name: string;
  state: any;
  customProps?: any;
  onChangeFunction: (e: ChangeEvent<any>) => void;
}

const Inputs = ({ name, state, onChangeFunction, customProps }: IInputs) => {
  return (
    <FieldArray name={name}>
      {(props) =>
        renderInputs({
          props: { ...props, ...customProps },
          state,
          onChangeFunction,
        })
      }
    </FieldArray>
  );
};

export default Inputs;
