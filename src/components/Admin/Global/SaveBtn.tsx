import React, { CSSProperties } from "react";
import ButtonArrow from "../../../utils/ButtonArrow";
import * as Styled from "../../../styles/HomePage/General.styled";

interface IProps {
  title?: string;
  handleClick?: (...args: any[]) => void;
  style?: CSSProperties;
  type?: string;
}

const SaveBtn = ({
  title = "Save Changes",
  handleClick,
  style,
  type = "submit",
}: IProps) => {
  return (
    <Styled.BlackButton
      size={"1.5em"}
      padding={"1.11em 1.5em"}
      onClick={handleClick}
      style={style}
      type={type}
    >
      {title}
      <Styled.ArrowContainer>
        <ButtonArrow />
      </Styled.ArrowContainer>
    </Styled.BlackButton>
  );
};

export default SaveBtn;
