import React, { useCallback, useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import LinedText from "../BlockchainService/LinedText";

import * as Styled from "../../styles/UxUiService/DesignBlock.styled";
import { Separator } from "../../styles/MobileAuditService/Common.styled";

import { IUxUiInterface } from "../../types/Admin/Response.types";
import { IServicesShowcaseProps } from "../../types/Services.types";

import { queryKeys } from "../../consts/queryKeys";

import { useWindowDimension } from "../../hooks/useWindowDimension";
import { useOnScreen } from "../../hooks/useOnScreen";
import { useIsClient } from "../../hooks/useIsClient";

const DesignBlock = ({ withoutShowcase }: IServicesShowcaseProps) => {
  const queryClient = useQueryClient();
  const { width } = useWindowDimension();
  const isClient = useIsClient();
  const [gradientAngle, setGradientAngle] = useState<string>("50%");

  const data = queryClient.getQueryData<IUxUiInterface>([
    queryKeys.getServiceUxUiPage,
  ])?.designBlock;

  const mouseMoveListener = useCallback(({ pageX }: MouseEvent) => {
    const windowWidth = window.innerWidth;
    const mouseXpercentage = Math.round((pageX / windowWidth) * 100);
    setGradientAngle(`${mouseXpercentage}%`);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveListener, false);
    return () => window.removeEventListener("mousemove", mouseMoveListener);
  }, [mouseMoveListener]);

  const arrayOfGradients =
    width && width >= 769
      ? [{ firstColor: "#D6FFBB", secondColor: "#C1E6C0" }]
      : [
          { firstColor: "#C7ECC0", secondColor: "#B7D9C4" },
          {
            firstColor: "#B7D9C4",
            secondColor: "#9CBACC",
          },
          {
            firstColor: "#9CBACC",
            secondColor: "#89A3D1",
          },
        ];

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  return (
    <Styled.Container
      className={withoutShowcase ? "withoutShowcase" : undefined}
    >
      <Styled.Title>{data?.title}</Styled.Title>
      <Styled.BlockWrapper ref={elRef}>
        {width &&
          isClient &&
          arrayOfGradients.map((el, idx) => (
            <Styled.StyledLine
              key={el.firstColor}
              grad1={el.firstColor}
              grad2={el.secondColor}
              angle={gradientAngle}
              ind={idx}
              className={isScrolled ? "scrolled" : undefined}
            />
          ))}
        {width && isClient && (
          <>
            <Styled.TopSteps>
              {width &&
                data?.textSubBlock
                  .slice(0, 3)
                  .map((el, idx) => (
                    <LinedText
                      position="top"
                      text={el}
                      key={idx}
                      wrapperHeight={70}
                      ind={idx}
                      isScrolled={isScrolled}
                    />
                  ))}
            </Styled.TopSteps>
            <Styled.BottomSteps>
              {data?.textSubBlock.slice(3).map((el, idx) => (
                <LinedText
                  text={el}
                  key={idx + 3}
                  position="bottom"
                  wrapperHeight={70}
                  ind={idx + 3}
                  isScrolled={isScrolled}
                />
              ))}
            </Styled.BottomSteps>
          </>
        )}
      </Styled.BlockWrapper>
      {withoutShowcase && <Separator className="bottom" />}
    </Styled.Container>
  );
};

export default DesignBlock;
