import styled from "styled-components";
import themes from "../utils/themes";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15%;
  height: 100vh;
`;

export const Title = styled.p`
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.webAuditSubtitle};
  font-family: ${themes.primary.font.family.pressStart};
  font-weight: ${themes.primary.font.weight.medium};
  line-height: 155%;
  letter-spacing: 2px;
  margin-bottom: 2em;
`;

export const Button = styled.button`
  width: 16.5em;
  height: 4.8em;
  border: 2px solid #000;
  background-color: #000;
  transition: 0.1s linear;
  margin-right: 50px;

  p {
    color: #fff;
    font-size: 1.35em;
    text-transform: uppercase;
    line-height: 99%;
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
  }

  &:hover {
    background-color: transparent;
    p {
      color: #000;
    }
  }
`;
