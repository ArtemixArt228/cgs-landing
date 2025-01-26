import styled from "styled-components";
import themes from "../utils/themes";

export const ProjectFrame = styled.div`
  border: 1px solid ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.darkBlueBlockchain};
  padding: 5em 2em 3em;
  position: relative;
`;

export const ProjectContent = styled.div`
  text-align: justify;
`;

export const ProjectImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
`;

export const ProjectParagraph = styled.p`
  font-family: ${themes.primary.font.family.mulish};
  font-size: ${themes.primary.font.size.tertiary};
  font-weight: ${themes.primary.font.weight.bold};
  letter-spacing: 1px;
`;

export const ProjectTitle = styled.h3`
  font-size: ${themes.primary.font.size.menuElement};
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.semiBold};
  color: ${themes.primary.colors.secondary};
  margin: 40px 0 0.4em 0;
`;

export const DeleteTextThin = styled.span`
  position: absolute;
  color: ${themes.primary.colors.errorText};
  right: 1.5em;
  bottom: 1.1em;
  font-size: ${themes.primary.font.size.tertiary};
  font-weight: ${themes.primary.font.weight.light};
  cursor: pointer;
`;

export const EditIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
`;

export const ImageBlock = styled.div`
  position: relative;
  width: 95%;
  min-height: 200px;
  border-radius: 18px;
`;

export const ProjectDescription = styled.div`
  position: absolute;
  top: 10%;
  bottom: 10%;
  left: 5%;
  right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(41.3333px);
  border-radius: 20px;
  padding: 12px;
  overflow: hidden;
`;
