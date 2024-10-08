import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { RSVP_DEADLINE, RSVP_FORM_STATE, RSVP_WEDDING_DATE, RSVP_WEDDING_TIME } from "@/utils/constants";
import { downloadFirebaseImage } from "@/utils/import";
import NotFoundImage from "@/public/images/not-found.webp";
import { handlePhoneNumberChange, handleSubmitRSVP, handleUserAttendingStatus } from "./form";

const RSVPForm = () => {
    const searchParams = useSearchParams();

    const [showRSVPForm, setShowRSVPForm] = useState(false);
    const [rsvpAnswer, setRsvpAnswer] = useState("");
    const [userAttending, setUserAttending] = useState(false);
    const [notFoundUrl, setNotFoundUrl] = useState("");

    const name = searchParams.get('name') || '';
    const phoneNumber = searchParams.get('phone_number') || '';

    const fetchImageURL = async () => {
        const notFoundImageURL = await downloadFirebaseImage("assets/not-found.gif");

        setNotFoundUrl(notFoundImageURL);
    };

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

        fetchImageURL();
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
        <div className="flex flex-col sm:w-1/4 sm:max-xl:w-1/2 max-sm:w-full sm:min-h-screen sm:max-xl:min-h-[60vh] max-sm:min-h-screen max-sm:px-5 gap-5 -my-10">
            {userAttending && (
                <div className="flex flex-col items-center">
                    <p className="w-full text-3xl text-center">&#129392;</p>
                    <p className="w-full text-3xl text-center">
                        Thank you for registering! I can&apos;t wait to see you on {RSVP_WEDDING_DATE} {RSVP_WEDDING_TIME}
                    </p>
                </div>
            )}
            {(rsvpAnswer === "" && !userAttending) && (
                <div className="flex flex-col items-center">
                    <p className="w-full text-3xl text-center">&#128525;</p>
                    <p className="w-full text-3xl text-center">Are we fit for each other?</p>
                </div>
            )}
            {(rsvpAnswer === "Yes" && !userAttending && RSVP_FORM_STATE === "open") && (
                <div className="flex flex-col items-center">
                    <p className="w-full text-3xl text-center">&#129321;</p>
                    <p className="w-full text-3xl text-center">Yay! Let&apos;s fill up the form to attend our wedding</p>
                </div>
            )}
            {(rsvpAnswer === "Yes" && !userAttending && RSVP_FORM_STATE === "closed") && (
                <div className="flex flex-col items-center">
                    <p className="w-full text-3xl text-center">&#128515;</p>
                    <p className="w-full text-3xl text-center">The RSVP form is now closed. Thank you for your interest. Please contact the couple directly if you were unable to confirm your RSVP.</p>
                </div>
            )}
            {rsvpAnswer === "No" && (
                <div className="flex flex-col items-center">
                    <p className="w-full text-3xl text-center">&#128546;</p>
                    <p className="w-full text-3xl text-center">Awww, sad</p>
                </div>
            )}
            {!userAttending && (
                <div className="flex flex-col w-full">
                    <div id="rsvp-buttons-container" className={`${rsvpAnswer === "" ? "flex" : "hidden"} flex-col w-full gap-3`}>
                        <button className="py-3 bg-[--theme-color-bg-light] text-white rounded-lg shadow-md shadow-black"
                            onClick={() => { setShowRSVPForm(true); setRsvpAnswer("Yes"); }}>
                            YES, take me to RSVP
                        </button>
                        <button className="py-3 bg-[--theme-color-bg-light] text-white rounded-lg shadow-md shadow-black"
                            onClick={() => setRsvpAnswer("No")}>
                            NO
                        </button>
                    </div>
                    {rsvpAnswer === "Yes" && RSVP_FORM_STATE === "open" && (
                        <div id="rsvp-form-container" className="hidden flex-col self-center w-full rounded-lg border-2 border-gray-300 font-[PoppinsLight]">
                            <form className="flex flex-col w-full p-5 gap-5" onSubmit={handleSubmitRSVP}>
                                <div className="flex flex-col gap-3">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" className="flex w-full p-2 rounded-lg border-2 border-gray-300 focus:outline-none" required />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <label htmlFor="phone-number">Phone Number <span className="opacity-50">(optional)</span></label>
                                    <div className="relative flex w-full">
                                        <input type="number" id="phone-number" name="phone_number" className="flex w-full py-2 pl-14 pr-2 rounded-lg border-2 border-gray-300 focus:outline-none appearance-none"
                                            onChange={handlePhoneNumberChange} />
                                        <span className="absolute left-0 top-0 flex items-center px-2 w-max h-full text-gray-400 rounded-tl-lg rounded-bl-lg border-2 border-gray-300 select-none">+63</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <input type="submit" id="submit-rsvp" className="w-full py-3 bg-[--theme-color-bg-light] text-white rounded-lg cursor-pointer" />
                                    <button type="button" className="w-full py-3 bg-[--theme-color-bg-light] text-white rounded-lg"
                                        onClick={() => { setShowRSVPForm(false); setRsvpAnswer("") }}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                    {rsvpAnswer === "Yes" && RSVP_FORM_STATE === "closed" && (
                        <div className={`flex flex-col items-center w-full gap-5`}>
                            <div className="flex flex-col items-center w-full gap-5 text-center font-[PoppinsLight]">
                                <p>
                                    If you still wish us a happy wedding and help us fund our honeymoon, you can send us a monetary gift.&#128521;
                                </p>
                                <p>
                                    Gifting section is located down below.
                                </p>
                            </div>
                            <div className="flex flex-col w-full">
                                <button className="w-full py-3 bg-[--theme-color-bg-light] text-white rounded-lg shadow-md shadow-black"
                                    onClick={() => setRsvpAnswer("")}>
                                    Go Back
                                </button>
                            </div>
                        </div>
                    )}
                    {rsvpAnswer === "No" && (
                        <div className={`flex flex-col items-center w-full gap-5`}>
                            <div className="flex flex-col items-center w-full gap-5 text-center font-[PoppinsLight]">
                                <div className="relative w-1/2" style={{ aspectRatio: 2 / 3 }}>
                                    <Image src={notFoundUrl ? notFoundUrl : NotFoundImage} alt="NotFound" fill sizes="100%" loading="lazy" style={{ objectFit: "cover", objectPosition: "top" }} unoptimized />
                                </div>
                                <p>
                                    If you still wish us a happy wedding and help us fund our honeymoon, you can send us a monetary gift.&#128521;
                                </p>
                                <p>
                                    Gifting section is located down below.
                                </p>
                            </div>
                            <div className="flex flex-col w-full">
                                <button className="w-full py-3 bg-[--theme-color-bg-light] text-white rounded-lg shadow-md shadow-black"
                                    onClick={() => setRsvpAnswer("")}>
                                    Just Kidding
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
            <div className="flex justify-center items-center w-full gap-1">
                <IoMdInformationCircleOutline className="text-xl text-blue-500" />
                <p className="italic">RSVP Deadline: <time dateTime="2024-09-15T00:00+08:00">{RSVP_DEADLINE}</time></p>
            </div>
        </div>
    );
};

export default RSVPForm;
