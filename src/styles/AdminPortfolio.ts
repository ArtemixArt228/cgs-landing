import styled from "styled-components";
import themes from "../utils/themes";

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const DropdownWrapperTechnology = styled.div`
  position: relative;
  width: 382px;
`;

export const DropdownBanner = styled.div<{
  iserror?: boolean;
  isOpen: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  height: 56px;
  color: ${themes.primary.colors.adminInputBorder};
  text-align: left;
  padding: 0 20px;
  box-sizing: border-box;
  border: 1px solid
    ${({ iserror }) =>
      iserror ? "red" : themes.primary.colors.adminInputBorder};
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  letter-spacing: 0.03em;

  & img {
    transform: ${({ isOpen }) => !isOpen && "rotate(180deg)"};
  }
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${themes.primary.colors.blogBackground};
    color: ${themes.primary.colors.primary};
    font-family: ${themes.primary.font.family.namu};
    font-size: ${themes.primary.font.size.primary};
    border-bottom: 1px solid ${themes.primary.colors.comment};
    padding: 10px 16px;
    text-decoration: none;
    text-align: left;
    cursor: pointer;

    span {
      flex: 1;
    }

    svg {
      cursor: pointer;
      path {
        fill: ${themes.primary.colors.adminRed};
      }
    }

    &:hover {
      background-color: ${themes.primary.colors.blogDropdownHover};
    }
    &:last-child {
      border-bottom: 0;
    }
  }
`;

export const IndividualTopGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 440px));
  gap: 20px 30px;
  margin-bottom: 25px;
`;

export const IndividualBottomGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 350px));
  gap: 15px;
  margin-bottom: 25px;
`;

export const FlexInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const FlexInputContainer3Col = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

export const ProblemSolutionContainer = styled.div`
  display: flex;
  gap: 10px;
  & > :last-child {
    width: 100%;
  }
`;
interface IFlexColumnInputContainer {
  gap?: string;
}
export const FlexColumnInputContainer = styled.div<IFlexColumnInputContainer>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap ?? "20px"};
`;

export const AddBtn = styled.button`
  border: none;
  background-color: ${themes.primary.colors.jetBlack};
  color: ${themes.primary.colors.secondary};
  height: 56px;
  font-size: 16px;
  font-weight: 900;
  font-family: ${themes.primary.font.family.namu};
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  cursor: pointer;

  .plus {
    background: ${themes.primary.colors.primary};
    display: grid;
    place-items: center;
    font-family: ${themes.primary.font.family.namu};
    font-size: 35px;
    color: ${themes.primary.colors.secondary};
    line-height: 42px;
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 30%;
  }
`;

export const DeleteButton = styled.div`
  color: ${themes.primary.colors.adminRed};
  cursor: pointer;
  font-size: ${themes.primary.font.size.vistaco};
  font-family: ${themes.primary.font.family.inter};
  font-weight: ${themes.primary.font.weight.semiBold};
`;

export const AdminCSGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export const CardWrapper = styled.div`
  margin-bottom: 24px;
  border-top: 1px solid ${themes.primary.colors.darkGrey};
  padding-top: 8px;

  &.portfolioTags {
    margin-top: 16px;
    border: none;
  }

  &:last-child {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
  }
`;

export const DeleteStack = styled.button`
  color: red;
  border: none;
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;
  text-align: end;
  font-family: ${themes.primary.font.family.namu};
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
