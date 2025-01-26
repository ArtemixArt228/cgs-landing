import React, { useMemo } from "react";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useMediaQuery } from "@mui/material";
import parse from "html-react-parser";

import { GetEstimationButton } from "../../../contact-us/components";

import * as Styled from "./cta.styled";

import { cvService } from "../../services";

import { useDownloadCv } from "../../hooks";

import { ICvPageData } from "../../types";

import { createParsingOptions } from "../../utils";

import { queryKeys } from "../../../../consts/queryKeys";

import Loading from "public/CareerDecorations/loading.svg";

export const CTASection = ({ name = "" }: { name?: string }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { data }: UseQueryResult<ICvPageData> = useQuery(
    [queryKeys.getCvPage],
    () => cvService.getCvPage()
  );

  const parsingOptions = useMemo(
    () => createParsingOptions(isMobile),
    [isMobile]
  );
  const { downloadFile, isLoading } = useDownloadCv(name);

  if (!data) return null;

  return (
    <Styled.CTAWrapper className="cv-cta-wrapper">
      <Styled.CTATitle>
        {data.cta && parse(data.cta.title, parsingOptions)}
      </Styled.CTATitle>

      <Styled.CTAButtonWrapper>
        <GetEstimationButton
          buttonLink={data.cta.buttonLink}
          buttonText={data.cta.buttonText}
          buttonClassName="homepage"
          id="cv-cta"
        />
        <Styled.PDFWrapper>
          {!isLoading ? (
            <Styled.ListItemPDF
              className="download-text"
              onClick={() => downloadFile()}
            >
              Get CV as PDF
            </Styled.ListItemPDF>
          ) : (
            <Styled.Loader src={Loading.src} className="cv" alt="pdf loader" />
          )}
        </Styled.PDFWrapper>
      </Styled.CTAButtonWrapper>
    </Styled.CTAWrapper>
  );
};
