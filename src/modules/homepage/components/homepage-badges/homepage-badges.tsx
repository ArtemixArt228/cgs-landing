import React, { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import * as Styled from "./homepage-badges.styled";

import { IHomePageResponse } from "../../../../types/Admin/AdminHomePage.types";
import { queryKeys } from "../../../../consts/queryKeys";
import { useOnScreen } from "../../../../hooks/useOnScreen";

export const Badges = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IHomePageResponse>([
    queryKeys.getFullHomePage,
  ])?.BadgesBlock;

  const [gradientAngle, setGradientAngle] = useState<string>("50%");

  const arrayOfGradients = ["item1", "item2", "item3"];

  const mouseMoveListener = useCallback(({ pageX }: MouseEvent) => {
    const windowWidth = window.innerWidth;
    const mousePercentage = Math.round((pageX / windowWidth) * 100);
    setGradientAngle(`${mousePercentage}%`);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveListener, false);
    return () => window.removeEventListener("mousemove", mouseMoveListener);
  }, [mouseMoveListener]);

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  if (!data) throw Error("Data not found!");

  return (
    <Styled.BadgesContainer>
      <Styled.BgiContainer angle={gradientAngle} ref={elRef}>
        {arrayOfGradients.map((el, idx) => (
          <Styled.MobileLine
            ind={idx}
            className={isScrolled ? "scrolled" : undefined}
            key={el}
          />
        ))}
      </Styled.BgiContainer>
      <Styled.BadgesData columnsNumber={data.badges.length}>
        {data.badges.map(
          (elem, idx) =>
            elem.image && (
              <Styled.BadgeCard key={`${elem.link}${idx}`}>
                <a href={elem.link} target={"_blank"} rel={"noreferrer"}>
                  <Styled.BadgeImageWrapper>
                    <Image
                      src={elem.image.url}
                      alt="free service image"
                      layout="fill"
                      objectFit="contain"
                    />
                  </Styled.BadgeImageWrapper>
                </a>
              </Styled.BadgeCard>
            )
        )}
      </Styled.BadgesData>
    </Styled.BadgesContainer>
  );
};
