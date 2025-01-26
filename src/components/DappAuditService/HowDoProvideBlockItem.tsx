import React from "react";

import * as Styled from "../../styles/DappAuditService/HowDoProvideBlock.styled";

import { SplitBrackets } from "../../utils/splitBrackets";

interface IHowToProvideBlockItemProps {
  number: number;
  title: string;
  text: string;
  optional?: boolean;
  className?: string;
}

const HowToProvideBlockItem = ({
  number,
  title,
  text,
  className,
  optional = false,
}: IHowToProvideBlockItemProps) => {
  return (
    <Styled.ItemContainer className={number === 1 ? "first" : undefined}>
      <Styled.ItemTitleContainer className={className}>
        <Styled.BigDigit>{number}</Styled.BigDigit>
        <Styled.OptionalContainer>
          <Styled.ItemTitle className={optional ? "optional" : undefined}>
            {title}
          </Styled.ItemTitle>
          <Styled.OptionalText className={optional ? "optional" : undefined}>
            (Optional)
          </Styled.OptionalText>
        </Styled.OptionalContainer>
      </Styled.ItemTitleContainer>
      <Styled.Description className={number === 1 ? "first" : undefined}>
        <SplitBrackets text={text} />
      </Styled.Description>
    </Styled.ItemContainer>
  );
};

export default HowToProvideBlockItem;
