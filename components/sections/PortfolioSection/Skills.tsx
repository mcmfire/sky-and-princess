"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import GroomImage from "@/public/images/groom-profile.webp";
import BrideImage from "@/public/images/bride-profile.webp";
import { BRIDE_NAME, GROOM_NAME, PORTFOLIO_SECTION_BRIDE_SKILLS, PORTFOLIO_SECTION_GROOM_SKILLS } from "@/utils/constants";
import { toPossessiveForm } from "@/utils/format";
import { downloadFirebaseImage } from "@/utils/import";
import ProgressBar from "@/components/elements/ProgressBar";

const Skills = () => {
    const [groomUrl, setGroomUrl] = useState("");
    const [brideUrl, setBrideUrl] = useState("");

    const fetchImageURL = async () => {
        const groomImageURL = await downloadFirebaseImage("assets/groom-profile.webp");
        const brideImageURL = await downloadFirebaseImage("assets/bride-profile.webp");

        setGroomUrl(groomImageURL);
        setBrideUrl(brideImageURL);
    };

    useEffect(() => {
        fetchImageURL();
    }, []);

    return (
        <div className="flex sm:max-xl:flex-col sm:max-xl:items-center max-sm:flex-col w-full p-5 md:gap-5">
            <div id={`${GROOM_NAME.toLowerCase()}-skills-container`} className={`${GROOM_NAME.toLowerCase()} flex max-sm:flex-col sm:w-full`}>
                <div className="shrink-0 sm:w-1/2 md:w-1/3 max-sm:w-full h-auto p-5 bg-white shadow-md shadow-black">
                    <div className="relative aspect-square">
                        <Image src={groomUrl ? groomUrl : GroomImage}
                            alt={`${GROOM_NAME}Profile`} fill placeholder="blur"
                            blurDataURL={GroomImage.blurDataURL}
                            style={{ objectFit: "cover", objectPosition: "top" }} />
                    </div>
                </div>
                <div className="flex flex-col md:justify-center w-full p-5 gap-5">
                    <label className="font-[PoppinsLight] font-bold text-3xl">
                        {toPossessiveForm(GROOM_NAME)} Skills
                    </label>
                    <div id="" className="flex flex-col w-full gap-5">
                        {PORTFOLIO_SECTION_GROOM_SKILLS.map((skill, index) => (
                            <ProgressBar key={`${skill.label}-${index}`} label={skill.label} group={GROOM_NAME.toLowerCase()} progress={skill.progress} />
                        ))}
                    </div>
                </div>
            </div>
            <div id={`${BRIDE_NAME.toLowerCase()}-skills-container`} className={`${BRIDE_NAME.toLowerCase()} flex max-sm:flex-col sm:w-full`}>
                <div className="shrink-0 sm:w-1/2 md:w-1/3 max-sm:w-full h-auto p-5 bg-white shadow-md shadow-black">
                    <div className="relative aspect-square">
                        <Image src={brideUrl ? brideUrl : BrideImage}
                            alt={`${BRIDE_NAME}Profile`} fill placeholder="blur"
                            blurDataURL={BrideImage.blurDataURL}
                            style={{ objectFit: "cover", objectPosition: "top" }} />
                    </div>
                </div>
                <div className="flex flex-col md:justify-center w-full p-5 gap-5">
                    <h3 className="font-[PoppinsLight] font-bold text-3xl">
                        {toPossessiveForm(BRIDE_NAME)} Skills
                    </h3>
                    <div className="flex flex-col w-full gap-5">
                        {PORTFOLIO_SECTION_BRIDE_SKILLS.map((skill, index) => (
                            <ProgressBar key={`${skill.label}-${index}`} label={skill.label} group={BRIDE_NAME.toLowerCase()} progress={skill.progress} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;