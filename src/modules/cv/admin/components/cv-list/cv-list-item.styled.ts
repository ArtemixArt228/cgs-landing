import styled, { keyframes } from "styled-components";
import themes from "../../../../../utils/themes";

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
