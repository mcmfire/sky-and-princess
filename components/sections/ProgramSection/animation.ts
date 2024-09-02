"use client";

import { gsap } from "@/lib/gsap";

export const animateImage = (imageContainer: HTMLDivElement, imageContainerTitle: HTMLParagraphElement, side:string="right") => {
    let startPolygon: string = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

    let endPolygon: string = window.innerWidth > 1024 ?
        "polygon(0% 0, 100% 50%, 100% 100%, 0% 50%)":
        "polygon(0% 20%, 100% 40%, 100% 80%, 0% 60%)";

    if (side === "left") {
        endPolygon = window.innerWidth > 1024 ?
            "polygon(0% 50%, 100% 0%, 100% 50%, 0% 100%)":
            "polygon(0% 40%, 100% 20%, 100% 60%, 0% 80%)";
    }

    const fadingInAnimation = gsap.to(imageContainer, {
        opacity: 1,
        duration: 1,
    });

    const clippingAnimation = gsap.fromTo(imageContainer, {
        clipPath: startPolygon,
    }, {
        clipPath: endPolygon,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: imageContainerTitle,
            start: "top 50%",
            end: "bottom 50%",
            scrub: 1,
        }
    });

    return { fadingInAnimation, clippingAnimation };
};

export const animateQRCode = (qrCodeContainer: HTMLDivElement) => {
    const rotatingAnimation = gsap.to(qrCodeContainer, {
        rotateX: 360,
        rotateY: 360,
        rotateZ: 360,
        opacity: 1,
        duration: 1,
        ease: "linear",
        scrollTrigger: {
            trigger: qrCodeContainer,
            start: "top 90%",
            end: "bottom 80%",
            scrub: window.innerWidth > 1024 ? 1 : false,
        }
    });

    return rotatingAnimation;
};

export const animateCard = (cardsClass: string, cardsContainer: string) => {
    const fadingInAnimation = gsap.fromTo(cardsClass, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: window.innerWidth > 1024 ? 3 : 1,
        stagger: window.innerWidth > 1024 ? 1 : 0.5,
        scrollTrigger: {
            trigger: cardsContainer,
            start: "top 80%",
            end: "bottom 90%",
            scrub: window.innerWidth > 1024 ? 1 : false,
        }
    });

    return fadingInAnimation;
};