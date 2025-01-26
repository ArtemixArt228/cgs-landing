import styled from "styled-components";

export const SlideContainer = styled.div`
  height: 680px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1055px) {
    margin-inline: 0;
    height: 800px;
  }

  @media (max-width: 768px) {
    &.itSupport {
      margin-top: 199px;
    }
  }
`;
