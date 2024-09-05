import SectionTitle from "@/components/elements/SectionTitle";
import CountdownTimer from "@/components/elements/CountdownTimer";
import Timeline from "./Timeline";
import Venue from "./Venue";
import DressCode from "./DressCode";
import Entourage from "./Entourage";

const ProgramSection = () => {
    return (
        <section id="program-section" className="flex-col items-center">
            <SectionTitle title="Program" section="program-section" />
            <div className="flex flex-col w-full gap-32">
                <CountdownTimer />
                <Timeline />
                <Venue />
                <DressCode />
                <Entourage />
            </div>
        </section>
    );
};

export default ProgramSection;