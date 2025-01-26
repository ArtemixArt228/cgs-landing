import styled from "styled-components";
import themes from "../../../../../../utils/themes";

export const Achievements = styled.div`
  margin: 24px 0 0 0;
  padding: 0;

  @media screen and ${themes.primary.media.minMobile} {
    flex: 1;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 32px;
  }
`;

export const AchievementsTitle = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 18px;
  text-align: center;
  line-height: normal;

  @media ${themes.primary.media.minMobile} {
    font-size: 22px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 29px;
  }
`;

export const AchievementsListWrapper = styled.div`
  @media ${themes.primary.media.minMobile} {
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;

export const AchievementsList = styled.ul`
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  @media ${themes.primary.media.minMobile} {
    margin-top: 8px;
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;

export const AchievementsListItem = styled.li`
  position: relative;
  list-style: none;
  display: flex;
  align-items: center;
`;

export const AchievementsListPintWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: -20px;

  @media ${themes.primary.media.minMobile} {
    left: -40px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    left: -53.33px;
  }
`;

export const AchievementsListPintLine = styled.div`
  width: 20px;
  border-bottom: 2px solid ${themes.primary.colors.comment};

  @media ${themes.primary.media.minMobile} {
    width: 40px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: 54px;
  }
`;

export const AchievementsListPintDiamond = styled.div`
  border: 1px solid #000;
  background: linear-gradient(90deg, #d6ffbb 13.67%, #5869dd 90.39%);
  box-shadow: 7px -3px 0 0 ${themes.primary.colors.primary};
  transform: rotate(45deg);
  width: 20px;
  height: 20px;

  @media ${themes.primary.media.minMobile} {
    width: 25px;
    height: 25px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: 33px;
    height: 33px;
  }
`;

export const AchievementText = styled.p`
  color: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-style: normal;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: normal;
  padding-left: 54px;
  font-size: 16px;

  @media ${themes.primary.media.minMobile} {
    padding-left: 60px;
    font-size: 18px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-left: 68px;
    font-size: 24px;
  }
`;
