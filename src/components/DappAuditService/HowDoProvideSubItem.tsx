import React from "react";

import * as Styled from "../../styles/DappAuditService/HowDoProvideBlock.styled";

import { SplitBrackets } from "../../utils/splitBrackets";

interface HowDoProvideSubItemProps {
  title: string;
  text: string;
}

const HowDoProvideSubItem = ({ title, text }: HowDoProvideSubItemProps) => {
  return (
    <Styled.SubContainer>
      <Styled.SubTitle>
        <Styled.MobilePointWrapper>
          <Styled.PointLine />
          <Styled.PointDiamond />
        </Styled.MobilePointWrapper>
        <SplitBrackets text={title} />
      </Styled.SubTitle>
      <Styled.SubText>
        <SplitBrackets text={text} />
      </Styled.SubText>
    </Styled.SubContainer>
  );
};

export default HowDoProvideSubItem;
