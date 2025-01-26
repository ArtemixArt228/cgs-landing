const formatDateToISO = (dateString: string): string => {
  const [datePart, timePart] = dateString.split(", ");
  const [month, day, year] = datePart.split("/").map(Number);
  let [time, period] = timePart.split(" "); 
  
  let [hours, minutes, seconds] = time.split(":").map(Number);

  if (period === 'PM' && hours !== 12) {
    hours += 12;
  } else if (period === 'AM' && hours === 12) {
    hours = 0;
  }

  const formattedDate = new Date(year, month - 1, day, hours, minutes, seconds);

  
  const yearFormatted = formattedDate.getFullYear();
  const monthFormatted = String(formattedDate.getMonth() + 1).padStart(2, '0');
  const dayFormatted = String(formattedDate.getDate()).padStart(2, '0');
  const hoursFormatted = String(formattedDate.getHours()).padStart(2, '0');
  const minutesFormatted = String(formattedDate.getMinutes()).padStart(2, '0');
  const secondsFormatted = String(formattedDate.getSeconds()).padStart(2, '0');
  const millisecondsFormatted = String(formattedDate.getMilliseconds()).padStart(3, '0');
  
  return `${yearFormatted}-${monthFormatted}-${dayFormatted} ${hoursFormatted}:${minutesFormatted}:${secondsFormatted}.${millisecondsFormatted}+00:00`;
};
const setMessageTimeAccordingToCurrentDate = (dateString?: string, formatFirstlyToIso?: boolean, includeFullDate?: boolean): string => {
  const formattedToISO = formatFirstlyToIso && dateString ? formatDateToISO(dateString) : dateString;
  const date = formattedToISO ? new Date(formattedToISO) : new Date();
  const now = new Date();

  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();

  const isThisYear = date.getFullYear() === now.getFullYear();

  const formatTime = (date: Date): string => {
    const hours = date.getHours() % 12 || 12; // 12-hour format
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = date.getHours() >= 12 ? "PM" : "AM";
    return `${hours}:${minutes} ${ampm}`;
  };

  const formatDateWithMonth = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("en-US", { month: "short" });
    return `${day} ${month}`;
  };

  if (!isToday && !isThisYear || includeFullDate) {
    return `${formatDateWithMonth(date)} ${date.getFullYear()} ${formatTime(
      date
    )}`;
  } else if (isToday) {
    return formatTime(date);
  } else {
    return `${formatDateWithMonth(date)} ${formatTime(date)}`;
  }
};
export default setMessageTimeAccordingToCurrentDate;
