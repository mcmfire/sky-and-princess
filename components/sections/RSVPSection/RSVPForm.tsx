import { handlePhoneNumberChange, handleSubmitRSVP } from "./form";

interface RSVPFormProps {
    setShowRSVPForm: (show: boolean) => void;
    setRSVPAnswer: (answer: string) => void;
};

const RSVPForm = ({ setShowRSVPForm, setRSVPAnswer }: RSVPFormProps) => {
    return (
        <div id="rsvp-form-container" className="hidden flex-col self-center w-full rounded-lg border-2 border-gray-300 font-[PoppinsLight]">
            <form className="flex flex-col w-full p-5 gap-5" onSubmit={handleSubmitRSVP}>
                <div className="flex flex-col gap-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" className="flex w-full p-2 rounded-lg border-2 border-gray-300 focus:outline-none" required/>
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="phone-number">Phone Number <span className="opacity-50">(optional)</span></label>
                    <div className="relative flex w-full">
                        <input type="number" id="phone-number" name="phone_number" className="flex w-full py-2 pl-14 pr-2 rounded-lg border-2 border-gray-300 focus:outline-none appearance-none" 
                            onChange={handlePhoneNumberChange}/>
                        <span className="absolute left-0 top-0 flex items-center px-2 w-max h-full text-gray-400 rounded-tl-lg rounded-bl-lg border-2 border-gray-300 select-none">+63</span>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <input type="submit" id="submit-rsvp" className="w-full py-3 bg-[--theme-color-fg] text-white rounded-lg cursor-pointer" />
                    <button type="button" className="w-full py-3 bg-[--theme-color-fg] text-white rounded-lg"
                        onClick={() => { setShowRSVPForm(false); setRSVPAnswer("") }}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RSVPForm;