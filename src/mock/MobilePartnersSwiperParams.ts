import { SwiperProps } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
const data: SwiperProps = {
  modules: [Autoplay, Navigation],
  centeredSlides: false,
  loop: true,
  allowTouchMove: true,
  grabCursor: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  speed: 700,
  focusableElements: "button",
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 10,
      centeredSlides: false,
      slidesOffsetBefore: 30,
    },
    1800: {
      slidesPerView: 6,
      spaceBetween: 10,
      centeredSlides: false,
      slidesOffsetBefore: 50,
    },
    2200: {
      slidesPerView: 6,
      spaceBetween: 10,
      centeredSlides: false,
      slidesOffsetBefore: 80,
    },
    2500: {
      slidesPerView: 6,
      spaceBetween: 10,
      centeredSlides: false,
      slidesOffsetBefore: 110,
    },
  },
};

export default data;
