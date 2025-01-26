import React from "react";
import * as Styled from "../../../../styles/AdminPage";

interface ILogoProps {
  image: any;
  deleteLogo: () => void;
}

const deleteFunc = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  deleteLogo: () => void
) => {
  e.preventDefault();
  deleteLogo();
};

const LogoElement = ({ image, deleteLogo }: ILogoProps) => {
  const deleteFunction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    deleteFunc(e, deleteLogo);

  return (
    <Styled.AdminLogoElement>
      <Styled.AdminDeleteLogo onClick={deleteFunction}>
        &#10005;
      </Styled.AdminDeleteLogo>
      <div>
        <Styled.LogoImage src={image.url} />
      </div>
    </Styled.AdminLogoElement>
  );
};

export default LogoElement;
