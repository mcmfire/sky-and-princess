"use client";

import { gsap } from "@/lib/gsap";

export const animateProgressBar = (label: string, group: string, progress: number) => {
    const fillingAnimation = gsap.fromTo(`.${group} #${label}`, {
        width: "0%",
    }, {
        duration: 3,
        width: `${progress}%`,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: `.${group} #${label}`,
        }
    });

    return fillingAnimation;
}; 