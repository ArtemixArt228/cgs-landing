import React from "react";

import * as Styled from "./MobileInfiniteText.styled";

import Marquee from "react-fast-marquee";

interface IInfiniteTextProps {
  className?: string;
  isRateCard?: boolean;
  title?: string;
  withoutMargin?: boolean;
  style?: object;
}

export const MobileInfiniteText: React.FC<IInfiniteTextProps> = ({
  className,
  isRateCard,
  title,
  withoutMargin,
  style,
}) => {
  return (
    <Styled.MovingText
      className={`${
        withoutMargin
          ? isRateCard
            ? "rateCard withoutMargin"
            : `withoutMargin`
          : isRateCard
          ? "rateCard"
          : ""
      } ${className}`}
      style={style}
    >
      <Marquee direction={"right"}>
        <span>
          {title}&nbsp;&nbsp;&nbsp;{title}&nbsp;&nbsp;&nbsp;{title}
          &nbsp;&nbsp;&nbsp;
          {title}&nbsp;&nbsp;&nbsp;{title}&nbsp;&nbsp;&nbsp;{title}
          &nbsp;&nbsp;&nbsp;
          {title}&nbsp;&nbsp;&nbsp;{title}&nbsp;&nbsp;&nbsp;
        </span>
        <span>
          {title}&nbsp;&nbsp;&nbsp;{title}&nbsp;&nbsp;&nbsp;{title}
          &nbsp;&nbsp;&nbsp;
          {title}&nbsp;&nbsp;&nbsp;{title}&nbsp;&nbsp;&nbsp;{title}
          &nbsp;&nbsp;&nbsp;
          {title}&nbsp;&nbsp;&nbsp;{title}&nbsp;&nbsp;&nbsp;
        </span>
        <span>
          {title}&nbsp;&nbsp;&nbsp;{title}&nbsp;&nbsp;&nbsp;{title}
          &nbsp;&nbsp;&nbsp;
          {title}&nbsp;&nbsp;&nbsp;{title}&nbsp;&nbsp;&nbsp;{title}
          &nbsp;&nbsp;&nbsp;
          {title}&nbsp;&nbsp;&nbsp;{title}&nbsp;&nbsp;&nbsp;
        </span>
      </Marquee>
    </Styled.MovingText>
  );
};
