import React from "react";
import { useCollapse } from "react-collapsed";
import { SplitBrackets } from "../../../../../utils/splitBrackets";
import * as Styles from "./BonusItem.styled";

interface ICardProps {
  subtitle: string;
  text: string;
  index: number;
  isOpen: boolean;
  handleClick: (textIdx: number) => void;
}

export const BonusItem = ({
  subtitle,
  text,
  index,
  isOpen,
  handleClick,
}: ICardProps) => {
  const id = subtitle.split(" ").join("-");

  const { getToggleProps, getCollapseProps } = useCollapse({
    easing: "linear",
    isExpanded: isOpen,
    collapsedHeight: 0,
    duration: 300,
    id,
  });
  return (
    <Styles.Card>
      <Styles.CardContent className="card-content">
        <Styles.CardTitle
          isHilighted={isOpen}
          {...getToggleProps({ onClick: () => handleClick(index) })}
        >
          <Styles.CardTitleText>{subtitle}</Styles.CardTitleText>
          <Styles.CardTitleImage className="arrowContainer">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.4151 11.53L24.6177 26.1001L24.5995 26.1003L24.5997 26.1185L9.35174 26.2827L9.32314 24.1957L21.0288 24.0697L9.79799 13.1179L11.2537 11.626L22.4806 22.574L22.3275 11.5529L24.4151 11.53Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.4151 11.53L24.6177 26.1001L24.5995 26.1003L24.5997 26.1185L9.35174 26.2827L9.32314 24.1957L21.0288 24.0697L9.79799 13.1179L11.2537 11.626L22.4806 22.574L22.3275 11.5529L24.4151 11.53Z"
              />
            </svg>
          </Styles.CardTitleImage>
        </Styles.CardTitle>
        <div {...getCollapseProps()}>
          <Styles.CardText>
            <SplitBrackets text={text} />
          </Styles.CardText>
        </div>
      </Styles.CardContent>
    </Styles.Card>
  );
};
