import React from "react";
import * as Styled from "../../../styles/AdminPage";

interface IAdminButtonProps {
  size?: string;
  text?: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset" | undefined;
}

const AdminBlackButton = ({
  text = "read more",
  size = "",
  onClick,
  type,
}: IAdminButtonProps) => {
  return (
    <Styled.AdminBlackButton type={type} onClick={onClick} size={size}>
      <Styled.AdminBlackButtonText>{text}</Styled.AdminBlackButtonText>
    </Styled.AdminBlackButton>
  );
};

export default AdminBlackButton;
