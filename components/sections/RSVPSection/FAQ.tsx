import { RSVP_FAQS } from "@/utils/constants";
import { useState } from "react";
import { BsFillSkipForwardFill } from "react-icons/bs";
import { FaCalendarCheck, FaCamera, FaCar, FaGift, FaHeart } from "react-icons/fa";
import { FaCalendarXmark, FaChildren } from "react-icons/fa6";
import { GiRoundTable } from "react-icons/gi";
import { ImExit } from "react-icons/im";
import { MdExposurePlus1 } from "react-icons/md";
import { RiShirtFill } from "react-icons/ri";
import { RxLapTimer } from "react-icons/rx";
import { SiGoogleforms } from "react-icons/si";

const FAQ = () => {
    const [openedIndexes, setOpenedIndexes] = useState<number[]>([0]);

    return (
        <div className="flex flex-col items-center w-full mt-32 sm:px-20 max-sm:px-5 py-5 gap-5">
            <h3>FAQs</h3>
            {RSVP_FAQS.map((faq, index) => (
                <details key={`faq-${index + 1}`} className="flex flex-col items-center w-full text-white rounded-lg shadow-md shadow-black cursor-pointer overflow-hidden" 
                open={openedIndexes.includes(index)}
                    onToggle={() => setOpenedIndexes((prev) => {
                        if (prev.includes(index)) {
                            return prev.filter((i) => i !== index);
                        }
                        return [...prev, index];
                    })}>
                    <summary className="flex justify-between items-center p-5 bg-gradient-to-tl from-[--theme-color-bg] to-[--theme-color-bg-light] text-[--theme-color-fg] sm:text-2xl max-sm:text-lg font-[PoppinsLight] 
                        hover:brightness-125 cursor-pointer">
                        <div className="flex items-center gap-5">
                            <span className="text-white">
                                {faq.icon === "GIFT" && <FaGift className="inline-block text-3xl" />}
                                {faq.icon === "ATTIRE" && <RiShirtFill className="inline-block text-3xl" />}
                                {faq.icon === "TIME" && <RxLapTimer className="inline-block text-3xl" />}
                                {faq.icon === "VEHICLE" && <FaCar className="inline-block text-3xl" />}
                                {faq.icon === "CONFIRM" && <FaCalendarCheck className="inline-block text-3xl" />}
                                {faq.icon === "SKIP" && <BsFillSkipForwardFill className="inline-block text-3xl" />}
                                {faq.icon === "LEAVE" && <ImExit className="inline-block text-3xl" />}
                                {faq.icon === "KIDS" && <FaChildren className="inline-block text-3xl" />}
                                {faq.icon === "HEART" && <FaHeart className="inline-block text-3xl" />}
                                {faq.icon === "PLUS ONE" && <MdExposurePlus1 className="inline-block text-3xl" />}
                                {faq.icon === "CANCEL" && <FaCalendarXmark className="inline-block text-3xl" />}
                                {faq.icon === "SEAT" && <GiRoundTable className="inline-block text-3xl" />}
                                {faq.icon === "PHOTO" && <FaCamera className="inline-block text-3xl" />}
                                {faq.icon === "FORM" && <SiGoogleforms className="inline-block text-3xl" />}
                            </span>
                            <span className="mr-5 text-white select-none">{faq.question}</span>
                        </div>
                        <span className={`text-lg text-white select-none ${openedIndexes.includes(index) ? "rotate-90" : ""}`}>&#10148;</span>
                    </summary>
                    <div className="flex flex-col w-full p-5 bg-[--theme-color-bg-light] text-lg font-[PoppinsLight] cursor-text">
                        <p>
                            {faq.answer ? faq.answer : ""}
                        </p>
                        <ul className={`${faq.bullets ? "list-disc mx-5" : "hidden"}`}>
                            {faq.bullets?.map((bullet, index) => (
                                <li key={`faq-bullet-${index + 1}`}>{bullet}</li>
                            ))}
                        </ul>
                        <p>
                            <br className={`${faq.footer ? "" : "hidden"}`} />
                            <br className={`${faq.footer ? "" : "hidden"}`} />
                            <span className={`${faq.footer ? "" : "hidden"} font-bold`}>{faq.footer ? faq.footer : ""}</span>
                        </p>
                    </div>
                </details>
            ))}
        </div>
    )
};

export default FAQ;