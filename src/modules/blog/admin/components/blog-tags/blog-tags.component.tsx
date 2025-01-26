import React, { FC, useCallback } from "react";
import { useFormikContext } from "formik";

import { Dropdown } from "./tag-dropdown.component";
import { TagItem } from "./tag-item.component";

import * as Styled from "./blog-tags.styled";

import { IArticle } from "../../types";

import { useHandleTags } from "../../hooks";

interface IBlogTags {
  possibleTags: string[];
  isError?: boolean;
}

export const BlogTags: FC<IBlogTags> = ({ possibleTags, isError }) => {
  const { setFieldValue, values, setFieldTouched } =
    useFormikContext<IArticle>();
  const { data, updateBlogPageData } = useHandleTags();

  const handleRemoveTag = useCallback(
    async (tag: string) => {
      if (!data || !possibleTags.includes(tag)) return;

      const updatedTags = possibleTags.filter((t) => t !== tag);

      await updateBlogPageData({
        ...data,
        possibleTags: updatedTags,
      });

      const newTags = values.tags.filter((t) => t !== tag);
      setFieldValue("tags", newTags);
      setFieldTouched("tags", true);
    },
    [
      data,
      possibleTags,
      setFieldTouched,
      setFieldValue,
      updateBlogPageData,
      values.tags,
    ]
  );

  const handleChooseTag = useCallback(
    (tag: string) => {
      if (!values.tags.includes(tag)) {
        const newTags = [...values.tags, tag];
        setFieldValue("tags", newTags);
        setFieldTouched("tags", true);
      }
    },
    [setFieldTouched, setFieldValue, values.tags]
  );

  const handleDeclineTag = useCallback(
    (tag: string) => {
      setFieldTouched("tags", true);
      const newTags = values.tags.filter((t) => t !== tag);
      setFieldValue("tags", newTags);
    },
    [setFieldTouched, setFieldValue, values.tags]
  );

  return (
    <Styled.TagsWrapper>
      <Dropdown
        dropdownTags={possibleTags}
        handleRemoveTag={handleRemoveTag}
        handleChooseTag={handleChooseTag}
        isError={isError}
      />
      <Styled.Container>
        {values.tags.map((tag) => (
          <TagItem tag={tag} key={tag} onClick={() => handleDeclineTag(tag)} />
        ))}
      </Styled.Container>
    </Styled.TagsWrapper>
  );
};
