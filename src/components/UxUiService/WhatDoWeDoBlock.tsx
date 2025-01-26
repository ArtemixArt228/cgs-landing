import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

import * as Styled from "../../styles/UxUiService/WhatDoWeDo.styled";

import { IUxUiInterface } from "../../types/Admin/Response.types";

import { queryKeys } from "../../consts/queryKeys";

import { SplitBrackets } from "../../utils/splitBrackets";

import { useOnScreen } from "../../hooks/useOnScreen";

import cd from "../../../public/MobileSevice/worthIt/cd.svg";
import tree from "../../../public/MobileSevice/worthIt/tree.svg";
import window from "../../../public/MobileSevice/worthIt/window.svg";

const WhatDoWeDoBlock = () => {
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<IUxUiInterface>([
    queryKeys.getServiceUxUiPage,
  ])?.whatDoWeDoBlock;

  const { title: subtitle, textSubBlock: blocks } = { ...data };
  const figures = [cd, tree, window];
  const figuresAlt = ["Disk", "Tree", "Window"];

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  return (
    <Styled.Container>
      <Styled.Title>{subtitle}</Styled.Title>
      <MobileInfiniteText title={subtitle} />
      <Styled.TextWrapper ref={elRef}>
        {blocks?.map((el, idx) => (
          <Styled.Wrapper
            key={idx}
            ind={idx}
            className={isScrolled ? "scrolled" : undefined}
          >
            <Styled.Subtitle>
              <Styled.Svg src={figures[idx].src} alt={figuresAlt[idx]} />
              {el.subtitle}
            </Styled.Subtitle>
            <Styled.Text>
              <SplitBrackets text={el.text} />
            </Styled.Text>
          </Styled.Wrapper>
        ))}
      </Styled.TextWrapper>
    </Styled.Container>
  );
};

export default WhatDoWeDoBlock;
