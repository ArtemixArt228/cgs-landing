import React from "react";
import Image from "next/image";

import * as Styled from "../../../styles/AdminPage";

import unchangeableImg from "../../../../public/Something-You-Cant-Change.webp";

const PhotoBlockStub = () => {
  return (
    <Styled.AdminPhotoBlock>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <p
          style={{
            paddingInline: "18px",
            paddingBlock: "8px",
            position: "absolute",
            zIndex: "9",
            color: "tomato",
            textAlign: "center",
            fontSize: "16px",
            margin: "0",
          }}
        >
          Animated image cannot be changed
        </p>
        <Image
          src={unchangeableImg}
          layout="fill"
          objectFit="cover"
          alt="unchangeable img"
        />
      </div>
    </Styled.AdminPhotoBlock>
  );
};

export default PhotoBlockStub;
