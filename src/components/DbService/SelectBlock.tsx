import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";

import TextTypingAnimation from "../Typewrite";

import * as Styled from "../../styles/DbService/SelectBlock.styled";

import { IServiceDb } from "../../types/Admin/Response.types";
import { IServicesClassnameProps } from "../../types/Services.types";

import { queryKeys } from "../../consts/queryKeys";

import { useOnScreen } from "../../hooks/useOnScreen";

import { SplitBrackets } from "../../utils/splitBrackets";

const SelectBlock = ({ className }: IServicesClassnameProps) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceDb>([
    queryKeys.getServiceDbPage,
  ])?.selectBlock;

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  return (
    <Styled.Container className={className}>
      {data && (
        <Styled.Subtitle ref={elRef}>
          {isScrolled && (
            <TextTypingAnimation miliseconds={250} text={data.subtitle} />
          )}
        </Styled.Subtitle>
      )}
      <Styled.TextContent>
        <SplitBrackets text={data?.text} />
      </Styled.TextContent>
      <Styled.Image src={data?.image.url} alt="hero image" />
    </Styled.Container>
  );
};

export default SelectBlock;
