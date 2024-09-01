"use client";

import { gsap } from "@/lib/gsap";

export const animateAboutUsImage = (aboutUsImageContainer: HTMLDivElement) => {
    const slidingInAnimation = gsap.fromTo(aboutUsImageContainer, {
        opacity: 0,
        translateX: "-100%",
    }, {
        opacity: 1,
        translateX: "0%",
        duration: window.innerWidth > 1024 ? 3 : 1,
        scrollTrigger: {
            trigger: aboutUsImageContainer,
            start: "top 75%",
            end: "bottom bottom",
            scrub: window.innerWidth > 1024 ? 1 : false,
        }
    });

    return slidingInAnimation;
};

export const animateAboutUsContent = (aboutUsContent: HTMLDivElement) => {
    const contents = aboutUsContent.querySelectorAll("*");

    const fadingInAnimation = gsap.fromTo(contents, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: window.innerWidth > 1024 ? 3 : 1,
        stagger: 0.5,
        scrollTrigger: {
            trigger: aboutUsContent,
            start: "top 75%",
            end: "bottom 90%",
            scrub: window.innerWidth > 1024 ? 1 : false,
        }
    });

    return fadingInAnimation;
};

export const animateLifeHighlights = () => {
    const highlights = document.querySelectorAll(".highlights");

    const fadingInAnimation = gsap.fromTo(highlights, {
        opacity: 0,
        scale: 1.5,
    }, {
        opacity: 1,
        scale: 1,
        duration: window.innerWidth > 1024 ? 3 : 1,
        stagger: 0.5,
        scrollTrigger: {
            trigger: highlights,
            start: "top 75%",
            end: "bottom 75%",
            scrub: window.innerWidth > 1024 ? 1 : false,
        }
    });

    return fadingInAnimation;
};