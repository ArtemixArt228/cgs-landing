import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import * as Styled from "./HighDemandComponent.styled";

import { queryKeys } from "../../consts/queryKeys";
import { IHomePageResponse } from "../../types/Admin/AdminHomePage.types";

const HighDemandComponent = ({ contact }: { contact?: boolean }) => {
  const queryClient = useQueryClient();

  const [isPaused, setIsPaused] = useState(false);

  const data = queryClient.getQueryData<IHomePageResponse>([
    queryKeys.getFullHomePage,
  ])?.HighDemandBlock;

  useEffect(() => {
    const togglePaused = () => setIsPaused((prevPaused) => !prevPaused);
    const timeout = setTimeout(togglePaused, isPaused ? 5000 : 2000);
    return () => clearTimeout(timeout);
  }, [isPaused]);

  return data ? (
    <Styled.Wrapper>
      <Styled.HighDemandContainer isPaused={isPaused}>
        <Styled.ImageWrapper>
          {data?.image && (
            <Image src={data.image?.url} layout={"fill"} alt="" />
          )}
        </Styled.ImageWrapper>
        {contact ? (
          <p>{data.textContact}</p>
        ) : (
          <a
            target="_blank"
            href={data.link}
            dangerouslySetInnerHTML={{ __html: data.text }}
            rel="noreferrer"
          ></a>
        )}
      </Styled.HighDemandContainer>
    </Styled.Wrapper>
  ) : null;
};

export default HighDemandComponent;
