import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./ConceptToCompletion.styled";
import ConceptItem from "./ConceptItem";
import {
  RenderConnector,
  RenderItemConnector,
  RenderItemLine,
} from "./AnimatedElements";
import { IConceptToCompletionItem } from "../../../types/Admin/AdminPortfolio.types";
import { TransitionGroup, CSSTransition } from "react-transition-group";

interface IProps {
  items: IConceptToCompletionItem[] | undefined;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  withIndex?: boolean;
  className?: string;
}

const Desktop = ({
  items,
  current,
  setCurrent,
  withIndex = true,
  className = "",
}: IProps) => {
  const [isMouseOnItem, setIsMouseOnItem] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isMouseOnItem && isIntersecting) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prevCurrent) => (prevCurrent + 1) % (items?.length || 1));
      }, 5000);
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
    <Styled.ConceptWrapper ref={elementRef} className={className}>
      <Styled.Content>
        <TransitionGroup>
          <CSSTransition key={current} timeout={300} classNames="fade">
            <Styled.CenterBlock className={className}>
              <Styled.CenterBlockContent className={className}>
                <Styled.Title
                  className={className}
                  title={items?.[current].subtitle}
                >
                  {items?.[current].subtitle}
                </Styled.Title>
                <Styled.Description>{items?.[current].text}</Styled.Description>
              </Styled.CenterBlockContent>

              <RenderConnector
                className={`${className} left center`}
                condition={current === 0 || current === 5}
              />
              <RenderConnector
                className={`${className} right center`}
                condition={current === 2 || current === 3}
              />
              <RenderConnector
                className={`${className} bottom`}
                condition={current === 4}
              />
              <RenderConnector
                className={`${className} top`}
                condition={current === 1}
              />
              <>
                <RenderItemLine
                  condition={current === 4}
                  index={4}
                  className={`${className} item-${4}`}
                />
                <ConceptItem
                  setIsMouseOnItem={setIsMouseOnItem}
                  className={`${className} item-${4}`}
                  index={4}
                  current={current}
                  setCurrent={setCurrent}
                  items={items}
                  withIndex={withIndex}
                >
                  <RenderItemConnector
                    index={4}
                    condition={current === 4}
                    className={className}
                  />
                </ConceptItem>
              </>
            </Styled.CenterBlock>
          </CSSTransition>
        </TransitionGroup>

        {items?.slice(0, 6).map((_, idx) => {
          if (idx === 4) return null;
          return (
            <>
              <RenderItemLine
                condition={current === idx}
                index={idx}
                className={`${className} item-${idx}`}
              />
              <ConceptItem
                setIsMouseOnItem={setIsMouseOnItem}
                className={`${className} item-${idx}`}
                index={idx}
                current={current}
                setCurrent={setCurrent}
                items={items}
                withIndex={withIndex}
              >
                <RenderItemConnector
                  index={idx}
                  condition={current === idx}
                  className={className}
                />
              </ConceptItem>
            </>
          );
        })}
      </Styled.Content>
    </Styled.ConceptWrapper>
  );
};

export default Desktop;
