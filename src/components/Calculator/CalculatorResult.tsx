import React, { useEffect, useRef } from "react";

import { ResultImageWrapper } from "../../styles/Calculator/CalculatorComponent.styled";
import { ICalculatorResultProps } from "../../types/Admin/Response.types";

const CalculatorResult = ({
  mobile,
  children,
  handleQuit,
}: ICalculatorResultProps) => {
  const modalRef = useRef<any>(null);

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleQuit();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <ResultImageWrapper ref={modalRef}>
      {mobile ? (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 356 637"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M327.5 1V1C342.688 1 355 13.3122 355 28.5V38.0085C355 26.9831 350.265 18.041 344.417 18.0041C343.649 8.37928 332.824 1 327.5 1Z"
            fill="url(#paint0_linear_8001_33685)"
          />
          <path
            d="M327.5 1V1C342.688 1 355 13.3122 355 28.5V38.0085C355 26.9831 350.265 18.041 344.417 18.0041C343.649 8.37928 332.824 1 327.5 1Z"
            fill="url(#paint1_linear_8001_33685)"
          />
          <path
            d="M327.5 1V1C342.688 1 355 13.3122 355 28.5V38.0085C355 26.9831 350.265 18.041 344.417 18.0041C343.649 8.37928 332.824 1 327.5 1Z"
            fill="black"
          />
          <path
            d="M333.916 624.996H174.208H14.5V624.996C6.9868 624.996 1.49663 616.484 1.05154 608.984C1 608.116 1 607.163 1 605.991V21.0046C1 9.9564 14.1351 1 20 1H327.5C332.824 1 343.649 8.37928 344.417 18.0041C344.495 18.9828 344.536 19.9848 344.536 21.0046V605.991C344.536 619 342.5 624.996 333.916 624.996Z"
            fill="#F1EFED"
          />
          <path
            d="M355 621.995C355 633.044 350.246 636 344.381 636L333.916 624.996C342.5 624.996 344.536 619 344.536 605.991L355 621.995Z"
            fill="#5869DD"
          />
          <path
            d="M355 38.0085V621.995L344.536 605.991V21.0046C344.536 19.9848 344.495 18.9828 344.417 18.0041C350.265 18.041 355 26.9831 355 38.0085Z"
            fill="url(#paint2_linear_8001_33685)"
          />
          <path
            d="M344.381 636H22.0836V636C10.4395 636 1 626.561 1 614.916V605.991C1 607.163 1 608.116 1.05154 608.984C1.49663 616.484 6.9868 624.996 14.5 624.996V624.996H174.208H333.916L344.381 636Z"
            fill="url(#paint3_linear_8001_33685)"
          />
          <path
            d="M355 38.0085V621.995M355 38.0085V28.5C355 13.3122 342.688 1 327.5 1V1M355 38.0085C355 26.9831 350.265 18.041 344.417 18.0041M344.381 18.004C344.393 18.004 344.405 18.004 344.417 18.0041M344.381 636H22.0836V636C10.4395 636 1 626.561 1 614.916V605.991M344.381 636C350.246 636 355 633.044 355 621.995M344.381 636L333.916 624.996M355 621.995L344.536 605.991M327.5 1H20C14.1351 1 1 9.9564 1 21.0046V605.991M327.5 1C332.824 1 343.649 8.37928 344.417 18.0041M333.916 624.996C342.5 624.996 344.536 619 344.536 605.991M333.916 624.996H174.208H14.5V624.996C6.9868 624.996 1.49663 616.484 1.05154 608.984C1 608.116 1 607.163 1 605.991M344.536 605.991V21.0046C344.536 19.9848 344.495 18.9828 344.417 18.0041"
            stroke="black"
            strokeWidth="1.2"
          />
          <foreignObject width="97%" height="97.5%">
            {children}
          </foreignObject>
          <defs>
            <linearGradient
              id="paint0_linear_8001_33685"
              x1="1"
              y1="318.5"
              x2="355"
              y2="318.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D6FFBB" />
              <stop offset="1" stopColor="#5869DD" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_8001_33685"
              x1="1"
              y1="318.5"
              x2="355"
              y2="318.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D6FFBB" />
              <stop offset="1" stopColor="#5869DD" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_8001_33685"
              x1="150.202"
              y1="305.504"
              x2="390.941"
              y2="263.928"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D6FFBB" />
              <stop offset="1" stopColor="#5869DD" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_8001_33685"
              x1="1"
              y1="318.5"
              x2="355"
              y2="318.5"
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
          viewBox="0 0 669 647"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M628.275 0.999939H634C652.778 0.999939 668 16.2222 668 34.9999V38.0085C668 26.983 659.079 18.041 648.06 18.004C646.612 8.37921 638.305 0.999939 628.275 0.999939Z"
            fill="url(#paint0_linear_10511_44650)"
          />
          <path
            d="M628.275 0.999939H634C652.778 0.999939 668 16.2222 668 34.9999V38.0085C668 26.983 659.079 18.041 648.06 18.004C646.612 8.37921 638.305 0.999939 628.275 0.999939Z"
            fill="url(#paint1_linear_10511_44650)"
          />
          <path
            d="M628.275 0.999939H634C652.778 0.999939 668 16.2222 668 34.9999V38.0085C668 26.983 659.079 18.041 648.06 18.004C646.612 8.37921 638.305 0.999939 628.275 0.999939Z"
            fill="black"
          />
          <path
            d="M628.275 628.996H21.0088C14.9577 628.996 9.53403 626.311 5.86501 622.067C2.83361 618.56 1 613.99 1 608.991V21.0046C1 9.95636 9.95824 0.999939 21.0088 0.999939H628.275C638.305 0.999939 646.612 8.37921 648.06 18.004C648.207 18.9828 648.283 19.9847 648.283 21.0046V608.991C648.283 620.04 639.325 628.996 628.275 628.996Z"
            fill="#F1EFED"
          />
          <path
            d="M668 625.995C668 637.044 659.042 646 647.991 646L628.275 628.996C639.325 628.996 648.283 620.04 648.283 608.991L668 625.995Z"
            fill="#5869DD"
          />
          <path
            d="M668 38.0085V625.995L648.283 608.991V21.0046C648.283 19.9847 648.207 18.9828 648.06 18.004C659.079 18.041 668 26.983 668 38.0085Z"
            fill="url(#paint2_linear_10511_44650)"
          />
          <path
            d="M647.991 646H40.7254H35C16.2223 646 1 630.778 1 612V608.991C1 613.99 2.83361 618.56 5.86501 622.067C9.53403 626.311 14.9577 628.996 21.0088 628.996H628.275L647.991 646Z"
            fill="url(#paint3_linear_10511_44650)"
          />
          <path
            d="M668 38.0085V625.995M668 38.0085V34.9999C668 16.2223 652.778 0.999939 634 0.999939H628.275M668 38.0085C668 26.9831 659.079 18.041 648.06 18.004M647.991 18.0039C648.014 18.0039 648.037 18.004 648.06 18.004M647.991 646H40.7254H35C16.2223 646 1 630.778 1 612V608.991M647.991 646C659.042 646 668 637.044 668 625.995M647.991 646L628.275 628.996M668 625.995L648.283 608.991M628.275 0.999939H21.0088C9.95824 0.999939 1 9.95633 1 21.0046V608.991M628.275 0.999939C638.305 0.999939 646.612 8.37922 648.06 18.004M628.275 628.996H21.0088C14.9577 628.996 9.53403 626.311 5.86501 622.067C2.83361 618.56 1 613.99 1 608.991M628.275 628.996C639.325 628.996 648.283 620.04 648.283 608.991M648.283 608.991V21.0046C648.283 19.9847 648.207 18.9828 648.06 18.004"
            stroke="black"
            strokeWidth="2"
          />
          <foreignObject width="97%" height="96%">
            {children}
          </foreignObject>
          <defs>
            <linearGradient
              id="paint0_linear_10511_44650"
              x1="1"
              y1="323.5"
              x2="668"
              y2="323.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D6FFBB" />
              <stop offset="1" stopColor="#5869DD" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_10511_44650"
              x1="1"
              y1="323.5"
              x2="668"
              y2="323.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D6FFBB" />
              <stop offset="1" stopColor="#5869DD" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_10511_44650"
              x1="282.123"
              y1="310.299"
              x2="705.771"
              y2="174.582"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D6FFBB" />
              <stop offset="1" stopColor="#5869DD" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_10511_44650"
              x1="1"
              y1="323.5"
              x2="668"
              y2="323.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D6FFBB" />
              <stop offset="1" stopColor="#5869DD" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </ResultImageWrapper>
  );
};

export default CalculatorResult;
