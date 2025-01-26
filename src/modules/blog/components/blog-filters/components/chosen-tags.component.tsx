import React, { FC } from "react";
import Image from "next/image";

import * as Styled from "../blog-filters.styled";

import closeBtnIcon from "../../../../../../public/BlogDecorations/CloseBtn.svg";

interface IChosenTags {
  filters: string[];
  deleteAllTags(): void;
  handleDeleteTag(index: number): void;
}

export const ChosenTags: FC<IChosenTags> = ({
  filters,
  deleteAllTags,
  handleDeleteTag,
}) => {
  return (
    <Styled.ChosenTagsContainer
      style={{ display: filters.length === 0 ? "none" : "flex" }}
    >
      {filters.map((tag, index) => (
        <Styled.Tag key={index}>
          <span>#{tag}</span>
          <Image
            src={closeBtnIcon}
            alt="close button"
            onClick={() => handleDeleteTag(index)}
            style={{ cursor: "pointer" }}
          />
        </Styled.Tag>
      ))}
      {filters.length > 0 && (
        <Styled.ClearAllTagsButton
          type="button"
          onClick={deleteAllTags}
          style={{ cursor: "pointer" }}
        >
          Clear all
        </Styled.ClearAllTagsButton>
      )}
    </Styled.ChosenTagsContainer>
  );
};
