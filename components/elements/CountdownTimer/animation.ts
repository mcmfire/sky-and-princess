"use client";

import { gsap } from "@/lib/gsap";

export const animateTimer = () => {
    const fadingInAnimation = gsap.to("#countdown-timer", {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: "#countdown-timer",
          start: "top 75%",
          end: "bottom 50%",
          scrub: window.innerWidth > 1024 ? 1 : false,
        }
      });

    return fadingInAnimation;
};

export const animateText = () => {
    const fadingInAnimation = gsap.to("#bible-quote p", {
        opacity: 1,
        duration: 3,
        stagger: 1,
        scrollTrigger: {
          trigger: "#bible-quote p",
          start: "top 90%",
          end: "bottom 80%",
          scrub: window.innerWidth > 1024 ? 1 : false,
        },
      });

    return fadingInAnimation;
};