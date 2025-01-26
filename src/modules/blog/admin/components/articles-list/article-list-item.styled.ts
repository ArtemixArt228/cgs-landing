import { Field } from "formik";

import themes from "../../../../../utils/themes";
import styled, { css } from "styled-components";

import CheckMarkPublished from "/public/checkMarkPublished.svg";

interface IDisabled {
  disabled: boolean;
}

export const BlogItemDescription = styled.div`
  font-family: ${themes.primary.font.family.openSans};
  font-weight: ${themes.primary.font.weight.normal};
  font-size: ${themes.primary.font.size.linkText};
  color: ${themes.primary.colors.blogDarkText};
  line-height: 160%;
  display: -webkit-box;
  max-width: 533px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media (max-width: 990px) {
    max-width: 720px;
  }

  &.admin {
    margin: 0;

    & h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-block: 0 16px;
    }
    p {
      line-height: 160%;
      color: ${themes.primary.colors.blogDarkText};
    }
  }
`;

export const BlogItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: ${themes.primary.font.family.namu};
`;

export const BlogContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
  padding-right: 91px;
`;

export const BlogItem = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 30px 20px;
  margin-top: 30px;
  border: 1px solid ${themes.primary.colors.black};

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 990px) {
    flex-wrap: wrap-reverse;
    justify-content: center;
    max-width: 720px;
    width: 100%;
  }
  @media ${themes.primary.media.onlyTabletPortrait} {
    margin-top: 25px;
  }
`;

export const BlogItemTitle = styled.h1`
  max-width: 500px;
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: ${themes.primary.font.size.quaternary};
  font-family: ${themes.primary.font.family.openSans};
  margin-top: 28px;
  margin-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 990px) {
    max-width: 720px;
    padding: 0;
  }
`;

export const BlogItemImage = styled.img`
  object-fit: contain;
  width: 394px;
  height: 212px;
  margin-left: 10px;

  @media (max-width: 990px) {
    object-fit: contain;
    width: 100%;
    max-width: 720px;
    height: auto;
    margin: 0;
  }
`;

export const BlogItemInfo = styled.div`
  max-width: 100%;
  @media (max-width: 990px) {
    width: 100%;
    max-width: 720px;
    height: auto;
    margin: 0;
  }
`;

export const Date = styled.div`
  color: ${themes.primary.colors.authorGrey};
  font-size: 1.333em;

  & strong {
    color: ${themes.primary.colors.primary};
    font-weight: ${themes.primary.font.weight.semiBold};
  }
`;

export const BlogDateTagWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25em;
`;

export const Tag = styled.div`
  padding: 4px 13px;
  font-family: ${themes.primary.font.family.openSans};
  line-height: 160%;
  font-size: 1.166em;
  font-weight: ${themes.primary.font.weight.semiBold};
  background-color: ${themes.primary.colors.darkBlue};
  color: ${themes.primary.colors.secondary};
  width: fit-content;
  height: fit-content;
  margin-left: 1.785em;
`;

export const AdminFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  border: 1px solid ${themes.primary.colors.darkBlue};
  margin: 0 15px;
  padding: 0 8px;
`;

export const AdminCheckboxField = styled(Field)`
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none;

  /* creating a custom design */
  border-radius: 0;
  border: 1px solid ${themes.primary.colors.comment};
  width: 19px;
  height: 19px;
  margin: 0;
  background: transparent;
  outline: none;
  cursor: pointer;
  position: relative;
  &::before {
    content: "";
    width: 19px;
    height: 19px;
    position: absolute;
  }
  &:checked {
    ::before {
      background-color: ${themes.primary.colors.primary};
      background-image: url("/adminMarker.svg");
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  &:disabled {
    opacity: 30%;
    cursor: not-allowed;
  }
`;

export const ChangeIconWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 70px;
  top: 0;
  right: 0;
  z-index: 100;
`;

export const ChangeIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const InternalButtonWrapper = styled(ButtonWrapper)`
  width: auto;
`;

export const TimeStamp = styled(Date)`
  margin-right: 24px;
  word-spacing: 0.5rem;
`;

export const DeleteButton = styled.div`
  cursor: pointer;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.aboutUsCardText};
  color: ${themes.primary.colors.deleteButton};
`;

export const DeactivateButton = styled.button<IDisabled>`
  cursor: pointer;
  margin-right: 12px;
  padding: 7px 12px;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.aboutUsCardText};
  color: ${themes.primary.colors.darkBlue};
  opacity: ${({ disabled }) => (disabled ? "0.3" : "1")};
  border: 1px solid ${themes.primary.colors.darkBlue};
`;

export const PublishButton = styled.button<IDisabled>`
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  padding: 7px;
  background-color: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.aboutUsCardText};
  color: ${({ disabled }) =>
    disabled ? themes.primary.colors.primary : themes.primary.colors.secondary};
  ${({ disabled }) =>
    disabled &&
    css`
      background-image: linear-gradient(
        90deg,
        ${themes.primary.colors.mainGradientColor1} 0%,
        ${themes.primary.colors.mainGradientColor2} 100%
      );
    `};

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;

    ::before {
      content: "";
      display: ${({ disabled }) => (disabled ? "block" : "none")};
      width: 14px;
      height: 12px;
      margin-right: 6px;
      background-image: url(${CheckMarkPublished.src});
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`;

export const DraftMark = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.666em 1.888em;
  text-transform: uppercase;
  background-color: ${themes.primary.colors.headerBorderHover};
  font-size: 18px;
  line-height: 99%;
  border: 1px solid ${themes.primary.colors.primary};
`;

export const Fade = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.6;
  z-index: 10;
  background-color: #f1efed;
`;
