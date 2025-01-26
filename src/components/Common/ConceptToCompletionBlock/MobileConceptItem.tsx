import React, { useEffect, useRef } from "react";
import { IConceptToCompletionItem } from "../../../types/Admin/AdminPortfolio.types";
import * as Styled from "./ConceptToCompletion.styled";
import clsx from "clsx";

interface IProps {
  index: number;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  items: IConceptToCompletionItem[] | undefined;
  withIndex?: boolean;
  className?: string;
}

const MobileConceptItem = ({
  index,
  items,
  current,
  setCurrent,
  withIndex,
  className,
}: IProps) => {
  const elementRef = useRef(null);
  const title = withIndex
    ? `${index + 1}. ${items?.[index].subtitle}`
    : items?.[index].subtitle;
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrent(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [index, setCurrent]);

  return (
    <Styled.MobileConcept
      ref={elementRef}
      className={clsx(current === index && "current", className)}
    >
      <Styled.IconAndTitle>
        <Styled.Icon className={className}>
          <img
            src={items?.[index].icon?.image?.url ?? ""}
            className={"image"}
            alt={"Icon"}
          />
        </Styled.Icon>
        <Styled.Title className={className}>{title}</Styled.Title>
      </Styled.IconAndTitle>
      <Styled.Description className={className}>
        {items?.[index].text}
      </Styled.Description>
    </Styled.MobileConcept>
  );
};

export default MobileConceptItem;
