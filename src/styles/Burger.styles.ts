import styled from "styled-components";
import themes from "../utils/themes";

interface IButtonBurgerProps {
  isOpen?: boolean;
}

export const BurgerWrapper = styled.div`
  display: none;

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    overflow-y: scroll;
    height: 100.1vh;
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
    transition: transform 0.3s ease-in;
    padding-top: 120px;
    background-color: ${themes.primary.colors.blogBackground};
    z-index: 35;

    &.open {
      transform: translateX(0);
    }
    &.hide {
      transform: translateX(100%);
    }
  }

  @media ${themes.primary.media.maxMobile} {
    padding-top: 99px;
  }
`;

export const BurgerRow = styled.div`
  border-collapse: separate;
  &:first-child {
    border-top: 1px solid ${themes.primary.colors.separator};
  }
`;

export const BurgerNavContainer = styled.nav`
  overflow-y: scroll;
  margin-top: 1.4375rem;
  @media ${themes.primary.media.maxMobilePortrait} {
    margin-top: 0;
  }
`;

export const BurgerButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 36;
  @media screen and (max-width: 1100px) {
    width: 40px;
    height: 40px;
  }

  @media screen and ${themes.primary.media.max767Mobile} {
    width: 42px;
    height: 42px;
  }

  @media (min-width: 1101px) {
    display: none;
  }
`;

export const BurgerButton = styled.button<IButtonBurgerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 14px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transition: all 0.3s linear;
  transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "rotate(0deg)")};

  &:focus {
    outline: none;
  }

  span {
    width: 20px;
    height: 2px;
    background: ${({ isOpen }) => (isOpen ? "#0D0C1D" : "#0C1033")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(20px)" : "translateX(0)"};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media screen and ${themes.primary.media.min768Mobile} {
    height: 18px;

    span {
      width: 24px;
      height: 2px;

      &:first-child {
        transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
      }

      &:nth-child(2) {
        opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
        transform: ${({ isOpen }) =>
          isOpen ? "translateX(24px)" : "translateX(0)"};
      }

      &:nth-child(3) {
        transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  & > div:nth-child(3) {
    gap: 14px !important;
    margin: 0;
    & > a {
      & > div {
        margin: 0;
        font-size: 20px;
        & > div {
          width: 16px;
          height: 16px;
        }
      }
    }

    @media ${themes.primary.media.maxLowScreenMobile} {
      & > a {
        & > div {
          margin: 0;
          font-size: 16px;
          & > div {
            width: 14px;
            height: 14px;
          }
        }
      }
    }
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    gap: 38px;
  }
`;

export const MailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media ${themes.primary.media.maxLowScreenMobile} {
    gap: 16px;
  }
`;

export const Mail = styled.a`
  display: block;
  line-height: 188%;
  width: 100%;
  font-size: 20px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 16px;
  }
`;

export const FooterIconsWrapper = styled.div`
  display: grid;
  grid-template-columns: 55px 55px 55px 55px;
  justify-items: center;

  gap: 44px;

  & > a {
    width: 100%;
  }

  & > a:nth-child(1) {
    width: 48px;
  }
  & > a:nth-child(2) {
    width: 43px;
  }
  & > a:nth-child(3) {
    width: 34px;
  }
  & > a:nth-child(4) {
    width: 40px;
  }
  & > a:nth-child(5) {
    width: 56px;
  }
  @media screen and ${themes.primary.media.maxLowScreenMobile} {
    column-gap: 20px;
    row-gap: 33px;

    grid-template-columns: 48px 48px 48px 48px;

    & > a {
      width: 45px !important;
    }
    & > a:nth-child(1) {
      width: 40px !important;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 40px;
  object-fit: contain;
  width: 100%;

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 32px;
  }
`;

export const FooterLink = styled.a``;

export const BottomBurgerContainer = styled.div`
  margin-top: -17px;
`;

export const PrivacyPolicyContainer = styled.div`
  margin-top: 14px;
`;

export const BurgerPrivacy = styled.a`
  color: ${themes.primary.colors.comment};
  font-size: 20px;
  font-family: ${themes.primary.font.family.namu};
  cursor: pointer;

  &:hover {
    color: ${themes.primary.colors.darkBlue};
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 16px;
  }
`;
