import React, { FC } from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import { useQueryClient } from "@tanstack/react-query";

import { ArticleListItem } from "./article-list-item.component";
import AdminBlockDropDown from "../../../../../components/Admin/Global/AdminBlockDropDown";

import * as Styled from "./articles-list.styled";

import { blogAdminService } from "../../services";
import { adminSitemapService } from "../../../../../services/adminSitemapPage";

import { IArticles } from "../../types";

import { useArticleMutations } from "../../hooks";

import { queryKeys } from "../../../../../consts/queryKeys";

const ArticlesList: FC<IArticles> = ({
  setIsNewArticle,
  setArticle,
  isNewArticle,
  article,
  data,
  sitemap,
  scrollRef,
}) => {
  const { swapArticles } = useArticleMutations(
    blogAdminService,
    adminSitemapService
  );

  const queryClient = useQueryClient();

  const handleDragEnd = async (oldIndex: number, newIndex: number) => {
    const swapped = data;
    swapped && swapped.splice(newIndex, 0, swapped.splice(oldIndex, 1)[0]);

    (await swapArticles({ srcInd: oldIndex, desInd: newIndex })) &&
      queryClient.setQueryData([queryKeys.getBlogArticles], swapped);
  };

  return data && data.length ? (
    <Styled.AdminBlocksContent>
      <AdminBlockDropDown title="Edit articles" defaultOpen={!isNewArticle}>
        <Styled.Wrapper ref={scrollRef}>
          <SortableList
            onSortEnd={handleDragEnd}
            className="list"
            draggedItemClassName="dragged"
          >
            {data.map((item, index) => (
              <SortableItem key={index}>
                <div>
                  <ArticleListItem
                    item={item}
                    i={index}
                    article={article}
                    setIsNewArticle={setIsNewArticle}
                    setArticle={setArticle}
                    sitemap={sitemap}
                    isNewArticle={isNewArticle}
                  />
                </div>
              </SortableItem>
            ))}
          </SortableList>
        </Styled.Wrapper>
      </AdminBlockDropDown>
    </Styled.AdminBlocksContent>
  ) : (
    <Styled.EmptyArticles>No articles</Styled.EmptyArticles>
  );
};

export default ArticlesList;
