"use client";

import { useRef } from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { useGSAP } from "@/lib/gsap";
import { PORTFOLIO_SECTION_ABOUT_US_CONTENT } from "@/utils/constants";
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
    }, {});

    return (
        <div className="flex flex-col items-center px-5">
            <div className="flex flex-col items-center sm:w-1/3 max-sm:w-full">
                <h2 className="font-[AmedaRegular] font-bold text-[--theme-color-fg] text-3xl">About Us</h2>
                <div className="flex items-center w-full gap-5">
                    <hr className="w-full border border-[--theme-color-fg]" />
                    <FaRegHeart className="text-[--theme-color-bg] text-5xl" />
                    <hr className="w-full border border-[--theme-color-fg]" />
                </div>
            </div>
            <div className="flex max-sm:flex-col gap-10">
                <div ref={aboutUsImageContainerRef} className="shrink-0 sm:w-1/3 max-sm:w-full h-full p-5 bg-white shadow-sm shadow-black">
                    <Image src={AboutUsImage} alt="AboutUs" className="w-full h-full" />
                </div>
                <div ref={aboutUsContentRef} className="flex max-sm:justify-center sm:items-center w-full">
                    <p className="font-[PoppinsLight] text-3xl max-sm:text-center">{PORTFOLIO_SECTION_ABOUT_US_CONTENT}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;