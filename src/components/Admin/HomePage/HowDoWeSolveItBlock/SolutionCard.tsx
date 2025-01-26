import React, { ChangeEvent } from "react";

import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import * as Styled from "../../../../styles/AdminPage";
import TextEditor from "../../../TextEditor/TextEditor";

interface ISolutionCardProps {
  solution: {
    subtitle: string;
    text: string;
  };
  index: number;
  onChangeFunction: (e?: string | React.ChangeEvent<any>) => void;
}

const SolutionCard = ({
  solution,
  index,
  onChangeFunction,
}: ISolutionCardProps) => {
  return (
    <Styled.AdminFlexRow gap="19px">
      <Styled.InputWrapper>
        <SubHeaderWithInput
          header={`#${index + 1} Subtitle`}
          width="100%"
          name={`HowDoWeSolveItBlock.solutions[${index}].subtitle`}
          inputValue={solution.subtitle}
          onChangeFunction={onChangeFunction}
        />
        <TextEditor
          header="Text"
          name={`HowDoWeSolveItBlock.solutions[${index}].text`}
          props={{
            defaultValue: solution.text || "",
          }}
        />
      </Styled.InputWrapper>
    </Styled.AdminFlexRow>
  );
};

export default SolutionCard;
