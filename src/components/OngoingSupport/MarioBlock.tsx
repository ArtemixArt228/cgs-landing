import React, { useState, useEffect, useRef } from "react";
import parse from "html-react-parser";

import * as Styled from "../../styles/OngoingSupport/ProvidesBlock.styled";

import topLeftBlock from "../../../public/OngoingSupport/topBlock-1.svg";
import topRightBlock from "../../../public/OngoingSupport/topBlock-2.svg";
import middleBlock from "../../../public/OngoingSupport/middleBlock.svg";
import bottomLeftBlock from "../../../public/OngoingSupport/bottomBlock-1.svg";
import bottomRightBlock from "../../../public/OngoingSupport/bottomBlock-2.svg";
import road from "../../../public/OngoingSupport/road.svg";
import marioStop from "../../../public/OngoingSupport/marioStop.svg";
import firstMarioRun from "../../../public/OngoingSupport/marioRun-1.svg";
import secondMarioRun from "../../../public/OngoingSupport/marioRun-2.svg";
import marioJump from "../../../public/OngoingSupport/marioJump.svg";
import firstMushroom from "../../../public/OngoingSupport/mushroom-1.svg";
import secondMushroom from "../../../public/OngoingSupport/mushroom-2.svg";
import { useMediaQuery } from "@mui/material";

interface MarioProp {
  subtitle: string;
  text: string;
}

interface MarioBlockProps {
  data: MarioProp[] | undefined;
}

const marioMovement = [marioStop, firstMarioRun, secondMarioRun];

const mushroomsMovement = [firstMushroom.src, secondMushroom.src];

const MarioBlock = (data: MarioBlockProps) => {
  const [marioIndex, setMarioIndex] = useState(0);
  const [mushroomIndex, setMushroomIndex] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [isRoadMoving, setIsRoadMoving] = useState(false);
  const [hintText, setHintText] = useState("");
  const [viewHintText, setViewHintText] = useState(false);
  const marioBlockRef = useRef<HTMLDivElement>(null);
  const [threshold, setThreshold] = useState(0);
  const isOneMushroom = useMediaQuery(
    "(min-width: 551px) and (max-width:768px)"
  );

  const blocksSrc = [
    topLeftBlock.src,
    middleBlock.src,
    topRightBlock.src,
    bottomLeftBlock.src,
    bottomRightBlock.src,
  ];

  const blocksAlt = [
    "Steel Plate",
    "Stone Wall",
    "A Part of a Wall",
    "Brick Wall",
    "Obstacle",
  ];

  const jump = () => {
    setIsJumping(true);
    setTimeout(() => {
      setIsJumping(false);
    }, 300);
  };

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if ((event as React.MouseEvent<HTMLDivElement, MouseEvent>).buttons === 1) {
      jump();
      event.preventDefault();
      setIsRoadMoving(true);
    }
  };

  const handleTouch = (event: React.TouchEvent<HTMLDivElement>) => {
    if ((event as React.TouchEvent<HTMLDivElement>).touches) {
      jump();
      setIsRoadMoving(true);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === "Space" || event.code === "") {
      jump();
      event.preventDefault();
      setIsRoadMoving(true);
    }
  };

  useEffect(() => {
    const handleMouseEnter = () => {
      window.addEventListener("keydown", handleKeyDown);
    };

    const handleMouseLeave = () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

    if (marioBlockRef.current) {
      marioBlockRef.current.addEventListener("mouseenter", handleMouseEnter);
      marioBlockRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (marioBlockRef.current) {
        marioBlockRef.current.removeEventListener(
          "mouseenter",
          handleMouseEnter
        );
        marioBlockRef.current.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      }
    };
  }, []);

  useEffect(() => {
    if (isRoadMoving) {
      setViewHintText(true);
    }
  }, [isRoadMoving]);

  useEffect(() => {
    const is992px = window.matchMedia("(max-width: 992px)").matches;

    if (is992px) {
      setHintText("tap to start and jump");
    } else {
      setHintText("press space to start and jump");
    }
  }, []);

  useEffect(() => {
    if (isRoadMoving) {
      const timer = setInterval(() => {
        setMarioIndex((prevIndex) =>
          prevIndex === marioMovement.length - 1 ? 0 : prevIndex + 1
        );
        setMushroomIndex((prevIndex) =>
          prevIndex >= mushroomsMovement.length - 1 ? 0 : prevIndex + 1
        );
      }, 400);
      const moving = setTimeout(() => {
        setIsRoadMoving(false);
      }, 10000);
      return () => {
        clearInterval(timer);
        clearTimeout(moving);
      };
    }
  }, [marioMovement, mushroomsMovement, isRoadMoving]);

  useEffect(() => {
    const isDesktop = window.matchMedia("(max-width: 2560px)").matches;
    const is768px = window.matchMedia("(max-width: 768px)").matches;
    const is475px = window.matchMedia("(max-width: 475px)").matches;

    if (isDesktop) {
      setThreshold(0.9);
    }
    if (is768px) {
      setThreshold(0.7);
    }
    if (is475px) {
      setThreshold(0.4);
    }
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: threshold,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(() => {
        setIsRoadMoving(false);
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (marioBlockRef.current) {
      observer.observe(marioBlockRef.current);
    }

    return () => {
      if (marioBlockRef.current) {
        observer.unobserve(marioBlockRef.current);
      }
    };
  }, [threshold]);

  return (
    <Styled.MarioBlock onMouseDown={handleMouseDown} ref={marioBlockRef}>
      <Styled.BlockContainer>
        {data?.data?.map(({ subtitle, text }: MarioProp, index) => (
          <div key={index}>
            <Styled.ContentWrapper>
              <Styled.Subtitle>{subtitle}</Styled.Subtitle>
              <Styled.Text>{parse(text)}</Styled.Text>
            </Styled.ContentWrapper>
            <Styled.BlockSrc src={blocksSrc[index]} alt={blocksAlt[index]} />
          </div>
        ))}
      </Styled.BlockContainer>
      <Styled.FooterContainer onTouchStart={handleTouch}>
        <Styled.Mario
          isJumping={isJumping}
          src={
            isJumping
              ? marioJump.src
              : isRoadMoving
              ? marioMovement[marioIndex].src
              : marioMovement[2].src
          }
          alt="Mario"
        />
        <Styled.Hint isMoving={viewHintText}> {hintText} </Styled.Hint>
        <Styled.FooterMarioBlock>
          <Styled.RoadMove isMoving={isRoadMoving}>
            <Styled.RoadImages>
              <Styled.MushroomsImages>
                <Styled.MushroomsImage
                  src={
                    isRoadMoving
                      ? mushroomsMovement[mushroomIndex]
                      : firstMushroom.src
                  }
                  alt="Mario Mushroom"
                />
                {!isOneMushroom && (
                  <Styled.MushroomsImage
                    src={
                      isRoadMoving
                        ? mushroomsMovement[mushroomIndex]
                        : secondMushroom.src
                    }
                    alt="Mushroom"
                  />
                )}
              </Styled.MushroomsImages>
              <Styled.RoadImage src={road.src} alt="Mario Game" />
            </Styled.RoadImages>
            <Styled.RoadImages>
              <Styled.MushroomsImages>
                <Styled.MushroomsImage
                  src={
                    isRoadMoving
                      ? mushroomsMovement[mushroomIndex]
                      : firstMushroom.src
                  }
                  alt="Mario Mushroom"
                />
                {!isOneMushroom && (
                  <Styled.MushroomsImage
                    src={
                      isRoadMoving
                        ? mushroomsMovement[mushroomIndex]
                        : secondMushroom.src
                    }
                    alt="Mushroom"
                  />
                )}
              </Styled.MushroomsImages>
              <Styled.RoadImage src={road.src} alt="Mario Game" />
            </Styled.RoadImages>
            <Styled.RoadImages>
              <Styled.MushroomsImages>
                <Styled.MushroomsImage
                  src={
                    isRoadMoving
                      ? mushroomsMovement[mushroomIndex]
                      : firstMushroom.src
                  }
                  alt="Mario Mushroom"
                />
                {!isOneMushroom && (
                  <Styled.MushroomsImage
                    src={
                      isRoadMoving
                        ? mushroomsMovement[mushroomIndex]
                        : secondMushroom.src
                    }
                    alt="Mushroom"
                  />
                )}
              </Styled.MushroomsImages>
              <Styled.RoadImage src={road.src} alt="Mario Game" />
            </Styled.RoadImages>
            <Styled.RoadImages>
              <Styled.MushroomsImages>
                <Styled.MushroomsImage
                  src={
                    isRoadMoving
                      ? mushroomsMovement[mushroomIndex]
                      : firstMushroom.src
                  }
                  alt="Mario Mushroom"
                />
                {!isOneMushroom && (
                  <Styled.MushroomsImage
                    src={
                      isRoadMoving
                        ? mushroomsMovement[mushroomIndex]
                        : secondMushroom.src
                    }
                    alt="Mushroom"
                  />
                )}
              </Styled.MushroomsImages>
              <Styled.RoadImage src={road.src} alt="Mario Game" />
            </Styled.RoadImages>
          </Styled.RoadMove>
        </Styled.FooterMarioBlock>
      </Styled.FooterContainer>
    </Styled.MarioBlock>
  );
};

export default MarioBlock;
