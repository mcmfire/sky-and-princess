import { FaCameraRetro, FaChurch } from "react-icons/fa";
import { GiLinkedRings } from "react-icons/gi";
import { IoRestaurant } from "react-icons/io5";
import { PROGRAM_SECTION_TIMELINE } from "@/utils/constants";
import { PiDiscoBallFill } from "react-icons/pi";

const Timeline = () => {
    return (
        <div className="flex justify-start w-full min-h-[50vh]">
            <div className="flex sm:flex-1 justify-end items-center max-sm:w-max px-5 border-r">
                <p className="max-w-min font-[AmedaRegular] text-8xl break-all">TIMELINE</p>
            </div>
            <div className="flex flex-1 flex-col justify-center pr-5 gap-10 border-l">
                {PROGRAM_SECTION_TIMELINE.map((timeline, index) => (
                    <div key={`timeline-${index + 1}`} id={`timeline-${timeline.title}`} className="flex items-center gap-5">
                        <hr className={`"flex ${(index + 1) % 2 === 0 ? "sm:w-32 max-sm:w-10" : "sm:w-16 max-sm:w-5"} border"`} />
                        {timeline.icon === "CHURCH" && <FaChurch className="text-4xl text-[--theme-color-bg]" />}
                        {timeline.icon === "CAMERA" && <FaCameraRetro className="text-4xl text-[--theme-color-bg]" />}
                        {timeline.icon === "RINGS" && <GiLinkedRings className="text-4xl text-[--theme-color-bg]" />}
                        {timeline.icon === "DINE" && <IoRestaurant className="text-4xl text-[--theme-color-bg]" />}
                        {timeline.icon === "PARTY" && <PiDiscoBallFill className="text-4xl text-[--theme-color-bg]" />}
                        <div className="flex flex-col">
                            <p className="font-[PoppinsLight] font-bold text-[--theme-color-bg]">
                                <time dateTime="2024-09-05T14:00+08:00">
                                    {timeline.time}
                                </time>
                            </p>
                            <label htmlFor={`timeline-${timeline.title}`} className="font-[AmsterdamSignatureRegular] text-5xl">
                                {timeline.title}
                            </label>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;