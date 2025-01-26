import React from "react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import * as Styled from "../../../../../styles/AdminPage";
import {
  ProjectHeaderLinkContainer,
  ProjectHeaderLinkWrapper,
  ProjectsContainerArrowContainer,
  ProjectsContainerHeaderLink,
} from "../../../styles";

import edit from "/public/editIcon.svg";
import close from "/public/bigClose.svg";
import { queryKeys } from "../../../../../consts/queryKeys";
import { IPortfolioReview } from "../../../../../types/Admin/AdminPortfolio.types";
import ButtonArrow from "../../../../../utils/ButtonArrow";
import { openInNewTab } from "../../../../../utils/OpenInNewTab";

interface IReviewProps {
  review: IPortfolioReview;
  deleteFunc?: (e?: React.ChangeEvent<any>) => void;
  editTrigger?: React.Dispatch<React.SetStateAction<boolean>>;
  editFlag?: boolean;
  setCurrent?: (value: number) => void;
  idx?: number;
  onScroll: () => void;
}

export const AdminReview = ({
  review,
  deleteFunc,
  editTrigger,
  editFlag,
  setCurrent,
  idx,
  onScroll,
}: IReviewProps) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IPortfolioReview[]>([
    queryKeys.getPortfolio,
  ]);
  const editTriggerFunc = () => {
    if (setCurrent && typeof idx === "number" && editTrigger && data) {
      setCurrent(data.findIndex((rev) => rev._id === review._id));
      editTrigger((prev) => !prev);
    }
    if (editFlag) onScroll();
  };

  if (!review) return <Styled.AdminSubTitle>no reviews</Styled.AdminSubTitle>;

  return (
    <Styled.AdminPortfolioReviewFrame>
      <Styled.AdminPortfolioReviewHeader>
        <Styled.AdminPortfolioReviewHeaderTitle>
          <h4>{review.general.title}</h4>
          <p>{`// ${review.general.industry}`}</p>
        </Styled.AdminPortfolioReviewHeaderTitle>
        {review.general.NDA ? (
          <ProjectsContainerHeaderLink isProjectLink={false} isInfoCont={false}>
            <span>NDA</span>
            <ProjectsContainerArrowContainer isProjectLink={false}>
              <ButtonArrow />
            </ProjectsContainerArrowContainer>
          </ProjectsContainerHeaderLink>
        ) : (
          <ProjectHeaderLinkContainer className="case-study-project">
            {review.general.web_link && (
              <ProjectHeaderLinkWrapper
                onClick={() =>
                  !!review.general.web_link &&
                  openInNewTab(review.general.web_link)
                }
              >
                <ProjectsContainerHeaderLink isInfoCont isProjectLink>
                  <p style={{ color: "black" }}>WEB</p>
                  <ProjectsContainerArrowContainer isProjectLink>
                    <ButtonArrow />
                  </ProjectsContainerArrowContainer>
                </ProjectsContainerHeaderLink>
              </ProjectHeaderLinkWrapper>
            )}
            {review.general.ios_link && (
              <ProjectHeaderLinkWrapper
                onClick={() =>
                  !!review.general.ios_link &&
                  openInNewTab(review.general.ios_link)
                }
              >
                <ProjectsContainerHeaderLink isInfoCont isProjectLink>
                  <p style={{ color: "black" }}>iOS</p>
                  <ProjectsContainerArrowContainer isProjectLink>
                    <ButtonArrow />
                  </ProjectsContainerArrowContainer>
                </ProjectsContainerHeaderLink>
              </ProjectHeaderLinkWrapper>
            )}
            {review.general.android_link && (
              <ProjectHeaderLinkWrapper
                onClick={() =>
                  !!review.general.android_link &&
                  openInNewTab(review.general.android_link)
                }
              >
                <ProjectsContainerHeaderLink isInfoCont isProjectLink>
                  <p style={{ color: "black" }}>ANDROID</p>
                  <ProjectsContainerArrowContainer isProjectLink>
                    <ButtonArrow />
                  </ProjectsContainerArrowContainer>
                </ProjectsContainerHeaderLink>
              </ProjectHeaderLinkWrapper>
            )}
          </ProjectHeaderLinkContainer>
        )}
      </Styled.AdminPortfolioReviewHeader>
      <Styled.AdminPortfolioReviewImage>
        <Image
          src={review.imageBanner.image?.url ?? ""}
          className="image"
          alt="review image"
          height={341}
          width={652}
        />
      </Styled.AdminPortfolioReviewImage>
      <Styled.AdminPortfolioReviewTools>
        <Styled.AdminEditIcon onClick={editTriggerFunc}>
          <Image
            src={editFlag ? edit : close}
            alt="admin portfolio edit icon"
          />
        </Styled.AdminEditIcon>
        <Styled.AdminDeleteReview onClick={deleteFunc}>
          delete
        </Styled.AdminDeleteReview>
      </Styled.AdminPortfolioReviewTools>
    </Styled.AdminPortfolioReviewFrame>
  );
};
