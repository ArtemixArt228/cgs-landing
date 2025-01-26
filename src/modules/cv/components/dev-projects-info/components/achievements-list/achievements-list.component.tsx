import React from "react";

import * as Styled from "./achievements-list.styled";

interface IAchievementsListProps {
  achievements: string[];
}

export const AchievementsList = ({ achievements }: IAchievementsListProps) => {
  return (
    <>
      <Styled.Achievements>
        <Styled.AchievementsTitle>Achievements:</Styled.AchievementsTitle>
        <Styled.AchievementsListWrapper>
          <Styled.AchievementsList>
            {achievements.slice(0, 6).map((e, idx) => (
              <Styled.AchievementsListItem key={idx}>
                <Styled.AchievementsListPintWrapper>
                  <Styled.AchievementsListPintLine />
                  <Styled.AchievementsListPintDiamond />
                </Styled.AchievementsListPintWrapper>
                <Styled.AchievementText>{e}</Styled.AchievementText>
              </Styled.AchievementsListItem>
            ))}
          </Styled.AchievementsList>
        </Styled.AchievementsListWrapper>
      </Styled.Achievements>
    </>
  );
};
