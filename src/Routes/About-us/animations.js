import gsap from "gsap";

export const landingPageAnimation = (parent) => {
  const children1 = parent.current.children[0];
  const children2 = parent.current.children[1];

  gsap.to([children1, children2], {
    opacity: 1,
    left: "0px",
    duration: 0.5,
    ease: "power3.easeInOut",
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
