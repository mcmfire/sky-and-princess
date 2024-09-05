"use client";

import { useState, useEffect } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { calculateTimeLeft } from './counter';
import { animateText, animateTimer } from './animation';
import { PROGRAM_SECTION_BIBLE_QUOTE_REFERENCE, PROGRAM_SECTION_BIBLE_QUOTE_VERSE, PROGRAM_SECTION_COUNTDOWN_SHORT_DATE, PROGRAM_SECTION_COUNTDOWN_TIME } from '@/utils/constants';

const CountdownTimer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const updateTimer = () => {
            const timeLeft = calculateTimeLeft();
            setDays(timeLeft.days);
            setHours(timeLeft.hours);
            setMinutes(timeLeft.minutes);
            setSeconds(timeLeft.seconds);
        };

        const timer = setInterval(updateTimer, 1000);

        return () => clearInterval(timer);
    }, []);

    useGSAP(() => {
        animateTimer();
        animateText();

        return () => {
            animateTimer().kill();
            animateText().kill();
        };
    }, {});

    return (
        <div className='flex flex-col w-full sm:max-xl:px-5 max-sm:px-10 gap-10 max-sm:gap-5'>
            <h3 className='text-center'>Time Until Forever</h3>
            <div id="countdown-timer" className="flex justify-center items-center w-full sm:gap-10 opacity-0">
                <div className="flex flex-col items-center">
                    <p id="countdown-days" className="timer-count sm:text-8xl max-sm:text-5xl">{days < 10 ? `0${days}` : days}</p>
                    <label htmlFor='countdown-days' className='font-serif sm:text-2xl max-sm:text-lg'>Days</label>
                </div>
                <div className="flex flex-col items-center">
                    <p className="sm:text-8xl max-sm:text-5xl">:</p>
                    <p className="text-transparent sm:text-2xl max-sm:text-lg">:</p>
                </div>
                <div className="flex flex-col items-center">
                    <p id="countdown-hours" className="timer-count sm:text-8xl max-sm:text-5xl">{hours < 10 ? `0${hours}` : hours}</p>
                    <label htmlFor='countdown-hours' className='font-serif sm:text-2xl max-sm:text-l'>Hours</label>
                </div>
                <div className="flex flex-col items-center">
                    <p className="sm:text-8xl max-sm:text-5xl">:</p>
                    <p className="text-transparent sm:text-2xl max-sm:text-lg">:</p>
                </div>
                <div className="flex flex-col items-center">
                    <p id="countdown-minutes" className="timer-count sm:text-8xl max-sm:text-5xl">{minutes < 10 ? `0${minutes}` : minutes}</p>
                    <label htmlFor='countdown-minutes' className='font-serif sm:text-2xl max-sm:text-lg'>Minutes</label>
                </div>
                <div className="flex flex-col items-center">
                    <p className='sm:text-8xl max-sm:text-5xl'>:</p>
                    <p className="text-transparent sm:text-2xl max-sm:text-lg">:</p>
                </div>
                <div className="flex flex-col items-center">
                    <p id="countdown-seconds" className="timer-count sm:text-8xl max-sm:text-5xl">{seconds < 10 ? `0${seconds}` : seconds}</p>
                    <label htmlFor='countdown-seconds' className='font-serif sm:text-2xl max-sm:text-lg'>Seconds</label>
                </div>
            </div>
            <div className='flex justify-center w-full gap-3 font-[PoppinsLight] sm:text-5xl max-sm:text-2xl'>
                <p><time dateTime="2024-10-21T14:00+08:00">{PROGRAM_SECTION_COUNTDOWN_SHORT_DATE}</time></p>
                <p>—</p>
                <p>{PROGRAM_SECTION_COUNTDOWN_TIME}</p>
            </div>
            <div id="bible-quote" className="flex flex-col items-center sm:text-2xl text-center">
                <p className="opacity-0">&quot;{PROGRAM_SECTION_BIBLE_QUOTE_VERSE}&quot;</p>
                <p className="font-bold opacity-0"><span className="font-medium">&#8212;</span> {PROGRAM_SECTION_BIBLE_QUOTE_REFERENCE}</p>
            </div>
        </div>

    );
};

export default CountdownTimer;