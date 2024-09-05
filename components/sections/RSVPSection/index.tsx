"use client";

import SectionTitle from "@/components/elements/SectionTitle";
import KeySequenceDetector from "@/components/elements/KeySequenceDetector";
import RSVPForm from "./RSVPForm";
import FAQ from "./FAQ";
import Gift from "./Gift";

const RSVPSection = () => {
    return (
        <section id="rsvp-section" className="flex-col items-center gap-10">
            <KeySequenceDetector />
            <SectionTitle title="RSVP" section="rsvp-section" />
            <div className="flex flex-col items-center w-full gap-32">
                <RSVPForm />
                <Gift />
                <FAQ />
            </div>
        </section >
    );
};

export default RSVPSection;