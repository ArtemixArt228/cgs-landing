import React from "react";

interface IButtonArrowProps {
  currentColor?: boolean;
  className?: string;
}
const DropdownArrow = ({
  currentColor = false,
  className = "",
}: IButtonArrowProps) => {
  const fill = currentColor ? "currentColor" : "black";
  return (
    <svg
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.66406 1.33301L8.33073 7.99967L14.9974 1.33301"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DropdownArrow;
