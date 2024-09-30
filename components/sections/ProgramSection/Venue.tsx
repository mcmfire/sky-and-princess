"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { gsap, useGSAP } from "@/lib/gsap";
import {
    CHURCH_NAME,
    PROGRAM_SECTION_CHURCH_GMAPS_LINK,
    PROGRAM_SECTION_CHURCH_ADDRESS,
    PROGRAM_SECTION_RECEPTION_GMAPS_LINK,
    PROGRAM_SECTION_RECEPTION_ADDRESS,
    RECEPTION_NAME
} from "@/utils/constants";
import ChurchImage from "@/public/images/church.webp";
import ReceptionImage from "@/public/images/reception.webp";
import { animateImage } from "./animation";
import { downloadFirebaseImage } from "@/utils/import";

const Venue = () => {
    const [churchUrl, setChurchUrl] = useState("");
    const [receptionUrl, setReceptionUrl] = useState("");
    const churchImageConatinerRef = useRef<HTMLDivElement>(null);
    const receptionImageContainerRef = useRef<HTMLDivElement>(null);

    const fetchImageURL = async () => {
        const churchImageURL = await downloadFirebaseImage("assets/church.webp");
        const receptionImageURL = await downloadFirebaseImage("assets/reception.webp");

        setChurchUrl(churchImageURL);
        setReceptionUrl(receptionImageURL);
    };

    useEffect(() => {
        fetchImageURL();
    }, []);

    useGSAP(() => {
        const churchImageContainer = churchImageConatinerRef.current;
        const churchContainerTitle = document.querySelector("#church-container div label:not(.scan-me)") as HTMLLabelElement;

        if (!churchImageContainer || !churchContainerTitle) return;

        const animationTimeline = gsap.timeline();

        const { fadingInAnimation: churchFadingInAnimation, clippingAnimation: churchClippingAnimation } =
            animateImage(churchImageContainer, churchContainerTitle);

        animationTimeline.add(churchFadingInAnimation);
        animationTimeline.add(churchClippingAnimation);

        const receptionImageContainer = receptionImageContainerRef.current;
        const receptionContainerTitle = document.querySelector("#reception-container div label:not(.scan-me)") as HTMLLabelElement;

        if (!receptionImageContainer || !receptionContainerTitle) return;

        const { fadingInAnimation: receptionFadingInAnimation, clippingAnimation: receptionClippingAnimation } =
            animateImage(receptionImageContainer, receptionContainerTitle, "left");

        animationTimeline.add(receptionFadingInAnimation);
        animationTimeline.add(receptionClippingAnimation);

        return () => {
            animationTimeline.kill();
        }
    }, {});

    return (
        <div className="flex flex-col justify-center items-center w-full h-full py-10 gap-10">
            <div id="church-container" className="flex flex-col justify-center items-center w-full h-full gap-5">
                <h3>Ceremony</h3>
                <div className="relative flex flex-col justify-center items-center w-full h-max">
                    <div ref={churchImageConatinerRef} id="church-image-container" className="w-full h-full bg-gradient-to-tl from-[--theme-color-bg] to-[--theme-color-bg-light] opacity-0">
                        <div className="relative aspect-video">
                            <Image src={churchUrl ? churchUrl : ChurchImage}
                                alt={`Church`} fill sizes="100%" placeholder="blur"
                                blurDataURL={ChurchImage.blurDataURL} loading="lazy"
                                style={{ objectFit: "cover", objectPosition: "top" }} />
                        </div>
                    </div>
                    <div className="absolute self-center text-center">
                        <label htmlFor="church-image-container" className="uppercase font-[AmedaRegular] sm:text-5xl max-sm:text-3xl text-center text-white">{CHURCH_NAME}</label>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full sm:px-10 gap-5">
                    <div className="flex flex-col items-center w-full gap-5 text-center">
                        <p className="font-[PoppinsLight] sm:text-2xl max-sm:text-lg">The <span className="italic font-bold">ceremony</span> will be held at</p>
                        <div className="flex sm:max-xl:flex-col max-sm:flex-col items-center px-5 gap-5">
                            <FaLocationDot className="text-5xl text-[--theme-color-bg-light]" />
                            <address className="font-[PoppinsLight] font-bold sm:text-2xl max-sm:text-lg">
                                {PROGRAM_SECTION_CHURCH_ADDRESS}
                            </address>
                        </div>
                        <Link href={PROGRAM_SECTION_CHURCH_GMAPS_LINK} target="_blank" rel="noreferrer"
                            className="w-max h-max p-4 font-[PoppinsLight] text-white text-nowrap bg-[--theme-color-bg-light] rounded-lg shadow-md shadow-black">
                            View on Google Maps
                        </Link>
                    </div>
                </div>
            </div>
            <div id="reception-container" className="flex flex-col justify-center items-center w-full h-full gap-5">
                <h3>Reception</h3>
                <div className="relative flex flex-col justify-center items-center w-full h-max">
                    <div ref={receptionImageContainerRef} id="reception-image-container" className="w-full h-full bg-gradient-to-tl from-[--theme-color-bg] to-[--theme-color-bg-light] opacity-0">
                        <div className="relative aspect-video">
                            <Image src={receptionUrl ? receptionUrl : ReceptionImage}
                                alt={`Reception`} fill sizes="100%" placeholder="blur"
                                blurDataURL={ReceptionImage.blurDataURL} loading="lazy"
                                style={{ objectFit: "cover", objectPosition: "top" }} />
                        </div>
                    </div>
                    <div className="absolute self-center text-center">
                        <label htmlFor="reception-image-container" className="uppercase font-[AmedaRegular] sm:text-5xl max-sm:text-3xl text-center text-white">{RECEPTION_NAME}</label>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full sm:px-10 gap-5">
                    <div className="flex flex-col items-center w-full gap-5 text-center">
                        <p className="font-[PoppinsLight] sm:text-2xl max-sm:text-lg">The <span className="italic font-bold">reception</span> will be held at</p>
                        <div className="flex sm:max-xl:flex-col max-sm:flex-col items-center px-5 gap-5">
                            <FaLocationDot className="text-5xl text-[--theme-color-bg-light]" />
                            <address className="font-[PoppinsLight] font-bold sm:text-2xl max-sm:text-lg">
                                {PROGRAM_SECTION_RECEPTION_ADDRESS}
                            </address>
                        </div>
                        <Link href={PROGRAM_SECTION_RECEPTION_GMAPS_LINK} target="_blank" rel="noreferrer"
                            className="w-max h-max p-4 font-[PoppinsLight] text-white text-nowrap bg-[--theme-color-bg-light] rounded-lg shadow-md shadow-black">
                            View on Google Maps
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Venue;