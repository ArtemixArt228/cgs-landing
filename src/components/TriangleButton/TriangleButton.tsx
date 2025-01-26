import React, { FC } from "react";
import * as Styled from "./TriangleButton.styled";

interface ITriangleButtonProps {
  onClick: () => void;
  isClicked: boolean;
}

const TriangleButton: FC<ITriangleButtonProps> = ({ onClick, isClicked }) => {
  return (
    <Styled.Area onClick={onClick}>
      <Styled.TriangleButton className={isClicked ? "clicked" : undefined} />
    </Styled.Area>
  );
};

export default TriangleButton;
