import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const expandImage = (image, container) => {
  gsap.to(image.current, {
    ease: "power3.easeInOut",
    scale: 1,
    duration: 1.5,
    delay: 1.1,
  });
};
export const fadeIn = (container, amount) => {
  gsap.to(container.current, {
    opacity: 1,
    x: amount,
    ease: "power3.easeInOut",
    duration: 1,
  });
};
export const fadeInSlideshow = (container) => {
  gsap.to(".slides", {
    scrollTrigger: {
      trigger: container.current,
      start: "top center",
      end: "bottom center",
    },
    opacity: 1,
    left: "0px",
    ease: "power3.easeInOut",
  });
};
export const handleBgChange = (container, image) => {
  gsap.to(container.current, {
    attr: { src: image },
    duration: 0.5,
    scale: 1.5,
    ease: "power3.easeInOut",
  });
  gsap.to(container.current, {
    duration: 1,
    scale: 1,
    ease: "power3.easeInOut",
    delay: 1,
  });
};
gsap.registerPlugin(ScrollTrigger);
