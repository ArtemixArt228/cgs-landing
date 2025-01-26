const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const durationMonthsString = (durationMonths: number) => {
  if (durationMonths === 0) {
    return "";
  } else if (durationMonths === 1) {
    return "1 month";
  } else {
    return `${durationMonths} months`;
  }
};

const durationYearsString = (durationYears: number) => {
  if (durationYears === 0) {
    return "";
  } else if (durationYears === 1) {
    return "1 year";
  } else {
    return `${durationYears} years`;
  }
};

export const formatPeriod = (startDate: Date | null, endDate: Date | null) => {
  const startMonth = monthNames[startDate!.getMonth()];
  const startYear = String(startDate!.getFullYear()).slice(-2);
  const endMonth = endDate ? monthNames[endDate!.getMonth()] : "";
  const endYear = endDate ? String(endDate!.getFullYear()).slice(-2) : "";

  let duration = 0;
  let durationYears = 0;
  let durationMonths = 0;
  if (endDate) {
    duration =
      Number(endYear) * 12 +
      endDate!.getMonth() -
      Number(startYear) * 12 -
      startDate!.getMonth() +
      1;

    durationYears = Math.trunc(duration / 12);
    durationMonths = duration % 12;
  }

  const period =
    startMonth +
    " `" +
    startYear +
    " - " +
    endMonth +
    " `" +
    endYear +
    " • (" +
    durationYearsString(durationYears) +
    (durationYears && durationMonths ? " " : "") +
    durationMonthsString(durationMonths) +
    ")";

  return period;
};
