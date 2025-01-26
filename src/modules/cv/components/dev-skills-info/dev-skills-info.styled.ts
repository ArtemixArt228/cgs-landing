import styled from "styled-components";
import themes from "../../../../utils/themes";

export const SkillsContainer = styled.div`
  position: relative;
  margin-top: 90px;
  background-color: ${themes.primary.colors.blogBackground};

  @media ${themes.primary.media.minMobile} {
    margin-top: 115px;
    padding-bottom: 40px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 149px;
  }
`;

export const Title = styled.h2`
  font-family: ${themes.primary.font.family.namu};
  font-size: 24px;
  line-height: 2.33;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 0 -20px;
  width: 100vw;
  height: 56px;
  border-top: 1px solid ${themes.primary.colors.darkGrey};
  background: linear-gradient(
      90deg,
      rgba(214, 255, 187, 0.3) 0%,
      rgba(88, 105, 221, 0.3) 100%
    ),
    #f1efed;
  @media screen and ${themes.primary.media.minMobile} {
    height: auto;
    font-size: 40px;
    line-height: 140%;
    text-align: left;
    border: none;
    background: transparent;
    margin-left: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 54px;
  }
`;

export const SkillsCardWrapper = styled.div`
  position: relative;
  &::after {
    @media (max-width: 768px) {
      content: "";
      position: absolute;
      bottom: 0;
      left: -20px;
      width: 100vw;
      height: 1px;
      background-color: ${themes.primary.colors.darkGrey};
    }
  }

  @media (min-width: 769px) {
    margin-top: 24px;
    margin-left: -51px;
    width: 100vw;
    display: flex;
    border-bottom: 1px solid ${themes.primary.colors.darkGrey};
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 32px;
    margin-left: -68px;
  }
`;

export const TopBgImageContainer = styled.div`
  width: 690px;
  height: 241px;
  position: absolute;
  z-index: 0;
  left: -60px;
  top: -78px;

  @media screen and ${themes.primary.media.maxMobile} {
    z-index: -2;
    left: -28px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 49vw;
    height: 17.1vw;
    left: -4.3vw;
    top: -5.5vw;
  }
`;

export const BottomBgImageContainer = styled.div`
  width: 625px;
  height: 414px;
  transform: scale(1.07) rotateZ(-2deg);
  position: absolute;
  bottom: -240px;
  right: 0;
  z-index: -2;

  @media screen and ${themes.primary.media.minMobile} {
    bottom: -230px;
    right: -100px;
    z-index: 1;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 43vw;
    height: 28.8vw;
    bottom: -13vw;
    right: -7vw;
  }
`;
