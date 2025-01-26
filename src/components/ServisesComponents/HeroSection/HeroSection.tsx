import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import * as Styled from "./HeroSection.styled";
import { IHeroSectionProps } from "../../../types/Services.types";
import { ActionButton } from "../../ActionButton/ActionButton";

interface IProps {
  data?: IHeroSectionProps;
  portfolioCategory: string;
  className?: string;
}
const HeroSection: React.FC<IProps> = ({
  data,
  className,
  portfolioCategory,
}) => {
  const router = useRouter();
  return (
    <Styled.HeroSectionContainer className={className}>
      <Styled.HeroSectionContent>
        <Styled.HeroSectionText>
          {data?.title && (
            <Styled.Title dangerouslySetInnerHTML={{ __html: data?.title }} />
          )}
          {data?.text && (
            <Styled.Text dangerouslySetInnerHTML={{ __html: data?.text }} />
          )}
        </Styled.HeroSectionText>
        <Styled.HeroSectionBtnContainer>
          <ActionButton
            handleAction={() =>
              router.push(`/portfolio?category=${portfolioCategory}`)
            }
            buttonText={data?.button}
            className="services-hero"
          />
        </Styled.HeroSectionBtnContainer>
      </Styled.HeroSectionContent>
      <Styled.HeroSectionImageContainer className={className}>
        <Image
          alt="Hero section image"
          src={data?.image?.url ?? ""}
          layout="fill"
          objectFit="contain"
          priority
          unoptimized
          quality={100}
        />
      </Styled.HeroSectionImageContainer>
    </Styled.HeroSectionContainer>
  );
};

HeroSection.displayName = "HeroSection";

export default HeroSection;
