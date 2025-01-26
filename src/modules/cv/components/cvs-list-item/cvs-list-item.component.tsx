import React, { useRef, useState } from "react";

import ButtonArrow from "../../../../utils/ButtonArrow";

import * as Styled from "./cvs-list-item.styled";

import { useDownloadCv } from "../../hooks";

import { CvData } from "../../types";

import Loading from "public/CareerDecorations/loading.svg";

interface IListItemProps {
  item: CvData;
  i: number;
}

export const ListItem = ({ item, i }: IListItemProps) => {
  const [onHover, setOnHover] = useState(false);
  const [linkHover, setLinkHover] = useState(false);

  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const { downloadFile, isLoading } = useDownloadCv(item.personal.name);

  const handleClick = async () => {
    if (linkRef.current) {
      await downloadFile(linkRef.current.href);
    }
  };

  return (
    <Styled.ListItemWrapper
      key={i}
      onMouseMove={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <Styled.ListItemTitle
        href={`/cv/${item.personal.name.toLowerCase().replace(/\s+/g, "-")}-${
          item._id
        }`}
        ref={linkRef}
      >
        <Styled.ListItemName onHover={onHover}>
          {item.personal.name}
        </Styled.ListItemName>
        <Styled.ListItemLink
          onMouseMove={() => setLinkHover(true)}
          onMouseLeave={() => setLinkHover(false)}
          rel="noreferrer"
          linkHover={linkHover}
        >
          <p>link</p>
          <Styled.ListItemArrowContainer className="cv">
            <ButtonArrow />
          </Styled.ListItemArrowContainer>
        </Styled.ListItemLink>
      </Styled.ListItemTitle>
      <Styled.ListItemActions>
        <Styled.ListItemPosition>{item.personal.role}</Styled.ListItemPosition>
        {!isLoading ? (
          <Styled.ListItemPDF onClick={handleClick}>
            export as PDF
          </Styled.ListItemPDF>
        ) : (
          <Styled.Loader src={Loading.src} className="cv" alt="pdf loader" />
        )}
      </Styled.ListItemActions>
    </Styled.ListItemWrapper>
  );
};
