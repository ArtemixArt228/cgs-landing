import React, { useRef } from "react";
import Image from "next/image";
import parse from "html-react-parser";

import linkedInLocal from "../../../../public/linkedIn.svg";

import * as Styled from "./DesktopTeamGallery.styled";
import { IAbout } from "../../../types/Admin/Response.types";
import { useOnScreen } from "../../../hooks/useOnScreen";

const parsedText = (text: string) => {
  const textArray = text.split("|");
  return (
    <>
      {textArray.map((e: string, i: number) => {
        const parsedString = "<span>" + e + "</span>";
        return <p key={i}>{parse(parsedString)}</p>;
      })}
    </>
  );
};

type IGalleryProps = Pick<IAbout, "team">;

interface IProps extends IGalleryProps {
  linkedInIcon: string | any;
}

export const DesktopTeamGallery = ({
  team: { title, members },
  linkedInIcon,
}: IProps) => {
  const galleryRef = useRef<HTMLUListElement>(null);
  const isGalleryVisible = useOnScreen(galleryRef, true);
  return (
    <>
      <Styled.Subtitle>{title}</Styled.Subtitle>
      <Styled.TeamGallery ref={galleryRef}>
        {members.map((member, index) => (
          <Styled.Teammate
            key={index}
            className={isGalleryVisible ? "galleryVisible" : ""}
          >
            <Styled.TeammateImageContainer>
              <Image
                src={member?.image?.url ? member.image.url : ""}
                alt="teammate image"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
              />
              <Styled.LinkedIn
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  priority
                  src={linkedInLocal}
                  alt="Link to LinkedIn"
                  layout="fill"
                />
              </Styled.LinkedIn>
              <Styled.TeammateTextOverlay>
                <Styled.TeammateName>{member.name}</Styled.TeammateName>
                <Styled.TeammatePosition>
                  {member.position}
                </Styled.TeammatePosition>
              </Styled.TeammateTextOverlay>
            </Styled.TeammateImageContainer>
            <Styled.TeammateAbout>
              {parsedText(member.about)}
            </Styled.TeammateAbout>
          </Styled.Teammate>
        ))}
      </Styled.TeamGallery>
    </>
  );
};

export default DesktopTeamGallery;
