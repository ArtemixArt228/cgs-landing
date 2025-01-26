import React from "react";

interface IButtonArrowProps {
  currentColor?: boolean;
}
const ButtonArrow = ({ currentColor = false }: IButtonArrowProps) => {
  const fill = currentColor ? "currentColor" : "black";
  return (
    <svg
      viewBox="5 5 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="an arrow"
      style={{ pointerEvents: "none" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4984 13.1572L22.6922 13.0305L22.6924 13.0432L22.7051 13.0431L22.8356 23.7076L21.3754 23.7255L21.2753 15.5384L13.6243 23.3821L12.579 22.3624L20.2273 14.5215L12.5166 14.6174L12.4984 13.1572Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4984 13.1572L22.6922 13.0305L22.6924 13.0432L22.7051 13.0431L22.8356 23.7076L21.3754 23.7255L21.2753 15.5384L13.6243 23.3821L12.579 22.3624L20.2273 14.5215L12.5166 14.6174L12.4984 13.1572Z"
        fill={fill}
      />
      <title>an arrow</title>
    </svg>
  );
};

export default ButtonArrow;
