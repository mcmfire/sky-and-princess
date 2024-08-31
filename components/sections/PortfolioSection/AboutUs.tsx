"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@/lib/gsap";
import { PORTFOLIO_SECTION_ABOUT_US_CONTENT_ONE, PORTFOLIO_SECTION_ABOUT_US_CONTENT_TWO } from "@/utils/constants";
import AboutUsImage from "@/public/images/about-us.webp";
import { animateAboutUsContent, animateAboutUsImage } from "./animation";

const AboutUs = () => {
    const aboutUsImageContainerRef = useRef<HTMLDivElement>(null);
    const aboutUsContentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const aboutUsImageContainer = aboutUsImageContainerRef.current;
        const aboutUsContent = aboutUsContentRef.current;

        if (!aboutUsImageContainer || !aboutUsContent) return;

        animateAboutUsImage(aboutUsImageContainer);
        animateAboutUsContent(aboutUsContent);

        return () => {
            animateAboutUsImage(aboutUsImageContainer).kill();
            animateAboutUsContent(aboutUsContent).kill();
        }
    }, {});

    return (
        <div className="flex flex-col items-center px-5">
            <div className="flex max-sm:flex-col gap-10">
                <div ref={aboutUsImageContainerRef} className="shrink-0 sm:w-1/3 max-sm:w-full h-full p-5 bg-white shadow-sm shadow-black">
                    <Image src={AboutUsImage} alt="AboutUs" className="w-full h-full" />
                </div>
                <div ref={aboutUsContentRef} className="flex flex-col max-sm:items-center w-full gap-5">
                    <h4 className="font-[AmedaRegular] text-5xl">ABOUT US</h4>
                    <p className="font-[PoppinsLight] sm:text-3xl max-sm:text-xl max-sm:text-center">
                        {PORTFOLIO_SECTION_ABOUT_US_CONTENT_ONE}
                    </p>
                    <p className="font-[PoppinsLight] sm:text-3xl max-sm:text-xl max-sm:text-center">
                        {PORTFOLIO_SECTION_ABOUT_US_CONTENT_TWO}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;