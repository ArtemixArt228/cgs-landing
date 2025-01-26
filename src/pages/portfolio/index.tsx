import React, { useCallback, useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import parse from "html-react-parser";

import { adminGlobalService } from "../../services/adminHomePage";
import { adminPortfolioService } from "../../services/adminPortfolioPage";

import {
  IPortfolioResponse,
  IPortfolioReview,
  IPortfolioReviewsResponse,
} from "../../types/Admin/AdminPortfolio.types";

import { queryKeys } from "../../consts/queryKeys";
import { PortfolioPageSize } from "../../consts";
import PageLayout from "../../components/PageLayout/PageLayout";
import {
  CTABlock,
  PortfolioFilters,
  PortfolioProjects,
  Title,
} from "../../modules/case-studies/components";
import { PageContentLayout } from "../../styles/Layout.styled";

const PortfolioPage: NextPage = () => {
  const router = useRouter();

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Search-Related States
  const [category, setCategory] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [searchTrigger, setSearchTrigger] = useState<string>("");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchTriggered, setIsSearchTriggered] = useState<boolean>(false);

  // Review-Related States
  const [reviews, setReviews] = useState<IPortfolioReview[]>([]);
  const [isReviewLoading, setIsReviewLoading] = useState<boolean>(false);

  // Loading and Initialization States
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [loadedImagesCount, setLoadedImagesCount] = useState(-1);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  // Warning and Trigger States
  const [hasNoMatchesWarning, setHasNoMatchesWarning] =
    useState<boolean>(false);
  const [isFiltersNullifiesTriggered, setIsFiltersNullifiesTriggered] =
    useState<boolean>(false);

  // Fetching requests
  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  const { data, isLoading }: IPortfolioResponse = useQuery(
    [queryKeys.getPortfolioPageData],
    () => adminPortfolioService.getPageData()
  );

  const {
    isLoading: reviewsIsLoading,
    data: reviewsData,
    refetch,
  }: IPortfolioReviewsResponse = useQuery(
    [
      queryKeys.getPortfolio,
      currentPage,
      selectedIndustries,
      category,
      PortfolioPageSize,
      searchTrigger,
    ],
    () =>
      adminPortfolioService.getPaginatedAndFilteredReviews(
        category,
        selectedIndustries,
        searchTrigger,
        currentPage,
        PortfolioPageSize
      ),
    {
      onSuccess: (data) => {
        if (data?.reviews) {
          setReviews([...reviews, ...data.reviews]);
          setIsFirstLoad(false);
          setHasNoMatchesWarning(false);
          loadedImagesCounter();
        }
        if (data?.reviews && isFiltersNullifiesTriggered) {
          setHasNoMatchesWarning(true);
          setIsFiltersNullifiesTriggered(false);
        } else if (isFiltersNullifiesTriggered) {
          setIsFiltersNullifiesTriggered(false);
        }
        setIsReviewLoading(false);
      },
      onError: () => {
        setIsReviewLoading(false);
      },
      refetchOnWindowFocus: false,
      enabled: isInitialized,
    }
  );

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  // Search and filter logic
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearchClose = () => {
    if (searchText) {
      setSearchText("");
    }
    if (searchTrigger) {
      setSearchTrigger("");
      setIsFirstLoad(false);
      setCurrentPage(1);
      setReviews([]);
      setIsReviewLoading(true);
      updateURLParams({ search: "" });
    }
    setIsSearchOpen(false);
  };

  const handleSearchRequest = () => {
    if (isSearchOpen || window.innerWidth < 768) {
      setIsSearchTriggered(true);
      setIsFirstLoad(false);
      setSearchTrigger(searchText);
      setCurrentPage(1);
      setReviews([]);
      setIsReviewLoading(true);
      refetch();
    } else {
      setIsSearchOpen(true);
    }
    updateURLParams({ search: searchText });
  };

  const categoryOrIndustryTrigger = useCallback(() => {
    setIsFirstLoad(false);
    setHasNoMatchesWarning(false);
    setCurrentPage(1);
    setReviews([]);
    setIsReviewLoading(true);
    imagesCountNullifies();
  }, []);

  const updateURLParams = useCallback(
    (newFilters: object) => {
      const mergedQuery = { ...router.query, ...newFilters };

      const updatedQuery = Object.fromEntries(
        Object.entries(mergedQuery).filter(([_, value]) => !!value)
      );

      router.push(
        {
          pathname: "/portfolio",
          query: updatedQuery,
        },
        undefined,
        { shallow: true }
      );
    },
    [router]
  );

  const getStateFromURLParams = useCallback(() => {
    const { category: queryCategory, industries, page, search } = router.query;
    if (queryCategory) {
      if (
        typeof queryCategory === "string" &&
        queryCategory.split(",").length > 1
      ) {
        setCategory("");
        return;
      }
      setCategory(queryCategory as string);
    }
    const pickedIndustries =
      typeof industries === "string" && industries.trim().length
        ? industries.split(",")
        : [];
    if (pickedIndustries.length > 0) {
      setSelectedIndustries(pickedIndustries);
    }

    if (page && typeof page === "string") {
      setCurrentPage(Number(page));
    }

    if (search && typeof search === "string") {
      setSearchText(search);
      setSearchTrigger(search);
      setIsSearchOpen(true);
    }
    setIsInitialized(true);
  }, [router.query]);

  const handleChangeCategory = useCallback(
    (name: string) => {
      if (category !== name) {
        categoryOrIndustryTrigger();
        setCategory(name);
        updateURLParams({ category: name });
      }
    },
    [category, categoryOrIndustryTrigger, updateURLParams]
  );

  const handleChangeIndustry = useCallback(
    (industries: string[]) => {
      setSelectedIndustries(industries);
      categoryOrIndustryTrigger();
      updateURLParams({ industries: industries.join(",") });
    },
    [categoryOrIndustryTrigger, updateURLParams]
  );

  const loadedImagesCounter = () => {
    const reviewsCount = reviewsData && reviewsData.reviews.length;

    if (reviewsCount) {
      setLoadedImagesCount((prev) => prev + 1);

      if (loadedImagesCount + 1 >= reviewsCount) {
        setIsImagesLoaded(true);
      }
    } else {
      setIsImagesLoaded(true);
    }
  };

  const imagesCountNullifies = () => {
    setIsImagesLoaded(false);
    setLoadedImagesCount(0);
  };

  const filtersNullifies = useCallback(() => {
    setIsFiltersNullifiesTriggered(true);
    setIsFirstLoad(false);
    setCurrentPage(1);
    setReviews([]);
    imagesCountNullifies();
    setSelectedIndustries([]);
    setCategory("");
    updateURLParams({ category: "", industries: [] });
  }, [updateURLParams]);

  useEffect(() => {
    if (!isInitialized) {
      getStateFromURLParams();
    }
  }, [getStateFromURLParams, isInitialized]);

  useEffect(() => {
    if (reviewsData?.reviews.length === 0 && isSearchTriggered) {
      filtersNullifies();
      setIsSearchTriggered(false);
    }
  }, [filtersNullifies, isSearchTriggered, reviewsData?.reviews.length]);

  return (
    <PageLayout isLoading={isLoading} dataDefined={!!data}>
      <Head>
        <title>{metaTitle || "Portfolio | CGS-team"}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead)}
      </Head>
      {data && (
        <PageContentLayout className="portfolio general">
          <Title data={data} />
          <PortfolioFilters
            searchText={searchText}
            handleSearchChange={handleSearchChange}
            handleSearchRequest={handleSearchRequest}
            handleSearchClose={handleSearchClose}
            isSearchOpen={isSearchOpen}
            selectedIndustries={selectedIndustries}
            handleChangeCategory={handleChangeCategory}
            handleChangeIndustry={handleChangeIndustry}
            category={category}
          />
          <PortfolioProjects
            selectedIndustries={selectedIndustries}
            setIsReviewLoading={setIsReviewLoading}
            setCurrentPage={setCurrentPage}
            isLoading={isLoading}
            reviewsIsLoading={reviewsIsLoading}
            isReviewLoading={isReviewLoading}
            hasNoMatchesWarning={hasNoMatchesWarning}
            isFirstLoad={isFirstLoad}
            searchTrigger={searchTrigger}
            category={category}
            reviews={reviews}
            reviewsData={reviewsData}
            currentPage={currentPage}
            loadedImagesCounter={loadedImagesCounter}
          />
          <CTABlock initValues={data.cta} />
        </PageContentLayout>
      )}
    </PageLayout>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getPortfolioPageData], () =>
    adminPortfolioService.getPageData()
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

export default PortfolioPage;
