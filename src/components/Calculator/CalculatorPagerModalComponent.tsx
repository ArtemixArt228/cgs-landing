import React, { useEffect, useRef } from "react";

import Logo from "./CalculatorLogo";

import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";

import { ICalculatorModalComponentProps } from "../../types/Admin/Response.types";
import { useRouter } from "next/router";

const CalculatorModalComponent = ({
  isData,
  buttonText,
  onClose,
  onButtonClick,
  isQuiting,
  onQuitButtonClick,
  mobile,
  children,
  startLoading,
}: ICalculatorModalComponentProps) => {
  const router = useRouter();
  const pathname = router.pathname;

  const modalRef = useRef<any>(null);

  const buttonClassName = () => {
    let className = "";
    if (buttonText === "< choose >") {
      className += "hide ";
    }

    if (isQuiting) {
      className += "quit";
    }
    return className;
  };

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  const foreignObject = (
    <foreignObject width="100%" height="100%">
      <Styled.ForeignObjectWrapper>
        <Styled.CalculatorHeaderWrapper>
          <Styled.CalculatorHeaderInner>
            <Logo />
            <Styled.CloseButton
              onClick={() => {
                onClose();
                router.replace({
                  pathname,
                  query: {},
                });
              }}
            />
          </Styled.CalculatorHeaderInner>
        </Styled.CalculatorHeaderWrapper>
        {children}
        {isQuiting && (
          <Styled.QuitButton onClick={onQuitButtonClick}>
            {"< quit >"}
          </Styled.QuitButton>
        )}
        <Styled.StartButton
          onClick={onButtonClick}
          className={
            !isData && startLoading ? "loadingButton" : buttonClassName()
          }
        >
          {!isData && startLoading ? (
            <span className="loader"></span>
          ) : (
            buttonText
          )}
        </Styled.StartButton>
      </Styled.ForeignObjectWrapper>
    </foreignObject>
  );

  return (
    <Styled.Wrapper>
      <Styled.PagerBackgroundImageWrapper
        className={
          mobile && (buttonText === "< choose >" || isQuiting)
            ? "mobileChoose"
            : undefined
        }
        ref={modalRef}
      >
        {mobile ? (
          buttonText === "< choose >" || isQuiting ? (
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 356 335"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M327.5 1C342.688 1 355 13.3122 355 28.5V38.0085C355 26.9831 350.265 18.041 344.417 18.0041C343.648 8.37927 332.824 1 327.5 1Z"
                fill="url(#paint0_linear_6017_17195)"
              />
              <path
                d="M327.5 1C342.688 1 355 13.3122 355 28.5V38.0085C355 26.9831 350.265 18.041 344.417 18.0041C343.648 8.37927 332.824 1 327.5 1Z"
                fill="url(#paint1_linear_6017_17195)"
              />
              <path
                d="M327.5 1C342.688 1 355 13.3122 355 28.5V38.0085C355 26.9831 350.265 18.041 344.417 18.0041C343.648 8.37927 332.824 1 327.5 1Z"
                fill="black"
              />
              <path
                d="M333.916 322.996H14.5C6.9868 322.996 1.49663 314.484 1.05154 306.984C1 306.116 1 305.163 1 303.991V21.0046C1 9.95639 14.1351 1 20 1H327.5C332.824 1 343.648 8.37927 344.417 18.0041C344.495 18.9828 344.536 19.9848 344.536 21.0046V303.991C344.536 317 342.5 322.996 333.916 322.996Z"
                fill="#F1EFED"
              />
              <path
                d="M355 319.995C355 331.044 350.246 334 344.381 334L333.916 322.996C342.5 322.996 344.536 317 344.536 303.991L355 319.995Z"
                fill="#5869DD"
              />
              <path
                d="M355 38.0085V319.995L344.536 303.991V21.0046C344.536 19.9848 344.495 18.9828 344.417 18.0041C350.265 18.041 355 26.9831 355 38.0085Z"
                fill="url(#paint2_linear_6017_17195)"
              />
              <path
                d="M344.381 334H22.0836C10.4395 334 1 324.561 1 312.916V303.991C1 305.163 1 306.116 1.05154 306.984C1.49663 314.484 6.9868 322.996 14.5 322.996H333.916L344.381 334Z"
                fill="url(#paint3_linear_6017_17195)"
              />
              <path
                d="M355 38.0085V319.995M355 38.0085V28.5C355 13.3122 342.688 1 327.5 1V1M355 38.0085C355 26.9831 350.265 18.041 344.417 18.0041M344.381 18.004C344.393 18.004 344.405 18.004 344.417 18.0041M344.381 334H22.0836V334C10.4395 334 1 324.561 1 312.916V303.991M344.381 334C350.246 334 355 331.044 355 319.995M344.381 334L333.916 322.996M355 319.995L344.536 303.991M327.5 1H20C14.1351 1 1 9.9564 1 21.0046V303.991M327.5 1C332.824 1 343.649 8.37928 344.417 18.0041M333.916 322.996H14.5V322.996C6.9868 322.996 1.49663 314.484 1.05154 306.984C1 306.116 1 305.163 1 303.991M333.916 322.996C342.5 322.996 344.536 317 344.536 303.991M344.536 303.991V21.0046C344.536 19.9848 344.495 18.9828 344.417 18.0041"
                stroke="black"
                strokeWidth="1.2"
              />
              {foreignObject}
              <defs>
                <linearGradient
                  id="paint0_linear_6017_17195"
                  x1="1"
                  y1="167.5"
                  x2="355"
                  y2="167.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D6FFBB" />
                  <stop offset="1" stopColor="#5869DD" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_6017_17195"
                  x1="1"
                  y1="167.5"
                  x2="355"
                  y2="167.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D6FFBB" />
                  <stop offset="1" stopColor="#5869DD" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_6017_17195"
                  x1="150.202"
                  y1="160.685"
                  x2="373.864"
                  y2="87.0272"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D6FFBB" />
                  <stop offset="1" stopColor="#5869DD" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_6017_17195"
                  x1="1"
                  y1="167.5"
                  x2="355"
                  y2="167.5"
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
              viewBox="0 0 356 382"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M327.5 1V1C342.688 1 355 13.3122 355 28.5V38.0085C355 26.9831 350.265 18.041 344.417 18.0041C343.649 8.37928 332.824 1 327.5 1Z"
                fill="url(#paint0_linear_2705_70174)"
              />
              <path
                d="M327.5 1V1C342.688 1 355 13.3122 355 28.5V38.0085C355 26.9831 350.265 18.041 344.417 18.0041C343.649 8.37928 332.824 1 327.5 1Z"
                fill="url(#paint1_linear_2705_70174)"
              />
              <path
                d="M327.5 1V1C342.688 1 355 13.3122 355 28.5V38.0085C355 26.9831 350.265 18.041 344.417 18.0041C343.649 8.37928 332.824 1 327.5 1Z"
                fill="black"
              />
              <path
                d="M333.916 369.996H14.5V369.996C6.9868 369.996 1.49663 361.484 1.05154 353.984C1 353.116 1 352.163 1 350.991V21.0046C1 9.9564 14.1351 1 20 1H327.5C332.824 1 343.649 8.37928 344.417 18.0041C344.495 18.9828 344.536 19.9848 344.536 21.0046V350.991C344.536 364 342.5 369.996 333.916 369.996Z"
                fill="#F1EFED"
              />
              <path
                d="M355 366.995C355 378.044 350.246 381 344.381 381L333.916 369.996C342.5 369.996 344.536 364 344.536 350.991L355 366.995Z"
                fill="#5869DD"
              />
              <path
                d="M355 38.0085V366.995L344.536 350.991V21.0046C344.536 19.9848 344.495 18.9828 344.417 18.0041C350.265 18.041 355 26.9831 355 38.0085Z"
                fill="url(#paint2_linear_2705_70174)"
              />
              <path
                d="M344.381 381H22.0836V381C10.4395 381 1 371.561 1 359.916V350.991C1 352.163 1 353.116 1.05154 353.984C1.49663 361.484 6.9868 369.996 14.5 369.996V369.996H333.916L344.381 381Z"
                fill="url(#paint3_linear_2705_70174)"
              />
              <path
                d="M355 38.0085V366.995M355 38.0085V28.5C355 13.3122 342.688 1 327.5 1V1M355 38.0085C355 26.9831 350.265 18.041 344.417 18.0041M344.381 18.004C344.393 18.004 344.405 18.004 344.417 18.0041M344.381 381H22.0836V381C10.4395 381 1 371.561 1 359.916V350.991M344.381 381C350.246 381 355 378.044 355 366.995M344.381 381L333.916 369.996M355 366.995L344.536 350.991M327.5 1H20C14.1351 1 1 9.9564 1 21.0046V350.991M327.5 1C332.824 1 343.649 8.37928 344.417 18.0041M333.916 369.996H14.5V369.996C6.9868 369.996 1.49663 361.484 1.05154 353.984C1 353.116 1 352.163 1 350.991M333.916 369.996C342.5 369.996 344.536 364 344.536 350.991M344.536 350.991V21.0046C344.536 19.9848 344.495 18.9828 344.417 18.0041"
                stroke="black"
                strokeWidth="1.2"
              />
              {foreignObject}
              <defs>
                <linearGradient
                  id="paint0_linear_2705_70174"
                  x1="1"
                  y1="191"
                  x2="355"
                  y2="191"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D6FFBB" />
                  <stop offset="1" stopColor="#5869DD" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2705_70174"
                  x1="1"
                  y1="191"
                  x2="355"
                  y2="191"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D6FFBB" />
                  <stop offset="1" stopColor="#5869DD" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_2705_70174"
                  x1="150.202"
                  y1="183.223"
                  x2="379.061"
                  y2="117.176"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D6FFBB" />
                  <stop offset="1" stopColor="#5869DD" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_2705_70174"
                  x1="1"
                  y1="191"
                  x2="355"
                  y2="191"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D6FFBB" />
                  <stop offset="1" stopColor="#5869DD" />
                </linearGradient>
              </defs>
            </svg>
          )
        ) : (
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 669 391"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M628.275 0.999939H634C652.778 0.999939 668 16.2223 668 34.9999V38.0085C668 26.9831 659.079 18.041 648.06 18.004C646.612 8.37922 638.305 0.999939 628.275 0.999939Z"
              fill="url(#paint0_linear_2705_42721)"
            />
            <path
              d="M628.275 0.999939H634C652.778 0.999939 668 16.2223 668 34.9999V38.0085C668 26.9831 659.079 18.041 648.06 18.004C646.612 8.37922 638.305 0.999939 628.275 0.999939Z"
              fill="url(#paint1_linear_2705_42721)"
            />
            <path
              d="M628.275 0.999939H634C652.778 0.999939 668 16.2223 668 34.9999V38.0085C668 26.9831 659.079 18.041 648.06 18.004C646.612 8.37922 638.305 0.999939 628.275 0.999939Z"
              fill="black"
            />
            <path
              d="M628.275 372.996H21.0088C14.9577 372.996 9.53403 370.311 5.86501 366.067C2.83361 362.56 1 357.99 1 352.991V21.0046C1 9.95633 9.95824 0.999939 21.0088 0.999939H628.275C638.305 0.999939 646.612 8.37922 648.06 18.004C648.207 18.9828 648.283 19.9847 648.283 21.0046V352.991C648.283 364.04 639.325 372.996 628.275 372.996Z"
              fill="#F1EFED"
            />
            {foreignObject}
            <path
              d="M668 369.995C668 381.044 659.042 390 647.991 390L628.275 372.996C639.325 372.996 648.283 364.04 648.283 352.991L668 369.995Z"
              fill="#5869DD"
            />
            <path
              d="M668 38.0085V369.995L648.283 352.991V21.0046C648.283 19.9847 648.207 18.9828 648.06 18.004C659.079 18.041 668 26.9831 668 38.0085Z"
              fill="url(#paint2_linear_2705_42721)"
            />
            <path
              d="M647.991 390H40.7254H35C16.2223 390 1 374.778 1 356V352.991C1 357.99 2.83361 362.56 5.86501 366.067C9.53403 370.311 14.9577 372.996 21.0088 372.996H628.275L647.991 390Z"
              fill="url(#paint3_linear_2705_42721)"
            />
            <path
              d="M668 38.0085V369.995M668 38.0085V34.9999C668 16.2223 652.778 0.999939 634 0.999939H628.275M668 38.0085C668 26.9831 659.079 18.041 648.06 18.004M647.991 18.0039C648.014 18.0039 648.037 18.004 648.06 18.004M647.991 390H40.7254H35C16.2223 390 1 374.778 1 356V352.991M647.991 390C659.042 390 668 381.044 668 369.995M647.991 390L628.275 372.996M668 369.995L648.283 352.991M628.275 0.999939H21.0088C9.95824 0.999939 1 9.95633 1 21.0046V352.991M628.275 0.999939C638.305 0.999939 646.612 8.37922 648.06 18.004M628.275 372.996H21.0088C14.9577 372.996 9.53403 370.311 5.86501 366.067C2.83361 362.56 1 357.99 1 352.991M628.275 372.996C639.325 372.996 648.283 364.04 648.283 352.991M648.283 352.991V21.0046C648.283 19.9847 648.207 18.9828 648.06 18.004"
              stroke="black"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2705_42721"
                x1="1"
                y1="195.5"
                x2="668"
                y2="195.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D6FFBB" />
                <stop offset="1" stopColor="#5869DD" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2705_42721"
                x1="1"
                y1="195.5"
                x2="668"
                y2="195.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D6FFBB" />
                <stop offset="1" stopColor="#5869DD" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_2705_42721"
                x1="282.123"
                y1="187.538"
                x2="646.453"
                y2="-5.98555"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D6FFBB" />
                <stop offset="1" stopColor="#5869DD" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_2705_42721"
                x1="1"
                y1="195.5"
                x2="668"
                y2="195.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D6FFBB" />
                <stop offset="1" stopColor="#5869DD" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </Styled.PagerBackgroundImageWrapper>
    </Styled.Wrapper>
  );
};

export default CalculatorModalComponent;
