import React from "react";
import Image from "next/image";
import { DOMNode, Element } from "html-react-parser";

import ScrambleText from "../../../components/TextScramble/ScrambleText";

import * as Styled from "../components/cta/cta.styled";

import rightArrow from "public/CV/cta-right-arrow.svg";
import rightArrowMobile from "public/CV/cta-right-arrow_mobile.svg";

export const createParsingOptions = (isMobile: boolean) => ({
  replace: (domNode: DOMNode | undefined) => {
    if (
      domNode instanceof Element &&
      domNode.attribs &&
      domNode.attribs.style &&
      domNode.attribs.style.includes("color: rgb(88, 24, 14)")
    ) {
      return (
        <>
          <Styled.CTAArrowWrapper>
            <Image
              src={isMobile ? rightArrowMobile.src : rightArrow.src}
              alt="wide tech long arrow"
              layout="fill"
              objectFit="contain"
              priority
            />
          </Styled.CTAArrowWrapper>
          <br />
        </>
      );
    }
    if (
      domNode instanceof Element &&
      domNode.attribs &&
      domNode.attribs.style &&
      domNode.attribs.style.includes("color: rgb(88, 105, 221)")
    ) {
      const child = domNode.children?.[0];

      const text =
        child && child.nodeType === 3
          ? (child as unknown as Text).data
          : "";

      return (
        <span className="blue">
          <ScrambleText text={text} />
        </span>
      );
    }
  },
});
