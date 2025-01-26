import React, { FC, useState } from "react";
import { useFormikContext } from "formik";

import Plus from "../../../public/plus.svg";
import * as Styles from "../../../src/styles/BlogTags.styled";
import { IDataCareersResponse } from "../../types/Admin/Response.types";
import { VacancyInput } from "../../styles/AdminCareersPage";
import * as Styled from "../Admin/FAQ/adminFaq.styled";

import { IBlogTags } from "../../modules/blog/types/blog.type";

const CareerInfo: FC<IBlogTags> = ({
  isNewTicket,
  ticket,
  infoIndex,
  setInfo,
  info,
}) => {
  const [counter, setCounter] = useState<number>(0);
  const { values, handleChange } = useFormikContext<IDataCareersResponse>();
  const newInfo = values.vacancy?.info;
  const editInfo = values.tickets[ticket]?.info;

  const addTagOnClick = () => {
    const newArticleCase = () => {
      values.vacancy.info[infoIndex].values.push("");
    };
    const editArticleCase = () => {
      values.tickets[ticket].info[infoIndex].values.push("");
    };
    setCounter(counter + 1);
    !isNewTicket ? newArticleCase() : editArticleCase();
  };

  const deleteItem = () => {
    !isNewTicket
      ? newInfo[infoIndex].values.pop()
      : editInfo[infoIndex].values.pop();
    setCounter(counter + 1);
  };

  const deleteHeading = () => {
    if (infoIndex === 0) return;
    !isNewTicket
      ? values.vacancy.info.splice(infoIndex, 1)
      : values.tickets[ticket].info.splice(infoIndex, 1);
    setInfo(info - 1);
  };

  const addNextHeading = () => {
    !isNewTicket
      ? values.vacancy.info.splice(infoIndex + 1, 0, {
          heading: "",
          values: [],
        })
      : values.tickets[ticket].info.splice(infoIndex + 1, 0, {
          heading: "",
          values: [],
        });
    setInfo(info + 1);
  };

  return (
    <Styles.CareerInfo>
      <VacancyInput
        type="text"
        name={
          isNewTicket
            ? `tickets[${ticket}].info[${infoIndex}].heading`
            : `vacancy.info[${infoIndex}].heading`
        }
        placeholder="enter info category"
        value={
          isNewTicket ? editInfo[infoIndex].heading : newInfo[infoIndex].heading
        }
        onChange={handleChange}
      />
      <Styled.ButtonsContainer>
        <Styled.AddButton onClick={() => addNextHeading()}>
          [ + add next heading ]
        </Styled.AddButton>
        <Styled.DeleteButton onClick={() => deleteHeading()}>
          delete
        </Styled.DeleteButton>
      </Styled.ButtonsContainer>
      <Styles.TagsWrapper>
        {!isNewTicket
          ? values.vacancy.info[infoIndex].values.map((el, index) => (
              <Styles.Tag
                name={`vacancy.info[${infoIndex}].values[${index}]`}
                onChange={handleChange}
                value={values.vacancy?.info[infoIndex].values[index]}
                key={index}
              />
            ))
          : values.tickets[ticket].info[infoIndex].values.map((el, index) => (
              <Styles.Tag
                name={`tickets[${ticket}].info[${infoIndex}].values[${index}]`}
                onChange={handleChange}
                value={values.tickets[ticket].info[infoIndex].values[index]}
                key={index}
              />
            ))}
        <Styles.AddTag onClick={addTagOnClick}>
          <Styles.PlusIcon src={Plus.src} />
        </Styles.AddTag>
        <Styles.AddTag onClick={deleteItem}>
          <Styles.Minus>-</Styles.Minus>
        </Styles.AddTag>
      </Styles.TagsWrapper>
    </Styles.CareerInfo>
  );
};

export default CareerInfo;
