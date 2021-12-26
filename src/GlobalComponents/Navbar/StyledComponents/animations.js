import gsap from "gsap";

export const fadeIn = (wrapper) => {
  gsap.to(wrapper.current, {
    opacity: 1,
    duration: 0.5,
    ease: "power3.easeInOut",
    visibility: "visible",
    display: "block",
  });
};
export const fadeOut = (wrapper) => {
  gsap.to(wrapper.current, {
    opacity: 0,
    duration: 0.5,
    ease: "power3.easeInOut",
    display: "none",
    visibility: "hidden",
  });
};
