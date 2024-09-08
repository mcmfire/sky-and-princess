import Image from "next/image";
import AttireImage from "@/public/images/attire.webp";
import { PiWarningCircle } from "react-icons/pi";
import { PROGRAM_SECTION_DRESS_CODE_GENTLEMEN_ATTIRE, PROGRAM_SECTION_DRESS_CODE_GENTLEMEN_NOT_ALLOWED_COLORS, PROGRAM_SECTION_DRESS_CODE_LADIES_ATTIRE, PROGRAM_SECTION_DRESS_CODE_LADIES_COLORS, PROGRAM_SECTION_DRESS_CODE_LADIES_NOT_ALLOWED_COLORS, PROGRAM_SECTION_DRESS_CODE_THEME } from "@/utils/constants";

const DressCode = () => {
    return (
        <div className="flex flex-col items-center w-full min-h-screen gap-10">
            <h3>Dress Code</h3>
            <div className="flex sm:max-lg:flex-col max-sm:flex-col sm:max-lg:items-center max-sm:items-center w-full h-full px-5 gap-5 font-[PoppinsLight]">
                <Image src={AttireImage} alt="Attire" className="sm:w-1/4 sm:max-xl:w-1/3 max-sm:w-3/4 h-max" />
                <div className="flex flex-1 flex-col justify-between gap-3">
                    <div className="flex sm:max-lg:justify-center items-center gap-2">
                        <PiWarningCircle className="text-3xl text-red-500" />
                        <p className="text-2xl font-bold">{PROGRAM_SECTION_DRESS_CODE_THEME}</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg">
                            <span className="font-bold">For Gentlemen</span> - {PROGRAM_SECTION_DRESS_CODE_GENTLEMEN_ATTIRE}
                            <span className={`${PROGRAM_SECTION_DRESS_CODE_GENTLEMEN_NOT_ALLOWED_COLORS === "Color" ? "hidden" : ""}`}> (Please do not wear {PROGRAM_SECTION_DRESS_CODE_GENTLEMEN_NOT_ALLOWED_COLORS})</span>
                        </p>
                        <p className="text-lg">
                            <span className="font-bold">For Ladies</span> - {PROGRAM_SECTION_DRESS_CODE_LADIES_ATTIRE}
                            <span className={`${PROGRAM_SECTION_DRESS_CODE_LADIES_NOT_ALLOWED_COLORS === "Color" ? "hidden" : ""}`}> (Please do not wear {PROGRAM_SECTION_DRESS_CODE_LADIES_NOT_ALLOWED_COLORS})</span>
                        </p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p>
                            For ladies and gentlemen, you may glam up in these shades but your smile is the best you can wear!
                        </p>
                        <div className="flex flex-wrap sm:max-lg:justify-center max-sm:justify-center gap-5">
                            {PROGRAM_SECTION_DRESS_CODE_LADIES_COLORS.map((color, index) => (
                                <div key={`ladies-color-${index + 1}`} className="flex flex-col items-center gap-2">
                                    <label htmlFor={`color-${index + 1}`} className="font-bold">{color.label}</label>
                                    <div id={`color-${index + 1}`} className={`w-16 h-16 rounded-full`}
                                        style={{backgroundColor: `#${color.color}`}}>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="italic">
                        Please adhere to the specified dress code and color motif provided. Dressing accordingly is deeply appreciated, as it will contribute to the elegance and harmony of our celebration.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DressCode;