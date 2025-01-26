import { addHours, isWithinInterval, setHours, startOfDay } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export const isChatAvailable = () => {
  const kyivTimeZone = "Europe/Kiev";

  const currentDateTimeInKyiv = utcToZonedTime(new Date(), kyivTimeZone);

  const kyivStartTime = setHours(startOfDay(currentDateTimeInKyiv), 9);
  const kyivEndTime = addHours(kyivStartTime, 10);

  return isWithinInterval(currentDateTimeInKyiv, {
    start: kyivStartTime,
    end: kyivEndTime,
  });
};
