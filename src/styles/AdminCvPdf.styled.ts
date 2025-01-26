import styled from "styled-components";
import themes from "../utils/themes";

export const Wrapper = styled.div`
  padding-block: 50px;
`;

export const HeadBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: 50px;
`;

export const TextHeadBlock = styled.div`
  margin-top: 80px;
  max-width: 60%;
`;

export const Name = styled.div`
  font-size: 66px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: 400;
`;

export const Role = styled.div`
  color: #5869dd;
  font-size: 32px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: 400;
  margin-top: 8px;
`;

export const Summary = styled.div`
  font-size: 22px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: 400;
  margin-top: 16px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
`;

export const ImageBackground = styled.div`
  position: absolute;
  bottom: -8px;
  right: -8px;
  width: 400px;
  height: 400px;
  border: 1.56px solid ${themes.primary.colors.black};
  background-image: linear-gradient(
    180deg,
    white,
    white 50%,
    black 50%,
    black 100%
  );
  z-index: -10;
`;

export const InfoBlock = styled.div`
  position: relative;
  margin-top: 100px;
  display: flex;
`;

export const InfoTitle = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: 32px;
  line-height: 2.33;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  margin-top: 25px;
  width: 350px;
  height: 160px;
  border-top: 1px solid ${themes.primary.colors.darkGrey};
  border-bottom: 1px solid ${themes.primary.colors.darkGrey};
  background: linear-gradient(
      90deg,
      rgba(214, 255, 187, 0.3) 0%,
      rgba(88, 105, 221, 0.3) 100%
    ),
    #f1efed;

  p {
    margin-top: 40px;
  }
`;

export const InfoItemFlex = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  margin-left: 24px;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 0;
  max-height: 250px;
`;

export const InfoCard = styled.div`
  width: 500px;
  margin: 16px 0 0 0;
  padding-bottom: 8px;
  border-bottom: 1px solid ${themes.primary.colors.darkGrey};
`;

export const InfoCardTitle = styled.div`
  position: relative;
  color: ${themes.primary.colors.darkBlue};
  font-family: ${themes.primary.font.family.namu};
  font-size: 22px;
  font-style: normal;
  font-weight: 900;
  line-height: 160%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

export const InfoArrowContainer = styled.div`
  position: relative;
  display: flex;
  width: 90px !important;
  height: 90px !important;

  & > span {
    /* height: 36px !important;
    width: 36px !important; */
    height: 40px !important;
    width: 40px !important;
    object-fit: contain !important;
  }
  & > img {
    /* height: 36px !important;
    width: 36px !important; */
    height: 18px !important;
    width: 18px !important;
  }
`;

export const Line1 = styled.div`
  font-size: 14px;
  transform: rotate(90deg);
  position: absolute;
  left: 10px;
  top: 2px;
  font-weight: 600;
`;

export const Line2 = styled.div`
  font-size: 18px;
  transform: rotate(45deg);
  position: absolute;
  left: 0;
  top: 0.5px;
  font-weight: 600;
`;

export const Line3 = styled.div`
  font-size: 14px;
  position: absolute;
  left: -1px;
  bottom: -6.3px;
  font-weight: 600;
`;

export const InfoText = styled.div`
  color: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  line-height: 137.5%;
  margin: 8px 0 0 0;
  padding: 0;

  & p {
    margin: 0;
    padding: 0;
  }
  & p > span {
    font-size: 14px;
  }
`;

export const SkillsBlock = styled.div`
  position: relative;
  margin-top: 100px;
`;

export const SkillsTitle = styled.div`
  font-size: 40px;
  margin-left: 55px;
  text-transform: uppercase;
`;

export const SkillsCardWrapper = styled.div`
  margin-top: 24px;
  width: 100vw;
  display: flex;
  border-top: 1px solid ${themes.primary.colors.darkGrey};
  border-bottom: 1px solid ${themes.primary.colors.darkGrey};
`;

export const SkillsCard = styled.div`
  width: 100%;
  margin: 0;
  z-index: 2;
  margin-left: 55px;
  padding-left: 30px;
  border-right: 1px solid ${themes.primary.colors.darkGrey};

  &::before {
    content: "";
    position: absolute;
    height: 1px;
    width: 100vw;
    top: 145px;
    background: ${themes.primary.colors.darkGrey};
    margin-left: -85px;
  }
`;

export const SkillsCardTitle = styled.div`
  font-size: 30px;
  letter-spacing: 1.5px;
  color: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-style: normal;
  font-weight: 900;
  line-height: 160%;
  letter-spacing: 1.1px;
  margin: 0;
  padding-bottom: 40px;
  padding-top: 10px;
`;

export const SkillsCardStackWrapper = styled.ul`
  margin: 0;
  padding: 16px 20px 32px;
`;

export const SkillsCardStack = styled.li`
  display: flex;
  align-items: center;
`;

export const SkillsCardStackText = styled.p`
  position: relative;
  margin: 0;
  padding: 0;
  font-family: ${themes.primary.font.family.namu};
  font-size: 18px;
  line-height: 1.6;
  font-weight: 900;
  margin-left: 15px;
  padding-bottom: 15px;

  &::after {
    content: "";
    height: 3px;
    width: 3px;
    border-radius: 1.5px;
    background: black;
    position: absolute;
    left: -15px;
    top: 16px;
  }
`;

export const ProjectsBlock = styled.div`
  margin-bottom: 50px;
  margin-inline: 55px;
`;

export const ProjectsBlockTitle = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: 40px;
  line-height: 2.33;
  padding-inline: 55px;
  text-transform: uppercase;
`;

export const ProjectWrapper = styled.div`
  position: relative;
  margin: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  padding-inline: 20px;
  width: 100%;
  background: transparent;
  border: 2px solid ${themes.primary.colors.darkGrey};
`;

export const ProjectNumberTitle = styled.div`
  width: 100%;
  margin: 0 0 0 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 28.5px;
  align-self: stretch;
`;

export const ProjectNumber = styled.div`
  margin: 0 0 0 0;
  padding: 0;
  color: ${themes.primary.colors.estimationAdminBg};
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  -webkit-text-stroke: 1.2px black;
  text-shadow: 4px 1px 0px #000;
  font-family: ${themes.primary.font.family.namu};
  font-size: 87px;
  line-height: normal;
`;

export const ProjectTitleWrapper = styled.div``;

export const ProjectTitleContainer = styled.div`
  width: 100%;
  margin: 0 0 0 0;
  display: flex;
  column-gap: 8px;
`;

export const ProjectTitle = styled.div`
  margin: 0 0 0 0;
  padding: 0;
  color: ${themes.primary.colors.primary};
  font-size: 24px;
  line-height: normal;
`;

export const ProjectDate = styled.div`
  margin: 8px 0 0 0;
  padding: 0;
  color: ${themes.primary.colors.blogArticleText};
  font-size: 16px;
  line-height: normal;
`;

export const ProjectRole = styled.div`
  margin: 8px 0 0 0;
  padding: 0;
  color: ${themes.primary.colors.blogArticleText};
  font-size: 22px;
  line-height: normal;
`;

export const ProjectAboutBlock = styled.div`
  margin: 24px 0 0 0;
  padding: 0;
`;

export const ProjectAboutTitle = styled.div`
  margin: 0;
  padding: 0;
  color: ${themes.primary.colors.primary};
  font-size: 22px;
  line-height: 1.6;
  text-transform: uppercase;
`;

export const ProjectAboutText = styled.div`
  margin: 8px 0 0 0;
  padding: 0;
  color: ${themes.primary.colors.primary};
  font-size: 16px;
  line-height: 1.6;
`;

export const ProjectAchievementTechnologyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 58px;
`;

export const ProjectAchievementWrapper = styled.div`
  margin: 24px 0 0 0;
  padding: 0;
  width: 600px;
`;

export const ProjectAchievementTitle = styled.div`
  font-size: 30px;
  line-height: normal;
  text-align: center;
`;

export const ProjectAchievementListWrapper = styled.div`
  position: relative;
  border: 2px solid ${themes.primary.colors.primary};
  border-right: none;
  background-color: #fff;
  z-index: 5;
  margin-top: 16px;
  padding: 16px 0 16px 16px;
`;

export const ProjectAchievementList = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  padding: 16px;
  list-style: none;
  background-color: #fff;
  padding: 0;
  padding-left: 16px;
  direction: rtl;
`;

export const ProjectAchievementItem = styled.div`
  padding-right: 40px;
  gap: 24px;
  margin: 0;
  padding-block: 16px;
  display: flex;
  gap: 16px;
  align-items: center;
  border-bottom: 1px solid ${themes.primary.colors.darkGrey};
  direction: ltr;
`;

export const ProjectAchievementListIcon = styled.div`
  width: 32px;
  height: 32px;
  min-width: 32px;
  font-size: 32px;
  border: 2px solid black;
  position: relative;
`;

export const AcLine1 = styled.div`
  width: 35px;
  height: 5px;
  position: absolute;
  left: 8px;
  top: 5px;
  transform: rotate(130deg);
  border: 1px solid black;
  background: linear-gradient(
      90deg,
      rgba(80, 95, 177, 0.8) 0%,
      rgba(177, 212, 198, 0.8) 100%
    ),
    #f1efed;
  z-index: 1;
`;

export const AcLine2 = styled.div`
  width: 13px;
  height: 5px;
  transform: rotate(40deg);
  position: absolute;
  top: 11.4px;
  left: 3.5px;
  border: 1px solid black;
  border-right: none;
  background: linear-gradient(
      90deg,
      rgba(197, 236, 192, 0.8) 0%,
      rgba(177, 212, 198, 0.8) 100%
    ),
    #f1efed;
  z-index: 2;
`;

export const ProjectAchievementListText = styled.div`
  margin: 0;
  padding: 0;
  color: ${themes.primary.colors.primary};
  font-size: 20px;
  line-height: normal;
  text-align: left;
`;

export const ProjectAchievementListShadow = styled.div`
  position: absolute;
  top: -2px;
  right: -16px;
  width: 0px;
  height: calc(100% + 4px);
  z-index: -1;
  border: 10px solid ${themes.primary.colors.primary};
  border-color: transparent transparent transparent
    ${themes.primary.colors.primary};
  right: -20px;
`;

export const ProjectTechnologiesWrapper = styled.div`
  margin: 24px 0 0 0;
  padding: 0;
  width: 100%;
  flex: 1;
`;

export const ProjectTechnologiesTitle = styled.div`
  margin: 0;
  padding: 0;
  font-size: 30px;
  text-align: center;
  line-height: normal;
`;

export const ProjectTechnologiesIconContainer = styled.div`
  width: 100%;
  display: grid;
  margin-top: 16px;
  padding-bottom: 20px;
  grid-template-columns: repeat(auto-fill, minmax(110px, 110px));
  row-gap: 20px;
  margin: 8px;
  filter: invert(1) contrast(10);
  > span {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    position: relative;
    width: 100%;
    height: 95px;
  }
`;
