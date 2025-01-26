import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { Subtitle } from "../../styles/DbService/Layout";
import * as Styled from "../../styles/DbService/ExpertiseBlock.styled";
import { IServiceDb } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";
import serverIcon from "../../../public/DbService/illServers.svg";
import dbIcon from "../../../public/DbService/illDatabase.svg";
import { handleRandomOffset } from "../../utils/getRandomAnimationOffset";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

const ExpertiseBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceDb>([
    queryKeys.getServiceDbPage,
  ])?.expertiseBlock;

  return (
    <Styled.Container>
      <Subtitle>{data?.subtitle}</Subtitle>
      <MobileInfiniteText title={data?.subtitle} />
      <Styled.ContentWrapper>
        <Styled.TextBlock>
          <Styled.Icon
            src={serverIcon.src}
            alt="serverIcon"
            xOffset={handleRandomOffset()}
          />
          <Styled.TextContent>
            <Styled.Subtitle>{data?.servers.subtitle}</Styled.Subtitle>
            <SplitBrackets text={data?.servers.text} />
          </Styled.TextContent>
        </Styled.TextBlock>
        <Styled.TextBlock>
          <Styled.Icon
            src={dbIcon.src}
            alt="dbIcon"
            xOffset={handleRandomOffset()}
          />
          <Styled.TextContent>
            <Styled.Subtitle>{data?.databases.subtitle}</Styled.Subtitle>
            <SplitBrackets text={data?.databases.text} />
          </Styled.TextContent>
        </Styled.TextBlock>
      </Styled.ContentWrapper>
    </Styled.Container>
  );
};

export default ExpertiseBlock;
