import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceSupport } from "../../types/Admin/Response.types";
import rhombus from "../../../public/CloudServicePage/rhombus.svg";
import * as Styled from "../../styles/OngoingSupport/BonusesBlock.styled";
import { useOnScreen } from "../../hooks/useOnScreen";

const BonusesBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceSupport>([
    queryKeys.getServiceSupportPage,
  ])?.bonusesBlock;

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      <Styled.TextWrapper ref={elRef}>
        <Styled.Row1>
          <Styled.Line
            className={isScrolled ? "scrolled" : undefined}
            ind={0}
          />
          {data?.textSubBlock.slice(0, 3).map((el, idx) => (
            <React.Fragment key={idx}>
              <Styled.Text
                className={isScrolled ? "scrolled" : undefined}
                ind={idx}
              >
                <Styled.Image src={rhombus.src} />
                {el}
              </Styled.Text>
              <Styled.Line
                className={isScrolled ? "scrolled" : undefined}
                ind={idx}
              />
            </React.Fragment>
          ))}
        </Styled.Row1>
        <Styled.Row2>
          <Styled.Line
            className={isScrolled ? "scrolled" : undefined}
            ind={3}
          />
          {data?.textSubBlock.slice(3).map((el, idx) => (
            <React.Fragment key={idx}>
              <Styled.Text
                className={isScrolled ? "scrolled" : undefined}
                ind={idx + 3}
              >
                <Styled.Image src={rhombus.src} />
                {el}
              </Styled.Text>
              <Styled.Line
                className={isScrolled ? "scrolled" : undefined}
                ind={idx + 3}
              />
            </React.Fragment>
          ))}
        </Styled.Row2>
      </Styled.TextWrapper>
    </Styled.Container>
  );
};

export default BonusesBlock;
