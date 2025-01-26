import { useMediaQuery } from "@mui/system";
import React, { useState } from "react";
import { IConceptToCompletionItem } from "../../../types/Admin/AdminPortfolio.types";
import themes from "../../../utils/themes";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

interface IProps {
  items: IConceptToCompletionItem[] | undefined;
  className?: string;
}

const ConceptToCompletion = ({ items, className }: IProps) => {
  const [current, setCurrent] = useState(0);
  const isDesktop = useMediaQuery(themes.primary.media.minLaptop);

  return isDesktop ? (
    <Desktop
      current={current}
      setCurrent={setCurrent}
      items={items}
      className={className}
    />
  ) : (
    <Mobile
      items={items}
      current={current}
      setCurrent={setCurrent}
      className={className}
    />
  );
};

export default ConceptToCompletion;
