import React, { useState, FC } from "react";
import parse from "html-react-parser";
import { useCollapse } from "react-collapsed";

import * as Styles from "./FAQuestion.styles";

import { IQuestionProps } from "../../../types/Company.types";

const Question: FC<IQuestionProps> = ({
  title,
  content,
  image,
  isHomepage,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const id = title.split(" ").join("-").trim();

  const { getToggleProps, getCollapseProps } = useCollapse({
    easing: "linear",
    isExpanded: isOpen,
    collapsedHeight: 0,
    id,
  });

  return (
    <Styles.QuestionBox isOpen={isOpen} className={"homepage " + className}>
      <Styles.QuestionContainer isOpen={isOpen}>
        <Styles.QuestionTitleContainer
          className={`${
            isHomepage ? (isOpen ? "open homepage" : "homepage") : ""
          } ${className}`}
          isOpen={isOpen}
          {...getToggleProps({ onClick: () => setIsOpen(!isOpen) })}
        >
          <Styles.QuestionTitle
            isOpen={isOpen}
            className={`${isHomepage ? "homepage" : ""} ${className}`}
          >
            {title}
          </Styles.QuestionTitle>
          <Styles.TogglePlus
            className={`${isHomepage ? "homepage" : ""} ${className}`}
          >
            {isOpen ? "-" : "+"}
          </Styles.TogglePlus>
        </Styles.QuestionTitleContainer>
        <div {...getCollapseProps()}>
          <Styles.QuestionContentContainer
            isOpen={isOpen}
            className={"homepage " + className}
          >
            <Styles.QuestionTextContainer className={"homepage " + className}>
              {parse(content)}
            </Styles.QuestionTextContainer>
            {image?.url && <Styles.QuestionImage src={image.url} alt="" />}
          </Styles.QuestionContentContainer>
        </div>
      </Styles.QuestionContainer>
    </Styles.QuestionBox>
  );
};

export default Question;
