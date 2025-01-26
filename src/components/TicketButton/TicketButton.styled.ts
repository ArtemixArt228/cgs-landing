import styled from "styled-components";
import themes from "../../utils/themes";

export const TicketButton = styled.div`
  outline: none;
  background-image: url("/ticket-button.svg");
  background-repeat: no-repeat;
  color: black;
  cursor: pointer;
  transform: translateY(12rem);
  width: 14em;
  height: 4.8em;
  margin-left: -1.125rem;
  transition: all 0.3s;

  &:hover,
  &:active {
    transform: translateY(12rem) scale(1.2);
  }

  @media ${themes.primary.media.onlyLaptop} {
    transform: translateY(9rem);
    width: 11em;
    height: 4.8em;
    background-size: contain;
    background-repeat: space;
    margin-right: -0.938rem;
    &:hover,
    &:active {
      transform: translateY(9rem) scale(1.2);
    }
  }
  @media ${themes.primary.media.maxMobile} {
    background-size: contain;
    background-repeat: space;
    transform: translate(0.2rem, 9rem);
    &:hover,
    &:active {
      transform: translate(0.2rem, 9rem) scale(1.2);
    }
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    position: relative;
    transform: translateY(6.5rem);
    left: 0.3rem;
    width: 9.5em;
    &:hover,
    &:active {
      transform: translateY(6.5rem) scale(1.2);
    }
  }
`;
