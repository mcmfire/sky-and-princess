"use client";

import { RiHomeHeartFill } from "react-icons/ri";
import { LuBaby } from "react-icons/lu";
import { IoAirplane } from "react-icons/io5";
import { useGSAP } from "@/lib/gsap";
import { PORTFOLIO_SECTION_LIFE_HIGHLIGHTS } from "@/utils/constants";
import { animateLifeHighlights } from "./animation";

const LifeHighlights = () => {
    useGSAP(() => {
        animateLifeHighlights();

        return () => {
            animateLifeHighlights().kill();
        }
    }, {});

    return (
        <div className="flex flex-col items-center w-full sm:pt-20 sm:max-xl:pt-12 max-sm:pt-5 gap-5 text-white bg-gradient-to-tl from-[--theme-color-bg] to-[--theme-color-bg-light] text-center">
            <h3>Couple Goals</h3>
            <div className="flex max-sm:flex-col justify-evenly items-center w-full">
            {PORTFOLIO_SECTION_LIFE_HIGHLIGHTS.map((highlight, index) => (
                <div key={`highlight-${index}`} className="highlights flex flex-col justify-center items-center sm:w-1/3 max-sm:w-full max-sm:h-1/3 sm:px-20 sm:pb-20 sm:max-xl:px-12 sm:max-xl:pb-12 max-sm:px-10 max-sm:pb-10 gap-3">
                    {index === 0 && (<IoAirplane className="text-5xl" />)}
                    {index === 1 && (<RiHomeHeartFill className="text-5xl" />)}
                    {index === 2 && (<LuBaby className="text-5xl" />)}
                    <div className="flex flex-col w-full gap-3">
                        <p id={`highlight-${index + 1}`} className="font-bold text-xl opacity-80">
                            {highlight.content || `Highlight Content ${index + 1}`}
                        </p>
                    </div>
                </div>
            ))}
            </div>
            
        </div>
    );
};

export default LifeHighlights;