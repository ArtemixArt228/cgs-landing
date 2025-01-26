import styled, { keyframes } from "styled-components";
import themes from "../../utils/themes";
import buttonHoverBg from "../../../public/HomePageDecoration/buttonHoverBg.webp";
import InfoIcon from "../../../public/Calendly/InfoIcon.svg";
import MobileInfoIcon from "../../../public/Calendly/MobileInfoIcon.svg";
import { buttonHover } from "../Animations.styled";

export interface IFontSize {
  size?: string;
  padding?: string;
}

export const LocalLayout = styled.div`
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.2rem;
  }

  @media (min-width: 2200px) {
    font-size: 1.4rem;
  }
`;

export const arrowOne = keyframes`
  0% {
    transform: translate(-36px, 36px);
  }
  100% {
    transform: translate(0px, 0px);;
  }
`;

export const arrowTwo = keyframes`
  0% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(36px, -36px);;
  }
`;

export const BlackButton = styled.a<IFontSize>`
  font-family: inherit;
  font-size: ${({ size }) => (size ? size : "1em")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  cursor: pointer;
  position: relative;
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.primary};
  line-height: 99%;
  display: inline-block;
  border: 2px solid ${themes.primary.colors.primary};
  transition: all 0.3s;
  width: fit-content;
  white-space: nowrap;
  border-radius: 10px;

  &.painBlock {
    padding-inline: 20px;
    font-size: 20px;
    font-weight: 900;
    text-align: center;
    height: 56px;
    width: 425px;
    display: grid;
    place-items: center;
  }

  &.review {
    padding: 16px 56px;

    @media ${themes.primary.media.minMobileWidth} {
      padding-left: 90px;
      padding-right: 90px;
      font-size: 20px;
    }

    @media ${themes.primary.media.maxLowScreenMobile} {
      font-size: 16px;
    }

    @media ${themes.primary.media.minPCFullHD} {
      font-size: 24px;
      padding: 22px 0;
      text-align: center;
      min-width: 414px;
    }
  }

  &.mouseBtn {
    position: absolute;
    top: 300px;
    left: 135px;
    z-index: 5;
    transform: translate(-50%, -50%);
    transition: all 0.1s;
    &:hover {
      background-color: ${themes.primary.colors.primary} !important;
      color: ${themes.primary.colors.secondary} !important;
      cursor: none;
    }
  }

  &.homePage {
    font-size: 1.835em;
    padding: 16px 15.4px;
    font-weight: 400;

    @media ${themes.primary.media.onlyTabletLandScape} {
      padding: 12.76px 12.05px;
      font-size: 1.147em;
    }
  }

  &.services-hero {
    padding: 15px 17px;
    max-width: 13em;
    width: 80%;
    text-align: center;
    align-self: flex-end;

    @media ${themes.primary.media.maxMobile} {
      font-size: 16px;
      line-height: 15.84px;

      &.ai-chatbot-page {
        display: flex;
        gap: 18px;
        align-items: center;
        padding: 8px 24px;
        height: 47px;
        line-height: 1.5;
        letter-spacing: 0.1px;
        color: ${themes.primary.colors.grey};
      }
    }
    @media ${themes.primary.media.min768Mobile} {
      font-size: 20px;
      line-height: 19.8px;

      &.ai-chatbot-page {
        width: 208px;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.1px;
      }
    }
    @media ${themes.primary.media.onlyLaptopL} {
      max-width: 254px;
      &.ai-chatbot-page {
        display: flex;
        justify-content: space-between;
        padding: 8px 24px;
        height: 47px;
      }
    }

    @media ${themes.primary.media.min4K} {
      font-size: 26.67px;
      line-height: 26.4px;
      max-width: 338.67px;
      height: 75px;
      padding: 22px 17px;
    }
    @media ${themes.primary.media.minWidth2200} {
      font-size: 32px;
      line-height: 35px;
      max-width: 420px;
      padding: 17px 17px;
    }
  }

  &.services-pricing {
    color: ${themes.primary.colors.grey};
    background-color: ${themes.primary.colors.primary};
    border: 1px solid ${themes.primary.colors.primary};
    padding: 8px 22px;
    font-size: 16px;
    line-height: 160%;
    text-align: center;

    &:hover {
      color: ${themes.primary.colors.grey};
      background-color: ${themes.primary.colors.primary};
    }
    @media ${themes.primary.media.maxMobile} {
      font-size: 16px;
    }

    @media ${themes.primary.media.minPCFullHD} {
      font-size: 21.33px;
      padding: 10.67px 29.33px;
      border-radius: 13.33px;
    }
  }

  &.homePageProject {
    left: 61px;
    bottom: -40px;
    opacity: 0;
    scale: 0.8;
    transition: left 0.2s linear 0.5s, opacity 0.1s linear 0.1s,
      scale 0.2s ease-in 0.2s, bottom 0.3s ease-in 0.1s;
  }

  &.portfolio-button {
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    padding: 0;
    align-items: center;
    min-width: 12.45em;
    height: 3.225em;
  }

  &.about-us {
    text-transform: uppercase;
    font-size: calc(
      clamp(22px, 22px + (100vw - 1440px) * ((30 - 22) / (1920 - 1440)), 30px)
    );
    padding: calc(
        clamp(
          18px,
          18px + (100vw - 1440px) * ((22.5 - 18) / (1920 - 1440)),
          22.5px
        )
      )
      calc(
        clamp(
          17px,
          17px + (100vw - 1440px) * ((21.1 - 17) / (1920 - 1440)),
          21.1px
        )
      );
    margin-right: calc(
      clamp(28px, 28px + (100vw - 1440px) * ((32 - 28) / (1920 - 1440)), 32px)
    );
  }

  &.ai,
  &.cloudSolution,
  &.webDev,
  &.social-button {
    display: inline-flex;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    font-weight: 900;
    padding: 16px 15.4px;
    font-size: 1.375em;
    text-transform: uppercase;
  }

  &.mobileDev {
    display: inline-flex;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    font-weight: 900;
    padding: 16px 15.4px;
    font-size: 1.83333em;
    text-transform: uppercase;
  }

  &.services {
    font-size: 22px;
    padding: 16.5px 15.5px;
    text-transform: uppercase;
  }

  &.cta-button {
    padding: 16px 15px;

    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 1.84em;

    text-transform: uppercase;
  }

  &.footer {
    margin-top: 10px;
    height: 4vw;
    margin-left: 20px;
  }

  &.footer-home {
    margin-top: 10px;
    height: 4vw;
    margin-left: 20px;
  }

  &.main {
    background: transparent;
    color: ${themes.primary.colors.primary};
    background-size: 229px;
    transition-delay: unset;
    font-size: 1.835em;
    padding: 16px 15.4px;
    font-weight: 400;
  }

  &.scrolled {
    background: ${themes.primary.colors.primary} url(${buttonHoverBg.src});
    color: ${themes.primary.colors.secondary};
    transition-delay: 0.8s;
    background-size: 229px;
    animation: ${buttonHover} 1s steps(8) forwards;
    font-size: 1.835em;
    padding: 16px 15.4px;
    font-weight: 400;

    &.removeBg {
      transition-delay: unset;
      background-image: none;
    }
  }

  &.projectorBtn {
    left: 0;
    scale: 1;
    opacity: 1;
    bottom: 0;
  }

  &:hover {
    transition-delay: unset;
    background: none;
    color: ${themes.primary.colors.primary};
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding: 0.8em 1em;

    &.homePage,
    &.main,
    &.scrolled {
      padding: 0.757em 0.78em;
      font-size: 28px;
    }

    &.webDev {
      padding: 0.8em 1em;
    }

    &.cloudSolution {
      padding: 0.8em 1em;
      font-size: 1.58em;
    }

    &.ai,
    &.social-button {
      padding: 0.8em 1em;
      font-size: 1.83em;
    }

    &.mobileDev {
      padding: 0.8em 1em;
      font-size: 2.2em;
    }

    &.services {
      font-size: 28px;
      padding: 24.75px 23.25px;
    }

    &.seeAll {
      font-size: 1.25em;
      padding: 1.05em 1.8em !important;
    }

    &.painBlock {
      min-width: 575px;
      min-height: 70px;
      font-size: 24px;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 14px;
  }

  @media (max-width: 992px) {
    &.seeAll,
    &.mobileDev,
    &.homePage,
    &.main,
    &.scrolled {
      font-size: 1.33em;
    }

    &.ai,
    &.cloudSolution,
    &.webDev {
      font-size: 1.13em;
    }

    &.social-button {
      font-size: 1.42em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    &.main,
    &.scrolled {
      height: 54px;
      font-size: 16px;
    }

    &.about-us {
      font-size: calc(
        clamp(16px, 16px + (100vw - 375px) * ((22 - 16) / (768 - 375)), 22px)
      );
      line-height: 100%;
      height: fit-content;
      width: fit-content;
      padding: 16.5px
        calc(
          clamp(
            15.5px,
            16.5px - (100vw - 375px) * ((16.5 - 15.5) / (768 - 375)),
            16.5px
          )
        );
    }

    &.homeFooter {
      margin-top: 0;
      padding: 17.76px 33px;
    }

    &.homePage {
      height: 58px;
      font-size: 22px;
      padding: 18px 15px;
      z-index: 10;
    }

    &.portfolio-button {
      min-width: 178px;
      height: 54px;
      font-size: 16px;
    }

    &.ai,
    &.webDev,
    &.cloudSolution,
    &.social-button {
      padding: 17.1px 17.55px;
      font-size: 16px;
    }

    &.mobileDev {
      min-width: 209px;
      padding: 17.1px 17.55px;
      font-size: 16px;
    }

    &.cta-button {
      width: 178px;
      height: 54px;
      font-size: 16px;
      padding: 18px 33px;
    }

    &.seeAll {
      font-size: 14px;
    }

    &.footer-home {
      margin-top: 1em;
    }

    &.services {
      line-height: 99%;
      font-size: 22px;
      padding: 18px 17px;
    }
    &.services&.header {
      padding: 17.5px 18px;
    }
  }

  @media ${themes.primary.media.minTablet} {
    &.seeAll {
      & > div {
        width: 25px;
        height: 25px;
      }
    }

    &.homePage {
      height: 54px;
      font-size: 16px;
      padding: 17px 19px;
    }

    &.homeFooter {
      padding: 17.76px 31px;
    }

    &.services {
      font-size: 16px;
      padding: 18px 33px;
    }

    &.painBlock {
      font-size: 16px;
      width: 258px;
    }
  }

  & path:nth-child(1) {
    transform: translate(-36px, 36px);
  }

  &:hover {
    & path:nth-child(1) {
      animation: ${arrowOne} 1s 1 forwards ease-in-out;
    }
    & path:nth-child(2) {
      animation: ${arrowTwo} 1s 1 forwards ease-in-out;
    }
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    &.homePage,
    &.seeAll {
      padding: 13.5px 12.75px;
      font-size: 1.18em;
    }
  }
`;
export const AdminSaveButton = styled.button<IFontSize>`
  font-family: inherit;
  font-size: 18px;
  padding: 6px 20px;
  cursor: pointer;
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.darkBlue};
  border: 2px solid ${themes.primary.colors.primary};
  border-radius: 10px;
  text-align: center;
  z-index: 20;

  &:hover {
    transition-delay: unset;
    background: none;
    color: ${themes.primary.colors.primary};
  }
`;

interface ISubtitle {
  homepageFooter?: boolean;
}

export const Subtitle = styled.div<ISubtitle>`
  text-transform: uppercase;
  font-size: 5.14vw;
  letter-spacing: 0.05em;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin: 32px 0 20px;

  & u {
    text-decoration-thickness: 3px;
    text-underline-offset: 7px;
  }

  &.foooter {
    margin-top: 120px;
    margin-bottom: 14px;
    p {
      margin: 0;
    }
  }

  &.textOnFilm {
    margin-bottom: 15px;

    p {
      margin: 0;
      line-height: 146%;
      & > span:first-child {
        display: inline-flex;
        height: 90px;
        min-width: 400px;
      }
    }
  }

  &.nextTech {
    line-height: 132%;
    height: 2.5em;
    p {
      margin: 0;
    }
  }

  &.footer {
    margin-block: ${themes.primary.spacing.tertiary} 0;
    line-height: 132%;
    display: inline-block;
    vertical-align: middle;
    position: relative;

    & br {
      display: none;
    }
  }
  span {
    &.blue {
      color: ${themes.primary.colors.darkBlue};
      height: 5vw;
      white-space: nowrap;
    }

    &.tech {
      display: inline-block;
      width: 29.305vw;
      height: 5.5vw;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    &.textOnFilm {
      p {
        & > span:first-child {
          min-width: 300px;
        }
      }
    }
  }

  @media ${themes.primary.media.minLaptop} {
    &.textOnFilm {
      p {
        & > span:first-child {
          min-width: 475px;
        }
      }
    }
  }

  @media ${themes.primary.media.minServiceWeb} {
    &.textOnFilm {
      p {
        & > span:first-child {
          min-width: 560px;
        }
      }
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 5.105em;
    margin: 0;

    &.textOnFilm {
      margin-bottom: 40px;

      p {
        & > span:first-child {
          height: auto;
          min-width: 740px;
        }
      }
    }
    span {
      &.tech {
        width: 5.79166em;
        height: 1.3229em;
      }
    }

    &.foooter {
      margin-top: 160px;
      margin-bottom: -7px;
      p {
        margin: 0;
      }
    }
  }

  @media (min-width: 2000px) {
    &.textOnFilm {
      p {
        & > span:first-child {
          min-width: 860px;
        }
      }
    }
  }

  @media (max-width: 1370px) {
    &.small {
      font-size: 4.5vw;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 53px;

    &.small {
      font-size: 4.4vw;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 4vw;

    &.textOnFilm {
      p {
        & > span:first-child {
          display: inline-flex;
          height: 10px;
        }
      }
    }

    &.small {
      font-size: 3.75vw;
    }

    span {
      &.tech {
        width: 24.305vw;
        height: 5vw;
      }
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 6.5vw;
    margin-top: 60px;
    margin-bottom: 20px;
    row-gap: 0px;
    p {
      margin: 0;
    }

    & u {
      text-decoration-thickness: 1px;
      text-underline-offset: 5px;
    }

    &.foooter {
      margin-top: 110px;
      font-size: 56px;
      width: 470px;
      line-height: 132%;
      letter-spacing: 2.8px;
    }

    &.small {
      margin-top: 0;
      font-size: 5vw;
      margin-bottom: 14px;
    }

    &.footer {
      margin-top: 4em;
      & br {
        display: block;
      }
    }

    & span {
      &.blue {
        width: 43.805vw;
        height: 5vw;
      }

      &.tech {
        width: 5.8em;
        height: 5vw;
      }
    }
  }

  @media ${themes.primary.media.minTablet} {
    &.foooter {
      margin-top: 60px;
      width: 315px;
      font-size: 32px;
      line-height: 132%; /* 42.24px */
      letter-spacing: 1.6px;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 9.3vw;

    & span {
      &.blue {
        width: 40.805vw;
        height: 5vw;
      }

      &.tech {
        font-size: ${({ homepageFooter }) => homepageFooter && "8.5vw"};
        width: 5.8em;
        height: 5vw;
      }
    }
  }
`;

export const NextTech = styled.section`
  @media ${themes.primary.media.minMobileWidth} {
    margin-top: 9.25em;
  }
  @media ${themes.primary.media.minLaptop} {
    margin-top: 13.25em;
  }
  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 11.75em;
  }
`;

export const FooterButtonWrapper = styled.span`
  display: flex;
  justify-content: flex-start;
  margin-right: 28px;

  &.btn {
    margin-top: 2.5rem;
    margin-left: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    &.btn {
      margin-top: 38px;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    &.btn {
      margin-top: 38px;
    }
  }

  @media ${themes.primary.media.minTablet} {
    &.btn {
      flex-direction: column;
    }
  }
`;

export const FooterWhatsAppContainer = styled.div`
  margin-bottom: 162px;

  @media ${themes.primary.media.minPCFullHD} {
    margin-bottom: 217px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 9.2em;
  }

  @media ${themes.primary.media.minTablet} {
    margin-bottom: 6em;
  }
`;

export const ArrowContainer = styled.span`
  position: absolute;
  width: 30px;
  height: 30px;
  right: -12px;
  top: -12px;
  background-color: ${themes.primary.colors.headerBorderHover};
  border: 1.7px solid ${themes.primary.colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & svg {
    width: 25px;
    height: 25px;
  }

  &.contactPage {
    right: -13px;
    top: -16px;
  }

  &.services-pricing {
    display: none;
  }

  @media (${themes.primary.media.maxLowScreenMobile}) {
    &.painBlock {
      width: 29px;
      height: 29px;
    }
  }

  @media (min-width: 2200px) {
    width: 45px;
    height: 45px;
    right: -17px;
    top: -17px;

    & svg {
      width: 32px;
      height: 32px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 40px;
    height: 40px;
    right: -15px;
    top: -15px;

    &.contactPage {
      right: -15px;
      top: -20px;
    }

    &.mobileAudit {
      font-size: 1.5em;
    }

    & svg {
      width: 30px;
      height: 30px;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    &.heroSection {
      width: 35px;
      height: 35px;
      right: -15px;
      top: -15px;

      & svg {
        width: 35px;
        height: 35px;
      }
    }
  }

  @media ${themes.primary.media.maxMobile} {
    &.contactPage {
      right: -13px;
      top: -13px;
    }

    &.heroSection {
      width: 30px;
      height: 30px;
      right: -10px;
      top: -10px;

      & svg {
        width: 32px;
        height: 32px;
      }
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    &.heroSection {
      width: 29px;
      height: 29px;
      right: -14px;
      top: -12px;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 24px;
    height: 24px;
    right: -9px;
    top: -9px;

    &.contactPage {
      width: 25px;
      height: 25px;
      right: -10px;
      top: -13px;
    }

    &.heroSection {
      width: 29px;
      height: 29px;
      right: -14px;
      top: -12px;
    }
    &.painBlock {
      width: 32px;
      height: 32px;
      top: -13px;
      right: -15px;
    }
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    width: 27px;
    height: 27px;

    & svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const ButtonShareTextWrapper = styled.span`
  display: flex;
  align-items: center;
  width: fit-content;
  font-family: ${themes.primary.font.family.namu};
  z-index: 10;
  gap: calc(
    clamp(14px, 14px + (100vw - 1440px) * ((18 - 14) / (1920 - 1440)), 18px)
  );

  &.about-us {
    gap: calc(
      clamp(14px, 14px + (100vw - 1440px) * ((32 - 14) / (1920 - 1440)), 32px)
    );
    margin-left: 0;
  }

  &.homePage {
    gap: calc(
      clamp(2px, 2px + (100vw - 1440px) * ((22 - 10) / (1920 - 1440)), 22px)
    );
    margin-left: 28px;
  }

  &.footer {
    margin-inline: 1.1666em 0;
  }

  &.portfolio-share-button {
    z-index: 0;
  }
  @media ${themes.primary.media.minPCFullHD} {
    margin-left: 37px;

    &.services {
      margin-left: 17.5px;
      gap: 1.6em;
    }

    &.homePage {
      margin-left: 34px;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    margin-left: 1px;

    &.no-margin-top {
      margin-top: 0;
    }

    &.about-us {
      margin-top: 0;
    }

    &.homePage {
      margin-top: 2px;
      margin-left: 29px;
      gap: 0;
    }

    &.dappAuditShare a {
      padding: 0 !important;
    }

    &.footer {
      margin-inline: 0;
    }

    &.services {
      gap: 14px;
    }
  }

  @media ${themes.primary.media.minTablet} {
    &.homePage {
      margin-top: 15px;
      gap: 7px;
    }
    &.homeFooter {
      margin-left: 0;
    }
  }

  @media (max-width: 550px) {
    &.homePage {
      margin-left: 0;
    }
    &.services {
      margin: 0;
    }
  }
  @media (min-width: 768px) and (max-width: 843px) {
    margin-top: 16px;
    margin-left: 0px;
    margin-right: 16px;
    padding-right: 16px;

    &.services {
      margin: 0;
    }
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    &.homePage {
      margin-left: 20px;
    }
  }
`;

export const ButtonShareText = styled.a``;

export const WhatsAppWrapper = styled.span`
  display: flex;
  align-items: center;
  column-gap: 0.444em;
  color: ${themes.primary.colors.primary};
  font-size: 1.125em;

  &.about-us {
    font-size: calc(
      clamp(18px, 18px + (100vw - 1440px) * ((24 - 18) / (1920 - 1440)), 24px)
    );
    gap: calc(
      clamp(8px, 8px + (100vw - 1440px) * ((10.5 - 8) / (1920 - 1440)), 10.5px)
    );
  }

  &.homePage,
  &.webAudit,
  &.mobileDev {
    font-size: 1.5em;
  }

  &.dappAuditShare {
    font-size: 1.5em;
  }

  &.portfolio-share-button,
  &.cta-share-button {
    font-size: 1.5em;
  }

  &:hover {
    color: ${themes.primary.colors.darkBlue};

    & > div {
      filter: none;
    }
  }

  &.services {
    font-size: 18px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    &.homePage {
      font-size: 1.25em;
    }

    &.webDev {
      font-size: 1.1em;
    }

    &.cloudSolution {
      font-size: 1.25em;
    }

    &.mobileDev,
    &.webAudit {
      font-size: 1.8em;
    }

    &.services {
      font-size: 24px;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    &.webDev {
      font-size: 1.13em;
    }

    &.blockchain {
      font-size: 1.41em;
    }

    &.webAudit,
    &.mobileDev,
    &.homePage {
      font-size: 1.33em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    line-height: 19px;
    column-gap: 3px;

    &.about-us {
      font-size: calc(
        clamp(16px, 16px + (100vw - 375px) * ((18 - 16) / (768 - 375)), 18px)
      );
      gap: calc(
        clamp(3px, 3px + (100vw - 375px) * ((8 - 3) / (768 - 375)), 8px)
      );
    }

    &.cta-share-button,
    &.services {
      font-size: 18px;
      gap: 8px;
    }

    &.homePage {
      gap: 8px;
      font-size: 18px;
    }

    &.portfolio-share-button {
      font-size: calc(
        clamp(16px, 16px + (100vw - 375px) * ((18 - 16) / (768 - 375)), 18px)
      );
      line-height: calc(
        clamp(19px, 19px + (100vw - 375px) * ((22 - 19) / (768 - 375)), 22px)
      );
      gap: 8px;
    }
  }

  @media ${themes.primary.media.minTablet} {
    &.homePage {
      gap: 8px;
      font-size: 16px;
    }
    &.services {
      font-size: 16px;
      gap: 2px;
    }
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    &.homePage {
      font-size: 16px;
    }
  }
`;

export const TelegramWrapper = styled.span`
  display: flex;
  align-items: center;
  column-gap: 0.444em;
  color: ${themes.primary.colors.primary};
  font-size: 1.125em;
  transition: color 0.3s;
  margin-left: 0.778em;

  &.about-us {
    font-size: calc(
      clamp(18px, 18px + (100vw - 1440px) * ((24 - 18) / (1920 - 1440)), 24px)
    );
    gap: calc(
      clamp(8px, 8px + (100vw - 1440px) * ((10.5 - 8) / (1920 - 1440)), 10.5px)
    );
    margin-left: 0;
  }

  &.homePage,
  &.webAudit,
  &.mobileDev {
    font-size: 1.5em;
  }

  &.dappAuditShare {
    font-size: 1.5em;
  }

  &.portfolio-share-button,
  &.cta-share-button {
    font-size: 1.5em;
  }

  &.services {
    font-size: 18px;
    margin-left: 0;
  }

  &:hover {
    color: ${themes.primary.colors.darkBlue};

    & > div {
      filter: none;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    &.homePage {
      font-size: 1.25em;
    }

    &.webDev {
      font-size: 1.1em;
    }

    &.cloudSolution {
      font-size: 1.25em;
    }

    &.mobileDev,
    &.webAudit {
      font-size: 1.8em;
    }

    &.services {
      font-size: 24px;
      margin-left: 0;
    }
  }

  @media ${themes.primary.media.maxPCFullHD} {
    &.services {
      margin-left: 0;
    }
  }

  @media (max-width: 992px) {
    &.webDev {
      font-size: 1.13em;
    }

    &.blockchain {
      font-size: 1.41em;
    }

    &.webAudit,
    &.mobileDev,
    &.homePage {
      font-size: 1.33em;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    &.services {
      margin-left: 0.875em;
      margin-left: 0;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    line-height: 19px;
    column-gap: 3px;
    margin-left: 0.875em;

    &.about-us {
      font-size: calc(
        clamp(16px, 16px + (100vw - 375px) * ((18 - 16) / (768 - 375)), 18px)
      );
      gap: calc(
        clamp(3px, 3px + (100vw - 375px) * ((8 - 3) / (768 - 375)), 8px)
      );
    }

    &.cta-share-button,
    &.services {
      font-size: 18px;
      gap: 8px;
      margin-left: 0;
    }

    &.homePage {
      gap: 8px;
      font-size: 18px;
    }

    &.portfolio-share-button {
      font-size: calc(
        clamp(16px, 16px + (100vw - 375px) * ((18 - 16) / (768 - 375)), 18px)
      );
      line-height: calc(
        clamp(19px, 19px + (100vw - 375px) * ((22 - 19) / (768 - 375)), 22px)
      );
      gap: 8px;
    }
  }

  @media ${themes.primary.media.minTablet} {
    &.homePage {
      gap: 8px;
      font-size: 16px;
      margin-left: 0;
    }
    &.services {
      font-size: 16px;
      gap: 2px;
    }
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    &.homePage {
      font-size: 16px;
    }
  }
`;

export const TelegramIconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter 0.3s;
  filter: brightness(0);
  position: relative;
  width: 22px;
  height: 22px;

  &.portfolio-share-button {
    width: 22px;
    height: 22px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: 1.22em;
    height: 1.22em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
  }

  @media ${themes.primary.media.maxMobile} {
    width: calc(
      clamp(15px, 15px + (100vw - 375px) * ((22 - 15) / (768 - 375)), 22px)
    );
    height: calc(
      clamp(14px, 14px + (100vw - 375px) * ((22 - 14) / (768 - 375)), 22px)
    );
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    width: 16px;
    height: 16px;
  }
`;

export const WhatsAppIconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 22px;
  height: 22px;
  transition: filter 0.3s;
  filter: brightness(0);

  &.portfolio-share-button {
    width: 22px;
    height: 22px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: 1.22em;
    height: 1.22em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: calc(
      clamp(15px, 15px + (100vw - 375px) * ((22 - 15) / (768 - 375)), 22px)
    );
    height: calc(
      clamp(14px, 14px + (100vw - 375px) * ((22 - 14) / (768 - 375)), 22px)
    );
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    width: 16px;
    height: 16px;
  }
`;

export const FooterSection = styled.section<{ isDesktop?: boolean }>`
  position: relative;
  cursor: ${({ isDesktop }) => (isDesktop ? "none" : "")};
`;

export const CalendlyInfoModalWrapper = styled.div``;

export const CalendlyInfoModalWrapperCloseWrapper = styled.div`
  width: 100%;
  background-color: ${themes.primary.colors.blogBackground};
`;

export const CalendlyInfoModalWrapperCloseButton = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  margin: 20px 19px 0 0;
  cursor: pointer;
  z-index: 2;

  @media ${themes.primary.media.maxMobile} {
    margin: 12px 8.5px 0 0;
  }
`;

export const CalendlyInfoModalContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 58px 36px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;
  align-self: stretch;

  @media ${themes.primary.media.maxMobile} {
    padding: 58px 32px 20px;
    gap: 24px;
  }
  @media ${themes.primary.media.estiomationFormWidth} {
    padding: 48px 16px 16px;
    gap: 16px;
  }
`;

export const CalendlyInfoModalLinkBlock = styled.div`
  border: 2px dashed ${themes.primary.colors.darkBlue};
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;

  @media ${themes.primary.media.maxMobile} {
    padding: 16px;
    gap: 12px;
  }
  @media ${themes.primary.media.estiomationFormWidth} {
    padding: 10px;
  }
`;
export const CalendlyInfoModalDateTime = styled.div`
  font-size: 16px;
  font-family: NAMU;
  width: 100%;
  border: 1px solid ${themes.primary.colors.primary};
  display: flex;
  justify-content: space-between;
  & > div:first-child {
    padding: 8.5px 12px 10.5px;
    height: 100%;
  }
  & > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8.5px 12px 10.5px;
    border-left: 1px solid ${themes.primary.colors.primary};
    background-color: ${themes.primary.colors.chatMessageBgc};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    & > div:first-child {
      padding: 5px 8px 7px;
    }
    & > div:last-child {
      padding: 5px 8px 7px;
    }
  }
  @media ${themes.primary.media.estiomationFormWidth} {
    font-size: 14px;
  }
`;
export const CalendlyInfoModalLinkHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;

  & > div:first-child {
    font-family: NAMU;
    font-size: 18px;
    font-weight: 500;
    white-space: nowrap;
    background-color: ${themes.primary.colors.blogBackground};
    padding-right: 12px;
    z-index: 2;
  }
  & > img {
    z-index: 1;
    position: absolute;
    top: 6px;
    right: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    & > img {
      transform: translateY(25%);
      z-index: 1;
      position: absolute;
      top: 2px;
      right: 0;
    }
  }
  @media ${themes.primary.media.estiomationFormWidth} {
    & > div:first-child {
      font-size: 16px;
    }
  }
`;
export const CalendlyInfoModalLinkMain = styled.div`
  display: flex;
  width: 100%;
  height: 40px;

  & > div:first-child {
    background-color: ${themes.primary.colors.darkBlue};
    color: ${themes.primary.colors.secondary};
    padding: 12px;
    font-size: 18px;
    white-space: nowrap;
    width: 78.1884%;
    display: flex;
    align-items: center;

    & > p {
      overflow: hidden;
      margin: 0;
      padding: 0;
      width: 100%;
    }
  }
  & > div:last-child {
    display: flex;
    width: 21.8116%;
    background-color: ${themes.primary.colors.primary};
    color: ${themes.primary.colors.secondary};
    font-size: 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    position: relative;
  }

  @media (max-width: 640px) {
    height: 32px;
    & > div:first-child {
      padding: 8px;
      font-size: 14px;
      width: 67.57%;
    }
    & > div:last-child {
      font-size: 13px;
      width: 32.43%;
    }
  }
`;
export const CalendlyInfoModalLinkFooter = styled.div`
  font-family: NAMU;
  font-size: 18px;
  font-weight: 500;

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
  }
`;
export const CalendlyInfoModalLinkCopyImage = styled.img`
  color: ${themes.primary.colors.secondary};
  width: 14px;
  height: 14px;

  @media ${themes.primary.media.maxMobile} {
    width: 12px;
    height: 12px;
  }
`;
export const CalendlyInfoModalLinkDoneImage = styled.img`
  color: ${themes.primary.colors.secondary};
  width: 18px;
  height: 14px;
`;
export const CalendlyInfoModalLinkArrowImage = styled.img``;

export const CalendlyInfoModalLinkHint = styled.div`
  position: absolute;
  bottom: 55px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 10;
  white-space: nowrap;
  background: ${themes.primary.colors.primary};
  border-radius: 6px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  color: ${themes.primary.colors.blogBackground};
  font-size: 12px;
  line-height: 18px;
  padding: 16px;
  text-align: center;

  @media ${themes.primary.media.maxTabletLandScape} {
    bottom: 45px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 12px;
  }

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 8px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

export const CalendlyInfoModalTitle = styled.div`
  line-height: 31.2px;
  font-size: 24px;
  font-family: ${themes.primary.font.family.namu};
  text-transform: uppercase;

  @media ${themes.primary.media.maxMobile} {
    /* margin-top: 32px; */
    font-size: 26px;
    line-height: 21.6px;
  }
  @media ${themes.primary.media.estiomationFormWidth} {
    font-size: 17px;
  }
`;

export const CalendlyInfoModalNotice = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const CalendlyInfoModalImageWrapper = styled.div``;

export const CalendlyInfoModalImage = styled.div`
  background: url(${InfoIcon.src});
  background-repeat: no-repeat;
  width: 37px;
  height: 40px;

  @media ${themes.primary.media.maxMobile} {
    background: url(${MobileInfoIcon.src});
    background-repeat: no-repeat;
    width: 33px;
  }
`;

export const CalendlyInfoModalNoticeText = styled.div`
  font-size: 18px;
  line-height: 28.8px;
  font-weight: 900;
  font-family: ${themes.primary.font.family.namu};

  & p {
    margin: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 0;
    font-size: 18px;
  }
  @media ${themes.primary.media.estiomationFormWidth} {
    font-size: 16px;
    line-height: 25.6px;
  }
`;

export const CalendlyInfoModalNoticeButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  @media ${themes.primary.media.maxMobile} {
  }
`;

export const CalendlyInfoModalNoticeButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-family: ${themes.primary.font.family.namu};
  font-size: 14px;
  align-items: center;
  border: none;
  padding: 7.1px 28.3px;
  background-color: black;
  color: white;
`;

interface ITag {
  isArticlePage?: boolean;
}

export const Tag = styled.button<ITag>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.darkBlue};
  padding: 6px 12px;
  font-style: normal;
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: ${themes.primary.font.size.articleViews};
  font-family: ${themes.primary.font.family.openSans};
  letter-spacing: 0.5px;
  z-index: 1;
  &:hover {
    background-color: ${(props) =>
      props.isArticlePage && themes.primary.colors.hoveredBlogTag};
    cursor: ${(props) => props.isArticlePage && "pointer"};
  }
  span {
    cursor: pointer;
  }
  @media ${themes.primary.media.minPC} {
    height: 2.333em;
    padding: 0.5em ${themes.primary.font.size.primary};
    font-size: ${themes.primary.font.size.primary};
  }

  @media ${themes.primary.media.maxMobile} {
    &.preview {
      position: absolute;
      top: 0;
      left: 0;
      border: 0;
      font-size: 1.35em;
      margin-left: -1px;
    }
  }
`;
