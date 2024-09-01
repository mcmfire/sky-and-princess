import { FaRegHeart } from "react-icons/fa";

interface SectionTitleProps {
    title: string;
}

const SectionTitle = ({title}: SectionTitleProps) => {
    return (
        <div className="flex flex-col items-center sm:w-1/3 sm:max-xl:w-1/2 max-sm:w-3/4">
            <h2 className="font-[AmedaRegular] font-bold text-[--theme-color-fg] text-3xl">{title}</h2>
            <div className="flex items-center w-full gap-5">
                <hr className="w-full border border-[--theme-color-fg]" />
                <FaRegHeart className="text-[--theme-color-bg] text-5xl" />
                <hr className="w-full border border-[--theme-color-fg]" />
            </div>
        </div>
    );
};

export default SectionTitle;