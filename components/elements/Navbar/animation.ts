"use client";

import { gsap } from "@/lib/gsap";

export const animateSAPLogo = (sapLogo : HTMLImageElement) => {
    const spiningAnimation = gsap.to(sapLogo, {
        rotate: 360,
        duration: 1,
        ease: "power4.out",
    });

    return spiningAnimation;
};

export const animateNavbarLinks = () => {
    const navbarLinks = document.querySelectorAll("nav ul li");

    const navbarLinksfadingInAnimation = gsap.fromTo(navbarLinks, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1,
        stagger: 0.5,
    });

    return navbarLinksfadingInAnimation;
};