import React from "react";

import {
  MarqueeRate as MarqueeBox,
  MarqueeContentRate,
  WrapperStyledHRate,
  StyledHRate,
} from "./index.styled";

const MarqueeRate = ({ heading }: { heading: string }) => {
  return (
    <WrapperStyledHRate>
      <MarqueeBox>
        <MarqueeContentRate aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <StyledHRate key={i}>{heading} </StyledHRate>
          ))}
        </MarqueeContentRate>

        <MarqueeContentRate aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <StyledHRate key={i}>{heading} </StyledHRate>
          ))}
        </MarqueeContentRate>
      </MarqueeBox>
    </WrapperStyledHRate>
  );
};

export default MarqueeRate;
