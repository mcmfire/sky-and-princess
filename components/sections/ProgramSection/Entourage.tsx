import { PROGRAM_SECTION_ENTOURAGE } from "@/utils/constants";
import { FaAward, FaBible, FaStar } from "react-icons/fa";
import { GiBigDiamondRing, GiCandleLight, GiCloak, GiHighHeel, GiRopeCoil, GiTopHat } from "react-icons/gi";
import { RiCoinFill, RiFlowerFill } from "react-icons/ri";

const Entourage = () => {
    return (
        <div id="entourage-container" className="flex flex-col items-center w-full py-10 gap-20">
            <h4 className="font-[AmedaRegular] text-5xl -mb-10">Entourage</h4>
            <div className="entourage-card-container flex max-sm:flex-col sm:justify-center max-sm:items-center sm:gap-20 max-sm:gap-5 w-full">
                {PROGRAM_SECTION_ENTOURAGE.tier_one.map((entourage, index) => (
                    <div key={`${entourage.role}-${index}`} className="entourage-card flex max-sm:flex-col max-sm:justify-center items-center w-80 h-max p-5 gap-3 text-white bg-gradient-to-tl from-[--theme-color-bg] to-[--theme-color-bg-light] rounded-lg shadow-md shadow-black">
                        {entourage.role === "BESTMAN" && (<FaAward className="text-4xl" />)}
                        {entourage.role === "MATRON OF HONOR" && (<FaStar className="text-4xl" />)}
                        <div className="flex flex-col justify-center max-sm:items-center w-auto h-full">
                            <p className="entourage-name font-bold">{entourage.name}</p>
                            <p className="entourage-role opacity-80">{entourage.role}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="entourage-card-container flex max-sm:flex-col sm:justify-center max-sm:items-center sm:gap-20 max-sm:gap-5 w-full">
                <div className="flex flex-col gap-5">
                    {PROGRAM_SECTION_ENTOURAGE.tier_two.filter((entourage) => entourage.role === "GROOMSMAN").map((entourage, index) => (
                        <div key={`${entourage.role}-${index}`} className="entourage-card flex max-sm:flex-col max-sm:justify-center items-center w-80 h-max p-5 gap-3 text-white bg-gradient-to-tl from-[--theme-color-bg] to-[--theme-color-bg-light] rounded-lg shadow-md shadow-black">
                            <GiTopHat className="text-4xl" />
                            <div className="flex flex-col justify-center max-sm:items-center w-auto h-full">
                                <p className="entourage-name font-bold">{entourage.name}</p>
                                <p className="entourage-role opacity-80">{entourage.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-5">
                    {PROGRAM_SECTION_ENTOURAGE.tier_two.filter((entourage) => entourage.role === "BRIDESMAID").map((entourage, index) => (
                        <div key={`${entourage.role}-${index}`} className="entourage-card flex max-sm:flex-col max-sm:justify-center items-center w-80 h-max p-5 gap-3 text-white bg-gradient-to-tl from-[--theme-color-bg] to-[--theme-color-bg-light] rounded-lg shadow-md shadow-black">
                            <GiHighHeel className="text-4xl" />
                            <div className="flex flex-col justify-center max-sm:items-center w-auto h-full">
                                <p className="entourage-name font-bold">{entourage.name}</p>
                                <p className="entourage-role opacity-80">{entourage.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="entourage-card-container flex max-sm:flex-col sm:justify-center max-sm:items-center sm:gap-20 max-sm:gap-5 w-full">
                <div className="flex flex-col gap-5">
                    {PROGRAM_SECTION_ENTOURAGE.tier_three.filter((entourage) => entourage.role === "CANDLE").map((entourage, index) => (
                        <div key={`${entourage.role}-${index}`} className="entourage-card flex max-sm:flex-col max-sm:justify-center items-center w-80 h-max p-5 gap-3 text-white bg-gradient-to-tl from-[--theme-color-bg] to-[--theme-color-bg-light] rounded-lg shadow-md shadow-black">
                            <GiCandleLight className="text-4xl" />
                            <div className="flex flex-col justify-center max-sm:items-center w-auto h-full">
                                <p className="entourage-name font-bold">{entourage.name}</p>
                                <p className="entourage-role opacity-80">{entourage.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-5">
                    {PROGRAM_SECTION_ENTOURAGE.tier_three.filter((entourage) => entourage.role === "VEIL").map((entourage, index) => (
                        <div key={`${entourage.role}-${index}`} className="entourage-card flex max-sm:flex-col max-sm:justify-center items-center w-80 h-max p-5 gap-3 text-white bg-gradient-to-tl from-[--theme-color-bg] to-[--theme-color-bg-light] rounded-lg shadow-md shadow-black">
                            <GiCloak className="text-4xl" />
                            <div className="flex flex-col justify-center max-sm:items-center w-auto h-full">
                                <p className="entourage-name font-bold">{entourage.name}</p>
                                <p className="entourage-role opacity-80">{entourage.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-5">
                    {PROGRAM_SECTION_ENTOURAGE.tier_three.filter((entourage) => entourage.role === "CORD").map((entourage, index) => (
                        <div key={`${entourage.role}-${index}`} className="entourage-card flex max-sm:flex-col max-sm:justify-center items-center w-80 h-max p-5 gap-3 text-white bg-gradient-to-tl from-[--theme-color-bg] to-[--theme-color-bg-light] rounded-lg shadow-md shadow-black">
                            <GiRopeCoil className="text-4xl" />
                            <div className="flex flex-col justify-center max-sm:items-center w-auto h-full">
                                <p className="entourage-name font-bold">{entourage.name}</p>
                                <p className="entourage-role opacity-80">{entourage.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="entourage-card-container flex max-sm:flex-col sm:justify-center max-sm:items-center sm:gap-20 max-sm:gap-5 w-full">
                {PROGRAM_SECTION_ENTOURAGE.tier_four.map((entourage, index) => (
                    <div key={`${entourage.role}-${index}`} className="entourage-card flex max-sm:flex-col max-sm:justify-center items-center w-80 h-max p-5 gap-3 text-white bg-gradient-to-tl from-[--theme-color-bg] to-[--theme-color-bg-light] rounded-lg shadow-md shadow-black">
                        {entourage.role === "BIBLE" && (<FaBible className="text-4xl" />)}
                        {entourage.role === "RING" && (<GiBigDiamondRing className="text-4xl" />)}
                        {entourage.role === "COIN" && (<RiCoinFill className="text-4xl" />)}
                        <div className="flex flex-col justify-center max-sm:items-center w-auto h-full">
                            <p className="entourage-name font-bold">{entourage.name}</p>
                            <p className="entourage-role opacity-80">{entourage.role}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="entourage-card-container flex max-sm:flex-col sm:justify-center max-sm:items-center sm:gap-20 max-sm:gap-5 w-full">
                {PROGRAM_SECTION_ENTOURAGE.tier_five.map((entourage, index) => (
                    <div key={`${entourage.role}-${index}`} className="entourage-card flex max-sm:flex-col max-sm:justify-center items-center w-80 h-max p-5 gap-3 text-white bg-gradient-to-tl from-[--theme-color-bg] to-[--theme-color-bg-light] rounded-lg shadow-md shadow-black">
                        <RiFlowerFill className="text-4xl" />
                        <div className="flex flex-col justify-center max-sm:items-center w-auto h-full">
                            <p className="entourage-name font-bold">{entourage.name}</p>
                            <p className="entourage-role opacity-80">{entourage.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Entourage;