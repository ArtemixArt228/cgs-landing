import { useMediaQuery } from "@mui/material";
import parse from "html-react-parser";
import React, { Fragment, useEffect, useState, useMemo } from "react";

import * as Styled from "../../styles/TextTypewrite.styled";

interface ITextTypingAnimationProps {
  text: string;
  mobileBreackPoint?: number;
  startPoint?: boolean;
  miliseconds?: number;
  className?: string;
}

interface IDisplayedTextProps {
  visibleText: string;
  hiddenText: string;
}

function TextTypingAnimation({
  text,
  mobileBreackPoint = 768,
  startPoint,
  miliseconds,
  className,
}: ITextTypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<IDisplayedTextProps>({
    visibleText: text.slice(0, 1),
    hiddenText: text.slice(1, text.length),
  });

  const is768px = useMediaQuery(`(max-width:${mobileBreackPoint}px)`);

  useEffect(() => {
    if (startPoint || startPoint === undefined) {
      const timer = setTimeout(
        () => {
          if (
            displayedText.visibleText.length !== 0 &&
            displayedText.visibleText !== text &&
            displayedText.visibleText.length < text.length
          ) {
            const visiblePart = text.slice(
              0,
              displayedText.visibleText.length + 1
            );

            const hiddenPart = text.slice(
              displayedText.visibleText.length + 1,
              text.length
            );

            setDisplayedText({
              visibleText: visiblePart,
              hiddenText: hiddenPart,
            });
          }
        },
        miliseconds
          ? 150 - Math.random() * miliseconds
          : 150 - Math.random() * 100
      );

      return () => clearTimeout(timer);
    }
  }, [text, displayedText, startPoint]);

  const splittedDisplayed = useMemo(() => {
    if (is768px) {
      return displayedText.visibleText.split(/[\^]/);
    } else {
      return displayedText.visibleText.split("|");
    }
  }, [displayedText.visibleText, is768px]);

  const splittedHidden = useMemo(() => {
    if (is768px) {
      return displayedText.hiddenText.split(/[\^]/);
    } else {
      return displayedText.hiddenText.split("|");
    }
  }, [displayedText.hiddenText, is768px]);

  const formattedDisplayed = useMemo(() => {
    return splittedDisplayed.map((el) => el.replace(/[\^|]/g, ""));
  }, [splittedDisplayed]);

  const formattedHidden = useMemo(() => {
    return splittedHidden.map((el) => el.replace(/[\^|]/g, ""));
  }, [splittedHidden]);

  return (
    <Styled.TypewriteTextWrapper>
      <Styled.DisplayedPart className={className}>
        {formattedDisplayed.map((el, idx) =>
          idx !== formattedDisplayed.length - 1 ? (
            <Fragment key={idx}>{parse(`<span>${el}</span><br/ >`)}</Fragment>
          ) : (
            <Styled.LastPart
              className={
                formattedHidden.length === 1
                  ? `last-part ${className ?? ""}`
                  : className ?? undefined
              }
              key={idx}
            >
              {parse(`<span>${el}</span>`)}
              <Styled.Cursor />
            </Styled.LastPart>
          )
        )}
      </Styled.DisplayedPart>
      <Styled.HiddenPart>
        {formattedHidden.map((el, idx) =>
          idx !== formattedHidden.length - 1 ? (
            <Fragment key={idx}>
              {parse(`<span key="${idx}">${el}</span><br/ >`)}
            </Fragment>
          ) : (
            <Styled.LastPart className="last-part" key={idx}>
              {parse(`<span>${el}</span>`)}
            </Styled.LastPart>
          )
        )}
      </Styled.HiddenPart>
    </Styled.TypewriteTextWrapper>
  );
}

export default TextTypingAnimation;
