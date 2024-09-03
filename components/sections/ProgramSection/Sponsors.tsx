"use client";

import { IoHeart } from "react-icons/io5";
import { useGSAP } from "@/lib/gsap";
import { PROGRAM_SECTION_SPONSORS } from "@/utils/constants";
import { animateCard } from "./animation";

const Sponsors = () => {
    useGSAP(() => {
        animateCard(".sponsor-card", "#sponsor-container");

        return () => {
            animateCard(".sponsor-card", "#sponsor-container").kill();
        }
    }, {});

    return (
        <div id="sponsor-container" className="flex flex-col items-center w-full px-5 py-10 gap-10 sm:max-xl:gap-10">
            <h3>Principal Sponsors</h3>
            <div className="sponsor-card-container flex flex-wrap max-sm:flex-col justify-center max-sm:items-center w-full gap-5">
                {PROGRAM_SECTION_SPONSORS.map((sponsor, index) => (
                    <div key={`${sponsor.role}-${index}`} className={`sponsor-card flex max-sm:flex-col max-sm:justify-center items-center w-80 h-max p-5 gap-3 text-white bg-gradient-to-tl from-rose-900 to-rose-600 rounded-lg shadow-md shadow-black`}>
                        <IoHeart className="text-4xl" />
                        <div className="flex flex-col justify-center max-sm:items-center w-auto h-full">
                            <p id={`${sponsor.name}-${index + 1}`} className="sponsor-name font-bold">{sponsor.name}</p>
                            <label htmlFor={`${sponsor.name}-${index + 1}`} className="sponsor-role opacity-80">{sponsor.role}</label>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sponsors;