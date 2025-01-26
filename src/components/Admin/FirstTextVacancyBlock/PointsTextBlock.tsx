import { FieldArray } from "formik";
import React from "react";
import { AdminInput } from "../../../styles/AdminPage";
import { IPointsData } from "../../../types/Admin/Response.types";

interface IPointsInputsProps {
  state: IPointsData[];
  name: string;
  onChangeFunction: (e?: React.ChangeEvent<any> | string) => void;
  page: number;
}

const renderInputs = ({
  state,
  name,
  onChangeFunction,
  page,
}: IPointsInputsProps) => (
  <div>
    {state.map((el: IPointsData, ind: number) => (
      <AdminInput
        minRows={2}
        key={`${ind}.someKeyOfInputElement.${page}`}
        name={`${name}${
          name === "info" ? `.${page}` : ""
        }.points[${ind}].point`}
        value={el.point}
        onChange={onChangeFunction}
      />
    ))}
  </div>
);

const PointsTextBlock = ({
  state,
  onChangeFunction,
  name,
  page,
}: IPointsInputsProps) => {
  return (
    <FieldArray name="ContactFormBlock">
      {() => renderInputs({ state, onChangeFunction, name, page })}
    </FieldArray>
  );
};

export default PointsTextBlock;
