import React from "react";
import { IConceptToCompletionItem } from "../../../types/Admin/AdminPortfolio.types";
import * as Styled from "./OurServicesBlock.styled";
import * as ConceptStyled from "../../Common/ConceptToCompletionBlock/ConceptToCompletion.styled";
import Image from "next/future/image";
import { useMediaQuery } from "@mui/material";

interface IProps {
  className?: string;
  index: number;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  items: IConceptToCompletionItem[] | undefined;
  setIsMouseOnItem: React.Dispatch<React.SetStateAction<boolean>>;
  withIndex: boolean;
}

const DesktopAnimationItem = ({
  className = "",
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

  const isBigScreen = useMediaQuery("(min-width: 1800px)");

  const handleMouseEnter = () => {
    setCurrent(index);
    setIsMouseOnItem(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOnItem(false);
  };

  return (
    <Styled.Service
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classes.join(" ")}
    >
      <ConceptStyled.IconAndTitle className={className}>
        <Image
          src={items?.[index].icon?.image?.url ?? ""}
          alt={"Icon"}
          width={isBigScreen ? 106.67 : 80}
          height={isBigScreen ? 106.67 : 80}
        />
        <ConceptStyled.Title className={className}>{title}</ConceptStyled.Title>
      </ConceptStyled.IconAndTitle>
      <ConceptStyled.Description className={className}>
        {items?.[index].text}
      </ConceptStyled.Description>
    </Styled.Service>
  );
};

export default DesktopAnimationItem;
