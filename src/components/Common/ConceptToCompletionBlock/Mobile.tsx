import React from "react";
import { IConceptToCompletionItem } from "../../../types/Admin/AdminPortfolio.types";
import MobileConceptItem from "./MobileConceptItem";
import * as Styled from "./ConceptToCompletion.styled";

interface IProps {
  items: IConceptToCompletionItem[] | undefined;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  withIndex?: boolean;
  className?: string;
}

const Mobile = ({
  items,
  current,
  setCurrent,
  withIndex = true,
  className,
}: IProps) => {
  return (
    <Styled.MobileWrapper>
      {items?.map((item, index) => (
        <MobileConceptItem
          key={item._id}
          current={current}
          setCurrent={setCurrent}
          items={items}
          index={index}
          withIndex={withIndex}
          className={className}
        />
      ))}
    </Styled.MobileWrapper>
  );
};

export default Mobile;
