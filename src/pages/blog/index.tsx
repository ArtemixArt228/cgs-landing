import React, { useCallback } from "react";
import Head from "next/head";
import parse from "html-react-parser";
import {
  QueryClient,
  dehydrate,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import { Element } from "react-scroll";
import { useRouter } from "next/router";

import {
  BlogCard,
  BlogFilters,
  BlogMainCard,
  NoResultComponent,
  PaginationBar,
  SubscribeBlock,
} from "../../modules/blog/components";
import { Loader } from "../../components/Loader";
import PageLayout from "../../components/PageLayout/PageLayout";

import * as Styled from "../../modules/blog/styles/blog.styled";

import { blogService } from "../../modules/blog/services";
import { adminGlobalService } from "../../services/adminHomePage";

import { useBlogFilters, useBlogPagination } from "../../modules/blog/hooks";

import { IArticlesData, IBlogPageData } from "../../modules/blog/types";
import { IArticle } from "../../modules/blog/admin";

import { queryKeys } from "../../consts/queryKeys";
import { BlogPageSize } from "../../consts";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getBlogPage], () =>
    blogService.getBlogPageData()
  );

  await queryClient.prefetchQuery([queryKeys.getFullHomePage], () =>
    adminGlobalService.getFullPage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const BlogHeader: React.FC<{ title: string }> = ({ title }) => (
  <Styled.BlogHeading dangerouslySetInnerHTML={{ __html: title }} />
);

const BlogContent: React.FC<{
  articles: IArticle[];
  mainBlogCard: IArticle | null;
}> = ({ articles, mainBlogCard }) => (
  <Styled.ArticlesContainer>
    {mainBlogCard && (
      <BlogMainCard article={mainBlogCard} key={mainBlogCard._id} />
    )}
    <Styled.BlogCardsContainer>
      {articles.length > 1 &&
        articles.map((article) => (
          <BlogCard article={article} key={article._id} />
        ))}
    </Styled.BlogCardsContainer>
  </Styled.ArticlesContainer>
);

const BlogPage = () => {
  const router = useRouter();

  const { currentPage, setCurrentPage, scrollToArticles } =
    useBlogPagination(router);
  const { filters, setFilters, areFiltersActive } = useBlogFilters(
    router,
    setCurrentPage
  );

  // Queries
  const {
    data: blogPageData,
    isLoading: isBlogPageLoading,
  }: UseQueryResult<IBlogPageData> = useQuery([queryKeys.getBlogPage], () =>
    blogService.getBlogPageData()
  );

  const {
    data: articlesData,
    isLoading: isArticlesLoading,
    isFetching: isArticlesFetching,
  }: UseQueryResult<IArticlesData> = useQuery(
    [
      queryKeys.getBlogPaginatedAndFilteredArticles,
      filters,
      currentPage,
      BlogPageSize,
    ],
    () =>
      blogService.getPaginatedAndFilteredReviews(
        filters,
        currentPage,
        BlogPageSize
      ),
    {
      select: useCallback(
        (data: IArticlesData) => ({
          ...data,
          mainArticle:
            data.reviews?.length === 1
              ? data.reviews[0]
              : data.mainArticle || null,
        }),
        []
      ),
    }
  );

  const { metaTitle, metaDescription, customHead } = { ...blogPageData?.meta };

  const isLoading =
    isBlogPageLoading || (isArticlesLoading && !areFiltersActive());

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead)}
      </Head>

      <PageLayout isLoading={isLoading} dataDefined={!!blogPageData}>
        {!!blogPageData && (
          <Styled.BlogContainer>
            <Styled.FiltersWrapper>
              {blogPageData.title && <BlogHeader title={blogPageData.title} />}
              <BlogFilters
                filters={filters}
                setFilters={setFilters}
                tags={blogPageData.tags}
                sortOptions={blogPageData.sortOptions}
              />
            </Styled.FiltersWrapper>

            <Loader
              active={isArticlesLoading || isArticlesFetching}
              isContentLoader={true}
            >
              <Styled.MainInfoWrapper>
                <Element name="articles-container" />
                {articlesData?.reviews?.length ? (
                  <BlogContent
                    articles={articlesData.reviews}
                    mainBlogCard={articlesData.mainArticle}
                  />
                ) : (
                  !isArticlesLoading && (
                    <NoResultComponent search={filters.search} />
                  )
                )}
              </Styled.MainInfoWrapper>

              {!!(
                articlesData?.reviews?.length && articlesData?.totalPages
              ) && (
                <PaginationBar
                  totalPages={articlesData.totalPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  scrollFunction={scrollToArticles}
                />
              )}
            </Loader>
          </Styled.BlogContainer>
        )}

        {!isArticlesLoading && (
          <Styled.SubscribeBlockContainer>
            <SubscribeBlock data={blogPageData} />
          </Styled.SubscribeBlockContainer>
        )}
      </PageLayout>
    </>
  );
};

export default BlogPage;
