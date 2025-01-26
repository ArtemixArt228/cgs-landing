import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import parse from "html-react-parser";

import linkedInLocal from "../../../../public/linkedIn.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import * as Styled from "./MobileTeamGallery.styled";
import { IAbout } from "../../../types/Admin/Response.types";

interface IString {
  text: string;
}

const ParsedText = ({ text }: IString) => {
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

export const MobileTeamGallery = ({
  team: { title, members },
}: IGalleryProps) => {
  return (
    <Styled.SwiperContainer>
      <Styled.SwiperHeader>
        <Styled.ContentWrapper>
          <Styled.HeaderText>{title}</Styled.HeaderText>
          <Styled.HeaderArrowWrapper className="button-next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 18"
              fill="none"
            >
              <path
                d="M9.75 1.39844L18 9.39844M18 9.39844L9.75 17.3984M18 9.39844L-6.84812e-07 9.39844"
                stroke="black"
                strokeWidth="1.5"
              />
            </svg>
          </Styled.HeaderArrowWrapper>
        </Styled.ContentWrapper>
      </Styled.SwiperHeader>
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={1}
        loop={true}
        spaceBetween={20}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        className="mySwiper"
      >
        {members?.map(
          (member, index) =>
            member && (
              <SwiperSlide key={index}>
                <Styled.Teammate key={index}>
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
                    <ParsedText text={member.about} />
                  </Styled.TeammateAbout>
                </Styled.Teammate>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </Styled.SwiperContainer>
  );
};

export default MobileTeamGallery;
