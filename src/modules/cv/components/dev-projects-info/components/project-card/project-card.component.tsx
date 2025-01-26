import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

import { AchievementsList } from "../achievements-list";

import * as Styled from "./project-card.styled";

import { ITechnology } from "../../../../../../types/Admin/technologies.types";
import { CvLink } from "../../../../types";

import useIntersectionObserver from "../../../../../../hooks/useIntersectionObserver";

import { SplitBrackets } from "../../../../../../utils/splitBrackets";
interface IProps {
  projectName: string;
  role: string;
  date: string;
  summary: string;
  achievements: string[];
  links?: CvLink[];
  technology: ITechnology[];
  idx: number;
}

export const Project = ({
  projectName,
  role,
  date,
  summary,
  achievements,
  links,
  technology,
  idx,
}: IProps) => {
  const refProjectCard = useRef<HTMLDivElement>(null);
  const refTechContainer = useRef<HTMLDivElement>(null);
  const refTechBlockContainer = useRef<HTMLDivElement>(null);
  const [isOneRow, setIsOneRow] = useState(true);

  const isMobile = useMediaQuery("(max-width:768px)");
  const mobileHeight = window.innerHeight;
  const blockHeight = refProjectCard.current?.offsetHeight;

  const entry = useIntersectionObserver(refProjectCard, {
    threshold:
      blockHeight && isMobile && mobileHeight
        ? mobileHeight / 2.25 / blockHeight
        : 0.7,
  });

  useEffect(() => {
    const adjustWidth = () => {
      if (refTechBlockContainer.current && refTechContainer.current) {
        const parentWidth = refTechBlockContainer.current.offsetWidth;
        const childElement = refTechBlockContainer.current.querySelector(
          ".image"
        ) as HTMLElement;

        if (childElement) {
          const childWidth = childElement.offsetWidth + 8;

          const maxItemsWithoutExtraSpace = Math.floor(
            refTechBlockContainer.current.offsetWidth / childWidth
          );

          const optimalContainerWidth =
            maxItemsWithoutExtraSpace * childWidth - 8;

          refTechContainer.current.style.width = `${optimalContainerWidth}px`;

          const itemsInFirstRow = Math.floor(parentWidth / childWidth);
          const totalRows = Math.ceil(technology.length / itemsInFirstRow);

          setIsOneRow(totalRows === 1);
        }
      }
    };

    adjustWidth();

    window.addEventListener("resize", adjustWidth);

    return () => window.removeEventListener("resize", adjustWidth);
  }, [refTechContainer, technology]);

  return (
    <div className="cv-info-card-wrapper">
      <Styled.InfoCard
        ref={refProjectCard}
        className={`${
          entry?.isIntersecting ? "intersecting" : ""
        } cv-info-card`}
      >
        <Styled.NumberTitleWrap>
          <Styled.Number>{idx + 1}</Styled.Number>
          <Styled.DesktopTitle>
            <Styled.TitleWrap>
              <Styled.Title>
                <Styled.ProjectName>{projectName}</Styled.ProjectName>
                <Styled.Links>
                  {links
                    ?.filter((l) => l.url)
                    .map((link, id) => (
                      <>
                        {id > 0 && <span>/</span>}
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={`${link.url}${id}`}
                        >
                          {link.text}
                        </a>
                      </>
                    ))}
                </Styled.Links>
              </Styled.Title>
            </Styled.TitleWrap>
            <Styled.Date className="desktop">{date}</Styled.Date>
            <Styled.Role className="desktop">Role: {role}</Styled.Role>
          </Styled.DesktopTitle>
        </Styled.NumberTitleWrap>
        <Styled.Date className="mobile">{date}</Styled.Date>
        <Styled.Role className="mobile">Role: {role}</Styled.Role>
        <Styled.About>
          <Styled.AboutTitle>About project:</Styled.AboutTitle>
          <Styled.AboutText>
            <SplitBrackets text={summary} />
          </Styled.AboutText>
        </Styled.About>
        <Styled.AchievementsTechnologyWrap>
          <AchievementsList achievements={achievements} />
          <Styled.Technologies ref={refTechBlockContainer}>
            <Styled.TechnologiesTitle>Technologies:</Styled.TechnologiesTitle>
            <Styled.PortfolioPageIconContainer
              ref={refTechContainer}
              firstSet
              isOneRow={isOneRow}
            >
              {technology.map((e, idx) => (
                <div key={`${e?.image?.url}${idx}`}>
                  <div className="image">
                    <Image
                      src={e?.image?.url ? e.image.url : ""}
                      alt="tech"
                      layout="fill"
                      objectFit="fill"
                    />
                  </div>
                  <Styled.TechText>{e.name}</Styled.TechText>
                </div>
              ))}
            </Styled.PortfolioPageIconContainer>
          </Styled.Technologies>
        </Styled.AchievementsTechnologyWrap>
      </Styled.InfoCard>
    </div>
  );
};
