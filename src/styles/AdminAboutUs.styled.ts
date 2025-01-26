import styled from "styled-components";

export const ImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
`;

export const Headlines = styled.div`
  display: flex;
  justify-content: space-between;
  width: 954px;
  gap: 32px;
  div {
    flex-grow: 1;
  }
`;

export const TeamMember = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: start;
  margin-top: 16px;
`;
