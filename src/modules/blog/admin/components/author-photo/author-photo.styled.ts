import styled from "styled-components";
import themes from "../../../../../utils/themes";

export const AuthorPhotoGrid = styled.div`
  display: flex;
`;

export const AdminPhotoBlock = styled.div`
  height: 265px;
  width: 235px;
  border: 2px dashed ${themes.primary.colors.comment};
  display: flex;
  justify-content: ${(props) => (props.theme ? props.theme : "space-between")};
  align-items: center;
  flex-direction: column;

  &.author {
    width: 77px;
    height: 77px;
    flex-direction: row;
    justify-content: center;
  }

  &.about {
    height: 390px;
    width: 370px;
  }

  &.services {
    width: 71px;
    height: 71px;
  }
`;

export const AdminPhotoGrid = styled.div`
  width: 57%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 20px;

  &.fullWidth {
    width: 90%;
  }

  &.author {
    position: relative;
    cursor: pointer;
    justify-content: flex-start;
    width: 100%;
    height: 70px;
    margin-top: 0;
  }
`;

export const AdminDashedPositionGrid = styled.div`
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  &.uploaded {
    margin-top: 0;
  }

  &.author {
    margin-top: 0;
    align-items: flex-start;
  }
`;

export const AdminPointer = styled.div`
  cursor: pointer;
  user-select: none;
`;

export const AdminSubTitle = styled.h3<{
  isBlog?: boolean;
  isadminblog?: boolean;
  size?: string;
  lineHeight?: string;
  textAlign?: string;
}>`
  font-size: ${(props) =>
    props.size ? props.size : themes.primary.font.size.oneAndHalf};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: ${(props) => props.lineHeight ?? "unset"};
  margin: ${({ isadminblog }) => (isadminblog ? "10px 0" : "0 0 10px 0")};
  text-align: ${(props) => props.textAlign ?? "center"};

  &.imageUploader {
    margin-top: 22%;
  }
  &.services {
    margin: 0;
    font-size: 16px;
    line-height: 19.2px;
  }
`;

export const AdminDeleteText = styled.button`
  color: ${themes.primary.colors.errorText};
  font-size: ${themes.primary.font.size.primary};
  cursor: pointer;
  border: none;
`;

export const AuthorPhotoTextWrapper = styled.div`
  &.author {
    margin-left: 18px;
  }
  &.services {
    margin-left: 34px;
  }
`;

export const AdminComment = styled.p`
  color: ${themes.primary.colors.comment};
  margin: 0;
`;
