"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@/lib/gsap";

import { downloadFirebaseImage } from "@/utils/import";
import AboutUsImage from "@/public/images/about-us.webp";
import { animateAboutUsContent, animateAboutUsImage } from "./animation";
import { PORTFOLIO_SECTION_ABOUT_US_CONTENTS } from "@/utils/constants";

const AboutUs = () => {
    const [aboutUsUrl, setAboutUsUrl] = useState("");
    const aboutUsImageContainerRef = useRef<HTMLDivElement>(null);
    const aboutUsContentRef = useRef<HTMLDivElement>(null);

    const fetchImageURL = async () => {
        const aboutUsImageURL = await downloadFirebaseImage("assets/about-us.webp");

        setAboutUsUrl(aboutUsImageURL);
    };

    useEffect(() => {
        fetchImageURL();
    }, []);

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
        <div className="flex flex-col items-center px-10">
            <div className="flex sm:max-xl:flex-col sm:max-xl:items-center max-sm:flex-col gap-10">
                <div ref={aboutUsImageContainerRef} className="shrink-0 sm:w-1/3 sm:max-xl:w-1/2 max-sm:w-full sm:h-1/3 sm:max-xl:h-1/2 max-sm:h-full p-5 bg-white shadow-sm shadow-black">
                    <div className="relative aspect-square">
                        <Image src={aboutUsUrl ? aboutUsUrl : AboutUsImage} alt="AboutUs" fill sizes="100%" placeholder="blur"
                            blurDataURL={AboutUsImage.blurDataURL}
                            style={{ objectFit: "cover", objectPosition: "top" }} />
                    </div>
                </div>
                <div ref={aboutUsContentRef} className="flex flex-col sm:max-xl:items-center max-sm:items-center w-full h-full gap-5">
                    <h3>ABOUT US</h3>
                    {PORTFOLIO_SECTION_ABOUT_US_CONTENTS.map((content, index) => (
                        <p key={`about-us-${index + 1}`} className="font-[PoppinsLight] text-xl sm:max-xl:text-center max-sm:text-center">
                            {content}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;