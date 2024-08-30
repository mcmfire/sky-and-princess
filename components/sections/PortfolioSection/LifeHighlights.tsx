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
    }, {});

    return (
        <div className="flex max-sm:flex-col justify-evenly items-center w-full text-white bg-[--theme-color-bg] text-center">
            <div className="highlights flex flex-col justify-center items-center sm:w-1/3 max-sm:w-full max-sm:h-1/3 sm:p-20 max-sm:p-10 gap-3">
                <MdAddBusiness className="text-5xl" />
                <div className="flex flex-col w-full">
                    <h3 className="font-[PoppinsLight] font-bold text-2xl">
                        {PORTFOLIO_SECTION_LIFE_HIGHLIGHTS[0].title || "Highlight 1"}
                    </h3>
                    <p className="opacity-80">
                        {PORTFOLIO_SECTION_LIFE_HIGHLIGHTS[0].content || "Highlight Content 1"}
                    </p>
                </div>
            </div>
            <div className="highlights flex flex-col justify-center items-center sm:w-1/3 max-sm:w-full max-sm:h-1/3 sm:p-20 max-sm:p-10 gap-3">
                <MdTravelExplore className="text-5xl" />
                <div className="flex flex-col w-full">
                    <h3 className="font-[PoppinsLight] font-bold text-2xl">
                        {PORTFOLIO_SECTION_LIFE_HIGHLIGHTS[1].title || "Highlight 2"}
                    </h3>
                    <p className="opacity-80">
                        {PORTFOLIO_SECTION_LIFE_HIGHLIGHTS[1].content || "Highlight Content 2"}
                    </p>
                </div>
            </div>
            <div className="highlights flex flex-col justify-center items-center sm:w-1/3 max-sm:w-full max-sm:h-1/3 sm:p-20 max-sm:p-10 gap-3">
                <FaCross className="text-5xl" />
                <div className="flex flex-col w-full">
                    <h3 className="font-[PoppinsLight] font-bold text-2xl">
                        {PORTFOLIO_SECTION_LIFE_HIGHLIGHTS[2].title || "Highlight 3"}
                    </h3>
                    <p className="opacity-80">
                        {PORTFOLIO_SECTION_LIFE_HIGHLIGHTS[2].content || "Highlight Content 3"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LifeHighlights;