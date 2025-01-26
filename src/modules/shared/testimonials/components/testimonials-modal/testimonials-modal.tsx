import React from "react";
import Image from "next/future/image";
import { useMediaQuery } from "@mui/material";
import ReactPlayer from "react-player";

import themes from "../../../../../utils/themes";
import * as Styled from "../../../../../styles/HomePage/Testimonials.styled";
import * as ModalStyled from "./testimonials-modal.styled";
import { ITestimonial } from "../../../../../types/Components.types";
import { useScrollLock } from "../../../../../hooks/useScrollLock";
import FooterNew from "../../../../../components/FooterNew/FooterNew";
import logo from "/public/Header/logo/CGS-team-logo.svg";
import close from "/public/Portfolio/ExitIcon.svg";
import { TestimonialsIconLinks } from "../testimonials-icons-links";

interface IProps {
  isFormOpen: boolean;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  testimonial: ITestimonial;
}

export const ModalContent = ({
  isFormOpen,
  setIsFormOpen,
  testimonial,
}: IProps) => {
  const isDesktop = useMediaQuery(themes.primary.media.minLaptop);
  const isMobile = useMediaQuery(themes.primary.media.maxMobile);

  const handleCloseButtonClick = () => {
    setIsFormOpen(false);
  };
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsFormOpen(false);
    }
  };
  useScrollLock(isFormOpen, [".header"], [".CallButton"]);

  if (!isFormOpen) {
    return null;
  }

  return (
    <ModalStyled.HeroSectionMobileFormContainer onClick={handleContainerClick}>
      <ModalStyled.FormWrapper>
        <ModalStyled.Header>
          {!isDesktop && (
            <Image
              onClick={handleCloseButtonClick}
              src={logo}
              alt="company logo"
              width={132}
              height={42}
            />
          )}
          <ModalStyled.CloseButton onClick={handleCloseButtonClick}>
            <Image src={close} alt="close form" width={22} height={22} />
          </ModalStyled.CloseButton>
        </ModalStyled.Header>

        <ModalStyled.ContentWrapper>
          <ModalStyled.PlayerWrapper>
            <ReactPlayer
              url={testimonial.videoUrl}
              width={"100%"}
              className="react-player"
              controls={true}
              loop={true}
              config={{
                youtube: {
                  playerVars: {
                    autoplay: 0,
                    rel: 0,
                    loop: 1,
                    iv_load_policy: 3,
                    disablekb: 1,
                    playsinline: 1,
                  },
                },
              }}
            />
          </ModalStyled.PlayerWrapper>
          <ModalStyled.TestimonialsVideoInfoContainer>
            <ModalStyled.TestimonialsInfoHeader>
              <div>
                <Styled.TestimonialsHeaderName>
                  {testimonial.name}
                </Styled.TestimonialsHeaderName>
                <Styled.TestimonialsHeaderPosition className={"desktop"}>
                  <a href={testimonial.link} target={"_blank"} rel="noreferrer">
                    {testimonial.company}
                  </a>
                </Styled.TestimonialsHeaderPosition>
              </div>
              <TestimonialsIconLinks
                linkedin={testimonial.linkedin}
                tiktok={testimonial.tiktok}
              />
            </ModalStyled.TestimonialsInfoHeader>
            <Styled.TestimonialsHeaderPosition className={"mobile"}>
              <a href={testimonial.link} target={"_blank"} rel="noreferrer">
                {testimonial.company}
              </a>
            </Styled.TestimonialsHeaderPosition>
            <ModalStyled.TestimonialsInfoText>
              {testimonial.text}
            </ModalStyled.TestimonialsInfoText>
          </ModalStyled.TestimonialsVideoInfoContainer>
          {isDesktop && (
            <ModalStyled.HoverBlock>
              <ModalStyled.HoverBlackBlock />
            </ModalStyled.HoverBlock>
          )}
        </ModalStyled.ContentWrapper>
      </ModalStyled.FormWrapper>
      <ModalStyled.FooterContainer>
        <ModalStyled.FooterWrapper>
          {isMobile ? null : <FooterNew />}
        </ModalStyled.FooterWrapper>
      </ModalStyled.FooterContainer>
    </ModalStyled.HeroSectionMobileFormContainer>
  );
};
