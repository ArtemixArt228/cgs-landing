import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import * as StyledThisComp from "../../styles/Burger.styles";

import { queryKeys } from "../../consts/queryKeys";

import { SplitBrackets } from "../../utils/splitBrackets";
import ButtonShareComponent from "../Common/ButtonShare/ButtonShareComponent";
import { IHomePageResponse } from "../../types/Admin/AdminHomePage.types";

const BurgerFooter = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IHomePageResponse>([
    queryKeys.getFullHomePage,
  ])?.FooterBlock;

  return (
    <StyledThisComp.FooterWrapper>
      <StyledThisComp.MailsWrapper>
        <StyledThisComp.Mail href={`mailto:${data?.email}`}>
          <SplitBrackets text={data?.email} />
        </StyledThisComp.Mail>
        <StyledThisComp.Mail href={`mailto:${data?.hrEmail}`}>
          <SplitBrackets text={data?.hrEmail} />
        </StyledThisComp.Mail>
      </StyledThisComp.MailsWrapper>
      <StyledThisComp.FooterIconsWrapper>
        {data?.links.map((el, idx) => (
          <Link key={el.link} href={el.link} passHref>
            <StyledThisComp.FooterLink target="_blank" rel="noopener">
              <StyledThisComp.ImageWrapper>
                <Image
                  src={data.images[idx].image?.url || ""}
                  alt="burger footer icon image"
                  layout="fill"
                  objectFit="contain"
                />
              </StyledThisComp.ImageWrapper>
            </StyledThisComp.FooterLink>
          </Link>
        ))}
      </StyledThisComp.FooterIconsWrapper>
      <StyledThisComp.BottomBurgerContainer>
        <ButtonShareComponent className={"no-margin-top"} />
        <StyledThisComp.PrivacyPolicyContainer>
          <StyledThisComp.BurgerPrivacy href="/privacy-policy">
            Privacy Policy
          </StyledThisComp.BurgerPrivacy>
        </StyledThisComp.PrivacyPolicyContainer>
      </StyledThisComp.BottomBurgerContainer>
    </StyledThisComp.FooterWrapper>
  );
};

export default BurgerFooter;
