import React, { useMemo } from "react";
import { useFormikContext } from "formik";
import Select, { SingleValue } from "react-select";
import { IPortfolioReview } from "../../../../../types/Admin/AdminPortfolio.types";
import * as Styled from "../../../../../styles/AdminPage";
import ReactCountryFlag from "react-country-flag";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import countryList, { CountryData } from "react-select-country-list";

interface IDropdownProps {
  iserror?: boolean;
}

export const DropdownCountry = ({ iserror }: IDropdownProps) => {
  const countryOptions = useMemo(() => countryList().getData(), []);
  const { values, setFieldValue } = useFormikContext<IPortfolioReview>();
  const changeCountryHandler = (e: SingleValue<CountryData>) => {
    setFieldValue("general.country", e.label);
  };
  return (
    <Styled.FlagSelector>
      <ReactCountryFlag
        countryCode={
          countryOptions.find((item) => item.label == values.general.country)
            ?.value ?? ""
        }
        svg
        style={{
          width: "2em",
          height: "2em",
        }}
      />
      <Select
        className={`portfolio-select ${iserror && "error"}`}
        value={{ label: values.general.country }}
        options={countryOptions}
        onChange={changeCountryHandler}
        placeholder={"Choose country"}
      />
    </Styled.FlagSelector>
  );
};
