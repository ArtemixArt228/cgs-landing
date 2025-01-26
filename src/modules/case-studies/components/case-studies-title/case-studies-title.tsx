import React from "react";

import Image from "next/image";

import * as Styled from "./case-studies-title.styled";
import parse, { HTMLReactParserOptions, Element } from "html-react-parser";
import ScrambleText from "../../../../components/TextScramble/ScrambleText";
import { getWindowDimension } from "../../../../utils/getWindowDimension";
import { IPortfolioPageData } from "../../../../types/Admin/AdminPortfolio.types";
import longArrow from "/public/HomePageDecoration/longArrow.svg";

interface IProps {
  data?: IPortfolioPageData;
}

export const Title = ({ data }: IProps) => {
  const { width } = getWindowDimension();
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style &&
        domNode.attribs.style.includes("color: rgb(88, 105, 221)")
      ) {
        return (
          <span className="blue tech">
            <ScrambleText
              text={
                domNode.children[0].type === "text" &&
                (domNode.children[0] as any).data
              }
            />
          </span>
        );
      } else if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style &&
        domNode.attribs.style.includes("color: rgb(221, 105, 88)")
      ) {
        return (
          <>
            {width! > 714 && <br />}
            <Styled.ArrowWrapper>
              <Image
                src={longArrow.src}
                alt="wide tech long arrow"
                layout="fill"
                objectFit="cover"
                objectPosition="right"
              />
            </Styled.ArrowWrapper>
          </>
        );
      }
    },
  };
  return (
    <Styled.Title>
      {data && parse(data.SubtitleBlock.title, options)}
    </Styled.Title>
  );
};
