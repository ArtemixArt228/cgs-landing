import styled from "styled-components";
import themes from "../../../../utils/themes";

export const ConceptToCompletionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${themes.primary.media.maxMobile} {
    gap: 16px;
  }
  @media ${themes.primary.media.min768Mobile} {
    gap: 24px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 32px;
  }
`;
