import React, { FC } from "react";

import * as Styled from "../styles/blog.styled";

interface INoResultComponentProps {
  search: string;
}

export const NoResultComponent: FC<INoResultComponentProps> = ({ search }) => {
  return (
    <Styled.BlogArticlesTemplate>
      <Styled.BlogSearchWarning>
        <div className="sorry-message">
          Sorry, there are no results in “
          <span className="category-name">{search}</span>”
        </div>
        <div>Recommendations:</div>
        <ul>
          <li>Make sure the search is correct.</li>
        </ul>
      </Styled.BlogSearchWarning>
    </Styled.BlogArticlesTemplate>
  );
};
