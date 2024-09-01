"use client";

import { useState, useEffect } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { calculateTimeLeft } from './counter';
import { animateText, animateTimer } from './animation';

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
        <div className='flex flex-col w-full sm:max-xl:px-5 max-sm:px-10 gap-10'>
            <div id="countdown-timer" className="flex justify-center items-center w-full sm:gap-10 opacity-0">
                <div className="flex flex-col items-center">
                    <p className="timer-count sm:text-8xl max-sm:text-5xl">{days < 10 ? `0${days}` : days}</p>
                    <p className='sm:text-2xl max-sm:text-lg'>Days</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="sm:text-8xl max-sm:text-5xl">:</p>
                    <p className="text-transparent sm:text-2xl max-sm:text-lg">:</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="timer-count sm:text-8xl max-sm:text-5xl">{hours < 10 ? `0${hours}` : hours}</p>
                    <p className='sm:text-2xl max-sm:text-l'>Hours</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="sm:text-8xl max-sm:text-5xl">:</p>
                    <p className="text-transparent sm:text-2xl max-sm:text-lg">:</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="timer-count sm:text-8xl max-sm:text-5xl">{minutes < 10 ? `0${minutes}` : minutes}</p>
                    <p className='sm:text-2xl max-sm:text-lg'>Minutes</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className='sm:text-8xl max-sm:text-5xl'>:</p>
                    <p className="text-transparent sm:text-2xl max-sm:text-lg">:</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="timer-count sm:text-8xl max-sm:text-5xl">{seconds < 10 ? `0${seconds}` : seconds}</p>
                    <p className='sm:text-2xl max-sm:text-lg'>Seconds</p>
                </div>
            </div>
            <div id="bible-quote" className="flex flex-col items-center sm:text-3xl text-center">
                <p className="opacity-0">&quot;WHEN THE TIME IS RIGHT, I, THE LORD, WILL MAKE IT HAPPEN.&quot;</p>
                <p className="font-bold opacity-0"><span className="font-medium">&#8212;</span> Isaiah 60:22</p>
            </div>
        </div>

    );
};

export default CountdownTimer;