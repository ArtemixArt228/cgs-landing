import React from "react";
import * as Styled from "./ConceptToCompletion.styled";
import Image from "next/image";
import { IConceptToCompletionItem } from "../../../types/Admin/AdminPortfolio.types";

interface IProps {
  className: string;
  children: React.ReactNode;
  index: number;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  items: IConceptToCompletionItem[] | undefined;
  setIsMouseOnItem: React.Dispatch<React.SetStateAction<boolean>>;
  withIndex: boolean;
}

const ConceptItem = ({
  className,
  children,
  index,
  current,
  setCurrent,
  items,
  setIsMouseOnItem,
  withIndex,
}: IProps) => {
  const classes = [className];
  const title = withIndex
    ? `${index + 1}. ${items?.[index].subtitle}`
    : items?.[index].subtitle;
  if (current === index) {
    classes.push("current");
  }

  const handleMouseEnter = () => {
    setCurrent(index);
    setIsMouseOnItem(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOnItem(false);
  };

  return (
    <Styled.Concept
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classes.join(" ")}
    >
      <Styled.ConceptContent className={className}>
        {children}
        <Styled.Icon className={className}>
          <Image
            src={items?.[index].icon?.image?.url ?? ""}
            alt={"Icon"}
            layout="fill"
            objectFit="contain"
          />
        </Styled.Icon>
        <Styled.ItemTitle className={className}>{title}</Styled.ItemTitle>
      </Styled.ConceptContent>
    </Styled.Concept>
  );
};

export default ConceptItem;
