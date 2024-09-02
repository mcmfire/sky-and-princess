"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { gsap, useGSAP } from "@/lib/gsap";
import { CHURCH_NAME, PROGRAM_SECTION_CHURCH_GMAPS_QR_LINK, PROGRAM_SECTION_CHURCH_ADDRESS, PROGRAM_SECTION_RECEPTION_GMAPS_QR_LINK, PROGRAM_SECTION_RECEPTION_ADDRESS, RECEPTION_NAME } from "@/utils/constants";
import ChurchImage from "@/public/images/church.webp";
import ChurchQRCodeImage from "@/public/images/church-qr-code.webp";
import ReceptionImage from "@/public/images/reception.webp";
import ReceptionQRCodeImage from "@/public/images/reception-qr-code.webp";
import { animateImage, animateQRCode } from "./animation";
import { downloadFirebaseImage } from "@/utils/import";

const Venue = () => {
    const [churchUrl, setChurchUrl] = useState("");
    const [churchQRUrl, setChurchQRUrl] = useState("");
    const [receptionUrl, setReceptionUrl] = useState("");
    const [receptionQRUrl, setReceptionQRUrl] = useState("");
    const churchImageConatinerRef = useRef<HTMLDivElement>(null);
    const receptionImageContainerRef = useRef<HTMLDivElement>(null);

    const fetchImageURL = async () => {
        const churchImageURL = await downloadFirebaseImage("assets/church.webp");
        const churchQRImageURL = await downloadFirebaseImage("assets/church-qr-code.webp");
        const receptionImageURL = await downloadFirebaseImage("assets/reception.webp");
        const receptionQRImageURL = await downloadFirebaseImage("assets/reception-qr-code.webp");

        setChurchUrl(churchImageURL);
        setChurchQRUrl(churchQRImageURL);
        setReceptionUrl(receptionImageURL);
        setReceptionQRUrl(receptionQRImageURL);
    };

    useEffect(() => {
        fetchImageURL();
    }, []);

    useGSAP(() => {
        const churchImageContainer = churchImageConatinerRef.current;
        const churchContainerTitle = document.querySelector("#church-container div p") as HTMLParagraphElement;
        const churchQRCodeContainer = document.querySelector("#church-qr-code-container") as HTMLDivElement;

        if (!churchImageContainer || !churchContainerTitle || !churchQRCodeContainer) return;

        const animationTimeline = gsap.timeline();

        const { fadingInAnimation: churchFadingInAnimation, clippingAnimation: churchClippingAnimation } =
            animateImage(churchImageContainer, churchContainerTitle);

        animationTimeline.add(churchFadingInAnimation);
        animationTimeline.add(churchClippingAnimation);
        animationTimeline.add(animateQRCode(churchQRCodeContainer));

        const receptionImageContainer = receptionImageContainerRef.current;
        const receptionContainerTitle = document.querySelector("#reception-container div p") as HTMLParagraphElement;
        const receptionQRCodeContainer = document.querySelector("#reception-qr-code-container") as HTMLDivElement;

        if (!receptionImageContainer || !receptionContainerTitle || !receptionQRCodeContainer) return;

        const { fadingInAnimation: receptionFadingInAnimation, clippingAnimation: receptionClippingAnimation } =
            animateImage(receptionImageContainer, receptionContainerTitle, "left");

        animationTimeline.add(receptionFadingInAnimation);
        animationTimeline.add(receptionClippingAnimation);
        animationTimeline.add(animateQRCode(receptionQRCodeContainer));

        return () => {
            animationTimeline.kill();
        }
    }, {});

    return (
        <div className="flex flex-col justify-center items-center w-full h-full py-10 gap-10">
            <div id="church-container" className="flex flex-col justify-center items-center w-full h-full">
                <h3 className="font-[AmedaRegular] sm:text-5xl max-sm:text-2xl">
                    Venue (Church)
                </h3>
                <div className="relative flex flex-col justify-center items-center w-full h-max">
                    <div ref={churchImageConatinerRef} id="church-image-container" className="w-full h-full bg-gradient-to-tl from-[--theme-color-bg] to-[--theme-color-bg-light] opacity-0">
                        <div className="relative aspect-video">
                            <Image src={churchUrl ? churchUrl : ChurchImage}
                                alt={`Church`} fill placeholder="blur"
                                blurDataURL={ChurchImage.blurDataURL}
                                style={{ objectFit: "cover", objectPosition: "top" }} />
                        </div>
                    </div>
                    <div className="absolute self-center text-white sm:text-5xl max-sm:text-3xl">
                        <p className="uppercase font-[AmedaRegular] text-center">{CHURCH_NAME}</p>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full sm:px-10 gap-5">
                    <div className="flex flex-col items-center">
                        <p className="text-2xl font-[PoppinsLight] font-bold">SCAN ME</p>
                        <div id="church-qr-code-container" className="flex w-max h-max shadow-sm shadow-black opacity-0">
                            <Image src={churchQRUrl ? churchQRUrl : ChurchQRCodeImage}
                                alt={`ChurchQRCode`} placeholder="blur"
                                blurDataURL={ChurchQRCodeImage.blurDataURL} width={224} height={224}/>
                        </div>
                    </div>
                    <p className="text-xl font-[PoppinsLight]">OR</p>
                    <Link href={PROGRAM_SECTION_CHURCH_GMAPS_QR_LINK} target="_blank" rel="noreferrer"
                        className="w-max h-max p-4 font-[PoppinsLight] text-white text-nowrap bg-[--theme-color-fg] rounded-lg shadow-md shadow-black">
                        View on Google Maps
                    </Link>
                    <div className="flex sm:max-xl:flex-col max-sm:flex-col items-center px-5 gap-5">
                        <FaLocationDot className="text-5xl text-[--theme-color-fg]" />
                        <p className="font-[PoppinsLight] font-bold sm:text-3xl max-sm:text-xl text-center">
                            {PROGRAM_SECTION_CHURCH_ADDRESS}
                        </p>
                    </div>
                </div>
            </div>
            <div id="reception-container" className="flex flex-col justify-center items-center w-full h-full">
                <h3 className="font-[AmedaRegular] sm:text-5xl max-sm:text-2xl">
                    Venue (Reception)
                </h3>
                <div className="relative flex flex-col justify-center items-center w-full h-max">
                    <div ref={receptionImageContainerRef} id="reception-image-container" className="w-full h-full bg-gradient-to-tl from-[--theme-color-bg] to-[--theme-color-bg-light] opacity-0">
                        <div className="relative aspect-video">
                            <Image src={receptionUrl ? receptionUrl : ReceptionImage}
                                alt={`Reception`} fill placeholder="blur"
                                blurDataURL={ReceptionImage.blurDataURL}
                                style={{ objectFit: "cover", objectPosition: "top" }} />
                        </div>
                    </div>
                    <div className="absolute self-center text-white sm:text-5xl max-sm:text-3xl">
                        <p className="uppercase font-[AmedaRegular] text-center">{RECEPTION_NAME}</p>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full sm:px-10 gap-5">
                    <div className="flex flex-col items-center">
                        <p className="text-2xl font-[PoppinsLight] font-bold">SCAN ME</p>
                        <div id="reception-qr-code-container" className="flex w-max h-max shadow-sm shadow-black opacity-0">
                            <Image src={receptionQRUrl ? receptionQRUrl : ReceptionQRCodeImage} placeholder="blur"
                                blurDataURL={ReceptionQRCodeImage.blurDataURL}
                                alt="ReceptionQRCode" width={224} height={224}/>
                        </div>
                    </div>
                    <p className="text-xl font-[PoppinsLight]">OR</p>
                    <Link href={PROGRAM_SECTION_RECEPTION_GMAPS_QR_LINK} target="_blank" rel="noreferrer"
                        className="w-max h-max p-4 font-[PoppinsLight] text-white text-nowrap bg-[--theme-color-fg] rounded-lg shadow-md shadow-black">
                        View on Google Maps
                    </Link>
                    <div className="flex sm:max-xl:flex-col max-sm:flex-col items-center px-5 gap-5">
                        <FaLocationDot className="text-5xl text-[--theme-color-fg]" />
                        <p className="font-[PoppinsLight] font-bold sm:text-3xl max-sm:text-xl text-center">
                            {PROGRAM_SECTION_RECEPTION_ADDRESS}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Venue;