"use client";

import { gsap } from "@/lib/gsap";

export const animateAboutUsImage = (aboutUsImageContainer: HTMLDivElement) => {
    const slidingInAnimation = gsap.fromTo(aboutUsImageContainer, {
        opacity: 0,
        translateX: "-100%",
    }, {
        opacity: 1,
        translateX: "0%",
        duration: 3,
        scrollTrigger: {
            trigger: aboutUsImageContainer,
            start: "top 75%",
            end: "bottom 75%",
            scrub: window.innerWidth > 1024,
        }
    });

    return slidingInAnimation;
};

export const animateAboutUsContent = (aboutUsContent: HTMLDivElement) => {
    const fadingInAnimation = gsap.fromTo(aboutUsContent, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 3,
        scrollTrigger: {
            trigger: aboutUsContent,
            start: "top 75%",
            end: "bottom 75%",
            scrub: window.innerWidth > 1024,
        }
    });

    return fadingInAnimation;
};

export const animateLifeHighlights = () => {
    const highlights = document.querySelectorAll(".highlights");

    const fadingInAnimation = gsap.fromTo(highlights, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 3,
        stagger: 0.5,
        scrollTrigger: {
            trigger: highlights,
            start: "top 75%",
            end: "bottom 75%",
            scrub: window.innerWidth > 1024,
        }
    });

    return fadingInAnimation;
};