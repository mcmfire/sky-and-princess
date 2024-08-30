import { PROGRAM_SECTION_COUNTDOWN_TARGET_DATE } from "@/utils/constants";

const targetDate = new Date(PROGRAM_SECTION_COUNTDOWN_TARGET_DATE);

export const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        return {
            days,
            hours,
            minutes,
            seconds
        };
    }
    return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };
};