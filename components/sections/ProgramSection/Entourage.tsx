"use client";

import { FaAward, FaBible, FaStar } from "react-icons/fa";
import { GiBigDiamondRing, GiCandleLight, GiCloak, GiHighHeel, GiRopeCoil, GiTopHat } from "react-icons/gi";
import { RiCoinFill, RiFlowerFill } from "react-icons/ri";
import { useGSAP } from "@/lib/gsap";
import { PROGRAM_SECTION_ENTOURAGE } from "@/utils/constants";
import { animateCard } from "./animation";

const Entourage = () => {
    useGSAP(() => {
        animateCard(".entourage-card", "#entourage-container");

        return () => {
            animateCard(".entourage-card", "#entourage-container").kill();
        }
    }, {});

    return (
        <div id="entourage-container" className="flex flex-col items-center w-full px-5 py-10 gap-10 sm:max-xl:gap-10">
            <h3>Entourage</h3>
            <div className="entourage-card-container flex flex-wrap max-sm:flex-col justify-center max-sm:items-center w-full gap-5">
                {PROGRAM_SECTION_ENTOURAGE.tier_one.map((entourage, index) => (
                    <div key={`${entourage.role}-${index}`} className={`entourage-card flex max-sm:flex-col max-sm:justify-center items-center w-80 h-max p-5 gap-3 text-white bg-gradient-to-tl ${entourage.role === "BESTMAN" ? "from-blue-900 to-blue-600" : "from-red-900 to-red-600"} rounded-lg shadow-md shadow-black`}>
                        {entourage.role === "BESTMAN" && (<FaAward className="text-4xl" />)}
                        {entourage.role === "MATRON OF HONOR" && (<FaStar className="text-4xl" />)}
                        <div className="flex flex-col justify-center max-sm:items-center w-auto h-full">
                            <p id={`${entourage.name}-${index + 1}`} className="entourage-name font-bold">{entourage.name}</p>
                            <label htmlFor={`${entourage.name}-${index + 1}`} className="entourage-role opacity-80">{entourage.role}</label>
                        </div>
                    </div>
                ))}
                {PROGRAM_SECTION_ENTOURAGE.tier_two.filter((entourage) => entourage.role === "GROOMSMAN").map((entourage, index) => (
                    <div key={`${entourage.role}-${index}`} className="entourage-card flex max-sm:flex-col max-sm:justify-center items-center w-80 h-max p-5 gap-3 text-white bg-gradient-to-tl from-sky-500 to-sky-400 rounded-lg shadow-md shadow-black">
                        <GiTopHat className="text-4xl" />
                        <div className="flex flex-col justify-center max-sm:items-center w-auto h-full">
                            <p id={`${entourage.name}-${index + 1}`} className="entourage-name font-bold">{entourage.name}</p>
                            <label htmlFor={`${entourage.name}-${index + 1}`} className="entourage-role opacity-80">{entourage.role}</label>
                        </div>
                    </div>
                ))}
                {PROGRAM_SECTION_ENTOURAGE.tier_two.filter((entourage) => entourage.role === "BRIDESMAID").map((entourage, index) => (
                    <div key={`${entourage.role}-${index}`} className="entourage-card flex max-sm:flex-col max-sm:justify-center items-center w-80 h-max p-5 gap-3 text-white bg-gradient-to-tl from-pink-500 to-pink-400 rounded-lg shadow-md shadow-black">
                        <GiHighHeel className="text-4xl" />
                        <div className="flex flex-col justify-center max-sm:items-center w-auto h-full">
                            <p id={`${entourage.name}-${index + 1}`} className="entourage-name font-bold">{entourage.name}</p>
                            <label htmlFor={`${entourage.name}-${index + 1}`} className="entourage-role opacity-80">{entourage.role}</label>
                        </div>
                    </div>
                ))}
                {PROGRAM_SECTION_ENTOURAGE.tier_three.filter((entourage) => entourage.role === "CANDLE BEARER").map((entourage, index) => (
                    <div key={`${entourage.role}-${index}`} className="entourage-card flex max-sm:flex-col max-sm:justify-center items-center w-80 h-max p-5 gap-3 text-white bg-gradient-to-tl from-yellow-500 to-yellow-400 rounded-lg shadow-md shadow-black">
                        <GiCandleLight className="text-4xl" />
                        <div className="flex flex-col justify-center max-sm:items-center w-auto h-full">
                            <p id={`${entourage.name}-${index + 1}`} className="entourage-name font-bold">{entourage.name}</p>
                            <label htmlFor={`${entourage.name}-${index + 1}`} className="entourage-role opacity-80">{entourage.role}</label>
                        </div>
                    </div>
                ))}
                {PROGRAM_SECTION_ENTOURAGE.tier_three.filter((entourage) => entourage.role === "VEIL BEARER").map((entourage, index) => (
                    <div key={`${entourage.role}-${index}`} className="entourage-card flex max-sm:flex-col max-sm:justify-center items-center w-80 h-max p-5 gap-3 text-white bg-gradient-to-tl from-violet-500 to-violet-400 rounded-lg shadow-md shadow-black">
                        <GiCloak className="text-4xl" />
                        <div className="flex flex-col justify-center max-sm:items-center w-auto h-full">
                            <p id={`${entourage.name}-${index + 1}`} className="entourage-name font-bold">{entourage.name}</p>
                            <label htmlFor={`${entourage.name}-${index + 1}`} className="entourage-role opacity-80">{entourage.role}</label>
                        </div>
                    </div>
                ))}
                {PROGRAM_SECTION_ENTOURAGE.tier_three.filter((entourage) => entourage.role === "CORD BEARER").map((entourage, index) => (
                    <div key={`${entourage.role}-${index}`} className="entourage-card flex max-sm:flex-col max-sm:justify-center items-center w-80 h-max p-5 gap-3 text-white bg-gradient-to-tl from-gray-500 to-gray-400 rounded-lg shadow-md shadow-black">
                        <GiRopeCoil className="text-4xl" />
                        <div className="flex flex-col justify-center max-sm:items-center w-auto h-full">
                            <p id={`${entourage.name}-${index + 1}`} className="entourage-name font-bold">{entourage.name}</p>
                            <label htmlFor={`${entourage.name}-${index + 1}`} className="entourage-role opacity-80">{entourage.role}</label>
                        </div>
                    </div>
                ))}
                <div className="flex max-sm:flex-col flex-wrap justify-center max-sm:items-center w-full gap-5">
                    {PROGRAM_SECTION_ENTOURAGE.tier_four.map((entourage, index) => (
                        <div key={`${entourage.role}-${index}`} className={`entourage-card flex max-sm:flex-col max-sm:justify-center items-center w-80 h-max p-5 gap-3 text-white bg-gradient-to-tl 
                        ${entourage.role === "COIN BEARER" ? "from-yellow-600 to-yellow-500" : ""} 
                        ${entourage.role === "RING BEARER" ? "from-sky-300 to-sky-200" : ""}
                        ${entourage.role === "BIBLE BEARER" ? "from-yellow-900 to-yellow-600" : ""}
                        rounded-lg shadow-md shadow-black`}>
                            {entourage.role === "COIN BEARER" && (<RiCoinFill className="text-4xl" />)}
                            {entourage.role === "RING BEARER" && (<GiBigDiamondRing className="text-4xl" />)}
                            {entourage.role === "BIBLE BEARER" && (<FaBible className="text-4xl" />)}
                            <div className="flex flex-col justify-center max-sm:items-center w-auto h-full">
                                <p id={`${entourage.name}-${index + 1}`} className="entourage-name font-bold">{entourage.name}</p>
                                <label htmlFor={`${entourage.name}-${index + 1}`} className="entourage-role opacity-80">{entourage.role}</label>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex max-sm:flex-col flex-wrap justify-center max-sm:items-center w-full gap-5">
                    {PROGRAM_SECTION_ENTOURAGE.tier_five.map((entourage, index) => (
                        <div key={`${entourage.role}-${index}`} className="entourage-card flex max-sm:flex-col max-sm:justify-center items-center w-80 h-max p-5 gap-3 text-white bg-gradient-to-tl from-green-500 to-green-400 rounded-lg shadow-md shadow-black">
                            <RiFlowerFill className="text-4xl" />
                            <div className="flex flex-col justify-center max-sm:items-center w-auto h-full">
                                <p id={`${entourage.name}-${index + 1}`} className="entourage-name font-bold">{entourage.name}</p>
                                <label htmlFor={`${entourage.name}-${index + 1}`} className="entourage-role opacity-80">{entourage.role}</label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Entourage;