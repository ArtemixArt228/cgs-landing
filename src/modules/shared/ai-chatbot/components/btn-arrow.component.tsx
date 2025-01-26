import React from "react";

interface IButtonArrowProps {
  currentColor?: boolean;
}

export const ButtonArrow = ({ currentColor = false }: IButtonArrowProps) => {
  const fill = currentColor ? "currentColor" : "black";
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66536 11.3327L6.66536 3.21935L10.392 6.94602L11.332 5.99935L5.9987 0.666015L0.665365 5.99935L1.60536 6.93935L5.33203 3.21935L5.33203 11.3327L6.66536 11.3327Z"
        fill={fill}
      />
      <path
        d="M6.66536 11.3327L6.66536 3.21935L10.392 6.94602L11.332 5.99935L5.9987 0.666015L0.665365 5.99935L1.60536 6.93935L5.33203 3.21935L5.33203 11.3327L6.66536 11.3327Z"
        fill={fill}
      />
    </svg>
  );
};
