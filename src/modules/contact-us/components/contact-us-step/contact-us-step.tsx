import React, { useMemo } from "react";
import Image from "next/image";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import * as Styled from "./contact-us-step.styled";

import line from "/public/ContactForm/line.svg";
import { UseContactFormModalReturn } from "../../../../hooks/useContactPage";

interface IProps {
  title: string;
  description: string;
  imageActive: string;
  image: string;
  index: number;
  showLine?: boolean;
  currentIndex: number;
  controller: UseContactFormModalReturn;
}

export const Step = (props: IProps) => {
  const {
    title,
    description,
    image,
    index,
    showLine = true,
    imageActive,
    currentIndex,
    controller,
  } = props;

  const number = useMemo(
    () => (index < 10 ? `0${index + 1}. ` : `${index + 1}. `),
    [index]
  );

  const isActive = useMemo(() => index === currentIndex, [currentIndex, index]);

  return (
    <Styled.Step
      className={controller.mainClassName}
      isFirst={index == 0}
      step={currentIndex}
    >
      <Styled.Images className={controller.mainClassName}>
        <Styled.ImagesContainer className={controller.mainClassName}>
          <TransitionGroup>
            <CSSTransition
              key={isActive ? "active" : "not-active"}
              timeout={300}
              classNames="fade"
            >
              {isActive ? (
                <Styled.ImageWrapper className={controller.mainClassName}>
                  <Image
                    src={imageActive}
                    alt={"Step active"}
                    layout={"fill"}
                  />
                </Styled.ImageWrapper>
              ) : (
                <Styled.ImageWrapper className={controller.mainClassName}>
                  <Image src={image} alt={"Step"} layout={"fill"} />
                </Styled.ImageWrapper>
              )}
            </CSSTransition>
          </TransitionGroup>
        </Styled.ImagesContainer>
        {showLine && (
          <Styled.ImageWrapperLine className={controller.mainClassName}>
            <Image src={line} alt={"Line"} />
          </Styled.ImageWrapperLine>
        )}
      </Styled.Images>
      <Styled.StepText className={controller.mainClassName}>
        <Styled.StepTitle
          isActive={isActive}
          className={controller.mainClassName}
        >
          <Styled.StepNumber
            isActive={isActive}
            className={controller.mainClassName}
          >
            {number}
          </Styled.StepNumber>
          {title}
        </Styled.StepTitle>
        <Styled.StepDescription
          isActive={isActive}
          className={controller.mainClassName}
        >
          {description}
        </Styled.StepDescription>
      </Styled.StepText>
    </Styled.Step>
  );
};
