import React, { Dispatch, SetStateAction } from "react";
import { useMediaQuery } from "@mui/material";

import { Loader } from "../../../../components/Loader";
import * as Styled from "./case-studies-projects.styled";
import * as PageStyled from "../../styles";

import {
  IPortfolioReview,
  IPortfolioReviewsDataResponse,
} from "../../../../types/Admin/AdminPortfolio.types";
import { PortfolioProjectComponent } from "../case-studies-project-item";
import { ShowMoreButton } from "../case-studies-show-more-button";

interface IProps {
  setIsReviewLoading: Dispatch<SetStateAction<boolean>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  selectedIndustries: string[];
  isLoading: boolean;
  reviewsIsLoading: boolean;
  isReviewLoading: boolean;
  isFirstLoad: boolean;
  hasNoMatchesWarning: boolean;
  searchTrigger: string;
  category: string;
  reviews: IPortfolioReview[];
  reviewsData?: IPortfolioReviewsDataResponse;
  loadedImagesCounter: () => void;
  currentPage: number;
}

export const PortfolioProjects = ({
  setIsReviewLoading,
  setCurrentPage,
  isLoading,
  reviewsIsLoading,
  isReviewLoading,
  hasNoMatchesWarning,
  isFirstLoad,
  searchTrigger,
  category,
  reviews,
  reviewsData,
  currentPage,
  loadedImagesCounter,
}: IProps) => {
  const isPortrait = useMediaQuery("(orientation: portrait)");

  const changePage = () => {
    setIsReviewLoading(true);
    setCurrentPage((prev: number) => prev + 1);
  };
  return (
    <Styled.PortfolioProjectsWrapper id="portfolio-wrapper">
      <Loader
        isPortrait={isPortrait}
        isContentLoader={true}
        active={
          (isLoading || reviewsIsLoading || isReviewLoading) &&
          !isFirstLoad &&
          reviews.length === 0
        }
      >
        {reviews.length > 0 ? (
          <>
            {hasNoMatchesWarning && (
              <Styled.PortfolioFilterWarning>
                <div className="sorry-message">
                  {`Sorry, there are no matches in the category chosen, but we found “${searchTrigger}” in the other categories`}
                </div>
              </Styled.PortfolioFilterWarning>
            )}
            <PageStyled.PortfolioProjectsContainer>
              {reviews.map((project, index) => (
                <PortfolioProjectComponent
                  key={project._id + index.toString()}
                  project={project}
                  loadedImagesCounter={loadedImagesCounter}
                />
              ))}
            </PageStyled.PortfolioProjectsContainer>
            <Styled.PaginationWrapper>
              {!reviewsIsLoading &&
              !isReviewLoading &&
              reviewsData &&
              currentPage >= reviewsData?.totalPages ? (
                <Styled.YouReachedTheEnd>
                  You’ve reached the end of the list
                </Styled.YouReachedTheEnd>
              ) : (
                <ShowMoreButton
                  text="More projects"
                  onClick={changePage}
                  isLoading={reviewsIsLoading || isReviewLoading}
                />
              )}
            </Styled.PaginationWrapper>
          </>
        ) : !reviewsIsLoading && category ? (
          <Styled.PortfolioSearchWarning>
            <div className="sorry-message">
              Sorry, there are no results in “
              <span className="category-name">{category}</span>”
            </div>
            <div>Recommendations:</div>
            <ul>
              <li>Make sure the category is correct.</li>
              <li>Try checking out different industry options.</li>
            </ul>
          </Styled.PortfolioSearchWarning>
        ) : !reviewsIsLoading && !reviewsData?.reviews?.length ? (
          <Styled.PortfolioSearchWarning>
            <div className="sorry-message">
              <span>
                {'Sorry, no results were found for "'}
                <span className="search-word">{searchTrigger}</span>
                {'"'}
              </span>
            </div>
            <div className="sorry-recommendations">
              <div>Recommendations:</div>
              <ul>
                <li>Make sure all the words are properly spelled.</li>
                <li>Try using other keywords.</li>
              </ul>
            </div>
          </Styled.PortfolioSearchWarning>
        ) : (
          <Styled.PortfolioTemplateBlock />
        )}
      </Loader>
    </Styled.PortfolioProjectsWrapper>
  );
};
