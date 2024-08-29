"use client";

import { gsap } from "@/lib/gsap";

export const animateSAPLogo = (sapLogo : HTMLImageElement) => {
    const risingAnimation = gsap.to(sapLogo, {
        opacity: 1,
        translateY: "0%",
        duration: 1,
    });

    return risingAnimation;
};

export const animateHeroTitle = (heroTitleContainer : HTMLDivElement) => {
    const heroTitlefadingInAnimation = gsap.to(heroTitleContainer, {
        opacity: 1,
        duration: 1,
    });

    return heroTitlefadingInAnimation;
};