import styled from "styled-components";

export const LinkWrapper = styled.div`
  color: darkslategray;
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 15px;
`;

export const LinkText = styled.a`
  color: rgb(88, 105, 221);
  text-decoration: underline;
  transition: color 0.3s ease-in-out;
  :hover {
    cursor: pointer;
    color: blue;
  }
`;
