import styled from "styled-components";
import themes from "../../../../utils/themes";
import articleIntro from "../../../../../public/BlogDecorations/Formatting/articleIntro.svg";

export const Wrapper = styled.section`
  width: 100%;
`;

export const Description = styled.p`
  margin: 0;
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.smallBlogDescription};
  line-height: 1.5;
  letter-spacing: 0.2px;
  overflow-wrap: anywhere;
  color: ${themes.primary.colors.emperor};

  @media ${themes.primary.media.min1440} {
    font-size: 16px;
  }
  @media ${themes.primary.media.min4K} {
    font-size: 20px;
  }

  p:has(+ div),
  div:has(+ h1),
  div:has(+ h2),
  div:has(+ h3),
  div:has(+ h4),
  div:has(+ h5),
  div:has(+ h6) {
    margin-bottom: 24px;

    @media ${themes.primary.media.min4K} {
      margin-bottom: 32px;
    }
  }

  p + h2,
  img + h2,
  ol + h2,
  ul + h2 {
    margin-top: 48px;

    @media ${themes.primary.media.min4K} {
      margin-top: 64px;
    }
  }

  img {
    width: 100%;
  }

  img:has(+ figcaption) {
    margin-bottom: 0;
  }

  & > div > figure {
    position: relative;
    margin: 0;

    & > iframe {
      position: absolute;
      height: 100%;
      top: 0;
    }
  }

  a {
    position: relative;
    display: inline-block;
  }

  a::after {
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    height: 1px;
    width: 100%;
    background-color: ${themes.primary.colors.darkBlue};
    opacity: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: opacity 0.35s, transform 0.35s;
    content: "";
  }

  a:hover::after {
    opacity: 1;
    transform: scaleX(1);
  }

  & iframe {
    border-color: transparent;
  }

  & .__se__format__range_article_intro_custom {
    position: relative;
    border: 0.6px solid rgba(0, 0, 0, 0.25);
    padding: 10px 25px 10px 45px;
    font-family: ${themes.primary.font.family.openSans};
    font-weight: ${themes.primary.font.weight.semiBold};
    font-size: 18px;
    color: ${themes.primary.colors.blogArticleText};

    &::before {
      position: absolute;
      top: 16px;
      left: 16px;
      content: "";
      width: 17px;
      height: 17px;
      background-image: url(${articleIntro.src});
      background-repeat: no-repeat;
    }
  }

  & figcaption {
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: 0.3px;
    text-align: center;

    @media ${themes.primary.media.min1440} {
      font-size: ${themes.primary.font.size.smallBlogDescription};
    }
    @media ${themes.primary.media.min4K} {
      font-size: ${themes.primary.font.size.articleContentText};
    }
  }

  & blockquote {
    margin: 0;
    border-left: 4px solid ${themes.primary.colors.darkBlue};
    color: ${themes.primary.colors.blogArticleText};
    padding-left: 10px;
    font-size: ${themes.primary.font.size.smallestBlogTitle};
    font-style: italic;
    font-weight: ${themes.primary.font.weight.heavy};
    line-height: 1.6;
    display: flex;

    @media ${themes.primary.media.min1440} {
      font-size: 16px;
    }
    @media ${themes.primary.media.min4K} {
      font-size: ${themes.primary.font.size.secondaryArticleDescription};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    scroll-margin-top: 100px;
    color: ${themes.primary.colors.primary};
    line-height: 1.25;
    //font-weight: ${themes.primary.font.weight.heavy};

    & span {
      font-family: ${themes.primary.font.family.namu};
      //font-weight: ${themes.primary.font.weight.heavy};
      margin-right: 14px;
    }
  }

  & .__se__float-left {
    float: left;
    margin-right: 2em;
    margin-bottom: 1em;
  }

  & .__se__float-right {
    float: right;
    margin-left: 2em;
    margin-bottom: 1em;
  }

  h1 {
    font-size: ${themes.primary.font.size.articleTitleMob};
    line-height: 1.2;
    letter-spacing: -0.2px;
    margin: 0 0 18px 0;

    @media ${themes.primary.media.min768Mobile} {
      font-size: 42px;
    }

    @media ${themes.primary.media.min1440} {
      font-size: 52px;
    }

    @media ${themes.primary.media.min4K} {
      font-size: 68px;
    }
  }
  &.common-headings {
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0 0 18px 0;

      @media ${themes.primary.media.maxMobile} {
        font-size: 24px;
      }
      @media ${themes.primary.media.min768Mobile} {
        font-size: 28px;
      }
      @media ${themes.primary.media.min1440} {
        font-size: 30px;
      }
      @media ${themes.primary.media.min4K} {
        font-size: 40px;
      }
    }

    h3 {
      margin: 48px 0 18px 0;

      @media ${themes.primary.media.min4K} {
        margin: 64px 0 24px 0;
      }
    }

    h4 {
      margin: 39px 0 12px 0;

      @media ${themes.primary.media.min4K} {
        margin: 52px 0 16px 0;
      }
    }

    h5 {
      margin: 36px 0 9px 0;

      @media ${themes.primary.media.min4K} {
        margin: 48px 0 12px 0;
      }
    }

    h6 {
      margin: 33px 0 6px 0;

      @media ${themes.primary.media.min4K} {
        margin: 44px 0 8px 0;
      }
    }
  }

  &.different-headings {
    h2 {
      font-size: 30px;
      margin: 0 0 18px 0;

      @media ${themes.primary.media.min4K} {
        font-size: 40px;
        margin: 0 0 24px 0;
      }
    }
    h3 {
      font-size: 27px;
      margin: 48px 0 18px 0;
      @media ${themes.primary.media.min4K} {
        font-size: 36px;
        margin: 64px 0 24px 0;
      }
    }
    h4 {
      font-size: 24px;
      margin: 39px 0 12px 0;
      @media ${themes.primary.media.min4K} {
        font-size: 32px;
        margin: 52px 0 16px 0;
      }
    }
    h5 {
      font-size: 18px;
      margin: 36px 0 9px 0;

      @media ${themes.primary.media.min1440} {
        font-size: 20px;
      }
      @media ${themes.primary.media.min4K} {
        font-size: 28px;
        margin: 48px 0 12px 0;
      }
    }
    h6 {
      font-size: 15px;
      margin: 33px 0 6px 0;

      @media ${themes.primary.media.min1440} {
        font-size: 17px;
      }
      @media ${themes.primary.media.min4K} {
        font-size: 24px;
        margin: 44px 0 8px 0;
      }
    }
  }

  @media ${themes.primary.media.minTablet} {
    & > p:first-child {
      margin-bottom: 50px;
    }

    & > h2:nth-child(2) {
      margin-top: 10px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    h2,
    h3,
    h4,
    h5,
    h6 {
      & span {
        font-family: ${themes.primary.font.family.namu};
        margin-right: 20px;
      }
    }
    li {
      font-size: 20px;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    p {
      margin-block: 0 0.875rem;
      strong {
        display: inline-block;
        margin-top: 12px;
      }
    }
    & > p:first-child strong {
      margin-top: 8px;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    & > p strong {
      margin-top: 0;
    }

    & > h2,
    h3,
    h4,
    h5,
    h6,
    & > h2:first-child,
    h3:first-child,
    h4:first-child,
    h5:first-child,
    h6:first-child {
      span {
        margin-right: 5px;
      }
    }

    & .se-video-container {
      width: 100% !important;
      clear: both;
    }
  }
`;
