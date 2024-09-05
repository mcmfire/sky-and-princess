"use client";

import { useEffect, useState } from "react";
import { useGSAP } from "@/lib/gsap";
import { animateProgressBar } from "./animation";

interface ProgressBarProps {
    label: string;
    group: string;
    progress?: number;
    smWidth?: string;
    lgWidth?: string;
};

const ProgressBar = ({ label, group, progress = 0, smWidth = "full", lgWidth = "full" }: ProgressBarProps) => {
    const [polygon, setPolygon] = useState<string>("");

    useEffect(() => {
        setPolygon(window.innerWidth > 1024 ?
            "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)" :
            "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)");
        animateProgressBar(label, group, progress);
    }, []);

    useGSAP(() => {
        if (polygon) {
            const progressBarContainer = document.querySelectorAll(".progress-bar-container");

            if (!progressBarContainer) return;

            progressBarContainer.forEach((container) => {
                container.classList.remove("opacity-0");
            });
        }
    }, [polygon]);

    return (
        <div className={`flex justify-between items-center max-sm:w-${smWidth} sm:w-${lgWidth} h-5 gap-5`}>
            <label htmlFor={`${group}-${label}`} className="truncate sm:w-1/4 max-sm:w-[30%] font-[PoppinsLight] text-lg">{label}</label>
            <div id={`${group}-${label}`} className="progress-bar-container relative sm:w-3/4 max-sm:w-[70%] h-full opacity-0" style={{ clipPath: polygon }}>
                <div id={label} className={`progress z-10 absolute flex w-[${progress}%] h-full bg-gradient-to-r from-[--theme-color-bg] to-[--theme-color-bg-light]`}>

                </div>
                <div className={`progress-bar absolute flex w-full h-full bg-gray-300`}>

                </div>
            </div>
        </div>
    );
};

export default ProgressBar;