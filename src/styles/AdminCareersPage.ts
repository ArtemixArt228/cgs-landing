import styled from "styled-components";

import themes from "../utils/themes";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CareersContainer = styled.div`
  width: 569px;
  margin-right: 28px;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  line-height: 34px;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.bold};
`;

export const SubTitle = styled.h3`
  font-size: 1.4rem;
  line-height: 26px;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.semiBold};
  &.info {
    margin-top: 70px;
    color: ${themes.primary.colors.headerBorder};
  }
`;

export const MainTitle = styled.div`
  width: 1080px;
`;

export const TitleInput = styled.input`
  display: block;
  width: 350px;
  padding: 19px 14px;
  border: none;
  font-size: 1rem;
  line-height: 19px;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.normal};
`;

export const VacancyInput = styled.input`
  display: block;
  width: 100%;
  padding: 19px 14px;
  border: none;
  font-size: 1rem;
  line-height: 19px;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.normal};
  margin-bottom: 15px;
`;

export const TicketsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const TicketsLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const TicketsInput = styled.input`
  margin-top: 20px;
  transform: scale(1.8);
  cursor: pointer;
`;

export const TicketsButton = styled.button`
  width: 100%;
  background: ${themes.primary.colors.cardDarkGreen};
  border: 0;
  font-size: ${themes.primary.font.size.buttonText};
  font-weight: ${themes.primary.font.weight.semiBold};
  padding: ${themes.primary.spacing.primary};
  cursor: pointer;
`;

export const TicketContainer = styled.div`
  width: 476px;
  height: auto;
  border: 1px solid black;
`;

export const TitleTextArea = styled.textarea`
  display: block;
  width: 350px;
  overflow-y: hidden;
  padding: 19px 14px;
  border: none;
  font-size: 1rem;
  line-height: 19px;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.normal};
`;

export const ContactFormContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  width: 486px;
  height: 440px;
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 19px 14px;
  border: none;
  font-size: 1rem;
  line-height: 19px;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.normal};
`;

export const CvInput = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 19px 14px;
  border: none;
  font-size: 1rem;
  line-height: 19px;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.normal};
`;

export const CvContainer = styled.div`
  display: flex;
`;

export const FormTextArea = styled.textarea`
  display: block;
  overflow-y: hidden;
  padding: 19px 14px;
  border: none;
  font-size: 1rem;
  line-height: 19px;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.normal};
`;

export const IconBox = styled.div`
  margin-top: 10px;
  margin-left: auto;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const DeleteBtn = styled.button`
  padding: 3px;
  border: 0;
  background-color: inherit;
  margin-left: auto;
  color: red;
  width: 110px;
  font-weight: ${themes.primary.font.weight.semiBold};
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
`;

export const TicketBox = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${themes.primary.font.family.namu};
`;
