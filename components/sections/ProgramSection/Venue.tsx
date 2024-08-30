"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { useGSAP } from "@/lib/gsap";
import { PROGRAM_SECTION_VENUE_NAME, PROGRAM_SECTION_VENUE_GMAPS_QR_LINK, PROGRAM_SECTION_VENUE_ADDRESS } from "@/utils/constants";
import VenueImage from "@/public/images/venue.webp";
import VenueQRCodeImage from "@/public/images/venue-qr-code.webp";
import { animateEntourageCard, animateVenueImage, animateVenueQRCode } from "./animation";

const Venue = () => {
    const venueImageConatinerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const venueImageContainer = venueImageConatinerRef.current;

        if (!venueImageContainer) return;

        animateVenueImage(venueImageContainer);
        animateVenueQRCode();
        animateEntourageCard();
    }, {});

    return (
        <div id="venue-container" className="flex flex-col justify-center items-center w-full">
            <div className="relative flex justify-center items-center w-full h-screen">
                <div ref={venueImageConatinerRef} id="venue-image-container" className="w-full h-1/2 bg-[--theme-color-bg]">
                    <Image src={VenueImage} alt="Venue" layout="fill" objectFit="cover" />
                </div>
                <div className="absolute text-white sm:text-5xl max-sm:text-3xl">
                    <p className="font-[AmedaRegular]">{PROGRAM_SECTION_VENUE_NAME}</p>
                </div>
            </div>
            <div className="flex flex-col items-center w-full h-screen sm:px-10 gap-5">
                <div className="flex flex-col items-center">
                    <p className="text-2xl font-[PoppinsLight] font-bold">SCAN ME</p>
                    <div id="venue-qr-code-container" className="flex w-max h-max shadow-sm shadow-black opacity-0">
                        <Image src={VenueQRCodeImage} alt="VenueQRCode" className="w-56 h-56" />
                    </div>
                </div>
                <p className="text-xl font-[PoppinsLight]">OR</p>
                <Link href={PROGRAM_SECTION_VENUE_GMAPS_QR_LINK} target="_blank" rel="noreferrer"
                    className="w-max h-max p-4 font-[PoppinsLight] text-white text-nowrap bg-[--theme-color-fg] rounded-lg">
                    View on Google Maps
                </Link>
                <div className="flex max-sm:flex-col items-center px-5 gap-5">
                    <FaLocationDot className="text-5xl text-[--theme-color-fg]" />
                    <p className="font-[PoppinsLight] font-bold sm:text-3xl max-sm:text-xl text-center">
                        {PROGRAM_SECTION_VENUE_ADDRESS}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Venue;