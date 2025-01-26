import PlusBackground from "../../public/plusBackground.svg";
import Player from "../../public/player.svg";
import LineBackground from "../../public/lineBackground.svg";
import LineSBackground from "../../public/lineSBackground.svg";
import Clock from "../../public/clock.svg";

import Camera from "../../public/camera.svg";
import Speaker from "../../public/speaker.svg";
import IconTBackground from "../../public/iconTBackground.svg";
import LineTBackground from "../../public/lineTBackground.svg";

import Roulette from "../../public/roulette.svg";

export const firstPageImages = [
  { className: "plusFP", src: PlusBackground, alt: "PlusBackground" },
  { className: "playerFP", src: Player, alt: "Player" },
  { className: "rouletteFP", src: Roulette, alt: "Roulette" },
  { className: "lineFP", src: LineBackground, alt: "LineBackground" },
];

export const secondPageImages = [
  { className: "lineSP", src: LineSBackground, alt: "LineSBackground" },
  { className: "clockSP", src: Clock, alt: "Clock" },
];

export const thirdPageImages = [
  { className: "cameraTP", src: Camera, alt: "camera" },
  { className: "speakerTP", src: Speaker, alt: "speaker" },
  {
    className: "iconTBackgroundTP",
    src: IconTBackground,
    alt: "IconTBackground",
  },
  { className: "lineTP", src: LineTBackground, alt: "lineTBackground" },
];
