import React, { memo } from "react";
import * as Styled from "../../../styles/EstimationForm.styled";

interface IAddOptionsProps {
  type: string;
  onClickHandler: () => void;
}

const AddOptionInput = ({ type, onClickHandler }: IAddOptionsProps) => {
  return (
    <Styled.AddOptionInputWrapper type={type}>
      <button
        name="option"
        placeholder="Add option"
        type="button"
        onClick={onClickHandler}
      >
        Add option
      </button>
    </Styled.AddOptionInputWrapper>
  );
};

export default memo(AddOptionInput);
