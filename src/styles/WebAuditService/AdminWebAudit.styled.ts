import styled from "styled-components";

export const WhatIsBlockWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const ThreeInARowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 31px;
  row-gap: 20px;
`;

export const InputsWrapper = styled.div`
  width: 41%;
  margin-right: 45px;
`;

export const AdminWebAuditFooterWrapper = styled.div`
  display: flex;
  column-gap: 40px;
`;

export const AdminWebAuditInputsWrapper = styled.div`
  width: 70%;
`;

export const AdminWebAuditPhotoWrapper = styled.div`
  width: 25%;
`;

export const AdminInputsRowWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  column-gap: 30px;
`;
