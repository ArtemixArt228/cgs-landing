import styled from "styled-components";
import themes from "../../../../../utils/themes";

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
