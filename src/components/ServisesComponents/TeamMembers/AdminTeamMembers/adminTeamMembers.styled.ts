import styled from "styled-components";
import themes from "../../../../utils/themes";

interface IsOpen {
  isOpen: boolean;
}

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
`;

export const TextBlock = styled.div``;

export const Subtitle = styled.div`
  margin-bottom: 20px;
  font-size: ${themes.primary.font.size.serviceSubtitle};
  font-weight: ${themes.primary.font.weight.heavy};
  font-family: ${themes.primary.font.family.namu};
`;

export const TitleInput = styled.textarea`
  width: 40vw;
  height: 55px;
  margin-bottom: 20px;
  background: none;
  border: 1px solid ${themes.primary.colors.adminInputBorder};
  font-family: ${themes.primary.font.family.namu};
  resize: vertical;
  padding: ${themes.primary.spacing.primary};
  font-size: 16px;
  line-height: 160%;
  outline: none;
`;

export const Description = styled.div`
  margin-bottom: 20px;
  font-size: ${themes.primary.font.size.serviceSubtitle};
  font-weight: ${themes.primary.font.weight.heavy};
  font-family: ${themes.primary.font.family.namu};
`;

export const DescriptionInput = styled.textarea`
  width: 40vw;
  height: fit-content;
  margin-bottom: 20px;
  background: none;
  border: 1px solid ${themes.primary.colors.adminInputBorder};
  font-family: ${themes.primary.font.family.namu};
  resize: vertical;
  padding: ${themes.primary.spacing.primary};
  font-size: 16px;
  line-height: 160%;
  outline: none;
`;

export const MembersBlock = styled.div`
  margin-top: 56px;
  margin-left: 60px;
`;

export const MembersInput = styled.input`
  width: 20vw;
  height: 50px;
  border: 1px solid ${themes.primary.colors.adminInputBorder};
  background: none;
  padding: ${themes.primary.spacing.primary};
  font-size: 14px;
  line-height: 160%;
  outline: none;
  font-weight: 500;
  color: black;
`;

export const AddMembers = styled.div`
  width: 24vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AddMembersButton = styled.button`
  font-size: 32px;
  color: #fff;
  border: 1px solid black;
  padding: 6px 15px;
  background-color: black;
  cursor: pointer;
  transition: all 0.1s linear;

  &:hover {
    background-color: #333;
  }
`;

export const MembersDropdown = styled.div`
  position: relative;
  display: inline-block;
  background-color: ${themes.primary.colors.blogBackground};
  margin-top: 10px;
`;

export const DropdownButton = styled.div<IsOpen>`
  width: 20em;
  cursor: pointer;
  color: ${themes.primary.colors.adminInputBorder};
  background-color: ${themes.primary.colors.blogBackground};
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.tertiary};
  border: 1px solid ${themes.primary.colors.adminInputBorder};
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: normal;
  letter-spacing: 0.03em;
  padding: 15px 15px;
  user-select: none;

  img {
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "0")};
  }
`;

export const DropdownContent = styled.div<IsOpen>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  width: 24em;
  height: 150px;
  overflow: scroll;
  cursor: pointer;
  background-color: ${themes.primary.colors.blogBackground};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${themes.primary.colors.adminInputBorder};
    font-size: ${themes.primary.font.size.tertiary};
    font-family: ${themes.primary.font.family.namu};
    padding: 0 6px;
  }
`;

export const DeleteMember = styled.button`
  border: none;
`;

export const SelectedContent = styled.div<IsOpen>`
  display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
  flex-wrap: wrap;
  position: absolute;
  width: 30em;
`;

export const SubmitButton = styled.div`
  margin-top: 20px;
  margin-left: 6vw;
  margin-bottom: 20px;
`;
