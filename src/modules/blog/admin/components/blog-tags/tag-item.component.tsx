import React from "react";

import { TagWrapper } from "./blog-tags.styled";

interface ITagItemProps {
  tag: string;
  onClick: () => void;
}

export const TagItem = ({ tag, onClick }: ITagItemProps) => {
  return (
    <TagWrapper>
      {tag}
      <span style={{ cursor: "pointer" }} onClick={onClick}>
        x
      </span>
    </TagWrapper>
  );
};
