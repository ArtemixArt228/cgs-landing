import React, { useEffect, useRef, useState } from "react";

import { MobileInfiniteText } from "../../../MobileInfiniteText/MobileInfiniteText";

import * as Styled from "./teamMembers.styled";

import { ITeamMembers } from "../../../../types/ServicesComponent.types";

import { SplitBrackets } from "../../../../utils/splitBrackets";

interface ITeamMembersProps {
  teamMembers?: ITeamMembers;
  className?: string;
}

const TeamMembers = ({ teamMembers, className }: ITeamMembersProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const ScrollListRef = useRef<HTMLDivElement>(null);

  const { title, description, members, selectedMembers } = teamMembers ?? {
    title: "",
    description: "",
    members: [{ id: "", member: "" }],
    selectedMembers: [{ id: "", member: "" }],
  };

  useEffect(() => {
    const is400px = window.matchMedia("(max-width: 400px)").matches;

    const handleScroll = () => {
      if (ScrollListRef.current) {
        const scrollTop = ScrollListRef.current.scrollTop;
        const maxScrollHeight =
          ScrollListRef.current.scrollHeight -
          ScrollListRef.current.clientHeight;
        const scrollPercentage = (scrollTop / maxScrollHeight) * 100;
        const maxTop = is400px ? 110 : 128;
        const calculatedTop = Math.min(
          scrollPercentage * (maxTop / 100),
          maxTop
        );
        setScrollPosition(calculatedTop);
      }
    };

    if (ScrollListRef.current) {
      ScrollListRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (ScrollListRef.current) {
        ScrollListRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <Styled.MobileTitle className={className}>
        <MobileInfiniteText title={title} />
      </Styled.MobileTitle>
      <Styled.Wrapper className={className}>
        <Styled.TextContainer className={className}>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Description>
            <SplitBrackets text={description} />
          </Styled.Description>
        </Styled.TextContainer>
        <Styled.ScrollbarContainer isNeeded={selectedMembers.length > 3}>
          <Styled.Scrollbar top={scrollPosition}></Styled.Scrollbar>
        </Styled.ScrollbarContainer>
        <Styled.ScrollList ref={ScrollListRef} className={className}>
          {selectedMembers?.map(({ id, member }, index) => (
            <Styled.ScrollContainer key={id}>
              <Styled.ScrollItem
                lastItem={index === selectedMembers.length - 1}
                className={className}
              >
                {member}
              </Styled.ScrollItem>
            </Styled.ScrollContainer>
          ))}
        </Styled.ScrollList>
      </Styled.Wrapper>
    </>
  );
};

export default TeamMembers;
