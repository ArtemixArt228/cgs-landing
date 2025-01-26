import React from "react";
import { useFormikContext } from "formik";

import CaseCard from "./CaseCard";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import { IHomePageResponse } from "../../../../types/Admin/AdminHomePage.types";

import { SUCCESSFUL_CASE_INIT } from "../../../../consts/Admin/HomePage";

const SuccessfulCasesBlock = () => {
  const { values, handleChange } = useFormikContext<IHomePageResponse>();

  const cards =
    values.TheMostSuccessfulCasesBlock?.successCases ?? SUCCESSFUL_CASE_INIT;

  return (
    <div style={{ marginBottom: "3em" }}>
      <SubHeaderWithInput
        placeholder="Successful Cases title"
        header="Title"
        inputValue={values.TheMostSuccessfulCasesBlock?.title}
        name={"TheMostSuccessfulCasesBlock.title"}
        onChangeFunction={handleChange}
      />
      {cards.map((card, i) => (
        <CaseCard
          key={i}
          card={card}
          index={i}
          onChangeFunction={handleChange}
        />
      ))}
      <div
        style={{
          marginTop: "2em",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SubHeaderWithInput
          inputValue={values.TheMostSuccessfulCasesBlock.footer?.amount}
          onChangeFunction={handleChange}
          header={`#${
            values.TheMostSuccessfulCasesBlock.successCases.length + 1
          } Footer Amount`}
          name={`TheMostSuccessfulCasesBlock.footer.amount`}
          placeholder="Amount"
          width="360px"
        />
        <SubHeaderWithInput
          inputValue={
            values.TheMostSuccessfulCasesBlock.footer?.amountDescription
          }
          onChangeFunction={handleChange}
          header={`Footer Amount Description`}
          name={`TheMostSuccessfulCasesBlock.footer.amountDescription`}
          placeholder="Amount Description"
          width="360px"
        />
        <SubHeaderWithInput
          inputValue={values.TheMostSuccessfulCasesBlock.footer?.additionalText}
          onChangeFunction={handleChange}
          header={`Footer Additional text`}
          name={`TheMostSuccessfulCasesBlock.footer.additionalText`}
          placeholder="Additional text"
          width="360px"
        />
      </div>
    </div>
  );
};

export default SuccessfulCasesBlock;
