import gsap from "gsap";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
export const fadeInAnimation = (wrapper, container) => {
  console.log(wrapper.current.children);
  const children = wrapper.current.children;
  gsap.to(
    [
      children[0],
      children[1],
      children[2],
      children[3],
      children[4],
      children[5],
      children[6],
    ],
    {
      scrollTrigger: {
        trigger: container.current,
        start: "top center",
        end: " bottom",
      },
      left: "0px",
      opacity: 1,
      duration: 0.5,
      ease: "power3.easeInOut",
      stagger: {
        amount: 2,
      },
    }
  );
};
export const BasicfadeInAnimation = (parent) => {
  gsap.to(parent.current, {
    opacity: 1,
    left: "0px",
    duration: 0.5,
    ease: "power3.easeInOut",
    scrollTrigger: {
      trigger: parent.current,
      start: "top center",
      end: " bottom",
    },
    stagger: {
      amount: 1,
    },
  });
};
export const sectionAnimation = (parent) => {
  const children1 = parent.current.children[0];
  const children2 = parent.current.children[1];

  gsap.to([children1, children2], {
    opacity: 1,
    left: "0px",
    duration: 0.5,
    ease: "power3.easeInOut",
    scrollTrigger: {
      trigger: parent.current,
      start: "top center",
      end: " bottom",
    },
    stagger: {
      amount: 0.5,
    },
  });
};
