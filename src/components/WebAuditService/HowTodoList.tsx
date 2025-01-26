import React from "react";

import HowTodoListItem from "./HowTodoListItem";

import * as Styled from "../../styles/WebAuditService/HowTodoList.styled";

interface IHowTodoListProps {
  data: Array<string>;
}

const HowTodoList: React.FC<IHowTodoListProps> = ({ data }) => {
  const mappedItems =
    data &&
    data.map((item, idx) => (
      <HowTodoListItem
        key={idx + item + "desk"}
        item={item}
        isLastItem={idx !== data.length - 1}
      />
    ));

  return (
    <Styled.ListWrapper>
      <Styled.ContentWrapper>{mappedItems}</Styled.ContentWrapper>
      <Styled.Shadow>
        <Styled.TopCorner />
        <Styled.BottomCorner />
      </Styled.Shadow>
    </Styled.ListWrapper>
  );
};

export default HowTodoList;
