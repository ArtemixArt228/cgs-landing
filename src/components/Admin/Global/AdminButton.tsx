import React from "react";
import * as Styled from "../../../styles/AdminPage";

interface IAdminButtonProps {
  text?: string;
  onClick?: () => void;
}

const AdminButton = ({ text = "See projects", onClick }: IAdminButtonProps) => {
  const onClickFunction = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (onClick) onClick();
  };
  return (
    <Styled.AdminButton onClick={onClickFunction}>
      <Styled.AdminButtonText>{text}</Styled.AdminButtonText>
    </Styled.AdminButton>
  );
};

export default AdminButton;
