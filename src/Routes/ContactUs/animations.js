import gsap from "gsap";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
export const imageRevealAnimation = (
  image,
  imageReveal,
  container,
  contactInfo
) => {
  if (container != null) {
    gsap.to(imageReveal.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top center",
        end: " bottom",
      },
      width: "0%",
      duration: 1.5,
      delay: 0.5,
      transition: "power2.easeInOut",
    });
    gsap.to(image.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top center",
        end: " bottom",
      },
      scale: 1,
      delay: 0.8,
      duration: 1.5,
      ease: "power3.easeInOut",
    });
  } else {
    gsap.to(imageReveal.current, {
      width: "0%",
      duration: 2,
      delay: 5,
      transition: "power2.easeInOut",
    });
    gsap.to(image.current, {
      scale: 1,
      delay: 5.2,
      duration: 1.5,
      ease: "power3.easeInOut",
    });
  }
};
export const contactFormAnimation = (contactFormContainer, form) => {
  gsap.to(form.current, {
    scrollTrigger: {
      trigger: contactFormContainer.current,
      start: "top center",
      end: " bottom",
    },
    left: "0px",
    opacity: 1,
    duration: 0.5,
    ease: "power3.easeInOut",
  });
};
export const fadeInContactInfo = (contactInfo, container) => {
  const children = contactInfo.current.children;
  gsap.to([children[0], children[1], children[2]], {
    scrollTrigger: {
      trigger: container.current,
      start: "top center",
      end: " bottom",
    },
    left: "0px",
    opacity: 1,
    duration: 0.5,
    ease: "power3.easeInOut",
    delay: 1,
    stagger: {
      amount: 1,
    },
  });
};
