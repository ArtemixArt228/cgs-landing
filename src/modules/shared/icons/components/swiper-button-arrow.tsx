import React from "react";

export const SwiperButtonArrowIcon = ({
  direction,
}: {
  direction: "left" | "right";
}) => (
  <svg
    width="20"
    height="18"
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={`M${
        direction === "left"
          ? "10.25 1.39844L2 9.39844M2 9.39844L10.25 17.3984M2 9.39844L20 9.39844"
          : "9.75 16.6016L18 8.60156M18 8.60156L9.75 0.601563M18 8.60156L-6.84812e-07 8.60156"
      }`}
      stroke={direction === "left" ? "black" : "#F1EFED"}
      strokeWidth="1.5"
    />
    <path
      d={`M${
        direction === "left"
          ? "10.25 1.39844L2 9.39844M2 9.39844L10.25 17.3984M2 9.39844L20 9.39844"
          : "9.75 16.6016L18 8.60156M18 8.60156L9.75 0.601563M18 8.60156L-6.84812e-07 8.60156"
      }`}
      stroke={direction === "left" ? "black" : "#F1EFED"}
      strokeWidth="1.5"
    />
  </svg>
);
