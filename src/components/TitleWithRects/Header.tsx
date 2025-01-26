import { useMediaQuery } from "@mui/material";
import React, { memo } from "react";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";
import * as Styled from "./Header.styled";
import Image from "next/future/image";

import rectOne from "/public/rect-1.svg";
import rectTwo from "/public/rect-2.svg";
import rectThree from "/public/rect-3.svg";

interface IProps {
  title?: string;
  mobileTitle?: string;
  style?: React.CSSProperties;
  className?: string;
  hasBackgroundFrame?: boolean;
  mobileScreen?: number;
}

const Header = ({
  title,
  mobileTitle,
  style,
  className,
  hasBackgroundFrame,
  mobileScreen = 767,
}: IProps) => {
  const isMobile = useMediaQuery(`(max-width:${mobileScreen}px)`);
  const isDesktop = useMediaQuery("(min-width:1100px)");
  const isMoreThan1800 = useMediaQuery("(min-width:1800px)");

  if (isMobile) {
    return (
      <MobileInfiniteText
        title={(mobileTitle || title || "").toUpperCase()}
        className={className}
        style={{ ...style }}
      />
    );
  }

  if (!isMobile) {
    return (
      <Styled.Header className={className}>
        <Styled.HeaderRectsWrapper className={className}>
          {(isDesktop || !hasBackgroundFrame) && (
            <>
              <Image
                width={isMoreThan1800 ? "26px" : undefined}
                height={isMoreThan1800 ? "26px" : undefined}
                src={rectThree}
                alt={"r3"}
              />
              <Image
                width={isMoreThan1800 ? "20px" : undefined}
                height={isMoreThan1800 ? "20px" : undefined}
                src={rectTwo}
                alt={"r2"}
              />
            </>
          )}
          <Image
            width={isMoreThan1800 ? "26px" : undefined}
            height={isMoreThan1800 ? "26px" : undefined}
            src={rectOne}
            alt={"r1"}
          />
        </Styled.HeaderRectsWrapper>
        <Styled.HeaderText
          hasBackgroundFrame={hasBackgroundFrame}
          className={className}
        >
          {title}
        </Styled.HeaderText>
        <Styled.HeaderRectsWrapper className={className}>
          <Image
            width={isMoreThan1800 ? "26px" : undefined}
            height={isMoreThan1800 ? "26px" : undefined}
            src={rectOne}
            alt={"r1"}
          />
          {(isDesktop || !hasBackgroundFrame) && (
            <>
              <Image
                width={isMoreThan1800 ? "20px" : undefined}
                height={isMoreThan1800 ? "20px" : undefined}
                src={rectTwo}
                alt={"r2"}
              />
              <Image
                width={isMoreThan1800 ? "26px" : undefined}
                height={isMoreThan1800 ? "26px" : undefined}
                src={rectThree}
                alt={"r3"}
              />
            </>
          )}
        </Styled.HeaderRectsWrapper>
      </Styled.Header>
    );
  }

  return null;
};

export default memo(Header);
