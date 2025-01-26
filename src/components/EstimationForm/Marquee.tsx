import React from "react";
import {
  Marquee as MarqueeBox,
  MarqueeContent,
  WrapperStyledH,
  StyledH,
} from "./index.styled";

const Marquee = ({ title }: { title: string }) => {
  return (
    <WrapperStyledH>
      <MarqueeBox>
        <MarqueeContent aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <>
              <StyledH key={i}>{title} </StyledH>
            </>
          ))}
        </MarqueeContent>

        <MarqueeContent aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <StyledH key={i}>{title} </StyledH>
          ))}
        </MarqueeContent>
      </MarqueeBox>
    </WrapperStyledH>
  );
};

export default Marquee;
