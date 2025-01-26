import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { toast } from "react-toastify";

import { CustomToast } from "../../../../components/Admin/CustomToast";

import * as Styles from "./article-share.styled";

import { icons } from "../../../../consts";

interface IShareOn {
  className?: string;
  isArticle?: boolean;
}

export const ArticleShare = ({ className, isArticle }: IShareOn) => {
  const url = typeof window !== "undefined" && window.location.href;

  const copyURLToClipboard = async () => {
    if (url) {
      return await toast.promise(navigator.clipboard.writeText(url), {
        pending: "Pending update",
        success: "URL copied successfully 👌",
        error: "Some things went wrong 🤯",
      });
    }
  };

  return (
    <>
      <Styles.Wrapper className={className} isArticle={isArticle}>
        <Styles.IconsWrapper>
          <Styles.Text className={className}>Share</Styles.Text>

          {url && (
            <LinkedinShareButton url={url}>
              <Styles.IconBlock>
                <Styles.IconImage src={icons[0].src} />
              </Styles.IconBlock>
            </LinkedinShareButton>
          )}
          {url && (
            <FacebookShareButton url={url}>
              <Styles.IconBlock>
                <Styles.IconImage src={icons[2].src} />
              </Styles.IconBlock>
            </FacebookShareButton>
          )}
          {url && (
            <TwitterShareButton url={url}>
              <Styles.IconBlock>
                <Styles.IconImage src={icons[1].src} />
              </Styles.IconBlock>
            </TwitterShareButton>
          )}
          <Styles.IconBlock onClick={copyURLToClipboard}>
            <Styles.IconImage src={icons[3].src} />
          </Styles.IconBlock>
        </Styles.IconsWrapper>
        <CustomToast />
      </Styles.Wrapper>
    </>
  );
};
