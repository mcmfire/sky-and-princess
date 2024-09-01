"use client";

import { gsap } from "@/lib/gsap";

export const animateLogo = (heroLogo : HTMLImageElement) => {
    const risingAnimation = gsap.to(heroLogo, {
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