import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.div`
  font-weight: ${themes.primary.font.weight.heavy};
  overflow-clip-margin: 51px;
  font-size: 1rem;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.4rem;
  }

  @media (min-width: 2200px) {
    font-size: 1.6rem;
  }

  h2,
  h3 {
    font-weight: inherit;
  }
`;
