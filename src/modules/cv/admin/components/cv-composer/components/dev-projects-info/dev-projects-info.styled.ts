import styled from "styled-components";
import themes from "../../../../../../../utils/themes";

export const FieldsWrapper = styled.div`
  width: 100%;
  border-inline: 1px solid black;
  border-bottom: 1px solid black;
  padding: 16px;
  margin-bottom: 24px;
  margin-top: -22px;
`;

export const BottomText = styled.div`
  display: flex;
  margin-bottom: 1.5em;
  justify-content: flex-end;
`;

export const TextCounter = styled.div``;

export const DropdownWrapper = styled.div`
  margin-bottom: 24px;
`;

export const DropdownButton = styled.div<{ iserror?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  width: 347px;
  height: 56px;
  color: #8f8e93;
  text-align: left;
  padding: 18px 14px;
  box-sizing: border-box;
  border: 1px solid ${({ iserror }) => (iserror ? "red" : "#8F8E93")};
  font-family: ${themes.primary.font.family.namu};
  font-weight: 900;
  font-size: 16px;
  letter-spacing: 0.03em;

  &.categoryText {
    color: #000;
  }

  &.open img {
    transform: rotate(180deg);
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  min-width: 347px;
  max-height: 236px;
  overflow-y: scroll;
  ms-overflow-y: scroll;
  z-index: 10;
  border: 1px solid ${themes.primary.colors.adminInputBorder};
  display: none;
  &.open {
    display: block;
  }
  div {
    background-color: ${themes.primary.colors.blogBackground};
    color: ${themes.primary.colors.primary};
    font-family: ${themes.primary.font.family.namu};
    font-size: ${themes.primary.font.size.primary};
    border-bottom: 1px solid ${themes.primary.colors.comment};
    padding: 10px 16px;
    text-decoration: none;
    text-align: left;
    cursor: pointer;
    &:hover {
      background-color: ${themes.primary.colors.blogDropdownHover};
    }
    &:last-child {
      border-bottom: 0;
    }
  }
`;

export const ProjectWrapper = styled.div`
  border: 1px solid #8f8e93;
  padding: 16px;
  margin-top: 16px;
`;

export const ProjectNumberWrapper = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid #8f8e93;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectNumber = styled.h1`
  margin: 0;
  font-size: 30px;
`;

export const ProjectInfo = styled.div``;

export const FirstProjectInfoBlock = styled.div`
  padding-top: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
`;

export const LastProjectInfoBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
`;

export const LinkGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;

  h2 {
    margin-bottom: 10px;
  }
`;

export const LinkDeleteContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 50px;
`;

export const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

export const AddProjectBtn = styled.button`
  border: none;
  background-color: #000;
  color: #fff;
  height: 56px;
  width: 163px;
  font-size: 16px;
  font-weight: 900;
  font-family: ${themes.primary.font.family.namu};
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const ArrowContainer = styled.div`
  width: 28px;
  height: 28px;
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
    margin-left: -0.55px;
    margin-top: -0.5px;
  }

  &.ticketModalArrowSubmit {
    will-change: transform;
  }

  &.careersTicketArrow {
    position: relative;
    top: 0;
    right: 0;
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
    width: 36px;
    height: 36px;
    right: -15px;
    top: -15px;

    &.mobileAudit {
      font-size: 1.5em;
    }

    & svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const AdminCategoryAddBlockWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 114px;

  &.cvAchievement {
    justify-content: flex-start;
  }
`;

export const AdminCategoryNameInput = styled.input<{
  iserror?: boolean;
  isActive?: boolean;
}>`
  height: 56px;
  border: 1px solid
    ${({ iserror }) =>
      iserror
        ? themes.primary.colors.adminRed
        : themes.primary.colors.darkGrey};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 16px;
  line-height: 19px;
  color: ${themes.primary.colors.primary};
  padding: 18px 14px;
  background: transparent;
  max-width: 224px;
  user-select: ${(props) => (props.isActive ? "none" : undefined)};
  pointer-events: ${(props) => (props.isActive ? "none" : undefined)};

  &::placeholder {
    font-size: 18px;
  }

  &.error {
    &::placeholder {
      color: ${themes.primary.colors.adminRed};
    }
  }

  &.cv {
    max-width: 347px;
    width: 347px;
  }

  &.cvSkills {
    max-width: 263px;
    width: 263px;
  }

  &.portfolioTags {
    border: 1px solid
      ${({ iserror }) =>
        iserror
          ? themes.primary.colors.adminRed
          : themes.primary.colors.darkGrey};
  }

  &.cvAchievements {
    max-width: 318px;
    width: 318px;
    margin-bottom: 10px;

    border: 1px solid
      ${({ iserror }) =>
        iserror
          ? themes.primary.colors.adminRed
          : themes.primary.colors.darkGrey};

    &::placeholder {
      font-size: 16px;
    }
  }

  &.cvLinks {
    max-width: unset;
    width: 330px;
  }
`;

export const AdminCategoryDeleteBlockWrapper = styled.div`
  display: flex;
  cursor: pointer;
  width: 43px;
  align-items: center;
  justify-content: center;

  &.cvAchievement {
    margin-bottom: 10px;
  }
`;

export const AdminCategoryAddBlockBtn = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0;
  font-family: ${themes.primary.font.family.inter};
  color: ${themes.primary.colors.darkBlue};
  background: none;
`;
