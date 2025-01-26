import styled from "styled-components";
import themes from "../../../utils/themes";

export const BlockHeader = styled.h3`
  font-size: 32px;
  font-weight: 900;
  line-height: 134%;
  margin: 0;
  font-family: ${themes.primary.font.family.namu};
  text-transform: uppercase;
`;

export const DesctopAnimationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;

  @media ${themes.primary.media.minPCFullHD} {
    gap: 22px;
  }
`;

export const Service = styled.div`
  border: 1px solid #c0bfc0;
  border-radius: 16px;
  color: #000;
  flex: 0 1 calc(50% - 8px);
  padding: 20px;

  @media ${themes.primary.media.minPCFullHD} {
    flex: 0 1 calc(50% - 11px);
  }

  & .icon-and-title {
    & .title {
      font-size: 20px;
      @media ${themes.primary.media.minPCFullHD} {
        font-size: 26.67px;
      }
      margin-bottom: 0;
    }
  }

  &:last-child:nth-child(odd) {
    flex-basis: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px;

    & .icon-and-title {
      align-items: center;
      margin: 0;
      width: calc(50% - 8px);

      & .title {
        margin-bottom: 0;
      }
    }

    & .description {
      width: calc(50% - 8px);
    }
  }

  transition: border-color 300ms ease-in-out, background 300ms ease-in-out,
    color 300ms ease-in-out;
  background: linear-gradient(
    353.75deg,
    #f1efed -1.56%,
    rgba(221, 221, 221, 0.22) 52.39%,
    #f1efed 127.64%
  );
  &.current {
    border-color: #5869dd;
    background: linear-gradient(
        91.14deg,
        rgba(88, 105, 221, 0.07) 4.96%,
        rgba(88, 105, 221, 0.021) 99.17%
      ),
      radial-gradient(
        17.33% 49.28% at 12.35% 23.12%,
        rgba(241, 239, 237, 0.5) 22.72%,
        rgba(241, 239, 237, 0) 100%
      ),
      radial-gradient(
        20.63% 58.66% at 87.12% 56.99%,
        rgba(88, 105, 221, 0.05) 22.72%,
        rgba(88, 105, 221, 0) 100%
      );
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding: 25px;
  }
`;

export const ContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0;
  width: 100%;
  @media ${themes.primary.media.max767Mobile} {
    gap: 16px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 42.67px;
  }
`;

export const TitleWrapper = styled.div`
  position: relative;
`;

export const FailCausesContainer = styled.div``;
