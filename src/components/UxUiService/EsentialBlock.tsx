import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { SplitBrackets } from "../../utils/splitBrackets";
import TextTypingAnimation from "../Typewrite";
import EssentialImage from "./EssentialImage";

import * as Styled from "../../styles/UxUiService/EssentialBlock.styled";

import { queryKeys } from "../../consts/queryKeys";

import { IUxUiInterface } from "../../types/Admin/Response.types";

import { useOnScreen } from "../../hooks/useOnScreen";

const EssentialBlock = () => {
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<IUxUiInterface>([
    queryKeys.getServiceUxUiPage,
  ])?.essentialBlock;
  const elRef = useRef<HTMLDivElement>(null);
  const isScrolled = useOnScreen(elRef, true);
  return (
    <Styled.Container>
      <Styled.ImageWrapper>
        <EssentialImage />
      </Styled.ImageWrapper>
      <Styled.ContentWrapper>
        {data && (
          <Styled.Title ref={elRef}>
            {isScrolled && (
              <TextTypingAnimation miliseconds={250} text={data.title} />
            )}
          </Styled.Title>
        )}
        <Styled.Text>
          <SplitBrackets text={data?.text} />
        </Styled.Text>
      </Styled.ContentWrapper>
    </Styled.Container>
  );
};

export default EssentialBlock;
