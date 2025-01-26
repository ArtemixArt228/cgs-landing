import { useEffect, useState } from "react";
import { useCalendlyEventListener } from "react-calendly";

export const calendlyPopupInfoHandler = (callback: () => void) => {
  const [scheduled, setScheduled] = useState(false);
  useCalendlyEventListener({
    onEventTypeViewed: () => {},
    onEventScheduled: () => {
      setScheduled(true);
    },
  });

  useEffect(() => {
    if (scheduled) {
      callback();
      setScheduled(false);
    }
  }, [scheduled]);
};
