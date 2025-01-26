import styled from "styled-components";
import themes from "../../../utils/themes";

export const CvLayout = styled.article`
  width: 100%;
  margin: 0 auto;
  padding-inline: 20px;
  overflow: hidden;
  font-family: ${themes.primary.font.family.namu};

  @media (min-width: 769px) {
    padding-inline: 51px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-inline: 68px;
  }
`;
