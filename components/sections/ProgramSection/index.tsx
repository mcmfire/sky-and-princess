import SectionTitle from "@/components/elements/SectionTitle";
import Venue from "./Venue";
import Entourage from "./Entourage";
import CountdownTimer from "@/components/elements/CountdownTimer";

const ProgramSection = () => {
    return (
        <section id="program-section" className="flex-col items-center gap-10">
            <SectionTitle title="Program" />
            <CountdownTimer />
            <Venue />
            <Entourage />
        </section>
    );
};

export default ProgramSection;