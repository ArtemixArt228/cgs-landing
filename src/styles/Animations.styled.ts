import { keyframes, css } from "styled-components";
import themes from "../utils/themes";

export const rotateAnimationLaptopLeft = keyframes`
  ${css`
    0% {
      transform: scale(0.9) rotate(0deg);
    }
    20% {
      transform: scale(0.9) rotate(-40deg);
    }
    100% {
      transform: scale(0.9) rotate(0deg);
    }
  `}
`;

export const rotateAnimationTabletLeft = keyframes`
  ${css`
    0% {
      transform: scale(0.65) rotate(65deg);
    }
    20% {
      transform: scale(0.65) rotate(105deg);
    }
    100% {
      transform: scale(0.65) rotate(65deg);
    }
  `}
`;

export const rotateAnimationTabletPortraitLeft = keyframes`
  ${css`
    0% {
      transform: scale(0.65) rotate(65deg);
    }
    20% {
      transform: scale(0.65) rotate(80deg);
    }
    100% {
      transform: scale(0.65) rotate(65deg);
    }
  `}
`;

export const rotateAnimationMobileLeft = keyframes`
  ${css`
    0% {
      transform: scale(0.5) rotate(65deg);
    }
    20% {
      transform: scale(0.5) rotate(80deg);
    }
    100% {
      transform: scale(0.5) rotate(65deg);
    }
  `}
`;

export const rotateAnimationLaptopRight = keyframes`
  ${css`
    0% {
      transform: scale(0.8) rotate(65deg);
    }
    20% {
      transform: scale(0.8) rotate(-40deg);
    }
    100% {
      transform: scale(0.8) rotate(65deg);
    }
  `}
`;

export const rotateAnimationTabletRight = keyframes`
  ${css`
    0% {
      transform: scale(0.65) rotate(65deg);
    }
    20% {
      transform: scale(0.65) rotate(-40deg);
    }
    100% {
      transform: scale(0.65) rotate(65deg);
    }
  `}
`;

export const rotateAnimationTablerPortraitRight = keyframes`
  ${css`
    0% {
      transform: scale(0.65) rotate(65deg);
    }
    20% {
      transform: scale(0.65) rotate(-40deg);
    }
    100% {
      transform: scale(0.65) rotate(65deg);
    }
  `}
`;

export const cursorBlinking = keyframes`
${css`
  50% {
    background-color: transparent;
  }
`}
`;

export const slideUp = keyframes`
 ${css`
   from {
     opacity: 1;
     transform: translateY(0);
   }
   to {
     opacity: 0;
     transform: translateY(-30px);
   }
 `}
`;

export const slideDown = keyframes`
 ${css`
   from {
     opacity: 0;
     transform: translateY(-60px);
   }
   to {
     opacity: 1;
     transform: translateY(0);
   }
 `}
`;

export const slideDownText = keyframes`
 ${css`
   from {
     opacity: 0;
     transform: translateY(-20px);
   }
   to {
     opacity: 1;
     transform: translateY(0);
   }
 `}
`;

export const slideRight = keyframes`
 ${css`
   from {
     opacity: 0;
     transform: translateX(-60px);
   }
   to {
     opacity: 1;
     transform: translateX(0);
   }
 `}
`;

export const buttonHover = keyframes`
${css`
  from {
    background-position-y: 0;
  }
  to {
    background-position-y: -600px;
  }
`}
`;

export const twistedBlockAnimation = (positionY: number) => keyframes`
${css`
  from {
    background-position-y: 0;
  }
  to {
    background-position-y: -${positionY}px;
  }
`}
`;

export const float = (y: number) => keyframes` 
${css`
  from {
    -webkit-transform: rotate(0deg) translate3d(${y}px, 0, 0) rotate(0deg);
  }

  to {
    -webkit-transform: rotate(${y > 2 ? "360deg" : "-360deg"})
      translate3d(${y}px, 0, 0) rotate(${y > 2 ? "-360deg" : "360deg"});
  }
`}
  `;

export const emailShake = keyframes`
${css`
  0% {
    transform: rotate(0);
  }

  10% {
    transform: rotate(20deg);
  }

  20% {
    transform: rotate(-20deg);
  }
  30% {
    transform: rotate(20deg);
  }
  40% {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(20deg);
  }

  60% {
    transform: rotate(-20deg);
  }
  70% {
    transform: rotate(20deg);
  }

  80% {
    transform: rotate(-20deg);
  }
  90% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(0);
  }
`}
`;

export const propeller = keyframes` 
  50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(180deg);
  }
    `;

export const cubeScale = keyframes` 
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
  `;

export const essentialImageShake = keyframes`
${css`
  0% {
    transform: rotate(0);
  }
  2.5% {
    transform: rotate(10deg);
  }
  5% {
    transform: rotate(-10deg);
  }
  7.5% {
    transform: rotate(10deg);
  }

  10% {
    transform: rotate(-10deg);
  }
  12.5% {
    transform: rotate(10deg);
  }
  15% {
    transform: rotate(-10deg);
  }
  17.5% {
    transform: rotate(10deg);
  }
  20% {
    transform: rotate(-10deg);
  }
  22.5% {
    transform: rotate(10deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(-10deg);
  }
`}
`;

export const errorColorAnimation = keyframes`
${css`
  0% {
    color: ${themes.primary.colors.adminRed};
  }
  100% {
    color: ${themes.primary.colors.primary};
  }
`}
`;

export const glow = keyframes`
${css`
  to {
    background-position: 0 400%;
  }
`}`;

export const horizontalGlow = keyframes`
${css`
  to {
    background-position: 200% 0;
  }
`}`;

export const horizontalGlowReverse = keyframes`
${css`
  to {
    background-position: 400% 0;
  }
`}`;

export const messageShow = keyframes`
${css`
  0% {
    max-height: fit-content;
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    max-height: fit-content;
    overflow: visible;
  }
`}`;

export const nextArrowOne = keyframes`
  0% {
    transform: translate(0px, 0);
  }
  100% {
    transform: translate(30px, 0px);;
  }
`;

export const nextArrowTwo = keyframes`
  0% {
    transform: translate(-30px, 0px);
  }
  100% {
    transform: translate(0px, 0px);;
  }
`;

export const prevArrowOne = keyframes`
  0% {
    transform: translate(30px, 0);
  }
  100% {
    transform: translate(0px, 0px);
  }
`;

export const prevArrowTwo = keyframes`
  0% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(-30px, 0px);
  }
`;

export const prevChatArrowOne = keyframes`
  0% {
    transform: translateY(36px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const prevChatArrowTwo = keyframes`
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-36px);
  }
`;

export const slideUpProjector = keyframes`
 ${css`
   from {
     opacity: 0;
     transform: translateY(30px);
   }
   to {
     opacity: 1;
     transform: translateY(0);
   }
 `}
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const opacityAppear = keyframes`
 ${css`
   from {
     opacity: 0;
   }
   to {
     opacity: 1;
   }
 `}
`;

export const projectorLoader = keyframes`
  0%       { background: conic-gradient(#0000 0, #8f8e931a 0); }
  2.5%     { background: conic-gradient(#0000 9deg, #8f8e931a 0); }
  5%       { background: conic-gradient(#0000 18deg, #8f8e931a 0); }
  7.5%     { background: conic-gradient(#0000 27deg, #8f8e931a 0); }
  10%      { background: conic-gradient(#0000 36deg, #8f8e931a 0); }
  12.5%    { background: conic-gradient(#0000 45deg, #8f8e931a 0); }
  15%      { background: conic-gradient(#0000 54deg, #8f8e931a 0); }
  17.5%    { background: conic-gradient(#0000 63deg, #8f8e931a 0); }
  20%      { background: conic-gradient(#0000 72deg, #8f8e931a 0); }
  22.5%    { background: conic-gradient(#0000 81deg, #8f8e931a 0); }
  25%      { background: conic-gradient(#0000 90deg, #8f8e931a 0); }
  27.5%    { background: conic-gradient(#0000 99deg, #8f8e931a 0); }
  30%      { background: conic-gradient(#0000 108deg, #8f8e931a 0); }
  32.5%    { background: conic-gradient(#0000 117deg, #8f8e931a 0); }
  35%      { background: conic-gradient(#0000 126deg, #8f8e931a 0); }
  37.5%    { background: conic-gradient(#0000 135deg, #8f8e931a 0); }
  40%      { background: conic-gradient(#0000 144deg, #8f8e931a 0); }
  42.5%    { background: conic-gradient(#0000 153deg, #8f8e931a 0); }
  45%      { background: conic-gradient(#0000 162deg, #8f8e931a 0); }
  47.5%    { background: conic-gradient(#0000 171deg, #8f8e931a 0); }
  50%      { background: conic-gradient(#0000 180deg, #8f8e931a 0); }
  52.5%    { background: conic-gradient(#0000 189deg, #8f8e931a 0); }
  55%      { background: conic-gradient(#0000 198deg, #8f8e931a 0); }
  57.5%    { background: conic-gradient(#0000 207deg, #8f8e931a 0); }
  60%      { background: conic-gradient(#0000 216deg, #8f8e931a 0); }
  62.5%    { background: conic-gradient(#0000 225deg, #8f8e931a 0); }
  65%      { background: conic-gradient(#0000 234deg, #8f8e931a 0); }
  67.5%    { background: conic-gradient(#0000 243deg, #8f8e931a 0); }
  70%      { background: conic-gradient(#0000 252deg, #8f8e931a 0); }
  72.5%    { background: conic-gradient(#0000 261deg, #8f8e931a 0); }
  75%      { background: conic-gradient(#0000 270deg, #8f8e931a 0); }
  77.5%    { background: conic-gradient(#0000 279deg, #8f8e931a 0); }
  80%      { background: conic-gradient(#0000 288deg, #8f8e931a 0); }
  82.5%    { background: conic-gradient(#0000 297deg, #8f8e931a 0); }
  85%      { background: conic-gradient(#0000 306deg, #8f8e931a 0); }
  87.5%    { background: conic-gradient(#0000 315deg, #8f8e931a 0); }
  90%      { background: conic-gradient(#0000 324deg, #8f8e931a 0); }
  92.5%    { background: conic-gradient(#0000 333deg, #8f8e931a 0); }
  95%      { background: conic-gradient(#0000 342deg, #8f8e931a 0); }
  97.5%    { background: conic-gradient(#0000 351deg, #8f8e931a 0); }
  100%     { background: conic-gradient(#0000 360deg, #8f8e931a 0); }
`;
