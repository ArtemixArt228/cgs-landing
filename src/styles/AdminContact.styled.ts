import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin: 0 0 22px;
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

export const EmailList = styled.ul`
  margin: 0 0 0px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const EmailItem = styled.li`
  width: 48%;
  display: flex;
  flex-direction: column;
`;

export const MessengerItem = styled.li`
  /* width: 50%; */
  display: flex;
  gap: 12px;
`;

export const MessengerTextlItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LocationWrapper = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 4.1em;
`;

export const LocationTextlItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  margin: 0;
`;
