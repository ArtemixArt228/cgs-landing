import React from "react";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";
import { MobleTextWrapper } from "./index.styled";
import Marquee from "./Marquee";

export const HeaderText = ({ title }: { title: string }) => {
  return (
    <>
      <Marquee title={title} />
      <MobleTextWrapper>
        <MobileInfiniteText title={title} />
      </MobleTextWrapper>
    </>
  );
};
