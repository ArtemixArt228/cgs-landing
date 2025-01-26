import React from "react";

import { ICalculatorChooseLineProps } from "../../types/Admin/Response.types";

const CalculatorChooseLine = ({
  mobile,
  children,
}: ICalculatorChooseLineProps) => {
  return mobile ? (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 309 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 6.92578V60C1 62.7614 2.18695 65 3.65112 65L3.65112 5.5L1 6.92578Z"
        fill="black"
      />
      <path
        d="M1 6V6.92578L3.65112 5.5V1C2.18695 1 1 3.23858 1 6Z"
        fill="black"
      />
      <path
        d="M305.349 1H3.65112V5.5L302 6L305.349 1Z"
        fill="url(#paint0_linear_6017_17202)"
      />
      <path
        d="M308 6C308 3.23858 306.813 1 305.349 1L302 6C303.464 6 305 9 304.312 11.9258L308 6Z"
        fill="url(#paint1_linear_6017_17202)"
      />
      <path
        d="M308 60V6L304.312 11.9258V65L305.349 65C306.813 65 308 62.7614 308 60Z"
        fill="url(#paint2_linear_6017_17202)"
      />
      <path
        d="M3.65112 65H305.349M3.65112 65C2.18695 65 1 62.7614 1 60M3.65112 65L304.312 65M3.65112 65L3.65112 5.5M1 60V6M1 60V6.92578M305.349 65C306.813 65 308 62.7614 308 60V6M305.349 65L304.312 65M305.349 1H3.65112M305.349 1C306.813 1 308 3.23858 308 6M305.349 1L302 6M308 6L304.312 11.9258M3.65112 1C2.18695 1 1 3.23858 1 6M3.65112 1V5.5M1 6V6.92578M1 6.92578L3.65112 5.5M304.312 65V11.9258M302 6C303.464 6 305 9 304.312 11.9258M302 6L3.65112 5.5"
        stroke="black"
        strokeWidth="1.2"
      />
      <foreignObject width="100%" height="100%">
        {children}
      </foreignObject>
      <defs>
        <linearGradient
          id="paint0_linear_6017_17202"
          x1="1"
          y1="33"
          x2="308"
          y2="33"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D6FFBB" />
          <stop offset="1" stopColor="#5869DD" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_6017_17202"
          x1="296.6"
          y1="15.4258"
          x2="311.275"
          y2="10.2051"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00837758" stopColor="#D6FFBB" />
          <stop offset="1" stopColor="#5869DD" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_6017_17202"
          x1="282.284"
          y1="41.4258"
          x2="322.848"
          y2="41.2852"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D6FFBB" />
          <stop offset="1" stopColor="#5869DD" />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 581 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 6.92578V60C1 62.7614 3.23858 65 6 65L6 6.92578H1Z"
        fill="black"
      />
      <path d="M1 6V6.92578H6V1C3.23858 1 1 3.23858 1 6Z" fill="black" />
      <path
        d="M575 1H6V6.92578H568.045L575 1Z"
        fill="url(#paint0_linear_5380_20920)"
      />
      <path
        d="M580 6C580 3.23858 577.761 1 575 1L568.045 6.92578C570.807 6.92578 573.045 9.16436 573.045 11.9258L580 6Z"
        fill="url(#paint1_linear_5380_20920)"
      />
      <path
        d="M580 60V6L573.045 11.9258V65L575 65C577.761 65 580 62.7614 580 60Z"
        fill="url(#paint2_linear_5380_20920)"
      />
      <path
        d="M6 65L573.045 65V11.9258C573.045 9.16436 570.807 6.92578 568.045 6.92578H6L6 65Z"
        fill="#F1EFED"
      />
      <path
        d="M6 65H575M6 65C3.23858 65 1 62.7614 1 60M6 65L573.045 65M6 65L6 6.92578M1 60V6M1 60V6.92578M575 65C577.761 65 580 62.7614 580 60V6M575 65L573.045 65M575 1H6M575 1C577.761 1 580 3.23858 580 6M575 1L568.045 6.92578M580 6L573.045 11.9258M6 1C3.23858 1 1 3.23858 1 6M6 1V6.92578M1 6V6.92578M1 6.92578H6M573.045 65V11.9258M568.045 6.92578C570.807 6.92578 573.045 9.16436 573.045 11.9258M568.045 6.92578H6"
        stroke="black"
        strokeWidth="1.8"
      />
      <foreignObject width="100%" height="100%">
        {children}
      </foreignObject>
      <defs>
        <linearGradient
          id="paint0_linear_5380_20920"
          x1="1"
          y1="33"
          x2="580"
          y2="32.9999"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D6FFBB" />
          <stop offset="1" stopColor="#5869DD" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5380_20920"
          x1="558.5"
          y1="15.4258"
          x2="580"
          y2="0.999997"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00837758" stopColor="#D6FFBB" />
          <stop offset="1" stopColor="#5869DD" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_5380_20920"
          x1="531.5"
          y1="41.4258"
          x2="608"
          y2="40.9258"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D6FFBB" />
          <stop offset="1" stopColor="#5869DD" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CalculatorChooseLine;
