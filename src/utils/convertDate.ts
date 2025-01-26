import {
  format,
  parseISO,
  differenceInDays,
  differenceInHours,
} from "date-fns";

const getOrdinalSuffix = (day: number) => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const formatDate = (dateString: string) => {
  const date = parseISO(dateString);

  const dayOfMonth = date.getDate();
  const suffix = getOrdinalSuffix(dayOfMonth);

  return format(date, `d'${suffix}' 'of' MMMM, yyyy`);
};

export const formatTime = (dateString: string) => {
  const date = parseISO(dateString);

  const offsetInMinutes = new Date().getTimezoneOffset();
  const gmtOffset = -offsetInMinutes / 60;
  const time = format(date, "h:mm a");
  const gmt = gmtOffset >= 0 ? `+${gmtOffset}` : gmtOffset;

  return `${time} (GMT ${gmt})`;
};

export const convertDate = (dateString: string) => {
  const date = parseISO(dateString);

  const dayOfMonth = date.getDate();
  const suffix = getOrdinalSuffix(dayOfMonth);

  const formattedDate = format(date, `d'${suffix}' 'of' MMMM, yyyy, h:mm a`);
  return formattedDate;
};

export const timeUntil = (dateString: string) => {
  const targetDate = parseISO(dateString);
  const now = new Date();

  const daysLeft = differenceInDays(targetDate, now);
  const hoursLeft = differenceInHours(targetDate, now) - daysLeft * 24;

  if (daysLeft > 0) {
    return `${daysLeft}d ${hoursLeft}h`;
  } else {
    return `${hoursLeft}h`;
  }
};
