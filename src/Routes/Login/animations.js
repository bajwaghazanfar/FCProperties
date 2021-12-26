import gsap from "gsap";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
export const imageRevealAnimation = (image, imageReveal) => {
  gsap.to(imageReveal.current, {
    width: "0%",
    duration: 2,

    transition: "power2.easeInOut",
  });
  gsap.to(image.current, {
    scale: 1,

    duration: 1.5,
    ease: "power3.easeInOut",
  });
};
export const loginFormAnimation = (form) => {
  gsap.to(form.current, {
    left: "0px",
    opacity: 1,
    duration: 1,
    ease: "power3.easeInOut",
  });
};
