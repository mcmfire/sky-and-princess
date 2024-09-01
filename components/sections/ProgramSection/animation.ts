"use client";

import { gsap } from "@/lib/gsap";

export const animateVenueImage = (venueImageContainer: HTMLDivElement) => {
    const venueContainerTitle = document.querySelector("#venue-container div p");
    const polygon = window.innerWidth > 1024 ?
        "polygon(0% 0, 100% 50%, 100% 100%, 0% 50%)" :
        "polygon(0% 25%, 100% 25%, 100% 75%, 0% 75%)";

    const clippingAnimation = gsap.fromTo(venueImageContainer, {
        clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
    }, {
        duration: 1,
        clipPath: polygon,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: venueContainerTitle,
            start: "top 50%",
            end: "bottom 50%",
            scrub: window.innerWidth > 1024 ? 1 : false,
        }
    });

    return clippingAnimation;
};

export const animateVenueQRCode = () => {
    const rotatingAnimation = gsap.to("#venue-qr-code-container", {
        rotateX: 360,
        rotateY: 360,
        rotateZ: 360,
        opacity: 1,
        duration: 1,
        ease: "linear",
        scrollTrigger: {
            trigger: "#venue-qr-code-container",
            start: "top 90%",
            end: "bottom 80%",
            scrub: window.innerWidth > 1024 ? 1 : false,
        }
    });

    return rotatingAnimation;
};

export const animateEntourageCard = () => {
    const fadingInAnimation = gsap.fromTo(".entourage-card", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: window.innerWidth > 1024 ? 3 : 1,
        stagger: window.innerWidth > 1024 ? 1 : 0.5,
        scrollTrigger: {
            trigger: "#entourage-container",
            start: "top 80%",
            end: "bottom 90%",
            scrub: window.innerWidth > 1024 ? 1 : false,
        }
    });

    return fadingInAnimation;
};