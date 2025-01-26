import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import * as Styled from "../../styles/WebAuditService/WhichProblem.styled";

import { IServiceWebAudit } from "../../types/Admin/Response.types";

import { queryKeys } from "../../consts/queryKeys";

import { SplitBrackets } from "../../utils/splitBrackets";

const WhichProblemBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWebAudit>([
    queryKeys.getServiceWebAuditPage,
  ])?.problemsAuditSolve;

  return (
    <Styled.Wrapper>
      <Styled.TextContainer>
        <Styled.Subtitle>
          <SplitBrackets text={data?.subtitle} />
        </Styled.Subtitle>
        <Styled.Text>
          <SplitBrackets text={data?.text} />
        </Styled.Text>
      </Styled.TextContainer>
      <Styled.ProblemsContainer>
        {data?.problems.map((problem, idx) => (
          <Styled.ProblemContainer key={`${problem}${idx}`}>
            <svg
              width="6"
              height="23"
              viewBox="0 0 6 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.3"
                y="0.5"
                width="6"
                height="22"
                fill="#8F8E93"
              />
              <rect y="0.5" width="6" height="14.6667" fill="#8F8E93" />
            </svg>
            <span>{problem}</span>
          </Styled.ProblemContainer>
        ))}
      </Styled.ProblemsContainer>
    </Styled.Wrapper>
  );
};

export default WhichProblemBlock;
