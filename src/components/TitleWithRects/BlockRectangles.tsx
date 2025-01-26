import React, { FC } from "react";
import Image from "next/future/image";
import * as Styled from "./Header.styled";
import rectone from "/public/rect-1.svg";
import rectTwo from "/public/rect-2.svg";
import rectThree from "/public/rect-3.svg";

interface IBlockRectProps {
  className?: string;
}

const BlockRectangles: FC<IBlockRectProps> = ({ className }) => {
  return (
    <Styled.RectsWrapper className={className ?? ""}>
      <Image src={rectone} alt={"rectOne"} />
      <Image src={rectTwo} alt={"rectTwo"} />
      <Image src={rectThree} width={10} height={10} alt={"rectTree"} />
    </Styled.RectsWrapper>
  );
};

export default BlockRectangles;
