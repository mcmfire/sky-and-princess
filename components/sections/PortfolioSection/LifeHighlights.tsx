"use client";

import { useRef } from "react";
import { FaCross } from "react-icons/fa";
import { MdAddBusiness, MdTravelExplore } from "react-icons/md";
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
        <div className="flex max-sm:flex-col justify-evenly items-center w-full text-white bg-gradient-to-tl from-[--theme-color-bg] to-[--theme-color-bg-light] text-center">
            {PORTFOLIO_SECTION_LIFE_HIGHLIGHTS.map((highlight, index) => (
                <div key={`highlight-${index}`} className="highlights flex flex-col justify-center items-center sm:w-1/3 max-sm:w-full max-sm:h-1/3 sm:p-20 sm:max-xl:p-12 max-sm:p-10 gap-3">
                    {index === 0 && (<MdAddBusiness className="text-5xl" />)}
                    {index === 1 && (<MdTravelExplore className="text-5xl" />)}
                    {index === 2 && (<FaCross className="text-5xl" />)}
                    <div className="flex flex-col w-full gap-3">
                        <label htmlFor={`highlight-${index + 1}`} className="font-[PoppinsLight] font-bold text-2xl">
                            {highlight.title || `Highlight ${index + 1}`}
                        </label>
                        <p id={`highlight-${index + 1}`} className="opacity-80">
                            {highlight.content || `Highlight Content ${index + 1}`}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LifeHighlights;