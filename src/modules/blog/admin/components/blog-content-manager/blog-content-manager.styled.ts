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

export const AdminContentBlock = styled.div`
  padding: ${themes.primary.spacing.septenary} 0 0 0;
  font-family: ${themes.primary.font.family.namu};
`;

export const AdminBlocksContent = styled.div`
  margin-left: 2.5em;
  margin-right: 3.75em;
  font-family: ${themes.primary.font.family.namu};
`;

export const AdminHeader = styled.h2`
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.secondary};
  font-family: ${themes.primary.font.family.namu};
  margin-bottom: 1.21em;
`;

export const MetaBlockWrapper = styled.div`
  background: linear-gradient(
    61.63deg,
    ${themes.primary.colors.mainGradientColor1} 0%,
    ${themes.primary.colors.mainGradientColor2} 100%
  );
  border: 2px solid ${themes.primary.colors.primary};
`;
