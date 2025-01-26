import Image from "next/image";
import React from "react";

import * as Styled from "./TechBlock.styled";
import * as GeneralStyles from "../../../styles/Services.styled";
import { ITechSectionProps } from "../../../types/Services.types";

interface IProps {
  data?: ITechSectionProps;
  className?: string;
}
const TechBlock: React.FC<IProps> = ({ data }) => {
  return (
    <GeneralStyles.SectionWrapper className="tech">
      <Styled.TechBlockWrapper>
        <Styled.TechBlockContainerWrapper>
          <Styled.TechBlockContainer>
            <Styled.TextAndImageContainer>
              <Styled.ImageContainer>
                <Image
                  src={data?.image?.url ?? ""}
                  alt="Technologies image"
                  layout="fill"
                />
              </Styled.ImageContainer>
              <h2>{data?.title}</h2>
              <p>{data?.text}</p>
            </Styled.TextAndImageContainer>
            <Styled.TechItemsContainer>
              {data?.technologies.map((item, idx) => (
                <Styled.TechItem key={idx}>
                  <Styled.Icon className={item.title.toLowerCase()}>
                    <Image
                      src={item.image?.url ?? ""}
                      alt="Technology Item"
                      layout="fill"
                    />
                  </Styled.Icon>
                  <div>{item.title}</div>
                </Styled.TechItem>
              ))}
            </Styled.TechItemsContainer>
          </Styled.TechBlockContainer>
        </Styled.TechBlockContainerWrapper>
      </Styled.TechBlockWrapper>
    </GeneralStyles.SectionWrapper>
  );
};

export default TechBlock;
