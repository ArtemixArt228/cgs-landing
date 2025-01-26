import React, { FC } from "react";

import * as Styles from "../styles/devs-info.styled";

interface INoResultComponentProps {
  search: string;
  category: string;
}

export const NoResult: FC<INoResultComponentProps> = ({ search, category }) => {
  return (
    <Styles.PortfolioSearchWarning className="cv">
      <div className="sorry-message">
        <span>
          {'Sorry, no results were found for "'}
          {search ? (
            <span className="search-word">{search}</span>
          ) : (
            <span className="search-word">{category ?? ""}</span>
          )}
          {'".'}
        </span>
      </div>
      <div>Recommendations:</div>
      <ul>
        <li>Make sure all the words are properly spelled.</li>
        <li>Try using other keywords.</li>
      </ul>
    </Styles.PortfolioSearchWarning>
  );
};
