import styled, { keyframes } from "styled-components";
import themes from "../../../../utils/themes";

export const AdminImageSubTitle = styled.h3`
  font-size: ${themes.primary.font.size.menuElement};
  font-family: ${themes.primary.font.family.namu};
  margin: 0 0 10px 0;
`;

export const DropdownWrapper = styled.div`
  margin-bottom: 24px;
`;

export const CVCtaTitle = styled.div``;

export const CVButtonInfo = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const CVButtonWrapper = styled.div`
  width: 50%;
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

export const NewAchievementButton = styled.button`
  color: #fff;
  background-color: #000;
  height: 56px;
  width: 56px;
  border: none;
  margin-left: 8px;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 24px;
`;

export const ErrorMsg = styled.div`
  color: red;
  font-size: 14px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: 900;
  position: relative;
  display: flex;
  justify-content: end;
  margin-top: 10px;
  &.infoText {
    margin-top: 32.5px;
    right: -35.7px;
    margin-bottom: -18px;
  }
`;

export const StackWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  row-gap: 24px;
  max-width: 810px;
  width: 810px;
  flex-wrap: wrap;
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

export const AdminCvItemFrame = styled.div`
  border: 1px solid #8f8e93;
  background-color: ${themes.primary.colors.blogBackground};

  &.fade {
    &::after {
      content: "";
      background-color: #f1efed;
      opacity: 0.6;
      width: 1112px;
      height: 246px;
      z-index: 100;
      margin-top: -245px;
      margin-left: -1px;
      position: absolute;
    }
  }
`;

export const AdminCvItemFlexContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
`;

export const AdminCvItemLeftFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const AdminCvItemTitle = styled.div`
  margin-left: 16px;
`;

export const AdminCvItemName = styled.div`
  color: #000;
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: 130%;
  font-family: ${themes.primary.font.family.namu};
`;

export const AdminCvItemRole = styled.div`
  color: #8f8e93;
  font-family: ${themes.primary.font.family.namu};
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: 130%;
`;

export const AdminCvItemRightFlex = styled.div``;

export const AdminCvItemLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;

  a {
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: 130%;
    font-family: ${themes.primary.font.family.namu};
  }
`;

export const AdminCvItemExport = styled.div`
  p {
    color: #5869dd;
    font-size: 14px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-top: 16px;
    cursor: pointer;
    font-family: ${themes.primary.font.family.namu};
  }
`;

export const AdminCvItemEditDelete = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 20px;
  border-top: 1px solid #8f8e93;
  align-items: center;
`;

export const AdminCvItemEdit = styled.div`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const AdminCvItemDuplicate = styled.div`
  width: fit-content;
  height: 25px;
  cursor: pointer;
`;

export const AdminCvItemDelete = styled.div`
  color: red;
  font-size: 14px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: 900;
  cursor: pointer;
`;

export const CvPdfWrapper = styled.div`
  position: absolute;
  left: 0;
  z-index: -10;
  width: 1440px;
  height: 900px;
  overflow: hidden;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.img`
  margin-top: 15px;
  margin-left: 5px;
  width: 22px;
  height: 22px;
  animation: ${rotate360} 1s linear infinite;

  &.cv {
    margin-top: 0;
    width: 18px;
    height: 18px;
  }

  @media ${themes.primary.media.maxMobile} {
    &.cv {
      margin-top: 0;
      width: 16px;
      height: 16px;
    }
  }
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

export const AdminUnauthorizedModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background: ${themes.primary.colors.secondary};
  font-size: ${themes.primary.font.size.tertiary};
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
`;

export const AdminWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4.62fr;
  background: ${themes.primary.colors.grayBack};
  top: 56px;
  position: absolute;
  width: 100%;
`;
