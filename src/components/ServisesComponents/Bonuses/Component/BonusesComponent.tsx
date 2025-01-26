import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";

import { BonusItem } from "./BonusItem";
import { MobileInfiniteText } from "../../../MobileInfiniteText/MobileInfiniteText";

import * as Styles from "./BonusesComponent.styled";

import { IBonusesComponent } from "../../../../types/ServicesComponent.types";

interface IBonusesProps {
  bonuses?: IBonusesComponent;
  className?: string;
}

export const BonusesComponent = ({ bonuses, className }: IBonusesProps) => {
  const isMobile = useMediaQuery("(max-width:768px)");

  const { title, bonuses: bonusesData } = bonuses ?? {
    title: "",
    bonuses: [{ subtitle: "", text: "" }],
  };

  const bonusesWithIdx = bonusesData.map((item, index) => ({ ...item, index }));

  const [isOpenItems, setIsOpenItems] = useState(() =>
    bonusesData.map(() => false)
  );

  const handleOpenText = (textIdx: number) => {
    setIsOpenItems(
      isOpenItems.map((itemOpen, idx) => (idx !== textIdx ? false : !itemOpen))
    );
  };

  return (
    <>
      <Styles.MobileTitle>
        <MobileInfiniteText title={title} />
      </Styles.MobileTitle>
      <Styles.Container className={className}>
        <Styles.Title className={className}>{title}</Styles.Title>
        <Styles.RelativePositioner className={className}>
          <Styles.ListsWrapper>
            {isMobile ? (
              <Styles.ServiceList className={className}>
                {bonusesWithIdx.map((item, idx) => (
                  <BonusItem
                    key={idx}
                    subtitle={item.subtitle}
                    text={item.text}
                    index={item.index}
                    isOpen={isOpenItems[item.index]}
                    handleClick={handleOpenText}
                  />
                ))}
              </Styles.ServiceList>
            ) : (
              <>
                <Styles.ServiceList className={className}>
                  {bonusesWithIdx
                    .filter((item, idx) => idx % 2 === 0)
                    .map((item, idx) => (
                      <BonusItem
                        key={idx}
                        subtitle={item.subtitle}
                        text={item.text}
                        index={item.index}
                        isOpen={isOpenItems[item.index]}
                        handleClick={handleOpenText}
                      />
                    ))}
                </Styles.ServiceList>
                <Styles.ServiceList className={className}>
                  {bonusesWithIdx
                    .filter((item, idx) => idx % 2 !== 0)
                    .map((item, idx) => (
                      <BonusItem
                        key={idx}
                        subtitle={item.subtitle}
                        text={item.text}
                        index={item.index}
                        isOpen={isOpenItems[item.index]}
                        handleClick={handleOpenText}
                      />
                    ))}
                </Styles.ServiceList>
              </>
            )}
          </Styles.ListsWrapper>
        </Styles.RelativePositioner>
      </Styles.Container>
    </>
  );
};

export default BonusesComponent;
