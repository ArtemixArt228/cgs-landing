import styled from "styled-components";
import themes from "../../utils/themes";

export const Area = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TriangleButton = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 7px solid ${themes.primary.colors.black};

  &.clicked {
    transform: rotate(180deg);
    border-top: 7px solid ${themes.primary.colors.secondary};
  }
`;
