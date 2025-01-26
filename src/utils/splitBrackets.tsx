import { useMediaQuery } from "@mui/material";
import React from "react";

interface ISplitBracketsProps {
  text?: string;
}

export const SplitBrackets = ({ text }: ISplitBracketsProps) => {
  const is768px = useMediaQuery("(max-width:768px)");

  const splited = is768px ? text?.split("^") : text?.split("|");

  return (
    <>
      {splited?.map(
        (el, idx) =>
          el !== "" && (
            <span key={idx}>
              {el.replace(/[\^|]/g, "")}
              {splited.length - 1 !== idx && <br />}
            </span>
          )
      )}
    </>
  );
};
