"use client";

import { gsap } from "@/lib/gsap";

export const animateLogo = (logo: HTMLImageElement) => {
    const spiningAnimation = gsap.to(logo, {
        rotate: 360,
        duration: 1,
        ease: "power4.out",
    });

    return spiningAnimation;
};

export const animateNavbarLinks = () => {
    const navbarLinks = document.querySelectorAll("nav ul li");
    const navbarLinkHRs = Array.from(document.querySelectorAll("nav ul li hr"));

    const navbarLinksfadingInAnimation = gsap.fromTo(navbarLinks, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1,
        stagger: 0.5,
    });

    const navbarLinkHRsWidthAnimation = navbarLinkHRs.map((navbarLinkHR, index) => {
        const sections = ["#portfolio-section", "#program-section"];

        return gsap.fromTo(navbarLinkHR, {
            width: "0",
        }, {
            width: "100%",
            duration: 1,
            scrollTrigger: {
                trigger: sections[index],
                start: "top 50%",
                end: `bottom ${index === navbarLinkHRs.length - 1 ? "100%" : "50%"}`,
                scrub: true,
            }
        });
    });


    return { navbarLinksfadingInAnimation, navbarLinkHRsWidthAnimation };
};