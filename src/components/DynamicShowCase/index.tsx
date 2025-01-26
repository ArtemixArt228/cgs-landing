import React, { useRef } from "react";
import dynamic from "next/dynamic";

import { ComponentLoader } from "../Loader";

import * as Styled from "./DynamicShowCase.styled";
import { useDynamicLoading } from "../../hooks/useDynamicLoading";
import { IShowCaseProps } from "../../types/Services.types";

const ShowCase = dynamic(() => import("../../components/ShowCase"), {
  loading: () => (
    <ComponentLoader active>
      <Styled.SlideContainer />
    </ComponentLoader>
  ),
});

const DynamicShowCase = ({ projects }: IShowCaseProps) => {
  const showCaseRef = useRef(null);
  const isShowCaseVisible = useDynamicLoading(showCaseRef);

  return isShowCaseVisible ? (
    <ShowCase projects={projects} />
  ) : (
    <Styled.SlideContainer ref={showCaseRef} />
  );
};

export default DynamicShowCase;
