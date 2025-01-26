import React from "react";

import SubHeaderWithInput from "../components/Admin/Global/SubHeaderWithInput";

import { AdminRenderInputs } from "../styles/AdminPage";

import { headerToUpperCase } from "./headerToUpperCase";

const anyNumbersInHeader = (i: string) => {
  return isNaN(+i[i.length - 1])
    ? i
    : [
        i
          .split("")
          .filter((i) => isNaN(+i))
          .join(""),
        i.slice(i.length - 1),
      ].join(" ");
};

export const renderInputs = ({ props, state, onChangeFunction }: any) => {
  return (
    <AdminRenderInputs
      className={props.isCooperationBlock && "cooperationBlock"}
    >
      {Object.keys(state).map((i, ind) => {
        if (i !== "image") {
          return (
            <SubHeaderWithInput
              key={`input${ind}${props.name}`}
              header={headerToUpperCase(anyNumbersInHeader(i))}
              name={`${props.name}.${i}`}
              inputValue={state[i]}
              onChangeFunction={onChangeFunction}
              width={props.width}
            />
          );
        }
      })}
    </AdminRenderInputs>
  );
};
