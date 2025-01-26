import { useMediaQuery } from "@mui/material";
import React from "react";

interface ISplitBracketsProps {
  text?: string;
  onMouseOut?: () => void;
  onMouseEnter?: (text: string, event: React.MouseEvent) => void;
}

export const MobileAuditSplitBrackets = ({
  text,
  onMouseOut,
  onMouseEnter,
}: ISplitBracketsProps) => {
  const is768px = useMediaQuery("(max-width:768px)");

  const splited = is768px ? text?.split("^") : text?.split("|");

  const onMouseEnterDesktop = (event: any) =>
    is768px ? undefined : onMouseEnter?.(text as string, event);
  const onMouseOutDesktop = is768px ? undefined : onMouseOut;

  return (
    <section onMouseLeave={onMouseOutDesktop} onTouchEnd={onMouseOut}>
      {splited?.map(
        (el, idx) =>
          el !== "" && (
            <span
              key={idx}
              onMouseEnter={onMouseEnterDesktop}
              onTouchStart={(e: any) => onMouseEnter?.(text as string, e)}
            >
              {el.replace(/[\^|]/g, "")}
              {splited.length - 1 !== idx && <br />}
            </span>
          )
      )}
    </section>
  );
};
