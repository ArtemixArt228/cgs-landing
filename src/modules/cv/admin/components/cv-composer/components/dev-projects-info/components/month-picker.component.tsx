import React, { useEffect, useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import { useFormikContext } from "formik";

import "react-datepicker/dist/react-datepicker.css";

import { CvData } from "../../../../../../types";

import { formatPeriod } from "../../../../../utils";

type IRange = [Date | null, Date | null];

interface IMonthRangePickerProps {
  idx: number;
  maxDate?: Date;
}

export const MonthRangePicker = ({ idx }: IMonthRangePickerProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const { values, setFieldValue } = useFormikContext<CvData>();
  const { startDate: formikStart, endDate: formikEnd } =
    values.projects.project[idx];

  const changeDate = (startDate: Date | null, endDate: Date | null) => {
    setFieldValue(`projects.project[${idx}].startDate`, startDate);
    setFieldValue(`projects.project[${idx}].endDate`, endDate);
    setFieldValue(
      `projects.project[${idx}].date`,
      formatPeriod(startDate, endDate)
    );
  };

  const initialStart = useMemo(
    () =>
      formikStart ? new Date(formikStart) : new Date("2023-01-02T03:24:00"),
    [formikStart]
  );

  const initialEnd = useMemo(
    () => (formikEnd ? new Date(formikEnd) : new Date("2023-02-02T03:24:00")),
    [formikEnd]
  );

  useEffect(() => {
    setStartDate(initialStart);
    setEndDate(initialEnd);
  }, [initialStart, initialEnd]);

  const handlePickerChange = ([newStartDate, newEndDate]: IRange) => {
    setStartDate(newStartDate);
    setEndDate(newEndDate);
    if (newEndDate !== null) {
      changeDate(newStartDate, newEndDate);
    }
  };

  return (
    <DatePicker
      showIcon
      selected={startDate}
      onChange={handlePickerChange}
      selectsRange
      startDate={startDate}
      endDate={endDate}
      dateFormat="MM/yyyy"
      showMonthYearPicker
      maxDate={new Date()}
    />
  );
};
