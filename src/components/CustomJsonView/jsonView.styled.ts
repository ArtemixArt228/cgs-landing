import styled from "styled-components";

export const Layout = styled.div`
  margin-inline: 50px;
  color: "darkslategray";
`;

export const PageHeader = styled.h2`
  margin-block: 16px;
  &::first-letter {
    text-transform: capitalize;
  }
`;

export const SectionHeader = styled.h2`
  margin-block: 8px;
  color: green;
  &::first-letter {
    text-transform: capitalize;
  }
`;

export const CurrentHeader = styled.h3`
  margin-block: 8px;
  color: tomato;
  display: none;
  &::first-letter {
    text-transform: capitalize;
  }
`;

interface IHistoryItemProps {
  idx: number;
}

export const HistoryItemContainer = styled.div<IHistoryItemProps>`
  background-color: ${(props) => (props.idx % 2 ? "" : "white")};
  margin-inline: -50px;
  padding-inline: 50px;
  padding-block: 5px;
  border-bottom: 1px solid grey;
  &:nth-child(2) {
    border: 2px solid tomato;
    .current-header {
      display: block;
    }
  }
`;

export const SubsectionKey = styled.div`
  margin-block: 5px;
`;
