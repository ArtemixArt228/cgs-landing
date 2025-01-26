import React from "react";
import { useFormikContext } from "formik";

import SolutionCard from "./SolutionCard";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import { IHomePageResponse } from "../../../../types/Admin/AdminHomePage.types";

import { SOLUTION_INIT } from "../../../../consts/Admin/HomePage";

const HowDoWeSolveItBlock = () => {
  const { values, handleChange } = useFormikContext<IHomePageResponse>();

  const solutions = values?.HowDoWeSolveItBlock?.solutions ?? SOLUTION_INIT;

  return (
    <div style={{ width: "60%" }}>
      <SubHeaderWithInput
        placeholder="How do we solve it Title"
        header="Title"
        inputValue={values.HowDoWeSolveItBlock?.title}
        name={"HowDoWeSolveItBlock.title"}
        onChangeFunction={handleChange}
      />
      <div>
        {solutions.map((solution, i) => (
          <SolutionCard
            key={i}
            index={i}
            solution={solution}
            onChangeFunction={handleChange}
          />
        ))}
      </div>
    </div>
  );
};

export default HowDoWeSolveItBlock;
