import React from "react";
import { useMediaQuery } from "@mui/material";
import dynamic from "next/dynamic";

import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";
const MarqueeRate = dynamic(() => import("./MarqueeRate"));

import { MobileRateTextWrapper } from "./index.styled";
import { RateCardContainer } from "../../styles/RateCard.styled";

const RateHeading = ({ heading }: { heading: string }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return !isMobile ? (
    <MarqueeRate heading={heading} />
  ) : (
    <RateCardContainer>
      <MobileRateTextWrapper>
        <MobileInfiniteText isRateCard withoutMargin title={heading} />
      </MobileRateTextWrapper>
    </RateCardContainer>
  );
};

export default RateHeading;
