export interface ICalendarEvent {
  title: string;
  description: string;
  location: string;
  startTime: string;
  endTime: string;
}

export const generateGoogleCalendarLink = (event: ICalendarEvent) => {
  const { title, description, location, startTime, endTime } = event;
  const baseUrl = "https://calendar.google.com/calendar/r/eventedit";
  const dates = `${formatDateTimeGoogle(startTime)}/${formatDateTimeGoogle(
    endTime
  )}`;
  return `${baseUrl}?text=${encodeURIComponent(
    title
  )}&dates=${dates}&details=${encodeURIComponent(
    description
  )}&location=${encodeURIComponent(location)}`;
};

export const generateYahooCalendarLink = (event: ICalendarEvent) => {
  const { title, description, location, startTime, endTime } = event;
  const baseUrl = "https://calendar.yahoo.com/";
  return `${baseUrl}?v=60&view=d&type=20&title=${encodeURIComponent(
    title
  )}&st=${formatDateTimeYahoo(startTime)}&dur=${getEventDuration(
    startTime,
    endTime
  )}&desc=${encodeURIComponent(description)}&in_loc=${encodeURIComponent(
    location
  )}`;
};

export const generateOutlookCalendarLink = (event: ICalendarEvent) => {
  const { title, description, location, startTime, endTime } = event;
  const baseUrl = "https://outlook.live.com/calendar/0/deeplink/compose";
  return `${baseUrl}?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(
    title
  )}&body=${encodeURIComponent(
    description
  )}&startdt=${startTime}&enddt=${endTime}&location=${encodeURIComponent(
    location
  )}`;
};

export const generateICSFile = (event: ICalendarEvent) => {
  const { title, description, location, startTime, endTime } = event;
  const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${location}
DTSTART:${formatDateTimeICS(startTime)}
DTEND:${formatDateTimeICS(endTime)}
END:VEVENT
END:VCALENDAR
`;

  const blob = new Blob([icsContent], { type: "text/calendar" });
  return URL.createObjectURL(blob);
};

const formatDateTimeGoogle = (date: string) =>
  new Date(date).toISOString().replace(/-|:|\.\d+/g, "");
const formatDateTimeYahoo = (date: string) =>
  new Date(date)
    .toISOString()
    .replace(/-|:|\.\d+/g, "")
    .slice(0, 15);
const formatDateTimeICS = (date: string) =>
  new Date(date).toISOString().replace(/-|:|\.\d+/g, "");

const getEventDuration = (
  startTime: string | Date,
  endTime: string | Date
): string => {
  const start = new Date(startTime);
  const end = new Date(endTime);
  const durationMs = end.getTime() - start.getTime();
  const durationMinutes = Math.floor(durationMs / 60000);
  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;

  return `${hours < 10 ? "0" : ""}${hours}${minutes < 10 ? "0" : ""}${minutes}`;
};
