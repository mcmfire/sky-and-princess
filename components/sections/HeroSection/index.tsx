"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { GROOM_NAME, BRIDE_NAME, HASHTAG } from "@/utils/constants";
import { animateHeroTitle, animateLogo } from "./animation";
import HeroImage from "@/public/images/hero.webp";
import heroLogoImage from "@/public/images/logo.webp";

const HeroSection = () => {
    const heroLogoRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        const heroLogo = heroLogoRef.current;
        const heroTitleContainer = document.getElementById("hero-title-container") as HTMLDivElement;

        const animationTimeline = gsap.timeline();

        if (!heroLogo || !heroTitleContainer) return;

        animationTimeline.add(animateLogo(heroLogo));
        animationTimeline.add(animateHeroTitle(heroTitleContainer));

        return () => {
            animationTimeline.kill();
        };
    }, {});

    return (
        <section id="hero-section" className="relative flex-col">
            <div className="z-10 flex flex-col justify-center items-center w-full h-screen bg-black bg-opacity-30">
                <div className="flex flex-col justify-center items-center opacity-90">
                    <Image ref={heroLogoRef} src={heroLogoImage} alt="HeroLogo" className="w-32 h-auto translate-y-full"/>
                    <div id="hero-title-container" className="flex flex-col items-center justify-center sm:gap-5 max-sm:gap-3 opacity-0">
                        <h1 className="sm:text-[9rem] max-sm:text-8xl -mt-5 font-[AmsterdamSignatureRegular]"
                            style={{lineHeight: 0.75}}>
                            {GROOM_NAME} & {BRIDE_NAME}
                        </h1>
                        <div className="flex flex-col w-full h-full mt-3 gap-3">
                            <hr />
                            <p className="self-center sm:text-2xl max-sm:text-xl">WE&apos;RE GETTING MARRIED</p>
                            <hr />
                        </div>
                        <p className="text-lg">{HASHTAG}</p>
                    </div>
                </div>
            </div>
            <Image src={HeroImage} alt="Hero" className="absolute w-full h-full" fill priority 
                style={{objectFit: "cover", objectPosition: "center"}}/>
        </section>
    );
};

export default HeroSection;