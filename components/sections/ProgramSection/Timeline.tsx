import { FaCameraRetro, FaChurch } from "react-icons/fa";
import { GiLinkedRings } from "react-icons/gi";
import { IoRestaurant } from "react-icons/io5";
import { PREPARATION_TIME, PROGRAM_SECTION_TIMELINE } from "@/utils/constants";
import { PiDiscoBallFill } from "react-icons/pi";

const Timeline = () => {
    return (
        <div className="flex flex-col items-center w-full min-h-[50vh] gap-5">
            <h3>Order of Events</h3>
            <div className="flex justify-center w-full">
                <div className="flex flex-1 flex-col justify-evenly pl-5 gap-10 border-r border-[--theme-color-bg]">
                    {PROGRAM_SECTION_TIMELINE.map((timeline, index) => (
                        <div key={`timeline-${index + 1}`} id={`timeline-${timeline.title.toLowerCase()}-${index + 1}`} className={`${!((index + 1) % 2 === 0) ? "flex" : "hidden"} flex-row-reverse items-center gap-5`}>
                            <hr className={`"flex ${!((index + 1) % 2 === 0) ? "sm:w-32 max-sm:w-6" : "hidden"} border border-[--theme-color-bg]`} />
                            {timeline.icon === "CHURCH" && <FaChurch className="text-4xl text-[--theme-color-bg]" />}
                            {timeline.icon === "CAMERA" && <FaCameraRetro className="text-4xl text-[--theme-color-bg]" />}
                            {timeline.icon === "RINGS" && <GiLinkedRings className="text-4xl text-[--theme-color-bg]" />}
                            {timeline.icon === "DINE" && <IoRestaurant className="text-4xl text-[--theme-color-bg]" />}
                            {timeline.icon === "PARTY" && <PiDiscoBallFill className="text-4xl text-[--theme-color-bg]" />}
                            <div className="flex flex-col text-end">
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
                <div className="flex flex-1 flex-col justify-evenly pr-5 gap-10 border-l border-[--theme-color-bg]">
                    {PROGRAM_SECTION_TIMELINE.map((timeline, index) => (
                        <div key={`timeline-${index + 1}`} id={`timeline-${timeline.title.toLowerCase()}-${index + 1}`} className={`${(index + 1) % 2 === 0 ? "flex" : "hidden"} items-center gap-5`}>
                            <hr className={`"flex ${(index + 1) % 2 === 0 ? "sm:w-32 max-sm:w-6" : "hidden"} border border-[--theme-color-bg]`} />
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
            <p className="px-5 font-[PoppinsLight] text-lg text-center">
                It took us {PREPARATION_TIME} for this event to happen. 
                We&apos;re hoping that you will arrive on time and enjoy this day with us up until the end. 
                Let&apos;s have some fun and laugh together.
            </p>
        </div>
    );
};

export default Timeline;