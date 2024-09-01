"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { RSVP_DEADLINE, RSVP_WEDDING_DATE, RSVP_WEDDING_TIME } from "@/utils/constants";
import SectionTitle from "@/components/elements/SectionTitle";
import KeySequenceDetector from "@/components/elements/KeySequenceDetector";
import RSVPForm from "./RSVPForm";
import { handleUserAttendingStatus } from "./form";

const RSVPSection = () => {
    const searchParams = useSearchParams();

    const [showRSVPForm, setShowRSVPForm] = useState(false);
    const [rsvpAnswer, setRsvpAnswer] = useState("");
    const [userAttending, setUserAttending] = useState(false);

    const name = searchParams.get('name') || '';
    const phoneNumber = searchParams.get('phone_number') || '';

    const getUserAttendingStatus = async (username: string) => {
        const user = await handleUserAttendingStatus(username);

        if (user === null) {
            alert("Uh oh! Something went wrong. Please contact the admin.");

            return;
        }

        if (user.isAttending === null) {
            setUserAttending(false);
            localStorage.removeItem("username");

            return;
        }

        setUserAttending(user.isAttending);
    }

    useEffect(() => {
        const username = localStorage.getItem("username");

        if (name || phoneNumber) {
            setRsvpAnswer("Yes");
            setShowRSVPForm(true);
        }

        if (username && !name) getUserAttendingStatus(username);
    }, []);

    useEffect(() => {
        const rsvpFormContainer = document.getElementById("rsvp-form-container");
        const rsvpButtonsContainer = document.getElementById("rsvp-buttons-container");

        if (!rsvpFormContainer || !rsvpButtonsContainer) return;

        if (showRSVPForm && !userAttending) {
            rsvpFormContainer.classList.replace("hidden", "flex");
            rsvpButtonsContainer.classList.replace("flex", "hidden");

            const nameInput = document.querySelector<HTMLInputElement>("#name");
            const phoneNumberInput = document.querySelector<HTMLInputElement>("#phone-number");

            if (nameInput) nameInput.value = name;
            if (phoneNumberInput) phoneNumberInput.value = phoneNumber;
            if (name) getUserAttendingStatus(name);
        }
        else if (!showRSVPForm) {
            rsvpFormContainer.classList.replace("flex", "hidden");
            rsvpButtonsContainer.classList.replace("hidden", "flex");
        }
    }, [showRSVPForm]);

    return (
        <section id="rsvp-section" className="flex-col items-center gap-10">
            <KeySequenceDetector />
            <SectionTitle title="RSVP" />
            <div className="flex flex-col sm:w-1/4 sm:max-xl:w-1/2 max-sm:w-full max-sm:px-5 gap-5 -my-10">
                {userAttending && (
                    <div className="flex flex-col items-center">
                        <p className="w-full text-3xl text-center">&#129392;</p>
                        <p className="w-full text-3xl text-center">I can&apos;t wait to see you on {RSVP_WEDDING_DATE} {RSVP_WEDDING_TIME}</p>
                    </div>
                )}
                {(rsvpAnswer === "" && !userAttending) && (
                    <div className="flex flex-col items-center">
                        <p className="w-full text-3xl text-center">&#129402;</p>
                        <p className="w-full text-3xl text-center">Are we fit for each other?</p>
                    </div>
                )}
                {(rsvpAnswer === "Yes" && !userAttending) && (
                    <div className="flex flex-col items-center">
                        <p className="w-full text-3xl text-center">&#129321;</p>
                        <p className="w-full text-3xl text-center">Yay! Let&apos;s fill up the form to attend our wedding</p>
                    </div>
                )}
                {rsvpAnswer === "No" && (
                    <div className="flex flex-col items-center">
                        <p className="w-full text-3xl text-center">&#128546;</p>
                        <p className="w-full text-3xl text-center">Is that so?</p>
                    </div>
                )}
                {!userAttending && (
                    <div className="flex flex-col w-full">
                        <div id="rsvp-buttons-container" className={`${rsvpAnswer === "" ? "flex" : "hidden"} flex-col w-full gap-3`}>
                            <button className="py-3 bg-[--theme-color-fg] text-white rounded-lg shadow-md shadow-black"
                                onClick={() => { setShowRSVPForm(true); setRsvpAnswer("Yes"); }}>
                                YES, take me to RSVP
                            </button>
                            <button className="py-3 bg-[--theme-color-fg] text-white rounded-lg shadow-md shadow-black"
                                onClick={() => setRsvpAnswer("No")}>
                                NO
                            </button>
                        </div>
                        {rsvpAnswer === "Yes" && (
                            <RSVPForm setShowRSVPForm={setShowRSVPForm} setRSVPAnswer={setRsvpAnswer} />
                        )}
                        {rsvpAnswer === "No" && (
                            <div className={`flex flex-col w-full gap-3`}>
                                <button className="w-full py-3 bg-[--theme-color-fg] text-white rounded-lg shadow-md shadow-black"
                                    onClick={() => setRsvpAnswer("")}>
                                    Just Kidding
                                </button>
                            </div>
                        )}
                    </div>
                )}
                <div className="flex justify-center items-center w-full gap-1">
                    <IoMdInformationCircleOutline className="text-xl text-blue-500" />
                    <p className="italic">RSVP Deadline: {RSVP_DEADLINE}</p>
                </div>

            </div>
        </section>
    );
};

export default RSVPSection;