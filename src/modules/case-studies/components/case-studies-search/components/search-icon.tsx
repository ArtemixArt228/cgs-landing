import React from "react";
interface IProps {
  currentColor?: boolean;
}
export const SearchIcon = ({ currentColor = false }: IProps) => {
  const fill = currentColor ? "currentColor" : "black";
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.197 13.6071L15.018 13.8516L20.0001 18.8337L18.8338 20L13.8517 15.0179L13.6072 15.197C12.3976 16.0828 10.9137 16.6115 9.30573 16.6115C5.27781 16.6115 2 13.3337 2 9.30573C2 5.27781 5.27778 2 9.3057 2C13.3336 2 16.6114 5.27781 16.6114 9.30573C16.6114 10.9137 16.0828 12.3975 15.197 13.6071ZM3.64969 9.30573C3.64969 12.425 6.1865 14.9618 9.30573 14.9618C12.4249 14.9618 14.9618 12.425 14.9618 9.30573C14.9618 6.1865 12.425 3.64969 9.30573 3.64969C6.1865 3.64969 3.64969 6.1865 3.64969 9.30573Z"
        fill={fill}
      />
    </svg>
  );
};
