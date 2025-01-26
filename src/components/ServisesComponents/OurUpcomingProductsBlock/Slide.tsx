import React, { useState } from "react";
import ReactPlayer from "react-player";
import * as Styled from "../../../styles/AiService/Slider.stiled";

interface IProps {
  id?: string;
  videoUrl: string;
  text: string;
  videoPreviewImage?: string;
  isPlaying: boolean;
  handleVideoPlay: (url: string, id?: string) => void;
}

const Slide = ({ videoUrl, text, handleVideoPlay, isPlaying, id }: IProps) => {
  const [showBottomGradient, setShowBottomGradient] = useState(true);
  const handlePlayVideo = () => {
    setShowBottomGradient(false);
    handleVideoPlay(videoUrl, id);
  };
  return (
    <Styled.SlideWrapper className="services">
      {showBottomGradient && (
        <Styled.GradientBlock>{text}</Styled.GradientBlock>
      )}
      <ReactPlayer
        width={"100%"}
        height={"100%"}
        url={videoUrl}
        controls={true}
        loop={true}
        onPlay={handlePlayVideo}
        playing={isPlaying}
        config={{
          youtube: {
            playerVars: {
              autoplay: 0,
              rel: 0,
              loop: 1,
              iv_load_policy: 3,
              disablekb: 1,
              playsinline: 1,
            },
          },
        }}
      />
    </Styled.SlideWrapper>
  );
};

export default Slide;
