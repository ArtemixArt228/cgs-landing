import React from "react";

import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

import { Subtitle } from "../../styles/MobileService/Layout";
import * as Styles from "../../styles/Services.styled";

import { IWorthBlock } from "../../types/Admin/Response.types";

import { handleRandomOffset } from "../../utils/getRandomAnimationOffset";
import { SplitBrackets } from "../../utils/splitBrackets";

import crystal from "../../../public/MobileSevice/worthIt/crystal.svg";
import cube from "../../../public/MobileSevice/worthIt/cube.svg";
import cylinder from "../../../public/MobileSevice/worthIt/cylinder.svg";

const PerksOfCoopComponent = ({
  data,
  className,
}: {
  data: IWorthBlock;
  className?: string;
}) => {
  const titleIllustration = [crystal, cube, cylinder];

  const { subtitle, ...blocks } = { ...data };

  const dataWealth = data?.hasOwnProperty("textBlock")
    ? data.textBlock
    : blocks;

  return (
    <Styles.Container className={className}>
      <Subtitle className={`perksTitle ${className}`}>
        {data?.subtitle}
      </Subtitle>
      <MobileInfiniteText withoutMargin title={data?.subtitle} />
      <Styles.ContentLayout className={className}>
        {dataWealth &&
          Object.entries(dataWealth)
            .splice(0, 3)
            .map((el: any, idx) => (
              <Styles.WorthBlock
                className={`card ${className}`}
                key={`${el[0]} ${idx}`}
                ind={idx}
              >
                <Styles.WorthCardInfo>
                  <Styles.WorthCardTitle className={className}>
                    <Styles.Icon
                      className={"iconCard"}
                      src={titleIllustration[idx].src}
                      alt="worth it title image"
                      xOffset={handleRandomOffset()}
                    />
                    <p>{el[1].subtitle}</p>
                  </Styles.WorthCardTitle>
                  <Styles.WorthText className={className}>
                    <SplitBrackets text={el[1].text} />
                  </Styles.WorthText>
                  <Styles.ShadowContainer>
                    <Styles.BlackShadow />
                  </Styles.ShadowContainer>
                </Styles.WorthCardInfo>
              </Styles.WorthBlock>
            ))}
      </Styles.ContentLayout>
    </Styles.Container>
  );
};

export default PerksOfCoopComponent;
