import React from "react";

import { MobileAuditSplitBrackets } from "./MobileAuditSplit";

import * as Styled from "../../styles/MobileAuditService/WhatAppInclude.styled";

interface ISubListItemProps {
  subItem: string;
  onMouseEnter?: (title: string, event: React.MouseEvent) => void;
  onMouseOut?: () => void;
}

const WhatAppIncludeSubListItem = ({
  subItem,
  onMouseEnter,
  onMouseOut,
}: ISubListItemProps) => {
  return (
    <Styled.SubtextWrapper>
      <Styled.PointWrapper className="subtext">
        <Styled.SubtextPointLine />
        <Styled.PointCircle />
      </Styled.PointWrapper>
      <Styled.Subtext>
        <MobileAuditSplitBrackets
          text={subItem}
          onMouseEnter={onMouseEnter}
          onMouseOut={onMouseOut}
        />
      </Styled.Subtext>
    </Styled.SubtextWrapper>
  );
};

export default WhatAppIncludeSubListItem;
