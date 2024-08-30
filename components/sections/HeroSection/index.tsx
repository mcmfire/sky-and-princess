"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { animateHeroTitle, animateSAPLogo } from "./animation";
import HeroImage from "@/public/images/hero.webp";
import SapLogoImage from "@/public/images/sap-logo.webp";

const HeroSection = () => {
    const sapLogoRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        const sapLogo = sapLogoRef.current;
        const heroTitleContainer = document.getElementById("hero-title-container") as HTMLDivElement;

        const animationTimeline = gsap.timeline();

        if (!sapLogo || !heroTitleContainer) return;

        animationTimeline.add(animateSAPLogo(sapLogo));
        animationTimeline.add(animateHeroTitle(heroTitleContainer));
    }, {});

    return (
        <section className="relative flex-col">
            <div className="z-10 flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-20">
                <div className="flex flex-col justify-center items-center">
                    <Image ref={sapLogoRef} src={SapLogoImage} alt="SAP Logo" className="w-32 h-auto translate-y-full" />
                    <div id="hero-title-container" className="opacity-0">
                        <h1 className="sm:text-9xl max-sm:text-8xl -mt-5">Sky & Princess</h1>
                        <div className="flex flex-col w-full h-full mt-3 gap-3">
                            <hr />
                            <p className="self-center sm:text-2xl max-sm:text-xl">WE ARE GETTING MARRIED</p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
            <Image src={HeroImage} alt="Hero" className="absolute w-full h-full" 
                layout="fill" objectFit="cover" objectPosition="center"/>
        </section>
    );
};

export default HeroSection;