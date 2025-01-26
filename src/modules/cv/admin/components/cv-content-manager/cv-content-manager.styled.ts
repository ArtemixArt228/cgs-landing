import styled, { css } from "styled-components";
import themes from "../../../../../utils/themes";

export const AdminPaddedBlock = styled.div`
  padding: ${css`
    ${themes.primary.spacing.primary}
    ${themes.primary.spacing.adminWithinBlocks}
  `};
  margin-bottom: ${themes.primary.spacing.adminWithinBlocks};
  font-family: ${themes.primary.font.family.namu};
`;

export const AdminContentBlock = styled.div`
  padding: ${themes.primary.spacing.septenary} 0 0 0;
  font-family: ${themes.primary.font.family.namu};
`;

export const MetaBlockWraper = styled.div`
  background: linear-gradient(
    61.63deg,
    ${themes.primary.colors.mainGradientColor1} 0%,
    ${themes.primary.colors.mainGradientColor2} 100%
  );
  border: 2px solid ${themes.primary.colors.primary};
`;
