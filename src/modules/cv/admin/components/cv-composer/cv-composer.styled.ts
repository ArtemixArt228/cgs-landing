import styled from "styled-components";
import themes from "../../../../../utils/themes";

export const AdminCvGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export const AdminImageSubTitle = styled.h3`
  font-size: ${themes.primary.font.size.menuElement};
  font-family: ${themes.primary.font.family.namu};
  margin: 0 0 10px 0;
`;

export const ImageErrorBox = styled.div<{ width?: string; height?: string }>`
  position: absolute;
  border: 2px solid ${themes.primary.colors.adminRed};
  height: ${(props) => (props.height ? props.height : "265px")};
  width: ${(props) => (props.width ? props.width : "235px")};
  pointer-events: none;
`;
