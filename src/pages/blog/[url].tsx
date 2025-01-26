import React from "react";
import Image from "next/image";
import parse from "html-react-parser";
import {
  dehydrate,
  QueryClient,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";
import { GetServerSidePropsContext } from "next";

import {
  ArticleAuthor,
  ArticleContent,
  ArticleDate,
  ArticleDescription,
  ArticleReadMore,
  ArticleShare,
  ArticleTags,
  SubscribeBlock,
} from "../../modules/blog/components";
import PageLayout from "../../components/PageLayout/PageLayout";

import * as Styles from "../../modules/blog/styles";

import { IBlogPageData } from "../../modules/blog/types";
import { IArticle } from "../../modules/blog/admin";
import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import { addIdsToHeaders } from "../../modules/blog/utils";
import { blogService } from "../../modules/blog/services";
import { useArticleData, useActiveSection } from "../../modules/blog/hooks";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient();

  const url = context.params?.url as string;

  await queryClient.prefetchQuery([queryKeys.getBlogArticle], () =>
    blogService.getArticleByUrl(url)
  );

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

interface IBreadcrumb {
  key: string;
  href?: string;
  label: string;
}

const Breadcrumbs: React.FC<{ items: IBreadcrumb[] }> = ({ items }) => (
  <Styles.Breadcrumbs>
    {items.map((item, index) => (
      <React.Fragment key={item.key}>
        {item.href ? (
          <Link href={item.href}>
            <a>{item.label}</a>
          </Link>
        ) : (
          <span>{item.label}</span>
        )}
        {index < items.length - 1 && (
          <Styles.BreadcrumbSeparator>&gt;</Styles.BreadcrumbSeparator>
        )}
      </React.Fragment>
    ))}
  </Styles.Breadcrumbs>
);

const ArticleHero: React.FC<{
  article: IArticle;
  isTablet: boolean;
}> = ({ article, isTablet }) => (
  <Styles.ArticleHeroContainer>
    <ArticleDate date={article.date} isTablet={isTablet} />
    <Styles.TitleAuthorWrap>
      <Styles.Title>{article.title}</Styles.Title>
      <ArticleAuthor
        isTablet={isTablet}
        author={article.author}
        time={article.minutesToRead}
        views={article.views}
      />
    </Styles.TitleAuthorWrap>
  </Styles.ArticleHeroContainer>
);

const ArticleHeader: React.FC<{
  article: IArticle;
  isTablet: boolean;
}> = ({ article, isTablet }) => (
  <>
    <Styles.ArticleInfoWrapper>
      <div>
        <ArticleHero article={article} isTablet={isTablet} />
      </div>
      <Styles.LinksAndTagsWrapper>
        <ArticleShare isArticle />
        <ArticleTags tags={article.tags} />
      </Styles.LinksAndTagsWrapper>
    </Styles.ArticleInfoWrapper>
    <Styles.BannerImageWrapper>
      <Styles.BannerImageContainer>
        <Image
          src={article.image?.url ?? ""}
          layout="fill"
          alt="banner image"
        />
      </Styles.BannerImageContainer>
    </Styles.BannerImageWrapper>
  </>
);

const ArticleBody: React.FC<{
  article: IArticle;
  isDesktop: boolean;
  content: string;
  activeSection: string;
}> = ({ article, isDesktop, content, activeSection }) => {
  return (
    <>
      <Styles.LineDivider />

      {article.content && (
        <Styles.DescriptionWrapper id="articleScrollArea">
          <ArticleDescription content={content} />
          {isDesktop && (
            <ArticleContent content={content} activeSection={activeSection} />
          )}
        </Styles.DescriptionWrapper>
      )}
    </>
  );
};

const ArticlePage: React.FC = () => {
  const router = useRouter();

  const url = typeof router.query?.url === "string" ? router.query.url : "";

  const isTablet = useMediaQuery("(min-width:768px)");
  const isDesktop = useMediaQuery("(min-width:1440px)");

  const { article, readMoreArticles, isLoading } = useArticleData(url);

  const { data: blogData }: UseQueryResult<IBlogPageData> = useQuery(
    [queryKeys.getBlogPage],
    () => blogService.getBlogPageData()
  );

  const { metaTitle, metaDescription, customHead } = { ...article?.meta };

  const breadcrumbs: IBreadcrumb[] = [
    { key: "home", href: "/", label: "Homepage" },
    { key: "blog", href: "/blog", label: "Blog" },
    article && {
      key: "article",
      label: article.title,
    },
  ].filter(Boolean) as IBreadcrumb[];
  const { html: processedContent, headerIds } = addIdsToHeaders(
    article?.content || ""
  );
  const { activeSection } = useActiveSection(headerIds);

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead)}
      </Head>

      <PageLayout
        isLoading={isLoading}
        dataDefined={!!article}
        headerClassName="header-without-shadow"
      >
        {article && (
          <Styles.Background>
            {!isDesktop && article.content && (
              <ArticleContent
                content={processedContent}
                activeSection={activeSection}
              />
            )}

            <Breadcrumbs items={breadcrumbs} />

            <Styles.Cont>
              <Styles.PageWrapper>
                <Styles.ArticleHeaderContainer>
                  <ArticleHeader article={article} isTablet={isTablet} />
                </Styles.ArticleHeaderContainer>
                <ArticleBody
                  article={article}
                  isDesktop={isDesktop}
                  content={processedContent}
                  activeSection={activeSection ?? ""}
                />
              </Styles.PageWrapper>

              <SubscribeBlock data={blogData} />

              {!!readMoreArticles && (
                <ArticleReadMore readMore={readMoreArticles} />
              )}
            </Styles.Cont>
          </Styles.Background>
        )}
      </PageLayout>
    </>
  );
};

export default ArticlePage;
