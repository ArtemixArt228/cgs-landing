import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import Logo from "../HeaderNavNew/Logo";
import ExplanationEmailField from "./ExplanationEmailField/ExplanationEmailField";

import * as StyledThisComp from "./Footer.styled";
import { queryKeys } from "../../consts/queryKeys";

import smallMountain from "/public/smallMountain.svg";
import { IHomePageResponse } from "../../types/Admin/AdminHomePage.types";
import { adminGlobalService } from "../../services/adminHomePage";

interface IFooterProps {
  className?: string;
  setOpenFailedModal?: Dispatch<SetStateAction<boolean>>;
  clickFromEstimationForm?: boolean;
}

const useInViewport = <T extends Element>(ref: MutableRefObject<T | null>) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const isInViewport = top <= window.innerHeight && bottom >= 0;
        setIsScrolled(isInViewport);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return isScrolled;
};

const FooterNew = ({
  className,
  setOpenFailedModal,
  clickFromEstimationForm,
}: IFooterProps): JSX.Element => {
  const { data, isLoading, error } = useQuery<IHomePageResponse | void>(
    [queryKeys.getFullHomePage],
    () => adminGlobalService.getFullPage()
  );
  const FooterBlock = data?.FooterBlock;
  const isMobile = useMediaQuery("(max-width: 1100px)");

  const [showSocialLinks, setShowSocialLinks] = useState(false);

  const socialLinks = [1, 2, 3, 6];
  const workSpaceLinks = [0, 4, 5, 7];

  const [animationPlay, setAnimationPlay] = useState(false);

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useInViewport(elRef);

  useEffect(() => {
    if (isScrolled) {
      setAnimationPlay(true);
      const interval = setInterval(() => {
        setAnimationPlay((prevAnimationPlay) => !prevAnimationPlay);
      }, 5000);

      return () => clearInterval(interval);
    } else {
      setAnimationPlay(false);
    }
  }, [isScrolled]);

  if (isLoading) return <div>Loading footer...</div>;
  if (error) return <div>Error loading footer</div>;
  return (
    <StyledThisComp.HeaderNavContainer ref={elRef} className={className}>
      <StyledThisComp.FlexRowContainer>
        <StyledThisComp.LogoLinkWrapper
          onClick={(e) => {
            if (clickFromEstimationForm) {
              e.preventDefault();
              setOpenFailedModal!(true);
            }
          }}
          href={"/"}
        >
          <Logo cssClass={"footer"} />
        </StyledThisComp.LogoLinkWrapper>
        <StyledThisComp.MiddleTextWrapper>
          <StyledThisComp.MailsWrapper>
            <StyledThisComp.Email href={`mailto:${FooterBlock?.email}`}>
              <StyledThisComp.MailIcon
                width="100%"
                height="100%"
                viewBox="0 0 27 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={animationPlay ? "scrolled" : undefined}
              >
                <path d="M1.90909 2.88889H3.72727M3.72727 4.77778H5.54545M5.54545 6.66667H7.36364M7.36364 8.55556H9.18182M9.18182 10.4444H11M25.0909 2.88889H23.2727M23.2727 4.77778H21.4545M21.4545 6.66667H19.6364M19.6364 8.55556H17.8182M11 12.3333H12.8182H14.1818H16M17.8182 10.4444H16M1 1V18H26V1H1Z" />
              </StyledThisComp.MailIcon>
              <StyledThisComp.EmailText>
                {FooterBlock?.email}
              </StyledThisComp.EmailText>
              {FooterBlock?.email && (
                <ExplanationEmailField
                  text={"If you want to become our client"}
                />
              )}
            </StyledThisComp.Email>
            <StyledThisComp.Email href={`mailto:${FooterBlock?.hrEmail}`}>
              <StyledThisComp.MailIcon
                width="100%"
                height="100%"
                viewBox="0 0 27 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={animationPlay ? "scrolled" : undefined}
              >
                <path d="M1.90909 2.88889H3.72727M3.72727 4.77778H5.54545M5.54545 6.66667H7.36364M7.36364 8.55556H9.18182M9.18182 10.4444H11M25.0909 2.88889H23.2727M23.2727 4.77778H21.4545M21.4545 6.66667H19.6364M19.6364 8.55556H17.8182M11 12.3333H12.8182H14.1818H16M17.8182 10.4444H16M1 1V18H26V1H1Z" />
              </StyledThisComp.MailIcon>
              <StyledThisComp.EmailText>
                {FooterBlock?.hrEmail}
              </StyledThisComp.EmailText>
              {FooterBlock?.email && (
                <ExplanationEmailField
                  text={"If you want to become our colleague"}
                />
              )}
            </StyledThisComp.Email>
          </StyledThisComp.MailsWrapper>
          <StyledThisComp.PrivacyPolicy href="/privacy-policy" target="_blank">
            Privacy Policy
          </StyledThisComp.PrivacyPolicy>
        </StyledThisComp.MiddleTextWrapper>
      </StyledThisComp.FlexRowContainer>
      <StyledThisComp.NavList>
        {isMobile ? (
          <StyledThisComp.MobileNavList>
            {showSocialLinks && (
              <svg
                onClick={() => setShowSocialLinks(false)}
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
              >
                <path
                  d="M18.8346 8.83073H4.6363L11.158 2.30906L9.5013 0.664062L0.167969 9.9974L9.5013 19.3307L11.1463 17.6857L4.6363 11.1641H18.8346V8.83073Z"
                  fill="#8F8E93"
                />
              </svg>
            )}
            {FooterBlock?.links
              .filter((link, ind) =>
                showSocialLinks
                  ? socialLinks.includes(ind)
                  : workSpaceLinks.includes(ind)
              )
              .map((link, ind) => (
                <Link key={link.link + ind} href={link.link} passHref>
                  <StyledThisComp.ListItemNav
                    key={link.link + ind}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StyledThisComp.FooterImageWrapper>
                      <Image
                        src={
                          FooterBlock?.images[ind]
                            ? showSocialLinks
                              ? FooterBlock.images[socialLinks[ind]].image?.url
                              : FooterBlock.images[workSpaceLinks[ind]].image
                                  ?.url
                            : smallMountain
                        }
                        alt="footer icons img"
                        layout="fill"
                        objectFit="contain"
                      />
                    </StyledThisComp.FooterImageWrapper>
                  </StyledThisComp.ListItemNav>
                </Link>
              ))}
            {!showSocialLinks && (
              <svg
                onClick={() => setShowSocialLinks(true)}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="6"
                viewBox="0 0 25 6"
                fill="none"
              >
                <path
                  d="M3.16667 0.335938C1.7 0.335938 0.5 1.53594 0.5 3.0026C0.5 4.46927 1.7 5.66927 3.16667 5.66927C4.63333 5.66927 5.83333 4.46927 5.83333 3.0026C5.83333 1.53594 4.63333 0.335938 3.16667 0.335938ZM21.8333 0.335938C20.3667 0.335938 19.1667 1.53594 19.1667 3.0026C19.1667 4.46927 20.3667 5.66927 21.8333 5.66927C23.3 5.66927 24.5 4.46927 24.5 3.0026C24.5 1.53594 23.3 0.335938 21.8333 0.335938ZM12.5 0.335938C11.0333 0.335938 9.83333 1.53594 9.83333 3.0026C9.83333 4.46927 11.0333 5.66927 12.5 5.66927C13.9667 5.66927 15.1667 4.46927 15.1667 3.0026C15.1667 1.53594 13.9667 0.335938 12.5 0.335938Z"
                  fill="#8F8E93"
                />
              </svg>
            )}
          </StyledThisComp.MobileNavList>
        ) : (
          FooterBlock?.links.map((link, ind) => (
            <Link key={link.link + ind} href={link.link} passHref>
              <StyledThisComp.ListItemNav
                key={link.link + ind}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledThisComp.FooterImageWrapper
                  className={ind === 0 ? "first-icon" : undefined}
                >
                  <Image
                    src={
                      FooterBlock?.images[ind]
                        ? FooterBlock.images[ind].image?.url
                        : smallMountain
                    }
                    alt="footer icons img"
                    layout="fill"
                    objectFit="contain"
                  />
                </StyledThisComp.FooterImageWrapper>
              </StyledThisComp.ListItemNav>
            </Link>
          ))
        )}
      </StyledThisComp.NavList>
    </StyledThisComp.HeaderNavContainer>
  );
};

export default FooterNew;
