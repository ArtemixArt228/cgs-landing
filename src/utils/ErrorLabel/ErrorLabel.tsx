import React, { useState, useEffect } from "react";
import themes from "../themes";
import { ErrorLabelContainer, Plug } from "./ErrorLabel.styled";

interface ErrorLabelProps {
  text: string;
  topPosition: string;
  leftPosition?: string;
  errorVisible: boolean;
  fontSize?: string;
}

export const ErrorLabel = ({
  text,
  topPosition,
  leftPosition,
  errorVisible,
  fontSize,
}: ErrorLabelProps) => {
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    if (errorVisible) {
      setOpacity(1);
    } else {
      const timeoutId = setTimeout(() => {
        setOpacity(0);
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [errorVisible]);

  return (
    <ErrorLabelContainer
      errorVisible={errorVisible}
      style={{
        top: topPosition,
        left: leftPosition || "65px",
        opacity: opacity,
        visibility: errorVisible ? "visible" : "hidden",
        transform: errorVisible ? "translateY(15px)" : "translateY(10px)",
        fontSize: fontSize || undefined,
      }}
    >
      {text}
      <svg
        style={{
          zIndex: 3,
          position: "absolute",
          top: 0,
          left: 0,
          transform: "translate(50%, -75%)",
        }}
        width="16"
        height="8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="0,8 8,0 16,8"
          fill={themes.primary.colors.grey}
          stroke={themes.primary.colors.black}
          strokeWidth="1"
        />
      </svg>
      <Plug />
    </ErrorLabelContainer>
  );
};
