import React, { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import HowTodoList from "./HowTodoList";
import HowTodoDynamicMobileList from "./HowTodoDynamicMobileList";

import * as Styled from "../../styles/WebAuditService/HowToDoBlock.styled";

import { queryKeys } from "../../consts/queryKeys";

import { IServiceWebAudit } from "../../types/Admin/Response.types";

import { SplitBrackets } from "../../utils/splitBrackets";

import { useWindowDimension } from "../../hooks/useWindowDimension";

const HowToDoBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWebAudit>([
    queryKeys.getServiceWebAuditPage,
  ])?.howToDoAudit;

  const [cardsComponents, setCardsComponents] = useState<JSX.Element>();

  const { width } = useWindowDimension();

  const firstHalf = data?.points.slice(0, data.points.length / 2);
  const secondHalf = data?.points.slice(
    data.points.length / 2,
    data.points.length
  );

  const deskCards = (
    <>
      {firstHalf && <HowTodoList data={firstHalf} />}
      {secondHalf && <HowTodoList data={secondHalf} />}
    </>
  );

  const mobileCards = data && (
    <HowTodoDynamicMobileList points={data?.points} />
  );

  useEffect(() => {
    width && width > 768
      ? setCardsComponents(deskCards)
      : setCardsComponents(mobileCards);
  }, [width]);

  return (
    <Styled.Wrapper>
      <Styled.Subtitle>
        <SplitBrackets text={data?.subtitle} />
      </Styled.Subtitle>
      <Styled.ContentWrapper>{cardsComponents}</Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

export default HowToDoBlock;
