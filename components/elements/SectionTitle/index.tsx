import { FaRegHeart } from "react-icons/fa";

interface SectionTitleProps {
    title: string;
    section: string;
}

const SectionTitle = ({title, section}: SectionTitleProps) => {
    return (
        <div className="flex flex-col items-center sm:w-1/3 sm:max-xl:w-1/2 max-sm:w-3/4">
            <label htmlFor={section} className="font-[AmedaRegular] font-bold text-[--theme-color-bg-light] text-4xl">{title}</label>
            <div className="flex items-center w-full gap-5">
                <hr className="w-full border border-[--theme-color-bg-light]" />
                <FaRegHeart className="text-[--theme-color-fg] text-5xl" />
                <hr className="w-full border border-[--theme-color-bg-light]" />
            </div>
        </div>
    );
};

export default SectionTitle;