import { useEffect } from "react";

export const DisableScrollBarHandler = (optionDisable: boolean) => {
  useEffect(() => {
    if (optionDisable) {
      document.querySelector("html")?.classList.add("disableScrollBar");
      document.querySelector("body")?.classList.add("disableScrollBar");
    } else {
      document.querySelector("html")?.classList.remove("disableScrollBar");
      document.querySelector("body")?.classList.remove("disableScrollBar");
    }
  }, [optionDisable]);
};
