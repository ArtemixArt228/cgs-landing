import React from "react";
import Image from "next/image";

import * as Styled from "../../styles/WebAuditService/HowTodoListItem.styled";

import HowToDoAuditImg from "../../../public/WebAuditServicePage/HowToDoAuditImg.svg";

interface IHowTodoListItemProps {
  item: string;
  isLastItem: boolean;
}

const HowTodoListItem: React.FC<IHowTodoListItemProps> = ({
  item,
  isLastItem,
}) => {
  return (
    <Styled.ListItem key={item}>
      <Styled.TextWrapper>
        <Styled.ImageWrapper>
          <Image
            src={HowToDoAuditImg}
            alt="list check icon img"
            layout="fill"
            objectFit="contain"
          />
        </Styled.ImageWrapper>
        <Styled.Text>{item}</Styled.Text>
      </Styled.TextWrapper>
      {isLastItem && <Styled.BottomLine />}
    </Styled.ListItem>
  );
};

export default HowTodoListItem;
