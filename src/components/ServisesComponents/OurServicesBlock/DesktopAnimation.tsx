import React, { useEffect, useRef, useState } from "react";
import { IConceptToCompletionItem } from "../../../types/Admin/AdminPortfolio.types";
import DesktopAnimationItem from "./DesktopAnimationItem";
import * as Styled from "./OurServicesBlock.styled";

interface IProps {
  items: IConceptToCompletionItem[] | undefined;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  withIndex?: boolean;
  className?: string;
}

const DesktopAnimation = ({
  items,
  current,
  setCurrent,
  withIndex = true,
}: IProps) => {
  const [isMouseOnItem, setIsMouseOnItem] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isMouseOnItem && isIntersecting) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prevCurrent) => (prevCurrent + 1) % (items?.length || 1));
      }, 2500);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current, items, isMouseOnItem, isIntersecting, setCurrent]);

  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
          } else {
            setIsIntersecting(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isIntersecting]);

  return (
    <Styled.DesctopAnimationWrapper ref={elementRef}>
      {items?.map((_, idx) => (
        <DesktopAnimationItem
          key={idx}
          setIsMouseOnItem={setIsMouseOnItem}
          index={idx}
          current={current}
          setCurrent={setCurrent}
          items={items}
          withIndex={withIndex}
        />
      ))}
    </Styled.DesctopAnimationWrapper>
  );
};

export default DesktopAnimation;
