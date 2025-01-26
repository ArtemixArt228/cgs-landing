import React, { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useFormikContext } from "formik";
import { useMutation } from "@tanstack/react-query";
import dynamic from "next/dynamic";

import CareersTicket from "../../CareersTicket";
import AdminCarousel from "../Global/AdminImageCarousel";
import CareerInfo from "../../CareersStack/CareerInfo";
import AdminStars from "../HomePage/TestimonialsAdmin/AdminStars";
import Stack from "../../CareersStack/Stack";
import { adminCareersService } from "../../../services/adminCareersPage";

import * as Styled from "../../../styles/AdminPage";
import {
  MainContainer,
  CareersContainer,
  SubTitle,
  TitleInput,
  VacancyInput,
  TicketContainer,
  TicketsButton,
  TicketBox,
  IconBox,
  DeleteBtn,
  MainTitle,
} from "../../../styles/AdminCareersPage";
import { queryKeys } from "../../../consts/queryKeys";
import edit from "../../../../public/editIcon.svg";
import close from "../../../../public/bigClose.svg";
import {
  IDataCareersResponse,
  IVacancies,
} from "../../../types/Admin/Response.types";
import { newVacancy } from "../../../consts";
import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../utils/ButtonArrow";

interface ICareers {
  isNewTicket: boolean;
  setIsNewTicket: React.Dispatch<React.SetStateAction<boolean>>;
  ticket: number;
  setTicket: React.Dispatch<React.SetStateAction<number>>;
  refetch: () => any;
}

const CareersTitleTextEditor = dynamic(
  () => import("../../TextEditor/TextEditor"),
  {
    ssr: false,
  }
);

const Careers = ({
  isNewTicket,
  setIsNewTicket,
  ticket,
  setTicket,
  refetch,
}: ICareers) => {
  const { values, setFieldValue, handleChange, handleSubmit } =
    useFormikContext<IDataCareersResponse>();
  const starsChange = (newValue: number) =>
    values.vacancy && (values.vacancy.stars = newValue);
  const starsEditChange = (newValue: number) =>
    values.vacancy && (values.tickets[ticket].stars = newValue);
  const [info, setInfo] = useState<number>(0);

  const { mutateAsync } = useMutation(
    [queryKeys.deleteTicketAndVacancy],
    async (id: string) => {
      return await toast.promise(
        adminCareersService.deleteTicketAndVacancy(id),
        {
          pending: "Pending update",
          success: "Vacancy deleted successfully 👌",
          error: "Some things went wrong 🤯",
        }
      );
    }
  );

  const deleteTicket = async () => {
    const id = values.tickets[ticket]?.id;
    id && (await mutateAsync(id));

    values.tickets.splice(ticket, 1);
    setTicket(0);
  };

  const { mutateAsync: putData } = useMutation(
    [queryKeys.UpdateCareersPage],
    (data: IVacancies) => adminCareersService.addTicketCareersPage(data)
  );

  const addOrEditTicket = () => {
    if (!isNewTicket && values.vacancy) {
      const id = `${Math.random() * 1000000}`;
      const ticket = { ...values.vacancy, id };
      values.tickets = [...values.tickets, ticket];
      values.vacancy = newVacancy;
      handleSubmit();
    }
    if (isNewTicket) {
      setIsNewTicket(!isNewTicket);
      values.vacancy = newVacancy;
      handleSubmit();
    }
  };

  return (
    <Styled.AdminPaddedBlock theme="light">
      <Styled.AdminHeader>Careers</Styled.AdminHeader>
      <MainContainer>
        <CareersContainer>
          <MainTitle>
            <div style={{ marginBottom: 50 }}>
              <CareersTitleTextEditor header="Title" name="subtitle" />
            </div>
            <BlackButton
              type="submit"
              onClick={() => handleSubmit()}
              size={"1.5em"}
              padding={"1.11em 3em"}
            >
              Save changes
              <ArrowContainer>
                <ButtonArrow />
              </ArrowContainer>
            </BlackButton>
          </MainTitle>
          <SubTitle>Add a new ticket</SubTitle>
          <VacancyInput
            type="text"
            name={
              isNewTicket ? `tickets[${ticket}].vacancy` : "vacancy.vacancy"
            }
            placeholder="vacancy"
            value={
              isNewTicket
                ? values.tickets[ticket].vacancy
                : values.vacancy?.vacancy
            }
            onChange={handleChange}
          />
          <VacancyInput
            type="text"
            name={
              isNewTicket ? `tickets[${ticket}].position` : "vacancy.position"
            }
            placeholder="position"
            value={
              isNewTicket
                ? values.tickets[ticket].position
                : values.vacancy?.position
            }
            onChange={handleChange}
          />
          <AdminStars
            size={30}
            value={Number(
              isNewTicket ? values.tickets[ticket].stars : values.vacancy?.stars
            )}
            handleChange={isNewTicket ? starsEditChange : starsChange}
            edit={true}
          />
          <SubTitle>Stack</SubTitle>
          <Stack isNewTicket={isNewTicket} ticket={ticket} />
          <SubTitle className={"info"}>Info about vacancy</SubTitle>
          {!isNewTicket
            ? values.vacancy.info.map((el, i) => (
                <CareerInfo
                  info={info}
                  setInfo={setInfo}
                  key={i}
                  isNewTicket={isNewTicket}
                  ticket={ticket}
                  infoIndex={i}
                />
              ))
            : values.tickets[ticket].info.map((el, i) => (
                <CareerInfo
                  info={info}
                  setInfo={setInfo}
                  key={i}
                  isNewTicket={isNewTicket}
                  ticket={ticket}
                  infoIndex={i}
                />
              ))}
          <TicketsButton type="button" onClick={addOrEditTicket}>
            {isNewTicket ? "Edit ticket" : "Add ticket"}
          </TicketsButton>
        </CareersContainer>

        {values.tickets.length ? (
          <TicketBox>
            <TicketContainer>
              <IconBox onClick={() => setIsNewTicket(!isNewTicket)}>
                <Image src={isNewTicket ? close : edit} alt="icon" />
              </IconBox>
              <CareersTicket
                className="admin"
                ticket={values.tickets[ticket]}
              />
              <DeleteBtn onClick={deleteTicket} type={"button"}>
                delete ticket
              </DeleteBtn>
            </TicketContainer>

            <AdminCarousel
              page={ticket}
              setPage={setTicket}
              length={values.tickets.length}
            />
          </TicketBox>
        ) : (
          <Styled.AdminPhotoGrid>
            <Styled.AdminCenteredDiv>
              <Styled.AdminSubTitle>No tickets</Styled.AdminSubTitle>
            </Styled.AdminCenteredDiv>
          </Styled.AdminPhotoGrid>
        )}
      </MainContainer>
    </Styled.AdminPaddedBlock>
  );
};

export default Careers;
