import React, { useState, useCallback } from "react";

import * as Styled from "./blog-tags.styled";

import { useHandleTags } from "../../hooks";

interface IAddTagProps {
  possibleTags: string[];
}

export const AddTag: React.FC<IAddTagProps> = ({ possibleTags }) => {
  const [inputVal, setInputVal] = useState("");

  const { data, updateBlogPageData } = useHandleTags();

  const handleCreateTag = useCallback(
    async (tag: string) => {
      if (data && !possibleTags.includes(tag)) {
        const newPossibleTags = [...possibleTags, tag];
        await updateBlogPageData({
          ...data,
          possibleTags: newPossibleTags,
        });
      }
    },
    [data, possibleTags, updateBlogPageData]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputVal(e.target.value);
  };

  const handleAddTag = async () => {
    if (inputVal.trim()) {
      await handleCreateTag(inputVal.trim());
      setInputVal("");
    }
  };

  return (
    <Styled.TagInputWrapper>
      <Styled.AdminInput
        value={inputVal}
        onChange={handleInputChange}
        placeholder="Add new tag"
        style={{ marginBottom: 0 }}
      />
      <Styled.TagInputSubmit
        type="button"
        onClick={handleAddTag}
        disabled={!inputVal.trim()}
      >
        +
      </Styled.TagInputSubmit>
    </Styled.TagInputWrapper>
  );
};
